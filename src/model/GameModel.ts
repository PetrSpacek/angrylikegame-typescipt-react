import { IObservable, IObserver } from "src/observer";
import { IGameObjsFact, GameObjsFact_A } from "src/abstractFactory";
import { IGameModel } from 'src/proxy/IGameModel';
import { ENEMY_FREQUENCY, INIT_SPEED, INIT_GRAVITY, INIT_ANGLE, INIT_STRATEGY, MIN_Y, MIN_X, MAX_X, MAX_Y} from "src/config";
import { AbsCannon, AbsModelInfo, AbsEnemy, AbsMissile, AbsCollision, GameObject } from "./GameObject";
import { Timer, GameParams } from "./lib";
import { LevelManager, Level } from "./Levels";
import { AbsCommand } from "src/command";
import { SerializedCannon, SerializedEnemy, SerializedMissile, SerializedInfo } from "src/serialization/objects";
import { Serializer } from "src/serialization/Serializer";
import { Deserializer } from "src/serialization/Deserializer";

export default class GameModel implements IObservable, IGameModel {
    private cannon: AbsCannon;
    private info: AbsModelInfo;
    private enemies: AbsEnemy[];
    private missiles: AbsMissile[];
    private collisions: AbsCollision[];

    private observers: IObserver[];
    private goFact: IGameObjsFact;
    private levelManager: LevelManager;
    private level: Level;

    private tickCnt: number;
    private timer: Timer;

    private unexecutedCmds: AbsCommand[]; 
    private executedCmds: AbsCommand[];

    constructor() {
        const gameParams = new GameParams(INIT_SPEED, INIT_GRAVITY, INIT_ANGLE, INIT_STRATEGY);

        this.observers = [];
        this.goFact = new GameObjsFact_A(gameParams);
        this.levelManager = new LevelManager();
        this.level = this.levelManager.getFirstLevel();

        this.cannon = this.goFact.createCannon();
        this.info = this.goFact.createModelInfo();

        this.enemies = [];
        this.missiles = [];
        this.collisions = [];

        this.tickCnt = 0;
        this.timer = new Timer();
        this.timer.setCallback(this.onTimerTick.bind(this));

        this.unexecutedCmds = [];
        this.executedCmds = [];
    }

    getCannon(): AbsCannon {
        return this.cannon;
    }

    getEnemies(): AbsEnemy[] {
        return this.enemies;
    }

    getGameInfo(): AbsModelInfo {
        return this.info;
    }

    getGameObjects(): GameObject[] {
        return [
            this.cannon,
            this.info,
            ...this.missiles,
            ...this.enemies,
            ...this.collisions
        ];
    }

    // ===== COMMAND =====

    registerCmd(cmd: AbsCommand) {
        this.unexecutedCmds.push(cmd);
    }

    undo() {
        const cmd = this.executedCmds.pop();
        if (!cmd) return null;
        cmd.undoExecute();
    }

    // ===== CANNON =====

    moveCannonDown() {
        if (!this.cannon.isInBoundsAfterDown(MIN_Y, MAX_Y)) return;
        this.cannon.moveDown();
        this.notify()
    }

    moveCannonUp() {
        if (!this.cannon.isInBoundsAfterUp(MIN_Y, MAX_Y)) return;
        this.cannon.moveUp();
        this.notify()
    }

    cannonShoot() {
        this.missiles = [...this.missiles, ...this.cannon.shoot()];
    }

    toggleCannonMode() {
        this.cannon.toggleMode();
        this.notify();
    }

    // ==== PARAMS =====

    private setParams() {
        this.goFact.setParams(this.info.getParams());
        this.notify();
    }

    angleUp(): void {
        this.info.angleUp();
        this.setParams();
    }

    angleDown(): void {
        this.info.angleDown();
        this.setParams();
    }

    speedUp(): void {
        this.info.speedUp();
        this.setParams();
    }

    speedDown(): void {
        this.info.speedDown();
        this.setParams();
    }

    gravityUp(): void {
        this.info.gravityUp();
        this.setParams();
    }

    gravityDown(): void {
        this.info.gravityDown();
        this.setParams();
    }

    strategySimple(): void {
        this.info.strategySimple();
        this.setParams();
    }

    strategyBallistic(): void {
        this.info.strategyBallistic();
        this.setParams();
    }

    // ===== TIMER =====

    runTimer() {
        this.timer.run();
    }

    stopTimer() {
        this.timer.stop();
    }

    onTimerTick() {
        this.processCmds();

        this.moveEnemies();
        this.moveMissiles();
        this.detectCollisions();
        this.cleanInvalidObjects();

        this.checkScore();
        this.generateNewEnemies();

        this.notify();
        this.tickCnt = (this.tickCnt + 1) % ENEMY_FREQUENCY;
    }

    private processCmds() {
        while(this.unexecutedCmds.length > 0) {
            const cmd = this.unexecutedCmds[0];
            this.unexecutedCmds = this.unexecutedCmds.slice(1);
            cmd.doExecute();

            if(cmd.constructor.name !== "Undo") {
                this.executedCmds.push(cmd);
            }
        }
    }

    private moveEnemies() {
        for (let enemy of this.enemies) {
            enemy.moveUp();
        }
    }

    private moveMissiles() {
        for (let missile of this.missiles) {
            missile.moveMissile();
        }
    }

    private detectCollisions() {
        for (let missile of this.missiles) {
            for (let enemy of this.enemies) {
                const distance = Math.pow((missile.getX() - enemy.getX()), 2) + Math.pow((missile.getY() - enemy.getY()), 2)
                if (distance < Math.pow(30, 2)) {
                    enemy.hit();
                    missile.hit();

                    const c = this.goFact.createCollision();
                    c.setX(missile.getX());
                    c.setY(missile.getY());
                    this.collisions.push(c);
                    this.info.addScore();
                }
            }
        }
    }

    private generateNewEnemies() {
        if (this.tickCnt % ENEMY_FREQUENCY === 0) {
            const e = this.level.generateEnemies(this.goFact);
            this.enemies = [...this.enemies, ...e];
        }
    }

    private cleanInvalidObjects() {
        this.enemies = [...this.enemies.filter(enemy => 
            enemy.isValid() && enemy.isInBounds(MIN_Y)
        )];
        this.missiles = [...this.missiles.filter(missile => 
            missile.isValid() && missile.isInBounds(MIN_X, MAX_X, MIN_Y, MAX_Y)
        )];
        this.collisions = [...this.collisions.filter(collision => collision.isValid())];
    }

    private checkScore() {
        if (this.level.isCompleted(this.info.getScore())) {
            this.level = this.levelManager.getNextLevel();
        }
    }

    // ===== OBSERVER =====

    registerObserver(obs: IObserver) {
        this.observers.push(obs);
    }
    unregisterObserver(obs: IObserver) {
        this.observers.push(obs)
    }

    notify() {
        for (let observer of this.observers) {
            observer.update()
        }
    }

    // ===== MEMENTO =====

    createMemento(): any {
        let m = new Memento();

        m.cannon = Serializer.serializeCannon(this.cannon);
        m.enemies = this.enemies.map(enemy => Serializer.serializeEnemy(enemy));
        m.missiles = this.missiles.map(missile => Serializer.serializeMissile(missile));
        m.info = Serializer.serializeInfo(this.info);

        m.level = this.levelManager.getLevelIdx();
        m.tickCnt = this.tickCnt;

        return m;
    }

    setMemento(memento: any) {
        let m = memento as Memento;

        this.cannon = Deserializer.deserializeCannon(m.cannon, this.goFact);
        this.enemies = m.enemies.map(e => Deserializer.deserializeEnemy(e, this.goFact));
        this.missiles = m.missiles.map(ms => Deserializer.deserializeMissile(ms, this.goFact));
        this.collisions = [];
        this.info = Deserializer.deserializeInfo(m.info, this.goFact);

        this.levelManager.setLevelIdx(m.level);
        this.level = this.levelManager.getLevel();

        this.goFact.setParams(this.info.getParams());
        this.tickCnt = m.tickCnt;
    }

}


class Memento {
    cannon: SerializedCannon;
    enemies: SerializedEnemy[];
    missiles: SerializedMissile[];
    info: SerializedInfo;

    level: number;
    tickCnt: number;
};

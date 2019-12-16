import { IVisitor } from "src/visitor";
import { MISSILE_TIME_STEP, ShootingStrategies } from "src/config";
import { Position } from '../lib';
import { GameObject } from "./GameObject";
import { IMovingStrategy } from "src/strategy";


export abstract class AbsMissile extends GameObject {

  protected movementStrategy: IMovingStrategy;

  protected speed: number = 100;
  protected gravity: number = 10;
  protected angle: number = 45;
  protected initPos: Position = new Position(0, 0);
  protected time: number = 0;

  protected destroyed: boolean = false;

  constructor(strat: IMovingStrategy){
    super();
    this.movementStrategy = strat;
  }
  
  acceptVisitor(visitor: IVisitor): void {
    visitor.visitMissile(this);
  }

  abstract moveMissile(): void;

  initialize(speed: number, gravity: number, angle: number){
    this.speed = speed;
    this.gravity = gravity;
    this.angle = angle;
    this.time = 0;
  }  

  setInitialPos(initPos: Position) {
    this.initPos = new Position(initPos.getX(), initPos.getY());
    this.setX(this.initPos.getX());
    this.setY(this.initPos.getY());
  }

  getSpeed(): number {
    return this.speed;
  }

  getGravity(): number {
    return this.gravity;
  }

  getInitPos(): Position {
    return this.initPos;
  }

  getAngle(): number {
    return this.angle;
  }

  modifyAngle(mod: number) {
    this.angle += mod;
  }

  getTime(): number {
    return this.time;
  }

  setTime(time: number) {
    this.time = time;
  }

  setDelay(delay: number) {
    this.time = -delay;
  }

  tickTime(): void {
    this.time += MISSILE_TIME_STEP;
  }

  hit() {
    this.destroyed = true;
  }

  isInBounds(minX: number, maxX: number, minY: number, maxY: number): boolean {
    return this.getX() <= maxX && this.getX() >= minX && this.getY() >= minY && this.getY() <= maxY;
  }

  isValid(): boolean {
    return !this.destroyed;
  }

  getType(): ShootingStrategies {
    return this.movementStrategy.getType();
  }

  setStrategy(s: IMovingStrategy) {
    this.movementStrategy = s;
  }

}

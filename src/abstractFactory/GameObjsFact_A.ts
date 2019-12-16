import { IGameObjsFact } from "./IGameObjsFact";
import {
  AbsCannon,
  AbsCollision,
  AbsEnemy,
  AbsMissile,
  AbsModelInfo,
  Cannon_A,
  Enemy_A,
  Missile_A,
  Collision_A,
  ModelInfo_A
} from "src/model/GameObject";
import { CANNON_INIT_X, CANNON_INIT_Y, ShootingStrategies } from "src/config";
import { SimpleMovingStrategy, BallisticMovingStrategy } from "src/strategy";
import { GameParams } from "src/model/lib";

export class GameObjsFact_A implements IGameObjsFact {

  protected params: GameParams;

  protected SIMPLE_STRATEGY = new SimpleMovingStrategy();
  protected BALLISTIC_STRATEGY = new BallisticMovingStrategy();

  protected strategyMap = {
    [ShootingStrategies.SIMPLE]: this.SIMPLE_STRATEGY,
    [ShootingStrategies.BALLISTIC]: this.BALLISTIC_STRATEGY,
  }
  
  constructor(params: GameParams) {
    this.params = params;
  }

  setParams(params: GameParams) {
    this.params = params;
  }

  createCannon(): AbsCannon {
    const c = new Cannon_A(this);
    c.setX(CANNON_INIT_X);
    c.setY(CANNON_INIT_Y);
    return c;
  }

  createCollision(): AbsCollision {
    return new Collision_A();
  }

  createEnemy(): AbsEnemy {
    const e = new Enemy_A();
    return e;
  }

  createMissile(): AbsMissile {
    let m = new Missile_A(this.strategyMap[this.params.getStrategy()]);
    m.initialize(this.params.getSpeed(), this.params.getGravity(), this.params.getAngle());
    return m;
  }

  createModelInfo(): AbsModelInfo {
    let info = new ModelInfo_A();
    info.setParams(this.params);
    info.resetScore();
    return info;
  }
}

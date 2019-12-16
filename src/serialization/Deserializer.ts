import { SerializedCannon, SerializedPosition, SerializedEnemy, SerializedMissile, SerializedParams, SerializedInfo } from "./objects";
import { AbsCannon, AbsEnemy, AbsMissile, AbsModelInfo } from "src/model/GameObject";
import { Position, GameParams } from "src/model/lib";
import { IGameObjsFact } from "src/abstractFactory";
import { SimpleMovingStrategy, BallisticMovingStrategy } from "src/strategy";
import { ShootingStrategies } from "src/config";

export class Deserializer {
  private static simpleStrat = new SimpleMovingStrategy();
  private static ballStrat = new BallisticMovingStrategy();


  public static deserializePosition(p: SerializedPosition): Position {
    return new Position(p.x, p.y);
  }

  public static deserializeCannon(c: SerializedCannon, goFact: IGameObjsFact): AbsCannon {
    let cannon = goFact.createCannon();
    cannon.setPosition(this.deserializePosition(c.position));
    cannon.setMode(c.mode);
    return cannon;
  }

  public static deserializeEnemy(e: SerializedEnemy, goFact: IGameObjsFact): AbsEnemy {
    let enemy = goFact.createEnemy();
    enemy.setPosition(this.deserializePosition(e.position));
    enemy.setState(e.state);
    return enemy;
  }

  public static deserializeMissile(m: SerializedMissile, goFact: IGameObjsFact): AbsMissile {
    const strategy = m.strategy === ShootingStrategies.SIMPLE ? this.simpleStrat : this.ballStrat;
    let missile = goFact.createMissile();
    missile.setPosition(this.deserializePosition(m.position));
    missile.initialize(m.speed, m.gravity, m.angle);
    missile.setInitialPos(this.deserializePosition(m.init));
    missile.setTime(m.time);
    missile.setStrategy(strategy);
    return missile;
  }

  public static deserializeParams(p: SerializedParams): GameParams {
    return new GameParams(p.speed, p.gravity, p.angle, p.strategy);
  }

  public static deserializeInfo(i: SerializedInfo, goFact: IGameObjsFact): AbsModelInfo {
    let info = goFact.createModelInfo();
    info.setParams(this.deserializeParams(i.params));
    info.setScore(i.score);
    return info;
  }
}

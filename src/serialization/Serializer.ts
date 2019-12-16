import { SerializedCannon, SerializedPosition, SerializedEnemy, SerializedMissile, SerializedParams, SerializedInfo } from "./objects";
import { AbsCannon, AbsEnemy, AbsMissile, AbsModelInfo } from "src/model/GameObject";
import { Position, GameParams } from "src/model/lib";

export class Serializer {
  public static serializePosition(p: Position): SerializedPosition {
    return { 
      x: p.getX(), 
      y: p.getY(),
    }
  }

  public static serializeCannon(c: AbsCannon): SerializedCannon {
    return {
      position: this.serializePosition(c.getPosition()),
      mode: c.getMode(),
    }
  }

  public static serializeEnemy(e: AbsEnemy): SerializedEnemy {
    return {
      position: this.serializePosition(e.getPosition()),
      state: e.getState(),
    }
  }

  public static serializeMissile(m: AbsMissile): SerializedMissile {
    return {
      position: this.serializePosition(m.getPosition()),
      init: this.serializePosition(m.getInitPos()),
      time: m.getTime(),
      speed: m.getSpeed(),
      gravity: m.getGravity(),
      angle: m.getAngle(),
      strategy: m.getType(),
    }
  }

  public static serializeParams(p: GameParams): SerializedParams {
    return {
      angle: p.getAngle(),
      speed: p.getSpeed(),
      gravity: p.getGravity(),
      strategy: p.getStrategy(),
    }
  }

  public static serializeInfo(i: AbsModelInfo): SerializedInfo {
    return {
      score: i.getScore(),
      params: this.serializeParams(i.getParams()),
    }
  }
}

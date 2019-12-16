import { AbsCannon, AbsCollision, AbsEnemy, AbsMissile, AbsModelInfo } from "src/model/GameObject";
import { GameParams } from "src/model/lib";

export interface IGameObjsFact {
  createCannon(): AbsCannon;
  createCollision(): AbsCollision;
  createEnemy(): AbsEnemy;
  createMissile(): AbsMissile;
  createModelInfo(): AbsModelInfo;

  setParams(params: GameParams): void;
}

import { IEnemyState } from "./IEnemyState";
import { AbsEnemy } from "src/model/GameObject";
import { EnemyStates } from "src/config";

export class EnemyStateDestroyed implements IEnemyState {
  getName() {
    return "EnemyStateDestroyed";
  }

  getState(): EnemyStates {
    return EnemyStates.DESTROYED;
  }

  hit(enemy: AbsEnemy) {
    return;
  }

  isDestroyed() {
    return true;
  }

}
import { IEnemyState } from "./IEnemyState";
import { AbsEnemy } from "src/model/GameObject";
import { EnemyStates } from "src/config";

export class EnemyStateOne implements IEnemyState {
  getName() {
    return "EnemyStateOne";
  }

  getState(): EnemyStates {
    return EnemyStates.ONE;
  }

  hit(enemy: AbsEnemy) {
    enemy.toggleStateDestroyed();
  }

  isDestroyed() {
    return false;
  }

}

import { IEnemyState } from "./IEnemyState";
import { AbsEnemy } from "src/model/GameObject";
import { EnemyStates } from "src/config";

export class EnemyStateTwo implements IEnemyState {
  getName() {
    return "EnemyStateTwo";
  }

  getState(): EnemyStates {
    return EnemyStates.TWO;
  }

  hit(enemy: AbsEnemy) {
    enemy.toggleStateOne();
  }

  isDestroyed() {
    return false;
  }

}
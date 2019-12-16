import { IEnemyState } from "./IEnemyState";
import { AbsEnemy } from "src/model/GameObject";
import { EnemyStates } from "src/config";

export class EnemyStateThree implements IEnemyState {
  getName() {
    return "EnemyStateThree";
  }

  getState(): EnemyStates {
    return EnemyStates.THREE;
  }

  hit(enemy: AbsEnemy) {
    enemy.toggleStateTwo();
  }

  isDestroyed() {
    return false;
  }

}
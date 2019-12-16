import { IEnemyState } from "./IEnemyState";
import { AbsEnemy } from "src/model/GameObject";
import { EnemyStates } from "src/config";

export class EnemyStateFour implements IEnemyState {
  getName() {
    return "EnemyStateFour";
  }

  getState(): EnemyStates {
    return EnemyStates.FOUR;
  }

  hit(enemy: AbsEnemy) {
    enemy.toggleStateThree();
  }

  isDestroyed() {
    return false;
  }

}
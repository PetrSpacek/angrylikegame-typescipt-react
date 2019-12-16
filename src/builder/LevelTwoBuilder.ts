import { EnemyBuilder } from "./EnemyBuilder";
import { EnemyStates } from "src/config";

export class LevelTwoBuilder extends EnemyBuilder {
  protected enemyProbability: number = 1/5;
  protected slotsUsed: number = 3;

  protected getEnemyForce(): EnemyStates {
    const prob = Math.random() * 10;
    if (prob < 7) return EnemyStates.ONE;
    return EnemyStates.TWO;
  }  
}

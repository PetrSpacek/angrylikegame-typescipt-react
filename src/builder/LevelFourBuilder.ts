import { EnemyBuilder } from "./EnemyBuilder";
import { EnemyStates } from "src/config";

export class LevelFourBuilder extends EnemyBuilder {
  protected enemyProbability: number = 1/3;
  protected slotsUsed: number = 5;

  protected getEnemyForce(): EnemyStates {
    const prob = Math.random() * 10;
    if (prob < 4) return EnemyStates.ONE;
    if (prob < 7) return EnemyStates.TWO;
    if (prob < 9) return EnemyStates.THREE; 
    return EnemyStates.FOUR;
  }
}

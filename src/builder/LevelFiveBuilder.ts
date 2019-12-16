import { EnemyBuilder } from "./EnemyBuilder";
import { EnemyStates } from "src/config";

export class LevelFiveBuilder extends EnemyBuilder {
  protected enemyProbability: number = 1/3;
  protected slotsUsed: number = 6;

  protected getEnemyForce(): EnemyStates {
    const prob = Math.random() * 10;
    if (prob < 2.5) return EnemyStates.ONE;
    if (prob < 5) return EnemyStates.TWO;
    if (prob < 7.5) return EnemyStates.THREE; 
    return EnemyStates.FOUR;
  }
}

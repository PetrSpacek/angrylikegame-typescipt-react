import { EnemyBuilder } from "./EnemyBuilder";
import { EnemyStates } from "src/config";

export class LevelThreeBuilder extends EnemyBuilder {
  protected enemyProbability: number = 1/4;
  protected slotsUsed: number = 4;

  protected getEnemyForce(): EnemyStates {
    const prob = Math.random() * 10;
    if (prob < 5) return EnemyStates.ONE;
    if (prob < 8) return EnemyStates.TWO;
    return EnemyStates.THREE;
  }
}

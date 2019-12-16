import { EnemyBuilder } from "./EnemyBuilder";
import { EnemyStates } from "src/config";

export class LevelOneBuilder extends EnemyBuilder {
  protected enemyProbability: number = 1/6;
  protected slotsUsed: number = 2;

  protected getEnemyForce(): EnemyStates {
    return EnemyStates.ONE;
  }
}

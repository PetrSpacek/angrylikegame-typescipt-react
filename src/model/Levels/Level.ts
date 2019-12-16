import { EnemyBuilder } from "src/builder";
import { AbsEnemy } from "../GameObject";
import { IGameObjsFact } from "src/abstractFactory";

export class Level {
  private builder: EnemyBuilder;
  private threshold: number;

  constructor(builder: EnemyBuilder, threshold: number){
    this.builder = builder;
    this.threshold = threshold;
  }

  generateEnemies(goFactory: IGameObjsFact): AbsEnemy[] {
    return this.builder.buildRow(goFactory);
  }

  isCompleted(score: number){
    return this.threshold && score >= this.threshold;
  }

}
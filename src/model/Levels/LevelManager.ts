import { Level } from "./Level";
import { LevelOneBuilder, LevelTwoBuilder, LevelThreeBuilder, LevelFourBuilder, LevelFiveBuilder } from "src/builder";

export class LevelManager {
  private levels = [
    new Level(new LevelOneBuilder(), 5),
    new Level(new LevelTwoBuilder(), 15),
    new Level(new LevelThreeBuilder(), 25),
    new Level(new LevelFourBuilder(), 40),
    new Level(new LevelFiveBuilder(), null),
  ]
  private currentLevel = 0;

  getLevel(): Level {
    return this.levels[this.currentLevel];
  }

  getNextLevel(): Level {
    this.currentLevel += 1;
    return this.levels[this.currentLevel];
  }

  getFirstLevel(): Level {
    this.currentLevel = 0;
    return this.levels[0];
  }

  getLevelIdx(): number {
    return this.currentLevel;
  }

  setLevelIdx(idx: number) {
    this.currentLevel = idx;
  }

}
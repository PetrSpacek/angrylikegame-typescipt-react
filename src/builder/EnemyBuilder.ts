import { IGameObjsFact } from '../abstractFactory';
import { AbsEnemy } from '../model/GameObject';
import { ENEMY_ROW_X, ENEMY_SPACING, ENEMY_INIT_Y, EnemyStates } from 'src/config';

export abstract class EnemyBuilder {
  protected enemyProbability: number = 0;
  protected slotsUsed: number = 0;

  buildRow(goFactory: IGameObjsFact): AbsEnemy[] {
    let result = []

    for (let i = 0; i < this.slotsUsed ; i++){
      const prob = Math.random();
      if (prob < this.enemyProbability) 
        result.push(this.buildEnemy(i, goFactory));
    }
    
    return result;
  }  

  protected buildEnemy(slot: number, goFactory: IGameObjsFact): AbsEnemy {
    const e = goFactory.createEnemy();
    e.setX(ENEMY_ROW_X + ENEMY_SPACING * slot);
    e.setY(ENEMY_INIT_Y);
    e.setState(this.getEnemyForce());
    return e;
  }

  protected abstract getEnemyForce(): EnemyStates;
}
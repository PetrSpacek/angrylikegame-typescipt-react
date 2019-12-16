import { AbsEnemy } from "src/model/GameObject";
import { EnemyStates } from "src/config";

export interface IEnemyState {
  getName: () => string;
  getState: () => EnemyStates; 
  hit: (enemy: AbsEnemy) => void;
  isDestroyed: () => boolean;
}
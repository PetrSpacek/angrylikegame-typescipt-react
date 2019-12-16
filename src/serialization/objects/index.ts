import { CannonModes, EnemyStates, ShootingStrategies } from 'src/config';

export interface SerializedPosition {
  x: number,
  y: number,
}

export interface SerializedCannon {
  position: SerializedPosition;
  mode: CannonModes;
}

export interface SerializedEnemy {
  position: SerializedPosition;
  state: EnemyStates;
}

export interface SerializedMissile {
  position: SerializedPosition;
  init: SerializedPosition;
  time: number;
  speed: number;
  gravity: number;
  angle: number;
  strategy: ShootingStrategies;
}

export interface SerializedInfo {
  score: number;
  params: SerializedParams;
}

export interface SerializedParams {
  speed: number;
  gravity: number;
  angle: number;
  strategy: ShootingStrategies;
}
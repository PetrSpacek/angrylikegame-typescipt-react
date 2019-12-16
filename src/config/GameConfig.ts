export enum ObjectTypes {
  CANNON = 'cannon',
  COLLISION = 'collision',
  ENEMY = 'enemy',
  MISSILE = 'missile',
  MODEL_INFO = 'model-info',
}

export enum ShootingStrategies {
  SIMPLE = "simple",
  BALLISTIC = "ballistic",
}

export enum EnemyStates {
  ONE = "one",
  TWO = "two",
  THREE = "three",
  FOUR = "four",
  DESTROYED = "destroyed",
}

export enum CannonModes {
  SIMPLE = "simple",
  DOUBLE = "double",
  TRIPLE = "triple",
}

export const MIN_X = 0 - 40;
export const MIN_Y = 0 - 40;
export const MAX_X = window.innerWidth + 40 - 290;
export const MAX_Y = window.innerHeight + 40;

export const CANNON_INIT_X = 130;
export const CANNON_INIT_Y = MAX_Y / 2;

export const CANNON_STEP_SIZE = 10;
export const ENEMY_STEP_SIZE = 1;
export const MISSILE_STEP_SIZE = 1;

export const ENEMY_INIT_Y = window.innerHeight + 30;
export const ENEMY_ROW_X = 550;
export const ENEMY_SPACING = 80;
export const ENEMY_SLOTS = 6;
export const ENEMY_FREQUENCY = 90;
export const ENEMY_PROBABILITY = 0.3;

export const TIMER_DELAY = 30;

export const INIT_GRAVITY = 10;
export const INIT_ANGLE = 45;
export const INIT_SPEED = 100;
export const INIT_STRATEGY = ShootingStrategies.BALLISTIC;

export const MISSILE_TIME_STEP = 0.1;

export const ANGLE_STEP = 5;
export const ANGLE_MIN = 0;
export const ANGLE_MAX = 90;

export const SPEED_STEP = 10;
export const SPEED_MIN = 50;
export const SPEED_MAX = 200;

export const GRAVITY_STEP = 1;
export const GRAVITY_MIN = 5;
export const GRAVITY_MAX = 40;

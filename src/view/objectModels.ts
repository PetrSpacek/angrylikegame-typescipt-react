import { ShootingStrategies } from "src/config";

export enum Objects {
  CANNON = 'cannon',
  COLLISION = 'collision',
  ENEMY = 'enemy',
  MISSILE = 'missile',
  MODEL_INFO = 'model-info',
}

export enum ObjectSizes {
  CANNON = 'cannon',
  ENEMY = 'enemy',
  MISSILE = 'missile',
  COLLISION = 'collision',
};

export enum CannonTypes {
  DART_MONKEY = 'dart_monkey',
  SUPER_MONKEY = 'super_monkey',
  CANNON_MONKEY = 'cannon_monkey',
  NINJA_MONKEY = 'ninja_monkey',
  MACHINE_GUN_MONKEY = 'machine_gun_monkey',
};

export enum EnemyTypes {
  RED_BLOON = 'red_bloon',
  BLUE_BLOON = 'blue_bloon',
  GREEN_BLOON = 'green_bloon',
  YELLOW_BLOON = 'yellow_bloon',
};

export interface Position {
  top: number,
  left: number,
};

export interface GameObjectData {
  type: Objects,
  behavior? : CannonTypes | EnemyTypes,
  position: Position,
}

export interface GameInfoData {
  score: number,
  angle: number,
  gravity: number,
  speed: number,
  strategy: ShootingStrategies,
}
import { ShootingStrategies } from "src/config";


export class GameParams {
  private speed: number;
  private gravity: number;
  private angle: number;
  private shootingStrategy: ShootingStrategies;

  constructor(speed: number, gravity: number, angle: number, shootingStrategy: ShootingStrategies) {
    this.speed = speed;
    this.gravity = gravity;
    this.angle = angle;
    this.shootingStrategy = shootingStrategy;
  }

  setSpeed(speed: number) {
    this.speed = speed
  }

  getSpeed(): number {
    return this.speed;
  }

  setGravity(gravity: number) {
    this.gravity = gravity
  }

  getGravity(): number {
    return this.gravity;
  }

  setAngle(angle: number) {
    this.angle = angle
  }

  getAngle(): number {
    return this.angle;
  }

  setStrategy(strat: ShootingStrategies) {
    this.shootingStrategy = strat
  }

  getStrategy(): ShootingStrategies {
    return this.shootingStrategy;
  }
}
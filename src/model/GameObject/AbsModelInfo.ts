import { IVisitor } from "src/visitor";
import { GameObject } from "./GameObject";
import { GameParams } from "../lib";
import { ShootingStrategies, ANGLE_STEP, ANGLE_MAX, ANGLE_MIN, SPEED_MIN, SPEED_STEP, SPEED_MAX, GRAVITY_STEP, GRAVITY_MAX, GRAVITY_MIN } from "src/config";


export abstract class AbsModelInfo extends GameObject {

  protected params: GameParams;
  protected score: number;

  acceptVisitor(visitor: IVisitor): void {
    visitor.visitModelInfo(this);
  }

  getParams(): GameParams {
    return this.params;
  }

  setParams(params: GameParams) {
    this.params = params;
  }

  getAngle(): number {
    return this.params.getAngle();
  }

  setAngle(angle: number) {
    this.params.setAngle(angle);
  }

  getSpeed(): number {
    return this.params.getSpeed();
  }

  setSpeed(speed: number) {
    this.params.setSpeed(speed);
  }

  getGravity(): number {
    return this.params.getGravity();
  }

  setGravity(gravity: number) {
    this.params.setGravity(gravity);
  }

  getStrategy(): ShootingStrategies {
    return this.params.getStrategy();
  }

  setStrategy(strategy: ShootingStrategies) {
    this.params.setStrategy(strategy);
  }

  getScore(): number {
    return this.score;
  }

  setScore(score: number) {
    this.score = score;
  }

  resetScore() {
    this.score = 0;
  }

  addScore() {
    this.score += 1;
  }

  // ===== UI modifications =====

  angleUp(): void {
    const val = this.getAngle() + ANGLE_STEP;
    if (val > ANGLE_MAX) return;
    this.setAngle(val);
  }

  angleDown(): void {
    const val = this.getAngle() - ANGLE_STEP;
    if (val < ANGLE_MIN) return;
    this.setAngle(val);
  }

  speedUp(): void {
    const val = this.getSpeed() + SPEED_STEP;
    if (val > SPEED_MAX) return;
    this.setSpeed(val);
  }

  speedDown(): void {
    const val = this.getSpeed() - SPEED_STEP;
    if (val < SPEED_MIN) return;
    this.setSpeed(val);
  }

  gravityUp(): void {
    const val = this.getGravity() + GRAVITY_STEP;
    if (val > GRAVITY_MAX) return;
    this.setGravity(val);
  }

  gravityDown(): void {
    const val = this.getGravity() - GRAVITY_STEP;
    if (val < GRAVITY_MIN) return;
    this.setGravity(val);
  }

  strategySimple(): void {
    this.setStrategy(ShootingStrategies.SIMPLE);
  }

  strategyBallistic(): void {
    this.setStrategy(ShootingStrategies.BALLISTIC);
  }

}

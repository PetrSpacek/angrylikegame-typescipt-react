import { AbsMissile } from "../AbsMissile";

export class Missile_A extends AbsMissile {

  moveMissile(): void {
    this.movementStrategy.updatePosition(this);
    this.tickTime();
  }
  
}

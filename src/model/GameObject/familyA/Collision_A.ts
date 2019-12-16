import { AbsCollision } from "../AbsCollision";

export class Collision_A extends AbsCollision {
  isValid(): boolean {
    return this.getAge() < 200;
  }
}

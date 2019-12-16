import { ENEMY_STEP_SIZE} from "src/config";
import { AbsEnemy } from "../AbsEnemy";


export class Enemy_A extends AbsEnemy {
  private MOVE_SIZE = ENEMY_STEP_SIZE;

  moveUp(): void {
    this.move(0, -this.MOVE_SIZE);
  }

  hit(): void {
    this.state.hit(this);
  }

}

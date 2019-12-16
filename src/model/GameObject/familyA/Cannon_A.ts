import { CANNON_STEP_SIZE } from 'src/config';
import { IGameObjsFact } from 'src/abstractFactory';
import { AbsCannon } from "../AbsCannon";
import { AbsMissile } from '../AbsMissile';


export class Cannon_A extends AbsCannon {
  private MOVE_SIZE = CANNON_STEP_SIZE;

  protected goFact: IGameObjsFact;
  protected batch: AbsMissile[];

  constructor(goFact: IGameObjsFact) {
    super();
    this.goFact = goFact;
    this.useSingleMode();
  }

  moveUp(){
    this.move(0, -this.MOVE_SIZE);
  }

  moveDown(){
    this.move(0, this.MOVE_SIZE);
  }

  isInBoundsAfterUp(minY: number, maxY: number): boolean {
    const newY = this.getY() - CANNON_STEP_SIZE;
    return newY >= minY && newY <= maxY;
  }

  isInBoundsAfterDown(minY: number, maxY: number): boolean {
    const newY = this.getY() + CANNON_STEP_SIZE;
    return newY >= minY && newY <= maxY;
  }

  shoot(): AbsMissile[] {
    this.batch = [];

    this.mode.shoot(this);

    return this.batch;
  }

  primitiveShoot(): AbsMissile {
    let m = this.goFact.createMissile();

    m.setInitialPos(this.position);
    this.batch.push(m);

    return m;
  }


}
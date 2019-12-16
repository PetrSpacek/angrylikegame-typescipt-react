import { IVisitor } from 'src/visitor';
import { GameObject } from './GameObject';
import { AbsMissile } from './AbsMissile';
import { IShootingMode, SimpleShootingMode, DoubleShootingMode, TripleShootingMode } from 'src/state';
import { CannonModes } from 'src/config';


export abstract class AbsCannon extends GameObject {

  protected mode: IShootingMode;

  protected SINGLE_MODE = new SimpleShootingMode();
  protected DOUBLE_MODE = new DoubleShootingMode();
  protected TRIPLE_MODE = new TripleShootingMode();

  abstract moveUp(): void;
  abstract moveDown(): void;
  abstract isInBoundsAfterUp(minY: number, maxY: number): boolean;
  abstract isInBoundsAfterDown(minY: number, maxY: number): boolean;
  abstract shoot(): AbsMissile[];
  abstract primitiveShoot(): AbsMissile;
  
  
  acceptVisitor(visitor: IVisitor): void {
    visitor.visitCannon(this);
  }

  useSingleMode(): void {
    this.mode = this.SINGLE_MODE;
  }

  useDoubleMode(): void {
    this.mode = this.DOUBLE_MODE;
  }
  
  useTripleMode(): void {
    this.mode = this.TRIPLE_MODE;
  }

  toggleMode(): void {
    this.mode.nextMode(this);
  }

  getType(): string {
    return this.mode.getName();
  }

  getMode(): CannonModes {
    return this.mode.getMode();
  }

  setMode(mode: CannonModes) {
    switch(mode) {
      case (CannonModes.SIMPLE): this.useSingleMode(); break;
      case (CannonModes.DOUBLE): this.useDoubleMode(); break;
      case (CannonModes.TRIPLE): this.useTripleMode(); break;
    }
  }
}

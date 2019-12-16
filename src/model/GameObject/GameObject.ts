import { IVisitor } from 'src/visitor';
import { Position } from '../lib'


export abstract class GameObject {
  protected position: Position = new Position(0, 0);

  getX(): number {
    return this.position.getX();
  }

  getY(): number {
    return this.position.getY();
  }

  setX(n: number): void {
    this.position.setX(n);
  }

  setY(n: number): void {
    this.position.setY(n);
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(p: Position): void {
    this.position = p;
  }

  move(dx: number, dy: number) {
    this.position.move(dx, dy);
  }

  abstract acceptVisitor(visitor: IVisitor): void;
}

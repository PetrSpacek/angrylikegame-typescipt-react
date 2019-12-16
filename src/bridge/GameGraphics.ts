import { ObjectTypes, ShootingStrategies } from 'src/config';
import { Position } from 'src/model/lib';
import { IGameGraphics } from './IGameGraphics';
import { IGameGraphicsImplementor } from './IGameGraphicsImplementor';


export class GameGraphics implements IGameGraphics {
  protected implementor: IGameGraphicsImplementor;

  constructor(impl: IGameGraphicsImplementor) {
    this.implementor = impl;
  }

  drawObject(type: ObjectTypes, position: Position, options: any): void {
    this.implementor.drawObject(type, position, options);
  }  
  drawInfo(speed: number, angle: number, gravity: number, strategy: ShootingStrategies, score: number): void {
    this.implementor.drawInfo(speed, angle, gravity, strategy, score);
  }
  drawRectangle(leftTop: Position, rightBottom: Position): void {
    this.implementor.drawLine(leftTop, new Position(rightBottom.getX(), leftTop.getY()));
    this.implementor.drawLine(new Position(rightBottom.getX(), leftTop.getY()), rightBottom);
    this.implementor.drawLine(rightBottom, new Position(leftTop.getX(), rightBottom.getY()));
    this.implementor.drawLine(new Position(leftTop.getX(), rightBottom.getY()), leftTop);
  }
  reset(): void {
    this.implementor.reset();
  }

}

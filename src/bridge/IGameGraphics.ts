import { Position } from 'src/model/lib';
import { ObjectTypes, ShootingStrategies } from '../config';

export interface IGameGraphics {
  drawObject(type: ObjectTypes, position: Position, options: any): void;
  drawInfo(speed: number, angle: number, gravity: number, strategy: ShootingStrategies, score: number): void;
  drawRectangle(leftTop: Position , rightBottom: Position ): void;
  reset(): void;
}
import { ObjectTypes, ShootingStrategies } from "src/config";
import { Position } from "src/model/lib";

export interface IGameGraphicsImplementor {
  drawObject(type: ObjectTypes, position: Position, options: any): void;
  drawInfo(speed: number, angle: number, gravity: number, strategy: ShootingStrategies, score: number): void;
  drawLine(start: Position , end: Position ): void;
  reset(): void;
}
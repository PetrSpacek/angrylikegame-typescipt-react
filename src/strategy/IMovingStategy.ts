import { AbsMissile } from "src/model/GameObject";
import { ShootingStrategies } from "src/config";

export interface IMovingStrategy {
  getType(): ShootingStrategies;
  updatePosition(missile: AbsMissile): void;
}

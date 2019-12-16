import { AbsCannon } from "src/model/GameObject";
import { CannonModes } from "src/config";

export interface IShootingMode {
  getName(): string;
  getMode(): CannonModes;
  shoot(cannon: AbsCannon): void;
  nextMode(cannon: AbsCannon): void;
}

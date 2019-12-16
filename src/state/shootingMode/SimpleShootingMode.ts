import { AbsCannon } from "src/model/GameObject";
import { IShootingMode } from "./IShootingMode";
import { CannonModes } from "src/config";


export class SimpleShootingMode implements IShootingMode {
  getName(): string {
    return "SimpleShootingMode"
  }  

  getMode(): CannonModes {
    return CannonModes.SIMPLE;
  }

  shoot(cannon: AbsCannon): void {
   cannon.primitiveShoot();
  }

  nextMode(cannon: AbsCannon): void {
    cannon.useDoubleMode();
  }


}
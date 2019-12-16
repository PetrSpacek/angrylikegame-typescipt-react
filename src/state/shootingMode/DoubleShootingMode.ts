import { AbsCannon } from "src/model/GameObject";
import { IShootingMode } from "./IShootingMode";
import { CannonModes } from "src/config";


export class DoubleShootingMode implements IShootingMode {
  getName(): string {
    return "DoubleShootingMode"
  }  

  getMode(): CannonModes {
    return CannonModes.DOUBLE;
  }

  shoot(cannon: AbsCannon): void {
   cannon.primitiveShoot();
   let m2 = cannon.primitiveShoot();

   m2.setDelay(1);
  }

  nextMode(cannon: AbsCannon): void {
    cannon.useTripleMode();
  }


}
import { AbsCannon } from "src/model/GameObject";
import { IShootingMode } from "./IShootingMode";
import { CannonModes } from "src/config";


export class TripleShootingMode implements IShootingMode {
  getName(): string {
    return "TripleShootingMode"
  }  

  getMode(): CannonModes {
    return CannonModes.TRIPLE;
  }

  shoot(cannon: AbsCannon): void {
   let m1 = cannon.primitiveShoot();
   cannon.primitiveShoot();
   let m3 = cannon.primitiveShoot();

    m1.modifyAngle(5);
    m3.modifyAngle(-5);
  }

  nextMode(cannon: AbsCannon): void {
    cannon.useSingleMode();
  }


}
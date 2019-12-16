import { AbsCommand } from "./AbsCommand";

export class CannonShoot extends AbsCommand {

  execute(): void {
    this.receiver.cannonShoot();
  }

}
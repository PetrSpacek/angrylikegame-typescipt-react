import { AbsCommand } from "./AbsCommand";

export class CannonMoveUp extends AbsCommand {

  execute(): void {
    this.receiver.moveCannonUp();
  }

}
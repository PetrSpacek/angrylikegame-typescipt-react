import { AbsCommand } from "./AbsCommand";

export class CannonMoveDown extends AbsCommand {

  execute(): void {
    this.receiver.moveCannonDown();
  }

}
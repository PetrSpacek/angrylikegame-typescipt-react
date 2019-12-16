import { AbsCommand } from "./AbsCommand";

export class CannonToggleMode extends AbsCommand {

  execute(): void {
    this.receiver.toggleCannonMode();
  }

}
import { AbsCommand } from "./AbsCommand";

export class Undo extends AbsCommand {

  execute(): void {
    this.receiver.undo();
  }

}
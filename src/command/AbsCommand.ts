import { IGameModel } from "src/proxy";

export abstract class AbsCommand {
  protected receiver: IGameModel;
  protected memento: any;

  constructor(rec: IGameModel){
    this.receiver = rec;
  }

  doExecute() {
    this.memento = this.receiver.createMemento();
    this.execute();
  }

  undoExecute() {
    if (!this.memento) return;
    this.receiver.setMemento(this.memento);
  }

  abstract execute(): void;
}
import { AbsCommand } from "src/command";
import { AbsCannon } from "src/model/GameObject";

export interface IGameModel {
  moveCannonUp(): void;
  moveCannonDown(): void;
  cannonShoot(): void;
  toggleCannonMode(): void;
  runTimer(): void;
  stopTimer(): void;

  angleUp(): void;
  angleDown(): void;
  speedUp(): void;
  speedDown(): void;
  gravityUp(): void;
  gravityDown(): void;
  strategySimple(): void;
  strategyBallistic(): void;

  registerCmd(cmd: AbsCommand): void;
  createMemento(): any;
  setMemento(memento: any): void;
  undo(): void;

  getCannon(): AbsCannon;
}
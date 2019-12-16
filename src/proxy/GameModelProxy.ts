import { IGameModel } from './IGameModel';
import { AbsCommand } from 'src/command';
import { AbsCannon } from 'src/model/GameObject';

export class GameModelProxy implements IGameModel {
  private isRunning: boolean = false;
  private subject: IGameModel;

  constructor(subject: IGameModel) {
    this.subject = subject;
  }

  moveCannonUp(): void {
    if (!this.isRunning) return;
    this.subject.moveCannonUp();
  }

  moveCannonDown(): void {
    if (!this.isRunning) return;
    this.subject.moveCannonDown();
  }

  cannonShoot(): void {
    if (!this.isRunning) return;
    this.subject.cannonShoot();
  }

  toggleCannonMode(): void {
    if (!this.isRunning) return;
    this.subject.toggleCannonMode();
  }

  runTimer(): void {
    if (this.isRunning) return;
    this.subject.runTimer();
    this.isRunning = !this.isRunning;
  }
  
  stopTimer(): void {
    if (!this.isRunning) return;
    this.subject.stopTimer();
    this.isRunning = !this.isRunning;
  }

  angleUp(): void {
    this.subject.angleUp();
  }

  angleDown(): void {
    this.subject.angleDown();
  }

  speedUp(): void {
    this.subject.speedUp();
  }

  speedDown(): void {
    this.subject.speedDown();
  }

  gravityUp(): void {
    this.subject.gravityUp();
  }

  gravityDown(): void {
    this.subject.gravityDown();
  }
  
  strategySimple(): void {
    this.subject.strategySimple();
  }

  strategyBallistic(): void {
    this.subject.strategyBallistic();
  }


  registerCmd(cmd: AbsCommand) {
    if (!this.isRunning) return;
    this.subject.registerCmd(cmd);
  }

  createMemento(): any {
    return this.subject.createMemento();
  }

  setMemento(m: any) {
    this.subject.setMemento(m);
  }

  undo(): void {
    if (!this.isRunning) return;
    this.subject.undo();
  }

  getCannon(): AbsCannon {
    return this.subject.getCannon();
  }


}
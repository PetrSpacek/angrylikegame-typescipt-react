import { IVisitor } from "src/visitor";
import { EnemyStates } from "src/config";
import { GameObject } from "./GameObject";
import { IEnemyState, EnemyStateOne, EnemyStateTwo, EnemyStateThree, EnemyStateFour, EnemyStateDestroyed } from "src/state";


export abstract class AbsEnemy extends GameObject {

  protected STATE_ONE = new EnemyStateOne();
  protected STATE_TWO = new EnemyStateTwo();
  protected STATE_THREE = new EnemyStateThree();
  protected STATE_FOUR = new EnemyStateFour();
  protected STATE_DESTROYED = new EnemyStateDestroyed();

  protected state: IEnemyState = this.STATE_ONE;
  
  acceptVisitor(visitor: IVisitor): void {
    visitor.visitEnemy(this);
  }

  abstract moveUp(): void;
  abstract hit(): void;
  
  isInBounds(minY: number): boolean {
    return this.getY() >= minY;
  }

  isDestroyed(): boolean {
    return this.state.isDestroyed();
  }

  isValid(): boolean {
    return !this.isDestroyed();
  }

  getType(): string {
    return this.state.getName();
  }

  getState() {
    return this.state.getState();
  }

  setState(state: EnemyStates){
    switch(state){
      case EnemyStates.ONE: this.toggleStateOne(); break;
      case EnemyStates.TWO: this.toggleStateTwo(); break;
      case EnemyStates.THREE: this.toggleStateThree(); break;
      case EnemyStates.FOUR: this.toggleStateFour(); break;
      case EnemyStates.DESTROYED: this.toggleStateDestroyed(); break;
    }
  }

  toggleStateDestroyed() {
    this.state = this.STATE_DESTROYED;
  }

  toggleStateOne() {
    this.state = this.STATE_ONE;
  }

  toggleStateTwo() {
    this.state = this.STATE_TWO;
  }

  toggleStateThree() {
    this.state = this.STATE_THREE;
  }

  toggleStateFour() {
    this.state = this.STATE_FOUR;
  }

}

import { GameObject } from './GameObject';

export abstract class LifetimeLimitedGameObject extends GameObject {
  protected bornAt: Date

  constructor(){
    super();
    this.bornAt = new Date();
  }

  getAge() : number {
    const now = new Date();
    return now.getTime() - this.bornAt.getTime();
  }

}

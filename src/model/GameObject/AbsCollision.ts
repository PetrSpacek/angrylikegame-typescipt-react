import { IVisitor } from "src/visitor";
import { LifetimeLimitedGameObject } from "./LifetimeLimitedGameObject";


export abstract class AbsCollision extends LifetimeLimitedGameObject {

  acceptVisitor(visitor: IVisitor): void {
    visitor.visitCollision(this);
  }

  abstract isValid(): boolean;
  
}

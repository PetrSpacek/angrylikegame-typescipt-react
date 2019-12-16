import { IVisitor } from "./IVisitor";
import { AbsCannon, AbsEnemy, AbsCollision, AbsMissile, AbsModelInfo } from "../model/GameObject";
import { IGameGraphics } from "src/bridge";
import { ObjectTypes } from "src/config";

export class GameRender implements IVisitor {
  private context: IGameGraphics;

  setContext(ctx: IGameGraphics): void {
    this.context = ctx;
  }

  visitCannon(go: AbsCannon): void {
    this.context.drawObject(ObjectTypes.CANNON, go.getPosition(), {behavior: go.getMode()});
  }  
  
  visitCollision(go: AbsCollision): void {
    this.context.drawObject(ObjectTypes.COLLISION, go.getPosition(), {});
  }

  visitEnemy(go: AbsEnemy): void {
    if (!go.isValid()) return;
    this.context.drawObject(ObjectTypes.ENEMY, go.getPosition(), {behavior: go.getState()});
  }

  visitMissile(go: AbsMissile): void {
    if (!go.isValid() || go.getTime() < 0) return;
    this.context.drawObject(ObjectTypes.MISSILE, go.getPosition(), {});
  }

  visitModelInfo(go: AbsModelInfo): void {
    this.context.drawInfo(
      go.getSpeed(),
      go.getAngle(),
      go.getGravity(),
      go.getStrategy(),
      go.getScore(),
    )
  }
}

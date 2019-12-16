import { AbsCannon, AbsCollision, AbsEnemy, AbsMissile, AbsModelInfo } from "../model/GameObject";
import { IGameGraphics } from "src/bridge";

export interface IVisitor {
  visitCannon(go: AbsCannon): void;
  visitCollision(go: AbsCollision): void;
  visitEnemy(go: AbsEnemy): void;
  visitMissile(go: AbsMissile): void;
  visitModelInfo( go: AbsModelInfo): void;

  setContext(ctx: IGameGraphics): void;
}

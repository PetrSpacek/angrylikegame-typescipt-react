import { GameObjectData, GameInfoData } from "./objectModels";

export interface IDrawable {
  drawObject(info: GameObjectData): void;
  setGameProps(info: GameInfoData): void;
  reset(): void;
}

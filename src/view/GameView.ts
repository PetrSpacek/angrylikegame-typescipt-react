import { GameModel } from '../model';
import { GameController } from '../controller';
import { IVisitor, GameRender } from 'src/visitor';
import { IObserver } from 'src/observer';
import { GameModelProxy } from 'src/proxy/GameModelProxy';
import { IGameGraphics } from 'src/bridge';

export class GameView implements IObserver {

  private model: GameModel;
  private graphicContext: IGameGraphics;
  private renderer: IVisitor;

  constructor(model: GameModel) {
    this.model = model;
    this.model.registerObserver(this);
    this.renderer = new GameRender();
  }

  makeController(): GameController {
    return new GameController(new GameModelProxy(this.model));
  }

  setGraphics(gr: IGameGraphics): void {
    this.graphicContext = gr;
    this.renderer.setContext(gr);
    this.update();
  }

  update(): void {
    this.graphicContext.reset();
    let data = this.model.getGameObjects()
    for (let obj of data) {
      obj.acceptVisitor(this.renderer);
    }
  }
}
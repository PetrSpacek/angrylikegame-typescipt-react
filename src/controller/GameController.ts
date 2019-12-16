import { IGameModel } from "src/proxy";
import { CannonMoveUp, CannonMoveDown, CannonShoot, CannonToggleMode, Undo } from "src/command";

export default class GameController {
    private model: IGameModel;

    constructor(
        model: IGameModel,
    ) {
        this.model = model;
        document.addEventListener('keydown', (event) => this.handleKeyPress(event.key));
    }

    private handleKeyPress(code: string) {
        switch (code) {
            case "ArrowDown": this.model.registerCmd(new CannonMoveDown(this.model)); break;
            case "ArrowUp": this.model.registerCmd(new CannonMoveUp(this.model)); break;
            case " ": this.model.registerCmd(new CannonShoot(this.model)); break;
            case "r": this.model.runTimer(); break;
            case "s": this.model.stopTimer(); break;
            case "m": this.model.registerCmd(new CannonToggleMode(this.model)); break;
            case "z": this.model.registerCmd(new Undo(this.model)); break;
        }
    }

    handleUIEvent(code: string) {
        switch (code) {
            case "angleUp": this.model.angleUp(); break;
            case "angleDown": this.model.angleDown(); break;
            case "speedUp": this.model.speedUp(); break;
            case "speedDown": this.model.speedDown(); break;
            case "gravityUp": this.model.gravityUp(); break;
            case "gravityDown": this.model.gravityDown(); break;
            case "strategySimple": this.model.strategySimple(); break;
            case "strategyBallistic": this.model.strategyBallistic(); break;

        }
    }
}
import React, { LegacyRef } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { GameModel } from './model';
import { GameBoard, GameView } from './view';
import { GameController } from './controller';
import { IGameGraphicsImplementor, ReactGraphics, IGameGraphics, GameGraphics } from './bridge';


export const model: GameModel = new GameModel();
export const view: GameView = new GameView(model);
export const controller: GameController = view.makeController();

const canvas: LegacyRef<GameBoard> = React.createRef();
ReactDOM.render(<GameBoard ref={canvas} onChange={(code:string) => controller.handleUIEvent(code)} />, document.getElementById('root'));

const gr_impl: IGameGraphicsImplementor = new ReactGraphics(canvas.current);
const gr: IGameGraphics = new GameGraphics(gr_impl);

view.setGraphics(gr);




//Create controller call is made by view itself

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { IGameModel } from 'src/proxy';
import GameModel from './GameModel';
import { Position } from './lib';
import { CannonMoveUp, Undo } from 'src/command';
import { TIMER_DELAY, CANNON_STEP_SIZE } from 'src/config';
import { GameView } from 'src/view';

jest.mock('src/view/GameView');

beforeEach(() => {
  GameView.mockClear();
});


test("test undo", () => {
  jest.useFakeTimers();
  const gameModel: IGameModel = new GameModel();
  const positionBeforeUndo: Position = new Position(gameModel.getCannon().getX(), gameModel.getCannon().getY())

  gameModel.runTimer();
  gameModel.registerCmd(new CannonMoveUp(gameModel));
  jest.advanceTimersByTime(TIMER_DELAY);

  const positionBetweenDoAndUndo: Position = new Position(gameModel.getCannon().getX(), gameModel.getCannon().getY())
  expect(positionBetweenDoAndUndo.getX()).toBe(positionBeforeUndo.getX());
  expect(positionBetweenDoAndUndo.getY()).toBe(positionBeforeUndo.getY() - CANNON_STEP_SIZE);

  gameModel.registerCmd(new Undo(gameModel));
  jest.advanceTimersByTime(TIMER_DELAY);
  gameModel.stopTimer();

  const positionAfterUndo = new Position(gameModel.getCannon().getX(), gameModel.getCannon().getY())

  expect(positionBeforeUndo.getX()).toBe(positionAfterUndo.getX());
  expect(positionBeforeUndo.getY()).toBe(positionAfterUndo.getY());

});

test("test notifying observers", () => {
  const gameModel: GameModel = new GameModel();
  const view: GameView = new GameView(gameModel);
  gameModel.registerObserver(view);

  expect(GameView).toBeCalledTimes(1);
  expect(GameView.mock.instances[0].update).toBeCalledTimes(0);

  gameModel.notify();

  expect(GameView.mock.instances[0].update).toBeCalledTimes(1);
});

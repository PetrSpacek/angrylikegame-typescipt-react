import { GameModel } from "src/model";
import GameController from "./GameController";

jest.mock('src/model/GameModel');

beforeEach(() => {
  GameModel.mockClear();
});

test("handling UI event angle up", () => {
  const model = new GameModel();
  const controller = new GameController(model);

  expect(GameModel).toBeCalledTimes(1);
  expect(GameModel.mock.instances[0].angleUp).toBeCalledTimes(0);

  controller.handleUIEvent("angleUp");

  expect(GameModel.mock.instances[0].angleUp).toBeCalledTimes(1);
});

test("keyboard event run timer", () => {
  const model = new GameModel();
  const controller = new GameController(model);

  expect(GameModel).toBeCalledTimes(1);
  expect(GameModel.mock.instances[0].runTimer).toBeCalledTimes(0);

  var event = new KeyboardEvent('keydown', {'key': "r"});
  document.dispatchEvent(event);

  expect(GameModel.mock.instances[0].runTimer).toBeCalledTimes(1);
});

test("registering command on cannon mode change", () => {
  const model = new GameModel();
  const controller = new GameController(model);

  expect(GameModel).toBeCalledTimes(1);
  expect(GameModel.mock.instances[0].registerCmd).toBeCalledTimes(0);

  var event = new KeyboardEvent('keydown', {'key': "m"});
  document.dispatchEvent(event);

  expect(GameModel.mock.instances[0].registerCmd).toBeCalledTimes(1);
});
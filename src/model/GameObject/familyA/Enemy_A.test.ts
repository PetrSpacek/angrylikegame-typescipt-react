import { AbsEnemy } from "../AbsEnemy";
import { Enemy_A } from "./Enemy_A";
import { EnemyStates } from "src/config";

test("test changing state on hit", () => {
  const enemy: AbsEnemy = new Enemy_A();
  enemy.toggleStateTwo();

  expect(enemy.getState()).toBe(EnemyStates.TWO);

  enemy.hit();
  expect(enemy.getState()).toBe(EnemyStates.ONE);

  enemy.hit();
  expect(enemy.getState()).toBe(EnemyStates.DESTROYED);
  
  enemy.hit();
  expect(enemy.getState()).toBe(EnemyStates.DESTROYED);

});
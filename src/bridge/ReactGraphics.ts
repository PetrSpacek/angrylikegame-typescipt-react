import { IGameGraphicsImplementor } from "./IGameGraphicsImplementor";
import { IDrawable } from "src/view";
import { ObjectTypes, ShootingStrategies, CannonModes, EnemyStates } from "src/config";
import { Objects, CannonTypes, EnemyTypes } from "src/view/objectModels";
import { Position } from "src/model/lib";

export class ReactGraphics implements IGameGraphicsImplementor {
  protected gc: IDrawable;

  constructor (ctx: IDrawable) {
    this.gc = ctx;
  }

  drawObject(type: ObjectTypes, position: Position, options: any): void {
    let result = {
      type: this.mapObjectTypes(type),
      position: {
        left: position.getX(),
        top: position.getY(),
      }
    }

    if(options.behavior) {
      result['behavior'] = this.mapBehavior(options.behavior);
    }

    this.gc.drawObject(result)
  }
  
  drawInfo(speed: number, angle: number, gravity: number, strategy: ShootingStrategies, score: number): void {
    this.gc.setGameProps({
      score: score,
      angle: angle,
      speed: speed,
      gravity: gravity,
      strategy: strategy,
    })
  }

  drawLine(start: Position , end: Position ): void {
    console.log("Drawing line", start, end);
  }

  reset(): void {
    this.gc.reset();
  }

  private mapBehavior(behavior: any): CannonTypes | EnemyTypes {
    switch (behavior) {
      case CannonModes.SIMPLE: return CannonTypes.DART_MONKEY;
      case CannonModes.DOUBLE: return CannonTypes.NINJA_MONKEY;
      case CannonModes.TRIPLE: return CannonTypes.SUPER_MONKEY;
      case EnemyStates.ONE: return EnemyTypes.RED_BLOON;
      case EnemyStates.TWO: return EnemyTypes.BLUE_BLOON;
      case EnemyStates.THREE: return EnemyTypes.GREEN_BLOON;
      case EnemyStates.FOUR: return EnemyTypes.YELLOW_BLOON;
    }
  }

  private mapObjectTypes(type: ObjectTypes): Objects {
    switch (type) {
      case ObjectTypes.CANNON: return Objects.CANNON;
      case ObjectTypes.ENEMY: return Objects.ENEMY;
      case ObjectTypes.MISSILE: return Objects.MISSILE;
      case ObjectTypes.COLLISION: return Objects.COLLISION;
      case ObjectTypes.MODEL_INFO: return Objects.MODEL_INFO;
    }
  }
}

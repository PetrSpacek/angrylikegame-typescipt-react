import { AbsMissile } from 'src/model/GameObject';
import { IMovingStrategy } from './IMovingStategy';
import { ShootingStrategies } from 'src/config';


export class BallisticMovingStrategy implements IMovingStrategy {
  getType(): ShootingStrategies {
    return ShootingStrategies.BALLISTIC;
  }

  updatePosition(missile: AbsMissile): void {
    if (missile.getTime() < 0) return;

    const speed = missile.getSpeed();
    const gravity = missile.getGravity();
    const angle = missile.getAngle() * Math.PI / 180;
    const time = missile.getTime();
    const init = missile.getInitPos();

    const newX = init.getX() + speed * Math.cos(angle) * time;
    const newY = - init.getY() + speed * Math.sin(angle) * time - gravity * time * time / 2;

    missile.setX(newX);
    missile.setY(- newY);
  }

}
import { AbsMissile } from 'src/model/GameObject';
import { IMovingStrategy } from './IMovingStategy';
import { ShootingStrategies } from 'src/config';


export class SimpleMovingStrategy implements IMovingStrategy {
  getType(): ShootingStrategies {
    return ShootingStrategies.SIMPLE;
  }

  updatePosition(missile: AbsMissile): void {
    if (missile.getTime() < 0) return;

    const speed = missile.getSpeed();
    const angle = missile.getAngle() * Math.PI / 180;
    const time = missile.getTime();
    const init = missile.getInitPos();

    const newX = init.getX() + speed * Math.cos(angle) * time;
    const newY = - init.getY() + speed * Math.sin(angle) * time;

    missile.setX(newX);
    missile.setY(- newY);
  }

}
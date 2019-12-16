import React from 'react';
import { CannonTypes, Position, ObjectSizes } from '../../objectModels';
import GameObject from './GameObject';

import dart_monkey from 'src/assets/dart_monkey.png';
import super_monkey from 'src/assets/super_monkey.png';
import cannon_monkey from 'src/assets/cannon_monkey.png';
import ninja_monkey from 'src/assets/ninja_monkey.png';
import machine_gun_monkey from 'src/assets/machine_gun_monkey.png';

export interface CannonProps {
  type: CannonTypes,
  position: Position,
};

const Cannon = (props: CannonProps) => {
  const imageMap = {
    [CannonTypes.DART_MONKEY]: dart_monkey,
    [CannonTypes.SUPER_MONKEY]: super_monkey,
    [CannonTypes.CANNON_MONKEY]: cannon_monkey,
    [CannonTypes.MACHINE_GUN_MONKEY]: machine_gun_monkey,
    [CannonTypes.NINJA_MONKEY]: ninja_monkey, 
  };

  return (
    <GameObject position={props.position} imageUrl={imageMap[props.type]} size={ObjectSizes.CANNON} />
  );
};

export default Cannon;

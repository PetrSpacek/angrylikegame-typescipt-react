import React from 'react';
import { EnemyTypes, Position, ObjectSizes } from '../../objectModels';

import bloon_red from 'src/assets/bloon_red.png';
import bloon_blue from 'src/assets/bloon_blue.png';
import bloon_green from 'src/assets/bloon_green.png';
import bloon_yellow from 'src/assets/bloon_yellow.png';
import GameObject from './GameObject';

export interface EnemyProps {
  type: EnemyTypes,
  position: Position,
};

const Enemy = (props: EnemyProps) => {
  const imageMap = {
    [EnemyTypes.RED_BLOON]: bloon_red,
    [EnemyTypes.BLUE_BLOON]: bloon_blue,
    [EnemyTypes.GREEN_BLOON]: bloon_green,
    [EnemyTypes.YELLOW_BLOON]: bloon_yellow,
  };

  return (
    <GameObject position={props.position} imageUrl={imageMap[props.type]} size={ObjectSizes.ENEMY} />
  );
};

export default Enemy;

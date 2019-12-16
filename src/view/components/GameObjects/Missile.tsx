import React from 'react';
import { Position, ObjectSizes } from '../../objectModels';
import GameObject from './GameObject';

import dart from 'src/assets/dart.png';;

export interface MissileProps {
  position: Position,
};

const Missile = (props: MissileProps) => {
  return (
    <GameObject position={props.position} imageUrl={dart} size={ObjectSizes.MISSILE} />
  );
};

export default Missile;

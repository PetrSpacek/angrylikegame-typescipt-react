import React from 'react';
import { Position, ObjectSizes } from '../../objectModels';
import GameObject from './GameObject';

import collision from 'src/assets/collision.png';;

export interface CollisionProps {
  position: Position,
};

const Collision = (props: CollisionProps) => {
  return (
    <GameObject position={props.position} imageUrl={collision} size={ObjectSizes.COLLISION} />
  );
};

export default Collision;

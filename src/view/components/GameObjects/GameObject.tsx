import React from 'react';
import { Position, ObjectSizes } from '../../objectModels';
import './GameObject.scss';

export interface GameObjectProps {
  imageUrl: string,
  position: Position,
  size: ObjectSizes,
};

const GameObject = (props: GameObjectProps) => {
  const sizeMap = {
    [ObjectSizes.CANNON]: 'cannon',
    [ObjectSizes.ENEMY]: 'enemy',
    [ObjectSizes.MISSILE]: 'missile',
    [ObjectSizes.COLLISION]: 'collision',
  };

  return (
    <div
      className={`game-object__container game-object__container--${sizeMap[props.size]}`}
      style={props.position}
    >
      <img className='game-object__image' src={props.imageUrl} alt='game object' />
    </div>
  );
};

export default GameObject;

import React, { Component } from 'react';
import './GameBoard.scss';

import { Cannon, Enemy, Missile, Collision } from './components';
import { CannonTypes, EnemyTypes, GameObjectData, Objects, GameInfoData } from './objectModels';
import { IDrawable } from './IDrawable';
import Toolbar from './components/Toolbar/Toolbar';
import { ShootingStrategies } from 'src/config';


interface AppProps {
  onChange(code: string): void;
 }

interface AppState {
  gameObjects: GameObjectData[];
  gameInfo: GameInfoData;
}

class GameBoard extends Component<AppProps, AppState> implements IDrawable {
  state = {
    gameObjects: [],
    gameInfo: {
      score: 0,
      angle: 0,
      speed: 0,
      gravity: 0,
      strategy: ShootingStrategies.SIMPLE,
    }
  }

  drawObject(obj: GameObjectData) {
    this.setState(prevState => ({
      gameObjects: [...prevState.gameObjects, obj]
    }));
  }

  setGameProps(info: GameInfoData): void {
    this.setState({gameInfo: info});
  }

  reset() {
    this.setState({ gameObjects: [] });
  }

  propChange(code: string) {
    this.props.onChange(code);
  }

  renderGameObject(obj: GameObjectData, idx: number) {
    switch (obj.type) {
      case Objects.CANNON: return <Cannon key={idx} position={obj.position} type={obj.behavior as CannonTypes} />;
      case Objects.ENEMY: return <Enemy key={idx} position={obj.position} type={obj.behavior as EnemyTypes} />;
      case Objects.MISSILE: return <Missile key={idx} position={obj.position} />;
      case Objects.COLLISION: return <Collision key={idx} position={obj.position} />;
      default: return null;
    }
  }

  render() {
    return (
      <div className="board">
        <Toolbar {...this.state.gameInfo} onChange={(code: string) => this.propChange(code)} />
        <div id="canvas" className="canvas">
          {this.state.gameObjects.map((obj, idx) => this.renderGameObject(obj, idx))}
        </div>
      </div>
    );
  }

}

export default GameBoard;

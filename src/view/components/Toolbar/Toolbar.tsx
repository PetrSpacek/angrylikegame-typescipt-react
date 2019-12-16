import React from 'react'; 
import './Toolbar.scss';
import { GameInfoData } from 'src/view/objectModels';
import { ShootingStrategies } from 'src/config';

export interface ToolbarProps extends GameInfoData {
  onChange(code: string): void;
}

class Toolbar extends React.Component<ToolbarProps, {}> {



  render() {
    return (
      <div className="toolbar">
        <h1 className="toolbar__title">ADP Game</h1>

        <div className="toolbar__box">
          <h2 className="toolbar__box-headline">Game</h2>
          <p className="toolbar__info-line">
            <span className="toolbar__info-line--strong">Score: </span>
            {this.props.score}
          </p>
        </div>

        <div className="toolbar__box">
          <h2 className="toolbar__box-headline">Settings</h2>
          <div className="toolbar__settings-line">
            <div className={`toolbar__settings-select toolbar__settings-select--left 
            ${ this.props.strategy === ShootingStrategies.SIMPLE ? "toolbar__settings-select--active" : ""}`}
            onClick={() => this.props.onChange("strategySimple")} >
              Simple
            </div>
            <div className={`toolbar__settings-select toolbar__settings-select--right 
            ${ this.props.strategy === ShootingStrategies.BALLISTIC ? "toolbar__settings-select--active" : ""}`}
            onClick={() => this.props.onChange("strategyBallistic")} >
              Ballistic
            </div>
          </div>
          <div className="toolbar__settings-line">
            <div className="toolbar__settings-line--strong">Force: </div>
            <div className="toolbar__settings-button toolbar__settings-button--minus" onClick={() => this.props.onChange("speedDown")}></div>
            <div className="toolbar__settings-line--value">{this.props.speed}</div> 
            <div className="toolbar__settings-button toolbar__settings-button--plus" onClick={() => this.props.onChange("speedUp")}></div>
          </div>
          <div className="toolbar__settings-line">
            <div className="toolbar__settings-line--strong">Angle: </div>
            <div className="toolbar__settings-button toolbar__settings-button--minus" onClick={() => this.props.onChange("angleDown")}></div>
            <div className="toolbar__settings-line--value">{this.props.angle}°</div> 
            <div className="toolbar__settings-button toolbar__settings-button--plus" onClick={() => this.props.onChange("angleUp")}></div>
          </div>
          <div className="toolbar__settings-line">
            <div className="toolbar__settings-line--strong">Gravity: </div>
            <div className="toolbar__settings-button toolbar__settings-button--minus" onClick={() => this.props.onChange("gravityDown")}></div>
            <div className="toolbar__settings-line--value">{this.props.gravity}</div> 
            <div className="toolbar__settings-button toolbar__settings-button--plus" onClick={() => this.props.onChange("gravityUp")}></div>
          </div>
        </div>

        <div className="toolbar__box">
          <h2 className="toolbar__box-headline">Help</h2>
          <p className="toolbar__help-line">
            move with <span className="toolbar__help-line--strong toolbar__help-line--big">↑</span>,<span className="toolbar__help-line--strong toolbar__help-line--big">↓</span>  
          </p>
          <p className="toolbar__help-line">
            shoot with <span className="toolbar__help-line--strong">SPACE</span> 
          </p>
          <p className="toolbar__help-line">
            change shooting mode with <span className="toolbar__help-line--strong">M</span> 
          </p>
          <p className="toolbar__help-line">
            run and stop timer with <span className="toolbar__help-line--strong">R</span>,<span className="toolbar__help-line--strong">S</span> 
          </p>
          <p className="toolbar__help-line">
            undo with <span className="toolbar__help-line--strong">Z</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Toolbar;
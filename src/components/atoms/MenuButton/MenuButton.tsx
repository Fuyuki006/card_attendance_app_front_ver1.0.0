import React, { ReactEventHandler } from "react";
import "./MenuButton.scss";

interface MenuButtonProps {
  onClick: ReactEventHandler;
}

export default class MenuButton extends React.Component<MenuButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick} className="MenuButton-button">
        <div className="MenuButton-container">
          <div className="MenuButton-text">Menu</div>
          <img
            src="./images/wooden-board.png"
            alt="WoodenBoardImage"
            className="MenuButton-image"
          />
        </div>
      </button>
    );
  }
}

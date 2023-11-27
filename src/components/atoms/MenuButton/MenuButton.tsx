import React, { ReactEventHandler } from "react";
import "./MenuButton.scss";

interface MenuButtonProps {
  onClick: ReactEventHandler;
}

export default class MenuButton extends React.Component<MenuButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick} className="MenuButton-button">
        <span className="MenuButton-text">Menu</span>
      </button>
    );
  }
}

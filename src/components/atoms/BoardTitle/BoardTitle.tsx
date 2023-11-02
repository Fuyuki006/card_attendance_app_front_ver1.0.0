import React from "react";
import "./BoardTitle.scss";

interface BoardTitleProps {
  BoardTitleBoldText: string;
  BoardTitleText: string;
}

export default class BoardTitle extends React.Component<BoardTitleProps> {
  render() {
    return (
      <h2 className="BoardTitle">
        <div className="BoardTitle-container">
          <span className="BoardTitle-bold">
            {this.props.BoardTitleBoldText}
          </span>
          <span className="BoardTitle-normal">{this.props.BoardTitleText}</span>
        </div>
      </h2>
    );
  }
}

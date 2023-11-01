import React from "react";
import BoardTitle from "../../atoms/BoardTitle/BoardTitle";
import "./Board.scss";
interface BoardTitleProps {
  BoardTitleBoldText: string;
  BoardTitleText: string;
}

export default class Board extends React.Component<BoardTitleProps> {
  render() {
    return (
      <div className="Board-container">
        <BoardTitle
          BoardTitleBoldText={this.props.BoardTitleBoldText}
          BoardTitleText={this.props.BoardTitleText}
        />
      </div>
    );
  }
}

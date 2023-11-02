import React from "react";
import BoardContent from "../../molecules/BoardContent/BoardContent";
import "./Board.scss";

interface BoardProps {
  BoardTitleBoldText: string;
  BoardTitleText: string;
}

export default class Board extends React.Component<BoardProps> {
  render() {
    return (
      <div className="Board">
        <div className="Board-container">
          <img
            src="./images/board-frame.png"
            alt="BoardFrameImage"
            className="Main-image"
          />
          <BoardContent
            BoardTitleBoldText={this.props.BoardTitleBoldText}
            BoardTitleText={this.props.BoardTitleText}
          />
        </div>
      </div>
    );
  }
}

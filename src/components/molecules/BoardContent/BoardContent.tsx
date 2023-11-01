import React from "react";
import BoardTitle from "../../atoms/BoardTitle/BoardTitle";
import "./BoardContent.scss";

interface BoardContentTitleProps {
  BoardTitleBoldText: string;
  BoardTitleText: string;
}

export default class BoardContent extends React.Component<BoardContentTitleProps> {
  render() {
    return (
      <div className="BoardContent-container">
        <BoardTitle
          BoardTitleBoldText={this.props.BoardTitleBoldText}
          BoardTitleText={this.props.BoardTitleText}
        />
      </div>
    );
  }
}

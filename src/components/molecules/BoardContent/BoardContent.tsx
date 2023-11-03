import React from "react";
import BoardTitle from "../../atoms/BoardTitle/BoardTitle";
import BoardDescription from "../../atoms/BoardDescription/BoardDescription";

import "./BoardContent.scss";

interface BoardContentTitleProps {
  BoardTitleBoldText: string;
  BoardTitleText: string;
  BoardDescriptionText: string;
  Highlights: string;
}

export default class BoardContent extends React.Component<BoardContentTitleProps> {
  render() {
    return (
      <div className="BoardContent-container">
        <div className="BoardContent-title">
          <BoardTitle
            BoardTitleBoldText={this.props.BoardTitleBoldText}
            BoardTitleText={this.props.BoardTitleText}
          />
        </div>
        <div className="BoardContent-description">
          <span>
            <BoardDescription
              BoardDescriptionText={this.props.BoardDescriptionText}
              Highlight={this.props.Highlights}
            />
          </span>
        </div>
      </div>
    );
  }
}

import React from "react";
import BoardTitle from "../../atoms/BoardTitle/BoardTitle";
import BoardDescription from "../../atoms/BoardDescription/BoardDescription";

import "./BoardContent.scss";

interface BoardContentTitleProps {
  BoardTitleBoldText: string;
  BoardTitleText: string;
  BoardDescriptionText: Array<string>;
  Highlights: Array<string>;
}

export default class BoardContent extends React.Component<BoardContentTitleProps> {
  BoardDescriptionArray = this.props.BoardDescriptionText.map(
    (element, index) => {
      const splitTextElement = element.split("-");
      const splitHighlightElement = this.props.Highlights[index].split("-");
      const boardDescription = splitTextElement.map((element, index) => {
        return (
          <span key={element}>
            <BoardDescription
              BoardDescriptionText={element}
              Highlight={splitHighlightElement[index]}
            />
          </span>
        );
      });

      return boardDescription;
    }
  );

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
          {this.BoardDescriptionArray}
        </div>
      </div>
    );
  }
}

import React from "react";
import BoardContent from "../../molecules/BoardContent/BoardContent";
import "./Board.scss";

interface BoardProps {
  BoardTitleBoldText: string;
  BoardTitleText: string;
  BoardDescriptionText: Array<string>;
  Highlights: Array<string>;
}

export default class Board extends React.Component<BoardProps> {
  BoardDescriptionArray = this.props.BoardDescriptionText.map(
    (element, index) => {
      const splitTextElement = element.split("-");
      const splitHighlightElement = this.props.Highlights[index].split("-");
      const boardDescription = splitTextElement.map((element, index) => {
        return (
          <BoardContent
            BoardTitleBoldText={this.props.BoardTitleBoldText}
            BoardTitleText={this.props.BoardTitleText}
            BoardDescriptionText={splitHighlightElement}
            Highlights={this.props.Highlights}
          />
        );
      });

      return boardDescription;
    }
  );

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
            BoardDescriptionText={this.props.BoardDescriptionText}
            Highlights={this.props.Highlights}
          />
        </div>
      </div>
    );
  }
}

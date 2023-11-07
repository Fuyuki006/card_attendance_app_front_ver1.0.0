import React from "react";
import "./BoardDescription.scss";
import classNames from "classnames";

interface BoardDescriptionProps {
  BoardDescriptionText: string;
  Highlight: string;
}

export default class BoardDescription extends React.Component<BoardDescriptionProps> {
  highlight = this.props.Highlight.split("-");
  boardDescriptionSplitedText = this.props.BoardDescriptionText.split("-");
  boardDescription = this.highlight.map((element, index) => {
    return (
      <span
        key={element.toString()}
        className={classNames(
          element === "true"
            ? "BoardDescription-highlight-text"
            : "BoardDescription-normal-text"
        )}
      >
        {this.boardDescriptionSplitedText[index]}
      </span>
    );
  });

  render() {
    return (
      <div className="BoardDescription-container">
        <span
          className={classNames(
            this.props.Highlight === "true"
              ? "BoardDescription-highlight-text"
              : "BoardDescription-normal-text"
          )}
        >
          {this.boardDescription}
        </span>
      </div>
    );
  }
}

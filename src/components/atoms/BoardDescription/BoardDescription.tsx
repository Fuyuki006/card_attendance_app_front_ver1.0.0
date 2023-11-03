import React from "react";
import "./BoardDescription.scss";
import classNames from "classnames";

interface BoardDescriptionProps {
  BoardDescriptionText: string;
  Highlight: string;
}

export default class BoardDescription extends React.Component<BoardDescriptionProps> {
  highlight = this.props.Highlight.split("-");
  boardDescriptionText = this.props.BoardDescriptionText.split("-");
  a: any = this.highlight.map((element, index) => {
    return (
      <span
        className={classNames(
          element === "true"
            ? "BoardDescription-highlight-text"
            : "BoardDescription-normal-text"
        )}
      >
        {this.boardDescriptionText[index]}
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
          {this.a}
        </span>
      </div>
    );
  }
}

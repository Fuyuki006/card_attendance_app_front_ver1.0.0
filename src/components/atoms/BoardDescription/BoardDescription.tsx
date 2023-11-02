import React from "react";
import "./BoardDescription.scss";
import classNames from "classnames";

interface BoardDescriptionProps {
  BoardDescriptionText?: string;
  Highlight: string;
}

export default class BoardDescription extends React.Component<BoardDescriptionProps> {
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
          {this.props.BoardDescriptionText}
        </span>
      </div>
    );
  }
}

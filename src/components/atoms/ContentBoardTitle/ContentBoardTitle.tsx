import React from "react";
import "./ContentBoardTitle.scss";

interface ContentBoardTitleProps {
  contentBoardTitleBoldText: string;
  contentBoardTitleText: string;
}

export default class ContentBoardTitle extends React.Component<ContentBoardTitleProps> {
  render() {
    return (
      <h2 className="ContentBoardTitle-container">
        <span className="ContentBoardTitle-bold">
          {this.props.contentBoardTitleBoldText}
        </span>
        <span className="ContentBoardTitle-normal">
          {this.props.contentBoardTitleText}
        </span>
      </h2>
    );
  }
}

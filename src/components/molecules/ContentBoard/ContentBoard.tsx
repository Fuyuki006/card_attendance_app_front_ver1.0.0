import React from "react";
import ContentBoardTitle from "../../atoms/ContentBoardTitle/ContentBoardTitle";
import "./ContentBoard.scss";
interface ContentBoardTitleProps {
  contentBoardTitleBoldText: string;
  contentBoardTitleText: string;
}

export default class ContentBoard extends React.Component<ContentBoardTitleProps> {
  render() {
    return (
      <div className="ContentBoard-container">
        <ContentBoardTitle
          contentBoardTitleBoldText={this.props.contentBoardTitleBoldText}
          contentBoardTitleText={this.props.contentBoardTitleText}
        />
      </div>
    );
  }
}

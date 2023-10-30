import React from "react";
import ContentBoard from "../../molecules/ContentBoard/ContentBoard";
import "./Main.scss";

export default class Main extends React.Component {
  render() {
    return (
      <div className="Main-container">
        <img
          src="./images/content-board-frame.png"
          alt="ContentBoardFrameImage"
          className="Main-image"
        />
        <div className="Main-contentBoard">
          <ContentBoard
            contentBoardTitleBoldText="出勤札"
            contentBoardTitleText="とは..."
          />
        </div>
      </div>
    );
  }
}

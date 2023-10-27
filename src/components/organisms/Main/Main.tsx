import React from "react";
import ContentBoard from "../../molecules/ContentBoard/ContentBoard";
import "./Main.scss";

export default class Main extends React.Component {
  render() {
    return (
      <div className="Main-container">
        <ContentBoard
          contentBoardTitleBoldText="出勤札"
          contentBoardTitleText="とは..."
        />
      </div>
    );
  }
}

import React from "react";
import Board from "../Board/Board";
import "./Main.scss";
import { Link } from "react-router-dom";

const boardTitleBoldTextArray = ["出退札", "出退札アプリ"];
const boardTitleTextArray = ["とは", "とは"];
const boardDescriptionText = [
  "出退-勤を管理するための-名札",
  "出退-勤を管理するための-名札",
];
const highlights = ["true-false-true", "true-false-true"];

const boardContainer = boardTitleBoldTextArray.map((element, index) => {
  return (
    <div key={element} className="Main-board-container">
      <Board
        BoardTitleBoldText={element}
        BoardTitleText={boardTitleTextArray[index]}
        BoardDescriptionText={boardDescriptionText}
        Highlights={highlights}
      />
    </div>
  );
});

export default class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        {boardContainer}
        <div>
          <Link to="/tagwall">使ってみる</Link>
        </div>
      </main>
    );
  }
}

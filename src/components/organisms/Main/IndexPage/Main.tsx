import React from "react";
import Board from "../../Board/Board";
import "../Main.scss";
import { Link } from "react-router-dom";
import NavigationButton from "../../../atoms/NavigationButton/NavigationButton";

const boardTitleBoldTextArray = ["出退札", "出退札アプリ"];
const boardTitleTextArray = ["とは", "とは"];
const boardDescriptionText = [
  "出退-勤を管理するための-名札",
  "出退札-を使った-勤怠管理-アプリ!",
];
const highlights = ["true-false-true", "true-false-true-false"];

const boardContainer = boardTitleBoldTextArray.map((element, index) => {
  return (
    <div key={element.toString()} className="Main-index-board-container">
      <Board
        BoardTitleBoldText={element}
        BoardTitleText={boardTitleTextArray[index]}
        BoardDescriptionText={boardDescriptionText[index]}
        Highlights={highlights[index]}
      />
    </div>
  );
});

export default class Main extends React.Component {
  render() {
    return (
      <main className="Main-index">
        {boardContainer}
        <NavigationButton
          text={
            <>
              ログインせずに
              <br />
              使ってみる !
            </>
          }
          link="/demo"
          classNames="NavigationButton-button-demo"
        />
        <NavigationButton
          text={
            <>
              ログインして
              <br />
              使ってみる !
            </>
          }
          link="/login"
          classNames="NavigationButton-button-login"
        />
      </main>
    );
  }
}

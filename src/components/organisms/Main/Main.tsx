import React from "react";
import Board from "../Board/Board";
import "./Main.scss";
import { Link } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        <Board BoardTitleBoldText="出退札" BoardTitleText="とは" />
        <Board BoardTitleBoldText="出退札アプリ" BoardTitleText="とは" />
        <div>
          <Link to="/tagwall">使ってみる</Link>
        </div>
      </main>
    );
  }
}

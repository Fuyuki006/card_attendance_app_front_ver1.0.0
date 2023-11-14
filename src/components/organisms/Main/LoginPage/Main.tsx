import React from "react";
import Board from "../../Board/Board";
import "../Main.scss";
import { Link } from "react-router-dom";
import AppTitle from "../../../atoms/AppTitle/AppTitle";
import LoginForm from "../../../molecules/LoginForm/LoginForm";

export default class Main extends React.Component {
  render() {
    return (
      <main className="Main-login">
        <div className="Main-login-form">
          <LoginForm />
        </div>
      </main>
    );
  }
}

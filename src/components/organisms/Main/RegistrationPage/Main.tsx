import React from "react";
import Board from "../../Board/Board";
import "../Main.scss";
import { Link } from "react-router-dom";
import AppTitle from "../../../atoms/AppTitle/AppTitle";
import RegistrationForm from "../../../molecules/RegistrationForm/RegistrationForm";

export default class Main extends React.Component {
  render() {
    return (
      <main className="Main-registration">
        <div className="Main-registration-form">
          <RegistrationForm />
        </div>
      </main>
    );
  }
}

import React from "react";
import "../Header.scss";
import AppTitle from "../../../atoms/AppTitle/AppTitle";

export default class Header extends React.Component {
  render() {
    return (
      <header className="Header-registration">
        <div className="Header-registration-title">
          <AppTitle appTitleText="出席札アプリ" />
        </div>
      </header>
    );
  }
}

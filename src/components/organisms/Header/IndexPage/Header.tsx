import React from "react";
import "../Header.scss";
import Logo from "../../../molecules/Logo/Logo";
import AppTitle from "../../../atoms/AppTitle/AppTitle";

export default class Header extends React.Component {
  render() {
    return (
      <header className="Header-index">
        <img
          src="./images/header-image.jpg"
          alt="HeaderImage"
          className="Header-index-image"
        />
        <div className="Header-index-container">
          <Logo />
          <AppTitle appTitleText="出退札アプリ" />
        </div>
      </header>
    );
  }
}

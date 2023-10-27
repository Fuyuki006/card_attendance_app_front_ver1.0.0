import React from "react";
import "./Header.scss";
import Logo from "../../molecules/Logo";
import AppTitle from "../../atoms/AppTitle/AppTitle";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <img
          src="./images/header-image.jpg"
          alt="HeaderImage"
          className="Header-image"
        />
        <AppTitle appTitleText="出退札アプリ" />
        <Logo />
      </div>
    );
  }
}

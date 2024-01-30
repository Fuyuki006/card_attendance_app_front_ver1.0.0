import React from "react";
import "../Header.scss";
import AppTitle from "../../../atoms/AppTitle/AppTitle";

const Header = () => {
  return (
    <header className="Header-login">
      <div className="Header-login-title">
        <AppTitle appTitleText="出席札アプリ" />
      </div>
    </header>
  );
};

export default Header;

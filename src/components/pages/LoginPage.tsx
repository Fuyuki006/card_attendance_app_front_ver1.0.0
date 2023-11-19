import React from "react";
import MediaQuery from "react-responsive";
import Main from "../organisms/Main/LoginPage/Main";
import Header from "../organisms/Header/LoginPage/Header";
import Footer from "../organisms/Footer/LoginPage/Footer";
import "./Login.scss";

export default class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <MediaQuery query="(max-width: 767px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div>開発中</div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div className="App-allwrapper"></div>
          <Header />
          <Main />
          <Footer />
          {/* <div>ここにPC向けの要素を書く</div> */}
        </MediaQuery>
      </div>
    );
  }
}

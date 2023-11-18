import React from "react";
import MediaQuery from "react-responsive";
import Main from "../organisms/Main/RegistrationPage/Main";
import Header from "../organisms/Header/RegistrationPage/Header";

export default class Registration extends React.Component {
  render() {
    return (
      <div className="Registration">
        <MediaQuery query="(max-width: 767px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div>ここにスマートフォン向けの要素を書く</div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div className="App-allwrapper"></div>
          <Header />
          <Main />
          {/* <div>ここにPC向けの要素を書く</div> */}
        </MediaQuery>
      </div>
    );
  }
}

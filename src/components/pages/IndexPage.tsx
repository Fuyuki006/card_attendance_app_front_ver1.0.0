import React from "react";
import Main from "../organisms/Main/IndexPage/Main";
import Header from "../organisms/Header/IndexPage/Header";
import MediaQuery from "react-responsive";
import Footer from "../organisms/Footer/IndexPage/Footer";
import "./IndexPage.scss";

export default class Index extends React.Component {
  render() {
    return (
      <div className="Index">
        <MediaQuery query="(max-width: 767px)">
          {/* // iPadの横幅を分岐点にしている */}
          {/* <div>ここにスマートフォン向けの要素を書く</div> */}
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div className="App-allwrapper">
            <Header />
            <Main />
            <Footer />
          </div>
          {/* <div>ここにPC向けの要素を書く</div> */}
        </MediaQuery>
      </div>
    );
  }
}

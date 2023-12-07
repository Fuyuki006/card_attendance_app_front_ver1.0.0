import React from "react";
import MediaQuery from "react-responsive";
import Chain from "../atoms/Chain/Chain";
import HangingSign from "../molecules/HangingSign/HangingSign";

export default class ChainTest extends React.Component {
  render() {
    return (
      <div className="TagWall">
        <MediaQuery query="(max-width: 767px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div>開発中</div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div className="App-allwrapper"></div>
          {/* <div>ここにPC向けの要素を書く</div> */}
        </MediaQuery>
      </div>
    );
  }
}

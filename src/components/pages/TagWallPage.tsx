import React from "react";
import MediaQuery from "react-responsive";
import Header from "../organisms/Header/TagWallPage/Header";

export default class TagWall extends React.Component {
  render() {
    return (
      <div className="Index">
        <MediaQuery query="(max-width: 767px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div>ここにスマートフォン向けの要素を書く</div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          {/* // iPadの横幅を分岐点にしている */}
          <div className="App-allwrapper"></div>
          <Header />
          <div>ここにPC向けの要素を書く</div>
        </MediaQuery>
      </div>
    );
  }
}

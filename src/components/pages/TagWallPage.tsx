import React from "react";
import MediaQuery from "react-responsive";
import Header from "../organisms/Header/TagWallPage/Header";
import Main from "../organisms/Main/TagWallPage/Main";

interface TagWallProps {
  tagWallRowValue: number;
  tagWallColumnValue: number;
}

export default class TagWall extends React.Component<TagWallProps> {
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
          <Header demo={false} />
          <Main
            tagWallRowValue={this.props.tagWallRowValue}
            tagWallColumnValue={this.props.tagWallColumnValue}
            demo={false}
          />
          {/* <div>ここにPC向けの要素を書く</div> */}
        </MediaQuery>
      </div>
    );
  }
}

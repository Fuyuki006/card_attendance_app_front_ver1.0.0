import React from "react";
import "../Main.scss";
import { Link } from "react-router-dom";
import Tag from "../../../atoms/Tag/Tag";
import Wall from "../../../molecules/Wall/Wall";

interface MainProps {
  tagWallRowValue: number;
  tagWallColumnValue: number;
}

export default class Main extends React.Component<MainProps> {
  render() {
    return (
      <main className="Main-tagwall-container">
        <Wall
          tagWallColumnValue={this.props.tagWallColumnValue}
          tagWallRowValue={this.props.tagWallRowValue}
        />
      </main>
    );
  }
}

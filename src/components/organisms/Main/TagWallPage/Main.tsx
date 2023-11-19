import React from "react";
import "../Main.scss";
import { Link } from "react-router-dom";
import Tag from "../../../atoms/Tag/Tag";
import Wall from "../../../molecules/Wall/Wall";
import AccordionButton from "../../../atoms/AccordionButton/AccordionButton";

interface MainProps {
  tagWallRowValue: number;
  tagWallColumnValue: number;
  demo: boolean;
}

export default class Main extends React.Component<MainProps> {
  render() {
    return (
      <main className="Main-tagwall-container">
        <Wall
          tagWallColumnValue={this.props.tagWallColumnValue}
          tagWallRowValue={this.props.tagWallRowValue}
          demo={this.props.demo}
        />
      </main>
    );
  }
}

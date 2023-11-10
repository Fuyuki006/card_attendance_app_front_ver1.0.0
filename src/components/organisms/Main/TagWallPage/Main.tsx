import React from "react";
import "../Main.scss";
import { Link } from "react-router-dom";
import Tag from "../../../atoms/Tag/Tag";
import Wall from "../../../molecules/Wall/Wall";
import AccordionButton from "../../../atoms/AccordionButton/AccordionButton";

interface MainProps {
  tagWallRowValue: number;
  tagWallColumnValue: number;
}
const accordionItems = [
  {
    title: "項目1",
    content: "項目1の詳細情報",
  },
  {
    title: "項目2",
    content: "項目2の詳細情報",
  },
  // 他の項目も追加できます
];
export default class Main extends React.Component<MainProps> {
  render() {
    return (
      <main className="Main-tagwall-container">
        <Wall
          tagWallColumnValue={this.props.tagWallColumnValue}
          tagWallRowValue={this.props.tagWallRowValue}
        />
        <AccordionButton items={accordionItems} />
      </main>
    );
  }
}

import React from "react";
import "./Tag.scss";
import InputBox from "../InputBox/InputBox";

interface TagProps {
  tagText: string;
  tagWallRowValue: number;
  tagWallColumnValue: number;
}

export default class Tag extends React.Component<TagProps> {
  render() {
    const { tagText } = this.props;

    return (
      <span className="Tag-container">
        <img src="./images/tag.png" alt="TagImage" className="Tag-image" />
        {/* <span className="Tag-text">{tagText}</span> */}
        <InputBox initialText="" />
      </span>
    );
  }
}

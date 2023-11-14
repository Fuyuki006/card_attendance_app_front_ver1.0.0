import React from "react";
import Tag from "../../atoms/Tag/Tag";
import "./Wall.scss";
interface WallProps {
  tagWallRowValue: number;
  tagWallColumnValue: number;
}

export default class Wall extends React.Component<WallProps> {
  render() {
    const tags: JSX.Element[] = [];
    const { tagWallRowValue, tagWallColumnValue } = this.props;
    const tagStyle = {
      display: "grid",
      gridTemplateColumns: `repeat(${tagWallColumnValue}, 1fr)`,
    };
    for (let row = 0; row < tagWallRowValue; row++) {
      for (let col = 0; col < tagWallColumnValue; col++) {
        const key = row * tagWallColumnValue + col;
        tags.push(
          <Tag
            key={key.toString()}
            tagText={`田中太郎 ${key + 1}`}
            tagWallColumnValue={tagWallColumnValue}
            tagWallRowValue={tagWallColumnValue}
          />
        );
      }
    }
    return (
      <span className="Wall-container" style={tagStyle}>
        {tags}
      </span>
    );
  }
}

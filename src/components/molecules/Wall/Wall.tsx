import React from "react";
import Tag from "../../atoms/Tag/Tag";
import "./Wall.scss";
interface WallProps {
  tagWallRowValue: number;
  tagWallColumnValue: number;
}

export default class Wall extends React.Component<WallProps> {
  calculateMainSize() {
    const { tagWallRowValue, tagWallColumnValue } = this.props;
    const tagSize = 100; // Tagの高さと幅（適切な値を設定）

    const mainHeight = tagSize * tagWallColumnValue;
    const mainWidth = tagSize * tagWallRowValue;

    return {
      height: `${mainHeight}px`,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  }

  calculateGridSize() {
    const { tagWallRowValue, tagWallColumnValue } = this.props;
    const tagSize = 100; // Tagの高さと幅（適切な値を設定）

    const mainHeight = tagSize * tagWallColumnValue;
    const mainWidth = tagSize * tagWallRowValue;

    return {
      height: `${mainHeight}px`,
      width: "100%",
      display: "grid",
      gridTemplateColumns: `repeat(${tagWallColumnValue}, 1fr)`,
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",
    };
  }
  render() {
    const mainSize = this.calculateMainSize();
    const gridSize = this.calculateGridSize();
    const tags: JSX.Element[] = [];
    const { tagWallRowValue, tagWallColumnValue } = this.props;
    const tagStyle = {
      display: "grid",
      gridTemplateColumns: `repeat(${tagWallColumnValue}, 1fr)`,
      // その他のスタイルをここに追加
    };
    for (let row = 0; row < tagWallRowValue; row++) {
      for (let col = 0; col < tagWallColumnValue; col++) {
        const key = row * tagWallColumnValue + col;
        tags.push(
          <Tag
            key={key}
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

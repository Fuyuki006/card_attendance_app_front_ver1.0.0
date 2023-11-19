import React, { Component } from "react";
import "./Tag.scss";

interface TagProps {
  tagText: string;
}

interface TagState {
  flipped: boolean;
}

export default class Tag extends Component<TagProps, TagState> {
  constructor(props: TagProps) {
    super(props);
    this.state = {
      flipped: false,
    };
  }

  handleTagClick = () => {
    this.setState((prevState) => ({ flipped: !prevState.flipped }));
  };

  render() {
    const { tagText } = this.props;
    const { flipped } = this.state;

    return (
      <span
        className={`Tag-container ${flipped ? "flipped" : ""}`}
        onClick={this.handleTagClick}
      >
        <img src="./images/tag.png" alt="TagImage" className="Tag-image" />
        <span className="Tag-text">{tagText}</span>
      </span>
    );
  }
}

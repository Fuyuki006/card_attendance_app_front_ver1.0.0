import React from "react";
import "./InputBox.scss";

interface InputBoxProps {
  initialText: string;
  usedLocationName: string;
}

interface InputBoxState {
  value: string;
}

export default class InputBox extends React.Component<
  InputBoxProps,
  InputBoxState
> {
  constructor(props: InputBoxProps) {
    super(props);

    this.state = {
      value: this.props.initialText,
    };
  }

  onChange(value: string) {
    this.setState({
      value: value,
    });
  }

  className = "InputBox-" + this.props.usedLocationName;
  containerName = this.className + "-container";
  inputboxName = this.className + "-input";

  render() {
    return (
      <p className={this.containerName}>
        <input
          type="text"
          value={this.state.value}
          onChange={(event) => this.onChange(event.target.value)}
          className={this.inputboxName}
        />
      </p>
    );
  }
}

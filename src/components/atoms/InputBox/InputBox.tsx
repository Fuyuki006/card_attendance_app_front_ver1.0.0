import React from "react";
import "./InputBox.scss";

interface InputBoxProps {
  className: string;
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
      value: "",
    };
  }

  onChange(value: string) {
    this.setState({
      value: value,
    });
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={(event) => this.onChange(event.target.value)}
        className={this.props.className}
      ></input>
    );
  }
}

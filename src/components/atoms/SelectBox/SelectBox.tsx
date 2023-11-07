import React from "react";
import Selector from "./Selector";

interface SelectBoxProps {
  minRangeNum: number;
  maxRangeNum: number;
  updateStateFunc: Function;
}

interface SelectBoxState {
  value: number;
}

export default class SelectBox extends React.Component<
  SelectBoxProps,
  SelectBoxState
> {
  constructor(props: SelectBoxProps) {
    super(props);

    this.state = {
      value: 0,
    };
  }
  options = Array.from(
    { length: this.props.maxRangeNum - this.props.minRangeNum + 1 },
    (_, index) => this.props.minRangeNum + index
  );

  render() {
    return (
      <Selector
        initialVal={this.props.minRangeNum}
        selectRange={this.options}
        updateStateFunc={this.props.updateStateFunc}
      />
    );
  }
}

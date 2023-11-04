import React from "react";

interface SelectBoxProps {
  minRangeNum: number;
  maxRangeNum: number;
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

  onChange(value: number) {
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <select
        name=""
        id=""
        value={this.state.value}
        onChange={(e) => {
          this.onChange(parseInt(e.target.value));
        }}
      >
        {this.options.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
    );
  }
}

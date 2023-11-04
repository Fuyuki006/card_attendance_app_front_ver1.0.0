import React from "react";
import SelectBox from "../../atoms/SelectBox/SelectBox";
interface SelectTableProps {
  minRangeNum: number;
  maxRangeNum: number;
  contentName: string;
}

export default class SelectTable extends React.Component<SelectTableProps> {
  render() {
    return (
      <div className="SelectTable-container">
        <span className="SelectTable-contentName">
          {this.props.contentName}
        </span>
        <SelectBox
          minRangeNum={this.props.minRangeNum}
          maxRangeNum={this.props.maxRangeNum}
        />
      </div>
    );
  }
}

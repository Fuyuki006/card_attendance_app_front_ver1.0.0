import React from "react";
import SelectBox from "../../atoms/SelectBox/SelectBox";
import "./SelectTable.scss";

interface SelectTableProps {
  minRangeNum: number;
  maxRangeNum: number;
  contentName: string;
  updateStateFunc: Function;
  contentType: string;
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
          updateStateFunc={this.props.updateStateFunc}
          contentType={this.props.contentType}
        />
      </div>
    );
  }
}

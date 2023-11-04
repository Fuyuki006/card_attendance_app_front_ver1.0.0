import React from "react";
import "../Header.scss";
import InputBox from "../../../atoms/InputBox/InputBox";
import SelectTable from "../../../molecules/SelectTable/SelectTable";

export default class Header extends React.Component {
  render() {
    return (
      <header className="Header-tagwall">
        <SelectTable contentName="縦" minRangeNum={0} maxRangeNum={8} />
        <SelectTable contentName="横" minRangeNum={0} maxRangeNum={8} />
      </header>
    );
  }
}

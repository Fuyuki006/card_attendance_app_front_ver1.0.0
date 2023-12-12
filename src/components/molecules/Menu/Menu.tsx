import React from "react";
import HangingSign from "../HangingSign/HangingSign";
import "./Menu.scss";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="Menu-container">
        <div className="Menu-account">
          <HangingSign text="アカウント" />
        </div>
        <div className="Menu-setting">
          <HangingSign text="設定" />
        </div>
      </div>
    );
  }
}

import React, { ReactEventHandler } from "react";
import HangingSign from "../HangingSign/HangingSign";
import "./MenuModal.scss";

interface MenuModalProps {
  onClick: ReactEventHandler;
}

export default class MenuModal extends React.Component<MenuModalProps> {
  render() {
    return (
      <div className="MenuModal-container">
        <div className="Menu-account">
          <HangingSign text="アカウント" />
        </div>
        <div className="MenuModal-setting">
          <HangingSign text="設定" />
        </div>
      </div>
    );
  }
}

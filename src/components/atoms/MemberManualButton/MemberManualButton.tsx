import React, { ReactEventHandler } from "react";
import "./MemberManualButton.scss";

interface MemberManualButtonProps {
  onClick: ReactEventHandler;
}

export default class MemberManualButton extends React.Component<MemberManualButtonProps> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="MemberManualButton-button"
      >
        <img
          src="./images/member-registration-manual.png"
          alt="MemberRegistrationManualImage"
          className="MemberManualButton-image"
        />
      </button>
    );
  }
}

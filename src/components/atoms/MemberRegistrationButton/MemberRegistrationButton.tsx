import React, { ReactEventHandler } from "react";
import "./MemberRegistrationButton.scss";

interface MemberRegistrationButtonProps {
  onClick: ReactEventHandler;
}

export default class MemberRegistrationButton extends React.Component<MemberRegistrationButtonProps> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="MemberRegistrationButton-registration-button"
      >
        <img
          src="./images/member-registration.png"
          alt="MemberRegistrationImage"
          className="MemberRegistrationButton-image"
        />
      </button>
    );
  }
}

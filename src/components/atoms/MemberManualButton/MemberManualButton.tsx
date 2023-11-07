import React from "react";
import "./MemberManualButton.scss";

export default class MemberManualButton extends React.Component {
  render() {
    return (
      <button className="MemberManualButton-button">
        <img
          src="./images/member-registration-manual.png"
          alt="MemberRegistrationManualImage"
          className="MemberManualButton-image"
        />
      </button>
    );
  }
}

import React, { ReactEventHandler } from "react";
import "./MemberCSVButton.scss";

interface MemberCSVButtonProps {
  onClick: ReactEventHandler;
}

export default class MemberCSVButton extends React.Component<MemberCSVButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick} className="MemberCSVButton-button">
        <img
          src="./images/member-registration-csv.png"
          alt="MemberRegistrationCSVImage"
          className="MemberCSVButton-image"
        />
      </button>
    );
  }
}

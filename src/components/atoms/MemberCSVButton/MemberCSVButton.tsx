import React from "react";
import "./MemberCSVButton.scss";

export default class MemberCSVButton extends React.Component {
  render() {
    return (
      <button className="MemberCSVButton-button">
        <img
          src="./images/member-registration-csv.png"
          alt="MemberRegistrationCSVImage"
          className="MemberCSVButton-image"
        />
      </button>
    );
  }
}

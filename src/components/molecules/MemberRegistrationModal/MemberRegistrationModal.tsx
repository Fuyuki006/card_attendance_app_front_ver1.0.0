import React from "react";
import MemberManualButton from "../../atoms/MemberManualButton/MemberManualButton";
import MemberCSVButton from "../../atoms/MemberCSVButton/MemberCSVButton";

export default class MemberRegistrationModal extends React.Component {
  render() {
    return (
      <div className="MemberRegistrationModal-container">
        <MemberManualButton />
        <MemberCSVButton />
      </div>
    );
  }
}

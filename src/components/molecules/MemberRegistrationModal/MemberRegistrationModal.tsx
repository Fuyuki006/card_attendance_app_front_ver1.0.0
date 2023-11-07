import React from "react";
import MemberManualButton from "../../atoms/MemberManualButton/MemberManualButton";
import MemberCSVButton from "../../atoms/MemberCSVButton/MemberCSVButton";
import "./MemberRegistrationModal.scss";

export default class MemberRegistrationModal extends React.Component {
  render() {
    return (
      <div className="MemberRegistrationModal-container">
        <div className="MemberRegistrationModal-manualButton-container">
          <MemberManualButton />
          <div className="MemberRegistrationModal-manualText">
            手動で<br></br>追加
          </div>
        </div>
        <div className="MemberRegistrationModal-csvButton-container">
          <MemberCSVButton />
          <div className="MemberRegistrationModal-csvText">
            CSV ファイルで追加
          </div>
        </div>
      </div>
    );
  }
}

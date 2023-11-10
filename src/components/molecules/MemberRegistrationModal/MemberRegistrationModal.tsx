import React, { ReactEventHandler } from "react";
import MemberManualButton from "../../atoms/MemberManualButton/MemberManualButton";
import MemberCSVButton from "../../atoms/MemberCSVButton/MemberCSVButton";
import "./MemberRegistrationModal.scss";

interface MemberRegistrationModalProps {
  onClick: ReactEventHandler;
}

export default class MemberRegistrationModal extends React.Component<MemberRegistrationModalProps> {
  render() {
    return (
      <div className="MemberRegistrationModal-container">
        <div className="MemberRegistrationModal-manualButton-container">
          <MemberManualButton onClick={this.props.onClick} />
          <div className="MemberRegistrationModal-manualText">
            手動で<br></br>追加
          </div>
        </div>
        <div className="MemberRegistrationModal-csvButton-container">
          <MemberCSVButton onClick={this.props.onClick} />
          <div className="MemberRegistrationModal-csvText">
            CSV ファイルで追加
          </div>
        </div>
      </div>
    );
  }
}

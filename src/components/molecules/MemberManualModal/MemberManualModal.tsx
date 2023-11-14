import React, { ReactEventHandler } from "react";
import MemberManualButton from "../../atoms/MemberManualButton/MemberManualButton";
import MemberCSVButton from "../../atoms/MemberCSVButton/MemberCSVButton";
import "./MemberManualModal.scss";
import InputBox from "../../atoms/InputBox/InputBox";
import Modal from "react-modal";

interface MemberManualModalProps {
  rowMaxNum: number;
  columnMaxNum: number;
}
export default class MemberManualModal extends React.Component<MemberManualModalProps> {
  render() {
    const inputboxes: JSX.Element[] = [];
    for (let row = 0; row < this.props.rowMaxNum; row++) {
      for (let col = 0; col < this.props.columnMaxNum; col++) {
        const key = row * this.props.columnMaxNum + col;
        inputboxes.push();
      }
    }
    return (
      <div className="MemberManualModal-container">
        <div></div>
        <div>{inputboxes}</div>
      </div>
    );
  }
}

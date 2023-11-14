/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, ReactEventHandler } from "react";
import "./MemberManualButton.scss";
import Modal from "react-modal";
import InputBox from "../InputBox/InputBox";

interface MemberManualButtonProps {
  onClick: any;
}
const customModalStyles = {
  content: {
    width: "886px",
    height: "453px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    borderRadius: "30px",
  },
  overlay: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
};

function MemberManualButton({ onClick }: MemberManualButtonProps) {
  return (
    <>
      <button onClick={onClick} className="MemberManualButton-button">
        <img
          src="./images/member-registration-manual.png"
          alt="MemberRegistrationManualImage"
          className="MemberManualButton-image"
        />
      </button>
    </>
  );
}

export default MemberManualButton;

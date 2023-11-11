import React, { useState, ReactEventHandler } from "react";
import "./MemberRegistrationModal.scss";
import Modal from "react-modal";
import InputBox from "../../atoms/InputBox/InputBox";
import MemberManualButton from "../../atoms/MemberManualButton/MemberManualButton";
import MemberCSVButton from "../../atoms/MemberCSVButton/MemberCSVButton";
import MemberManualModal from "../MemberManualModal/MemberManualModal";

interface MemberRegistrationModalProps {
  onClick: ReactEventHandler;
  rowMaxNum: number;
  columnMaxNum: number;
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

function MemberRegistrationModal({
  onClick,
  rowMaxNum,
  columnMaxNum,
}: MemberRegistrationModalProps) {
  const [isOpenMannualModal, setisOpenMannualModal] = useState(false);
  const openMannualModal = () => {
    setisOpenMannualModal(true);
  };

  const closeMannualModal = () => {
    setisOpenMannualModal(false);
  };

  return (
    <div className="MemberRegistrationModal-container">
      <div className="MemberRegistrationModal-manualButton-container">
        <MemberManualButton onClick={openMannualModal} />
        <div className="MemberRegistrationModal-manualText">
          手動で<br></br>追加
        </div>
      </div>
      <Modal
        isOpen={isOpenMannualModal}
        ariaHideApp={false}
        style={customModalStyles}
        onRequestClose={closeMannualModal}
      >
        <MemberManualModal rowMaxNum={rowMaxNum} columnMaxNum={columnMaxNum} />
      </Modal>
      <div className="MemberRegistrationModal-csvButton-container">
        <MemberCSVButton onClick={onClick} />
        <div className="MemberRegistrationModal-csvText">
          CSV ファイルで追加
        </div>
      </div>
    </div>
  );
}

export default MemberRegistrationModal;

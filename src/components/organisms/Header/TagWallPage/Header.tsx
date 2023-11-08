import React, { useState } from "react";
import "../Header.scss";
import SelectTable from "../../../molecules/SelectTable/SelectTable";
import { updateRow } from "../../../../store/features/TagWallSlice";
import { updateColumn } from "../../../../store/features/TagWallSlice";
import MemberRegistrationButton from "../../../atoms/MemberRegistrationButton/MemberRegistrationButton";
import Modal from "react-modal";
import MemberRegistrationModal from "../../../molecules/MemberRegistrationModal/MemberRegistrationModal";

interface HeaderProps {}

interface HeaderState {
  modal: boolean;
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
    backgroundColor: "rgba(0,0,0,0.60)",
  },
};

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      modal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modal: true,
    });
  }

  closeModal() {
    this.setState({
      modal: false,
    });
  }

  render() {
    return (
      <header className="Header-tagwall">
        <SelectTable
          contentName="縦:"
          minRangeNum={0}
          maxRangeNum={4}
          updateStateFunc={updateRow}
        />
        <SelectTable
          contentName="横:"
          minRangeNum={0}
          maxRangeNum={20}
          updateStateFunc={updateColumn}
        />
        <nav className="Header-tagwall-registration-container">
          <MemberRegistrationButton onClick={this.openModal} />
        </nav>
        <Modal
          isOpen={this.state.modal}
          ariaHideApp={false}
          style={customModalStyles}
          onRequestClose={() => this.closeModal()}
        >
          <MemberRegistrationModal onClick={this.closeModal} />
        </Modal>
      </header>
    );
  }
}

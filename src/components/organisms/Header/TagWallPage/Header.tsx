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

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      modal: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      modal: true,
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
          <Modal isOpen={this.state.modal} ariaHideApp={false}>
            <MemberRegistrationModal />
          </Modal>
        </nav>
      </header>
    );
  }
}

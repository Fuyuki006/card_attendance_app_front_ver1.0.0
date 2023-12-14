import React, { useState, useEffect } from "react";
import "../Header.scss";
import SelectTable from "../../../molecules/SelectTable/SelectTable";
import {
  updateRow,
  updateColumn,
} from "../../../../store/features/TagWallSlice";
import MemberRegistrationButton from "../../../atoms/MemberRegistrationButton/MemberRegistrationButton";
import MenuButton from "../../../atoms/MenuButton/MenuButton";
import Modal from "react-modal";
import MemberRegistrationModal from "../../../molecules/MemberRegistrationModal/MemberRegistrationModal";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import HangingSign from "../../../molecules/HangingSign/HangingSign";
import MenuModal from "../../../molecules/MenuModal/MenuModal";

interface TagWallHeaderProps {
  demo: boolean;
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

const rowMinNum = 0;
const rowMaxNum = 4;
const columnMinNum = 0;
const columnMaxNum = 20;

const Header = ({ demo }: TagWallHeaderProps) => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
  const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [currentUser, setcurrentUser] = useState("ゲスト");
  const welcomeUserText = `ようこそ、${currentUser} さん`;

  const getCurrentUser = async () => {
    try {
      const { data } = await supabase.auth.getSession();

      if (data.session !== null) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const postData = {
          email: user?.email,
        };
        const { data } = await axios.post(
          process.env.REACT_APP_BACK_PATH + "/getUserData",
          postData
        );
        setcurrentUser(data.username);
      }
    } catch (err) {
      alert("ユーザーを取得できませんでした");
    }
  };
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <header className="Header-tagwall">
      <SelectTable
        contentName="縦"
        contentType="Row"
        minRangeNum={rowMinNum}
        maxRangeNum={rowMaxNum}
        updateStateFunc={updateRow}
      />
      <SelectTable
        contentName="横"
        contentType="Column"
        minRangeNum={columnMinNum}
        maxRangeNum={columnMaxNum}
        updateStateFunc={updateColumn}
      />

      <div className="Header-tagwall-username">{welcomeUserText}</div>

      {demo ? (
        <div className="Header-tagwall-warning">
          ※一部機能が制限されています
        </div>
      ) : (
        <></>
      )}
      <nav className="Header-tagwall-registration-container">
        <MemberRegistrationButton onClick={openModal} />
        <MenuButton onClick={() => {}} />
      </nav>
      <Modal
        isOpen={modalOpen}
        ariaHideApp={false}
        style={customModalStyles}
        onRequestClose={closeModal}
      >
        <MenuModal onClick={closeModal} />
      </Modal>
      <Modal
        isOpen={modalOpen}
        ariaHideApp={false}
        style={customModalStyles}
        onRequestClose={closeModal}
      >
        <MemberRegistrationModal
          onClick={closeModal}
          rowMaxNum={rowMaxNum}
          columnMaxNum={columnMaxNum}
        />
      </Modal>
    </header>
  );
};

export default Header;

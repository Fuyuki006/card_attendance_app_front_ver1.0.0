import React from "react";
import "../Header.scss";
import SelectTable from "../../../molecules/SelectTable/SelectTable";
import { updateRow } from "../../../../store/features/TagWallSlice";
import { updateColumn } from "../../../../store/features/TagWallSlice";

export default class Header extends React.Component {
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
          <button className="Header-tagwall-registration-button">
            <img
              src="./images/registration.png"
              alt="RegistrationImage"
              className="Header-tagwall-image"
            />
          </button>
        </nav>
      </header>
    );
  }
}

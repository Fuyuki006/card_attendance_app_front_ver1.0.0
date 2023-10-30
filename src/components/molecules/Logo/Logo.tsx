import React from "react";
import LogoCard from "../../atoms/LogoCard/LogoCard";
import "./Logo.scss";

export default class Logo extends React.Component {
  render() {
    return (
      <div className="Logo-container">
        <LogoCard logoCardText="出" numLetter={1}></LogoCard>
        <LogoCard logoCardText="退" numLetter={2}></LogoCard>
        <LogoCard logoCardText="札" numLetter={3}></LogoCard>
      </div>
    );
  }
}

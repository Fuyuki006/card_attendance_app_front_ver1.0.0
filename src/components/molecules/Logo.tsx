import React from "react";
import LogoCard from "../atoms/LogoCard";

export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <LogoCard logoCardText="出" numLetter={1}></LogoCard>
        <LogoCard logoCardText="退" numLetter={2}></LogoCard>
        <LogoCard logoCardText="札" numLetter={3}></LogoCard>
      </div>
    );
  }
}

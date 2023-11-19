import React, { useState } from "react";
import "./RegistrationButton.scss";

interface RegistrationButtonProps {
  text: string;
  type: "submit" | "button";
}

const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  text,
  type,
}) => {
  return (
    <button type={type} className="RegistrationButton-button">
      <span className="RegistrationButton-text">{text}</span>
    </button>
  );
};

export default RegistrationButton;

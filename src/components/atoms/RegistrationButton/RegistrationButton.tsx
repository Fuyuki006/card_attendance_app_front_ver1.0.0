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
    <button type={type} defaultValue="" className="RegistrationButton-button">
      {text}
    </button>
  );
};

export default RegistrationButton;

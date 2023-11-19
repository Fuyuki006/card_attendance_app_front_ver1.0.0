import React, { useState } from "react";
import "./LoginButton.scss";

interface LoginButtonProps {
  text: string;
  type: "submit" | "button";
}

const LoginButton: React.FC<LoginButtonProps> = ({ text, type }) => {
  return (
    <button className="LoginButton-button" type={type}>
      {text}
    </button>
  );
};

export default LoginButton;

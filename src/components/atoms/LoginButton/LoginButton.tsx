import React, { useState } from "react";
import "./LoginButton.scss";

interface LoginButtonProps {
  text: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ text }) => {
  return <button className="LoginButton-button">{text}</button>;
};

export default LoginButton;

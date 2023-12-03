import React, { useState } from "react";
import "./Sign.scss";

interface SignProps {
  text: string;
}
const Sign: React.FC<SignProps> = ({ text }) => {
  return (
    <div className="Sign-container">
      <span className="Sign-text">{text}</span>
      <img src="./images/sign.png" alt="SignImage" className="Sign-image" />
    </div>
  );
};

export default Sign;

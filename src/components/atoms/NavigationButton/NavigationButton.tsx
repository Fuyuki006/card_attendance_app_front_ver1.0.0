import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavigationButton.scss";

interface NavigationButtonProps {
  text: React.ReactNode;
  link: string;
  classNames: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  text,
  link,
  classNames,
}) => {
  const navigate = useNavigate();
  return (
    <button className={classNames} onClick={() => navigate(link)}>
      <span className="NavigationButton-text">{text}</span>
    </button>
  );
};

export default NavigationButton;

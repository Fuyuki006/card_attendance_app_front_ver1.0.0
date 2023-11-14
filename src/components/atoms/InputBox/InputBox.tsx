import React, { useState } from "react";
import "./InputBox.scss";
interface InputBoxProps {
  initialText: string;
  usedLocationName: string;
  type: string;
}

interface InputBoxState {
  value: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  initialText,
  usedLocationName,
  type,
}) => {
  const [inputValue, setinputValue] = useState("");
  const baseClassName = "InputBox-" + usedLocationName;
  const containerName = baseClassName + "-container";
  const inputBoxName = baseClassName + "-input";

  const setInputValue = (value: string) => {
    setinputValue(value);
  };

  return (
    <div className={containerName}>
      <input
        type={type}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={inputBoxName}
      />
    </div>
  );
};

export default InputBox;

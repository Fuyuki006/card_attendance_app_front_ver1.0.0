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

  return (
    <div className={containerName}>
      <input value={initialText} type={type} className={inputBoxName}></input>
    </div>
  );
};

export default InputBox;

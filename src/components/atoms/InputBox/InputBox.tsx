import React, { useState } from "react";
import "./InputBox.scss";
interface InputBoxProps {
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


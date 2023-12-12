import React from "react";
import "./Chain.scss";

const Chain: React.FC = () => {
  const chainNum = 10;
  const chainLength = 20;
  const chainElements = Array.from({ length: chainNum }).map((_, index) => (
    <div
      className="Chain-chain"
      key={index.toString()}
      style={{ top: `${index * chainLength}px` }}
    ></div>
  ));

  return <div>{chainElements}</div>;
};

export default Chain;

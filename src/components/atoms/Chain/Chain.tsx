import React from "react";
import Chain from "./Chain";
import "./Chain.scss";

const ChainContainer: React.FC = () => {
  // 10回繰り返すための配列を生成
  const chainElements = Array.from({ length: 100 }).map((_, index) => (
    <div
      className="Chain-chain"
      key={index.toString()}
      style={{ top: `${index * 20}px` }}
    ></div>
  ));

  return (
    <div>
      {/* 生成した要素をreturn内で使用 */}
      {chainElements}
    </div>
  );
};

export default ChainContainer;

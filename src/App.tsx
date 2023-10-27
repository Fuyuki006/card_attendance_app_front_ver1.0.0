import React from "react";
import "./App.scss";
import MyPractice from "./components/pages/MyPractice";
import Logo from "./components/molecules/Logo";
function App() {
  return (
    <div className="App">
      <Logo />
      {/* <h1>Reactの練習</h1>
      <MyPractice
        initialMessage="ボタンを押してください。"
        clickedMessage="ボタンが押されました！"
        buttonLabel="ボタン"
      />
      <MyPractice
        initialMessage="スイッチを押して！"
        clickedMessage="スイッチが押された！"
        buttonLabel="スイッチ"
      /> */}
    </div>
  );
}

export default App;

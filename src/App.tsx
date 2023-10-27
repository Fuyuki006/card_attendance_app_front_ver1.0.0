import React from "react";
import "./App.scss";
import Header from "./components/organisms/Header/Header";
import MediaQuery from "react-responsive";
import Main from "./components/organisms/Main/Main";

function App() {
  return (
    <div className="App">
      <MediaQuery query="(max-width: 767px)">
        {/* // iPadの横幅を分岐点にしている */}
        <div>ここにスマートフォン向けの要素を書く</div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        {/* // iPadの横幅を分岐点にしている */}
        <Header />
        <Main />
        <div>ここにPC向けの要素を書く</div>
      </MediaQuery>
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

import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import TagWallPage from "./components/pages/TagWallPage";
import { useAppSelector } from "./store/store";

function App() {
  const tagWallRowValue = useAppSelector(
    (state: any) => state.tagWallValue.row
  );
  const tagWallColumnValue = useAppSelector(
    (state: any) => state.tagWallValue.column
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route
            path="/tagwall"
            element={
              <TagWallPage
                tagWallRowValue={tagWallRowValue}
                tagWallColumnValue={tagWallColumnValue}
              />
            }
          />
        </Routes>
      </BrowserRouter>
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

import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import TagWallPage from "./components/pages/TagWallPage";
import Login from "./components/pages/LoginPage";
import { useAppSelector } from "./store/store";
import Registration from "./components/pages/RegistrationPage";
import DemoTagWallPage from "./components/pages/DemoTagWallPage";
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
            path="/demo"
            element={
              <DemoTagWallPage
                tagWallRowValue={tagWallRowValue}
                tagWallColumnValue={tagWallColumnValue}
              />
            }
          />
          <Route
            path="/tagwall"
            element={
              <TagWallPage
                tagWallRowValue={tagWallRowValue}
                tagWallColumnValue={tagWallColumnValue}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

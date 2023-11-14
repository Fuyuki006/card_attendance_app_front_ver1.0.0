import React from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import LoginButton from "../../atoms/LoginButton/LoginButton";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="LoginForm-container">
        <form action="submit" className="LoginForm-form">
          <div className="LoginForm-userName">ユーザー名</div>
          <InputBox usedLocationName="login" initialText="" type="text" />
          <div className="LoginForm-userName">パスワード</div>
          <InputBox usedLocationName="login" initialText="" type="password" />
          <LoginButton text="ログイン" />
          <Link className="LoginForm-link" to="/lostpassword">
            パスワードを忘れた場合
          </Link>
        </form>
      </div>
    );
  }
}

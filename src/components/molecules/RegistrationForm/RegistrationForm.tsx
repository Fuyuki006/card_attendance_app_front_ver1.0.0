import React, { FormEventHandler, useState } from "react";
import axios from "axios";
import RegistrationButton from "../../atoms/RegistrationButton/RegistrationButton";
import "./RegistrationForm.scss";

export default function RegistrationForm() {
  const [isClickedNameForm, setisClickedNameForm] = useState(false);
  const [isClickedPasswordForm, setisClickedPasswordForm] = useState(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      const form = new FormData(e.currentTarget);
      const username = form.get("username") || "";
      const password = form.get("password") || "";
      // ポストするデータを定義
      const postData = {
        username: username,
        password: password,
        logged_in: false,
      };
      // ユーザー登録 API エンドポイントにデータをポスト
      await axios.post(process.env.REACT_APP_PATH + "/users", postData);
    } catch (error) {
      // エラーが発生した場合はエラー処理を行う
      console.error("データのポストに失敗しました。", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} action="/login">
      <label>
        お名前:
        <input
          type="text"
          name="username"
          placeholder="例) 田中 太郎"
          defaultValue=""
          required
          onChange={() => setisClickedNameForm(true)}
        />
        {isClickedNameForm ? (
          <div className="RegistrationForm-error-message">
            お名前が入力されていません !
          </div>
        ) : (
          <></>
        )}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          defaultValue=""
          required
          onChange={() => setisClickedPasswordForm(true)}
        />
        {isClickedPasswordForm ? (
          <div className="RegistrationForm-error-message">
            パスワードが入力されていません !
          </div>
        ) : (
          <></>
        )}
      </label>
      <br />
      <RegistrationButton text="ユーザ登録" type="submit" />
    </form>
  );
}

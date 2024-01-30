import React, { FormEventHandler, useState } from "react";
import axios from "axios";
import RegistrationButton from "../../atoms/RegistrationButton/RegistrationButton";
import "./RegistrationForm.scss";
import { createClient } from "@supabase/supabase-js";

export default function RegistrationForm() {
  const [isClickedNameForm, setisClickedNameForm] = useState(false);
  const [isClickedPasswordForm, setisClickedPasswordForm] = useState(false);
  const [isClickedEmailForm, setisClickedEmailForm] = useState(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const username = form.get("username") || "";
      const password = form.get("password") || "";
      const email = form.get("email") || "";
      const postData = {
        username: username,
        password: password,
        email: email,
      };
      await axios.post(process.env.REACT_APP_BACK_PATH + "/users", postData);

      alert("登録完了メールを確認してください");
    } catch (error) {
      console.error("データのポストに失敗しました。", error);
    }
  };

  return (
    <div className="RegistrationForm-container">
      <form
        onSubmit={handleSubmit}
        action="/login"
        className="RegistrationForm-form"
      >
        <label className="RegistrationForm-username-label">
          <div className="RegistrationForm-username-text">お名前</div>
          <input
            type="text"
            name="username"
            placeholder="8 文字以下で入力"
            defaultValue=""
            required
            onChange={() => setisClickedNameForm(true)}
            className="RegistrationForm-username-input"
            maxLength={7}
          />
          {isClickedNameForm ? (
            <div className="RegistrationForm-required-message">
              お名前が入力されていません !
            </div>
          ) : (
            <></>
          )}
        </label>
        <br />
        <label className="RegistrationForm-password-label">
          <div className="RegistrationForm-password-text">パスワード</div>
          <input
            type="password"
            name="password"
            placeholder="6文字以上で入力"
            defaultValue=""
            required
            onChange={() => setisClickedPasswordForm(true)}
            className="RegistrationForm-password-input"
            minLength={6}
          />
          {isClickedPasswordForm ? (
            <div className="RegistrationForm-required-message">
              パスワードが入力されていません !
            </div>
          ) : (
            <></>
          )}
          {isClickedPasswordForm ? (
            <div className="RegistrationForm-minlength-message">
              パスワードは6文字以上で入力してください !
            </div>
          ) : (
            <></>
          )}
        </label>
        <br />
        <label className="RegistrationForm-email-label">
          <div className="RegistrationForm-email-text">メールアドレス</div>
          <input
            type="email"
            name="email"
            placeholder=" 例)tarotanaka@gmail.com"
            defaultValue=""
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            onChange={() => setisClickedEmailForm(true)}
            className="RegistrationForm-email-input"
          />
          {isClickedEmailForm ? (
            <div className="RegistrationForm-required-message">
              メールアドレスが入力されていません !
            </div>
          ) : (
            <></>
          )}
          {isClickedEmailForm ? (
            <div className="RegistrationForm-invalid-message">
              正しいメールアドレスが入力されていません !
            </div>
          ) : (
            <></>
          )}
        </label>
        <br />
        <RegistrationButton text="ユーザ登録" type="submit" />
      </form>
    </div>
  );
}

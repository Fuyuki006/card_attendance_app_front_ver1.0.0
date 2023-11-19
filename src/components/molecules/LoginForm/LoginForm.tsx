import React, { FormEventHandler, useState, useEffect } from "react";
import LoginButton from "../../atoms/LoginButton/LoginButton";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

export default function LoginForm() {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
  const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [isClickedPasswordForm, setisClickedPasswordForm] = useState(false);
  const [isClickedEmailForm, setisClickedEmailForm] = useState(false);
  const [currentUser, setcurrentUser] = useState("");
  const getCurrentUser = async () => {
    try {
      const { data } = await supabase.auth.getSession();

      if (data.session !== null) {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        setcurrentUser(user?.email || "");
      }
    } catch (err) {
      alert("ユーザーを取得できませんでした");
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || "";
    const supabase = createClient(supabaseUrl, supabaseKey);
    try {
      const form = new FormData(e.currentTarget);
      const password = form.get("password") || "";
      const email = form.get("email") || "";

      const postData = {
        password: password,
        email: email,
      };

      const { data } = await axios.post(
        process.env.REACT_APP_BACK_PATH + "/login",
        postData
      );
      const { data: sessiondata } = await supabase.auth.getSession();

      if (sessiondata.session !== null) {
        const { data: userdata } = await supabase.auth.getUser();
      }
    } catch (error) {
      e.preventDefault();

      console.error("データのポストに失敗しました。", error);
      alert("ログインが失敗しました");
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="LoginForm-container">
      <form
        onSubmit={handleSubmit}
        action="/tagwall"
        className="LoginForm-form"
      >
        <label className="LoginForm-email-label">
          <div className="LoginForm-email-text">メールアドレス</div>
          <input
            type="email"
            name="email"
            placeholder=" 例)tarotanaka@gmail.com"
            defaultValue=""
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            onChange={() => setisClickedEmailForm(true)}
            className="LoginForm-email-input"
          />
          {isClickedEmailForm ? (
            <div className="LoginForm-required-message">
              メールアドレスが入力されていません !
            </div>
          ) : (
            <></>
          )}
          {isClickedEmailForm ? (
            <div className="LoginForm-invalid-message">
              正しいメールアドレスが入力されていません !
            </div>
          ) : (
            <></>
          )}
        </label>
        <br />
        <label className="LoginForm-password-label">
          <div className="LoginForm-password-text">パスワード</div>
          <input
            type="password"
            name="password"
            placeholder="6文字以上で入力してください"
            defaultValue=""
            onChange={() => setisClickedPasswordForm(true)}
            className="LoginForm-password-input"
            minLength={6}
            required
          />
          {isClickedPasswordForm ? (
            <div className="LoginForm-required-message">
              パスワードが入力されていません !
            </div>
          ) : (
            <></>
          )}
        </label>
        <LoginButton text="ログイン" type="submit" />
        {/* <div className="LoginForm-link">
          <Link to="/lostpassword">パスワードを忘れた場合</Link>
        </div> */}
        <div className="LoginForm-link">
          <Link to="/registration">アカウント作成はこちら</Link>
        </div>
      </form>
    </div>
  );
}

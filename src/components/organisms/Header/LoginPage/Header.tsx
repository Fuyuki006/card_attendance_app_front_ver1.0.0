import React from "react";
import "../Header.scss";
import AppTitle from "../../../atoms/AppTitle/AppTitle";
import axios from "axios";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const Header = () => {
  const [currentUser, setcurrentUser] = useState("");
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
  const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseKey);
  const getCurrentUser = async () => {
    try {
      const { data, error: getSessionError } = await supabase.auth.getSession();

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

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <header className="Header-login">
      <div className="Header-login-title">
        <AppTitle appTitleText="出席札アプリ" />
      </div>
    </header>
  );
};

export default Header;

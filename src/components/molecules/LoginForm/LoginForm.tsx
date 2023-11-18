import React, { useState, useEffect } from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import LoginButton from "../../atoms/LoginButton/LoginButton";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import axios from "axios";
import Config from "../../../../config";

interface UserData {
  id: number;
  username: string;
  logged_in: boolean;
  password: string;
  // 他にも必要なプロパティがあれば追加
}
const LoginForm: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // APIからデータを取得
        const response = await axios.get<UserData[]>(
          process.env.REACT_APP_PATH + "/users"
        );

        // 取得したデータを状態にセット
        setUsers(response.data);
      } catch (error) {
        // エラーが発生した場合はエラーステートにセット
        setError("データの取得に失敗しました。");
      }
    };

    // fetchData関数を実行
    fetchData();
  }, []); // useEffectの第二引数に空の配列を渡すことで、初回のレンダリング時にのみ実行される

  return (
    // <div>
    //   <h1>User Data</h1>
    //   {error && <p>{error}</p>}
    //   {process.env.REACT_APP_PATH}
    //   <ul>
    //     {users.map((user) => (
    //       <li key={user.id}>
    //         <strong>ID:</strong> {user.id}, <strong>Username:</strong>{" "}
    //         {user.username}, <strong>Password:</strong> {user.password}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
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
};

export default LoginForm;

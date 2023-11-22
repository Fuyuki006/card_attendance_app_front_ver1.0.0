import React, { useState, useEffect } from "react";
import Tag from "../../atoms/Tag/Tag";
import "./Wall.scss";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
interface WallProps {
  tagWallRowValue: number;
  tagWallColumnValue: number;
  demo: boolean;
}

interface UserData {
  id: number;
  username: string;
}

const Wall: React.FC<WallProps> = (props) => {
  const [demoData, setdemoData] = useState<UserData[]>([]);
  const [currentUser, setcurrentUser] = useState("");
  const { tagWallColumnValue, tagWallRowValue, demo } = props;
  const [istagWallRowValue, setistagWallRowValue] = useState(0);
  const [istagWallColumnValue, setistagWallColumnValue] = useState(0);
  const getCurrentUser = async () => {
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || "";
    const supabase = createClient(supabaseUrl, supabaseKey);
    try {
      const { data } = await supabase.auth.getSession();
      console.log("AFAWAFEAF", data);
      if (data.session !== null) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const postData = {
          email: user?.email || "",
        };
        const { data: userData } = await axios.post(
          process.env.REACT_APP_BACK_PATH + "/getUserData",
          postData
        );
        setcurrentUser(userData.username);
        setistagWallRowValue(userData.tagWallRow);
        setistagWallColumnValue(userData.tagWallColumn);
      }
    } catch (err) {
      alert("データを取得できませんでした");
    }
  };
  const getDemoData = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BACK_PATH + "/demo"
      );
      setdemoData(data);
    } catch (err) {
      alert("データを取得できませんでした");
    }
  };

  useEffect(() => {
    if (!demo) {
      getCurrentUser();
    } else {
      getDemoData();
    }
  }, []);

  const tags: JSX.Element[] = [];
  const tagStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${
      tagWallColumnValue === 0 ? istagWallColumnValue : tagWallColumnValue
    }, 1fr)`,
  };

  for (
    let row = 0;
    row <
    (tagWallColumnValue === 0 ? istagWallColumnValue : tagWallColumnValue);
    row++
  ) {
    for (
      let col = 0;
      col < (tagWallRowValue === 0 ? istagWallRowValue : tagWallRowValue);
      col++
    ) {
      const key =
        row * (tagWallRowValue === 0 ? istagWallRowValue : tagWallRowValue) +
        col;
      tags.push(
        <Tag
          key={key.toString()}
          tagText={demo ? demoData[key].username : key === 0 ? currentUser : ""}
        />
      );
    }
  }

  return (
    <span className="Wall-container" style={tagStyle}>
      {tags}
    </span>
  );
};

export default Wall;

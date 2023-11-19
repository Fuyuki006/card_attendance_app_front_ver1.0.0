import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/store";
import "./Selector.scss";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
interface SelectorProps {
  initialVal: number;
  selectRange: number[];
  updateStateFunc: Function;
  contentType: string;
}

function Selector({
  initialVal,
  selectRange,
  updateStateFunc,
  contentType,
}: SelectorProps) {
  const getCurrentUser = async () => {
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || "";
    const supabase = createClient(supabaseUrl, supabaseKey);
    try {
      const { data } = await supabase.auth.getSession();
      if (data.session !== null) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const postData = {
          email: user?.email || "",
          contentType: contentType,
        };

        const { data: tagWallValue } = await axios.post(
          process.env.REACT_APP_BACK_PATH + "/tagWall/" + { contentType },
          postData
        );
        const initialTagWallValue =
          contentType === "Row"
            ? tagWallValue.tagWallRow
            : tagWallValue.tagWallColumn;
        setSelectedVal(initialTagWallValue);
      }
    } catch (err) {
      alert("データを取得できませんでした");
    }
  };
  const [selectedVal, setSelectedVal] = useState(0);
  const dispatch = useAppDispatch();

  const handleSelect = async (val: number) => {
    setSelectedVal(val);
    dispatch(updateStateFunc(val));
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || "";
    const supabase = createClient(supabaseUrl, supabaseKey);
    try {
      const { data } = await supabase.auth.getSession();
      if (data.session !== null) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const postData = {
          email: user?.email || "",
          contentType: contentType,
          value: val,
        };

        await axios.put(
          process.env.REACT_APP_BACK_PATH + "/tagWall/" + { contentType },
          postData
        );
      }
    } catch (err) {
      alert("データを取得できませんでした");
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <select
      name=""
      id=""
      value={selectedVal}
      onChange={(e) => {
        handleSelect(Number(e.target.value));
      }}
      className="Selector-select"
    >
      {selectRange.map((data, index) => {
        return (
          <option
            key={data.toString()}
            value={data}
            className="Selector-option"
          >
            {data}
          </option>
        );
      })}
    </select>
  );
}

export default Selector;

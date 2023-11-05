import React, { useState } from "react";
import { useAppDispatch } from "../../../store/store";

interface SelectorProps {
  initialVal: number;
  selectRange: number[];
  updateStateFunc: Function;
}

function Selector({ initialVal, selectRange, updateStateFunc }: SelectorProps) {
  const [selectedVal, setSelectedVal] = useState(0);
  const dispatch = useAppDispatch();
  const handleSelect = (val: number) => {
    setSelectedVal(val);
    dispatch(updateStateFunc(val));
  };

  return (
    <select
      name=""
      id=""
      value={selectedVal}
      onChange={(e) => {
        handleSelect(Number(e.target.value));
      }}
    >
      {selectRange.map((data, index) => {
        return (
          <option key={data.toString()} value={data}>
            {data}
          </option>
        );
      })}
    </select>
  );
}

export default Selector;

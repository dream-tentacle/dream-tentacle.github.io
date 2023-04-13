import React, { useState } from "react";
import "./typeAdd.css";

function TypeAdd(props) {
  const [value1, setValue1] = useState("");
  const handleTextareaChange1 = (event) => {
    setValue1(event.target.value);
  };
  const [value2, setValue2] = useState("");
  const handleTextareaChange2 = (event) => {
    setValue2(event.target.value);
  };
  const [value3, setValue3] = useState("");
  const handleTextareaChange3 = (event) => {
    setValue3(event.target.value);
  };
  const [value4, setValue4] = useState("");
  const handleTextareaChange4 = (event) => {
    setValue4(event.target.value);
  };
  const addClass = props.addClass;
  const handleAdd = () => {
    if (!value1 || !value2) return;
    addClass(
      value1,
      value2,
      value3 != "" ? value3 : "未设置",
      value4 != "" ? value4 : "未设置"
    );
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
  };

  return (
    <div>
      <input
        type="text"
        className="input-field"
        placeholder={"名称"}
        value={value1}
        onChange={handleTextareaChange1}
      />
      <input
        type="number"
        className="input-field"
        placeholder="学分"
        value={value2}
        onChange={handleTextareaChange2}
      />
      <input
        type="text"
        className="input-field"
        placeholder="学期(选填)"
        value={value3}
        onChange={handleTextareaChange3}
      />
      <input
        type="text"
        className="input-field"
        placeholder="课程号(选填)"
        value={value4}
        onChange={handleTextareaChange4}
      />
      <div className="add-btn" onClick={handleAdd}>
        添加
      </div>
    </div>
  );
}
export default TypeAdd;

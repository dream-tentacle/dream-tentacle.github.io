import "./App.css";
import React, { useEffect, useState } from "react";
import basic from "./courses/basic.json";
import OneClass from "./components/oneClass.js";
import { nanoid } from "nanoid";
import Cursor from "./components/cursor.js";

function App() {
  const [total, setTotal] = useState(0);
  const [cursorStage, setCursorStage] = useState(0);
  const [classList, setClassList] = useState(
    basic.classes.map((item) => {
      return {
        name: item.name,
        credit_hours: item.credit_hours,
        flag: false,
        id: `id-${nanoid()}`,
      };
    })
  );
  function changeCursorStage(flag) {
    setCursorStage(flag);
  }
  function chooseClass(id) {
    //这里的id是从oneClass传过来的
    setClassList(
      classList.map((item) => {
        if (item.id === id) {
          return {
            name: item.name,
            credit_hours: item.credit_hours,
            flag: !item.flag,
            id: item.id,
          };
        } else {
          return item;
        }
      })
    );
  }
  function calculateTotal() {
    let total = 0;
    classList.forEach((item) => {
      if (item.flag) total += item.credit_hours;
    });
    return total;
  }
  useEffect(() => {
    setTotal(calculateTotal());
  }, [classList]);

  return (
    <div className="App">
      <Cursor stage={cursorStage} />
      <p style={{ margin: "16px", fontSize: "24px" }}>
        总计: {total}
        <br />
        至少: {33}
      </p>
      <div className="total-box">
        <div className="sum-box" style={{ width: `${(total / 33) * 100}%` }}></div>
      </div>
      <div
        style={{
          margin: "16px",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        {classList.map((item) => {
          return (
            <OneClass
              key={item.id}
              item={item}
              chooseClass={chooseClass}
              changeCursorStage={changeCursorStage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

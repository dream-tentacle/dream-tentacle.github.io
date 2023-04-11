import "./App.css";
import React, { useEffect, useState } from "react";
import basic from "./courses/basic.json";
import core from "./courses/core.json";
import OneClass from "./components/oneClass.js";
import { nanoid } from "nanoid";
import Cursor from "./components/cursor.js";
const pack = [basic, core];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [total, setTotal] = useState(0);
  const [cursorStage, setCursorStage] = useState(0);
  const [leastHours, setLeastHours] = useState(basic.least_hours);
  const [classList, setClassList] = useState(
    basic.classes.map((item) => {
      return {
        ...item,
        flag: false,
        id: `id-${nanoid()}`,
      };
    })
  );
  function changeClassesPack(id) {
    setLeastHours(pack[id].least_hours);
    setClassList(
      pack[id].classes.map((item) => {
        return {
          ...item,
          flag: false,
          id: `id-${nanoid()}`,
        };
      })
    );
  }
  function changeCursorStage(flag) {
    setCursorStage(flag);
  }
  function chooseClass(id) {
    //这里的id是从oneClass传过来的
    setClassList(
      classList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            flag: !item.flag,
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
      <Cursor
        stage={cursorStage}
        mousePosition={mousePosition}
        setMousePosition={setMousePosition}
      />
      <button onClick={() => changeClassesPack(0)}>基础课</button>
      <button onClick={() => changeClassesPack(1)}>核心课</button>
      <p style={{ margin: "16px", fontSize: "24px", userSelect: "none" }}>
        总计: {total}
        <br />
        至少: {leastHours}
      </p>
      <div className="total-box">
        <div
          className="sum-box"
          style={{ width: `${(total / leastHours) * 100}%` }}
        ></div>
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
              mousePosition={mousePosition}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

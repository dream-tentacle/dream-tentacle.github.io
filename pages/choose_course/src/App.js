import "./App.css";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { saveAs } from "file-saver";
import basic from "./courses/basic.json";
import core from "./courses/core.json";
import OneClass from "./components/oneClass.js";
import Cursor from "./components/cursor.js";
import FileOperate from "./components/fileOperate.js";
import TypeAdd from "./components/typeAdd.js";
import EditTotal from "./components/editTotal.js";

const pack = [basic, core];
async function readJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const contents = event.target.result;
      const json = JSON.parse(contents);

      resolve(json);
    };

    reader.onerror = function () {
      reject(new Error("无法读取文件"));
    };

    reader.readAsText(file);
  });
}
function App() {
  function loadJSON(file) {
    setLeastHours(file.least_hours);
    setClassList(
      file.classes.map((item) => {
        if (!item.flag) item.flag = false;
        return {
          ...item,
          id: `id-${nanoid()}`,
        };
      })
    );
  }
  const [mode, setMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [total, setTotal] = useState(0);
  const [cursorStage, setCursorStage] = useState(0);
  const [leastHours, setLeastHours] = useState(0);
  const [classList, setClassList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const handleDownload = () => {
    setLoading(true);
    const tmp = {
      least_hours: leastHours,
      classes: classList.map((item) => {
        return {
          ...item,
          id: undefined,
        };
      }),
    };
    const json = JSON.stringify(tmp);
    const blob = new Blob([json], { type: "application/json" });
    saveAs(blob, "courses.json");
    setLoading(false);
    setDownloaded(true);
  };
  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const json = await readJsonFile(file);
      loadJSON(json);
    } catch (err) {
      console.log(err);
    }
    console.log(file);
  }
  function changeClassesPack(id) {
    loadJSON(pack[id]);
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
  function addClass(name, credit_hours, time, course_id) {
    credit_hours = parseInt(credit_hours);
    setClassList([
      ...classList,
      {
        name,
        credit_hours,
        time,
        course_id,
        id: `id-${nanoid()}`,
        flag: false,
      },
    ]);
  }
  function deleteClass(id) {
    setClassList(classList.filter((item) => item.id !== id));
  }
  function ClassBlock(time) {
    if (time == "其他") {
      let classesTMP = [];
      classList.forEach((item) => {
        for (let i = 1; i <= 4; i++) {
          for (let j = 1; j <= 2; j++) {
            if (item.time == `${i}-${j}`) {
              return null;
            }
          }
        }
        classesTMP.push(item);
      });
      if (classesTMP.length == 0) return null;
      return (
        <div>
          <br />
          <span>{time}</span>
          {classesTMP.map((item) => {
            return (
              <OneClass
                key={item.id}
                item={item}
                chooseClass={chooseClass}
                changeCursorStage={changeCursorStage}
                mousePosition={mousePosition}
                deleteClass={deleteClass}
              />
            );
          })}
        </div>
      );
    }
    if (!classList.some((item) => item.time === time)) return null;
    return (
      <div>
        <br />
        <span>{time}</span>
        {classList.map((item) => {
          if (item.time === time) {
            return (
              <OneClass
                key={item.id}
                item={item}
                chooseClass={chooseClass}
                changeCursorStage={changeCursorStage}
                mousePosition={mousePosition}
                deleteClass={deleteClass}
              />
            );
          }
          return null;
        })}
      </div>
    );
  }

  function allBlocks() {
    const blocks = [];
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 2; j++) {
        blocks.push(ClassBlock(`${i}-${j}`));
      }
    }
    blocks.push(ClassBlock("其他"));
    return blocks;
  }
  useEffect(() => {
    setTotal(calculateTotal());
  }, [classList]);
  useEffect(() => {
    loadJSON(pack[0]);
  }, []);
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
        至少:
        <EditTotal value={leastHours} setValue={setLeastHours} />
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
        <button onClick={() => setMode(!mode)}>切换视图</button>
        <br />
        {mode
          ? allBlocks()
          : classList.map((item) => {
              return (
                <OneClass
                  key={item.id}
                  item={item}
                  chooseClass={chooseClass}
                  changeCursorStage={changeCursorStage}
                  mousePosition={mousePosition}
                  deleteClass={deleteClass}
                />
              );
            })}
      </div>
      <TypeAdd addClass={addClass} />
      <FileOperate
        handleDownload={handleDownload}
        loading={loading}
        downloaded={downloaded}
        handleUpload={handleUpload}
      />
    </div>
  );
}

export default App;

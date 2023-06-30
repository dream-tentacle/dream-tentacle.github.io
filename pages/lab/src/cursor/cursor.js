import React, { useState, useEffect } from "react";
import Particle from "./particle";
import ParticleItem from "./particleItem";
import { nanoid } from "nanoid";
import "./cursor.css";
import Cursor1 from "./cursor1";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [mouseDown, setMouseDown] = useState(false);
  const [originR, setOriginR] = useState(0);
  const [originG, setOriginG] = useState(0);
  const [originB, setOriginB] = useState(0);
  const [chooseType, setChooseType] = useState(1);
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    function handleMouseDown(e) {
      setMouseDown(true);
    }
    function handleMouseUp(e) {
      setMouseDown(false);
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  const handleChangeR = (e) => {
    setOriginR(e.target.value);
  };
  const handleChangeG = (e) => {
    setOriginG(e.target.value);
  };
  const handleChangeB = (e) => {
    setOriginB(e.target.value);
  };
  const particleType = () => {
    return (
      <>
        <input
          type="range"
          min="0"
          max="255"
          value={originR}
          onChange={handleChangeR}
        />
        <span>{originR}</span>
        <br />
        <input
          type="range"
          min="0"
          max="255"
          value={originG}
          onChange={handleChangeG}
        />
        <span>{originG}</span>
        <br />
        <input
          type="range"
          min="0"
          max="255"
          value={originB}
          onChange={handleChangeB}
        />
        <span>{originB}</span>
        <br />
        {(mousePosition.x > 200 || mousePosition.y > 200) && (
          <Particle
            mousePosition={mousePosition}
            mouseDown={mouseDown}
            R={originR}
            G={originG}
            B={originB}
            baseSpeed={2.5}
            originLength={0}
            startTheta={250 * (Math.PI / 180)}
            endTheta={290 * (Math.PI / 180)}
          />
        )}
      </>
    );
  };
  const pointerType = () => {
    return (
      <div>
        <input
          type="range"
          min="0"
          max="255"
          value={originR}
          onChange={handleChangeR}
        />
        <span>{originR}</span>
        <br />
        <input
          type="range"
          min="0"
          max="255"
          value={originG}
          onChange={handleChangeG}
        />
        <span>{originG}</span>
        <br />
        <input
          type="range"
          min="0"
          max="255"
          value={originB}
          onChange={handleChangeB}
        />
        <span>{originB}</span>
        <br />
        {(mousePosition.x > 200 || mousePosition.y > 200) && (
          <Particle
            mousePosition={mousePosition}
            mouseDown={mouseDown}
            R={originR}
            G={originG}
            B={originB}
            baseSpeed={4}
            originLength={350}
            startTheta={265 * (Math.PI / 180)}
            endTheta={275 * (Math.PI / 180)}
          />
        )}
      </div>
    );
  };
  return (
    <>
      <ParticleItem
        key={nanoid()}
        position={{ x: 100, y: 100 }}
        direction={0}
        baseSpeed={0}
      />
      <p>类型: {chooseType}</p>
      <button onClick={() => setChooseType(1)}>1</button>
      <button onClick={() => setChooseType(2)}>2</button>
      <button onClick={() => setChooseType(3)}>3</button>
      <p>{mousePosition.x + " " + mousePosition.y}</p>
      {chooseType === 1 && particleType()}
      {chooseType === 2 && pointerType()}
      {chooseType === 3 && <Cursor1 />}
    </>
  );
}

export default Cursor;

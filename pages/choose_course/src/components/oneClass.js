import React, { useState } from "react";
import "./oneClass.css";
import FloatInfo from "./floatInfo.js";

function OneClass(props) {
  /* const [transitionX, setTransitionX] = useState(0);
  const [transitionY, setTransitionY] = useState(0); */
  const [isHover, setIsHover] = useState(false);
  const transitionX = Math.min(300, props.mousePosition.x - 300) / 15;
  const transitionY = Math.min(300, props.mousePosition.y - 300) / 15;
  /* const buttonRef = useRef(null);
  function handleMouseMove(e) {
    const rect = buttonRef.current.getBoundingClientRect();
    console.log(rect.top, rect.left, rect.width, rect.height);
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const deltaX = mouseX - buttonX;
    const deltaY = mouseY - buttonY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const intensity = Math.min(5, 100 / distance);

    setTransitionX(deltaX * intensity * -0.1);
    setTransitionY(deltaY * intensity * -0.1);
  } */
  function chooseColor() {
    if (props.item.flag) {
      switch (props.item.credit_hours) {
        case 1:
          return "green";
        case 2:
          return "green";
        case 3:
          return "coral";
        case 4:
          return "coral";
        case 5:
          return "red";
        default:
          return "red";
      }
    } else {
      return "gray";
    }
  }
  return (
    <div
      className="buttonBox"
      /*ref={buttonRef}
       onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setTransitionX(0);
        setTransitionY(0);
      }} */
    >
      {isHover ? (
        <FloatInfo
          mousePosition={props.mousePosition}
          course_id={props.item.course_id}
        />
      ) : (
        ""
      )}
      <button
        onClick={() => {
          props.chooseClass(props.item.id);
        }}
        className={chooseColor()}
        onMouseEnter={() => {
          props.changeCursorStage(1);
          setIsHover(true);
        }}
        onMouseLeave={() => {
          props.changeCursorStage(0);
          setIsHover(false);
        }}
        style={{
          translate: "transform 0.5s ease-in-out",
          transform: `translate3d(${transitionX + Math.random() * 5}px, ${
            transitionY + Math.random() * 5
          }px, 0px)`,
        }}
      >
        {props.item.name}
        <br />
        {props.item.credit_hours}
        {"学分"}
        <br />
        {"学期: "}
        {props.item.time}
      </button>
    </div>
  );
}

export default OneClass;

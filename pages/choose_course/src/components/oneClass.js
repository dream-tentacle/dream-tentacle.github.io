import React, { useState, useRef } from "react";

function OneClass(props) {
  const [transitionX, setTransitionX] = useState(0);
  const [transitionY, setTransitionY] = useState(0);
  const buttonRef = useRef(null);
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
    const intensity = Math.min(1, 100 / distance);

    setTransitionX(deltaX * intensity * -0.2);
    setTransitionY(deltaY * intensity * -0.2);
  }
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
    <button
      onClick={() => {
        props.chooseClass(props.item.id);
      }}
      className={chooseColor()}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        props.changeCursorStage(1);
      }}
      onMouseLeave={() => {
        props.changeCursorStage(0);
        setTransitionX(0);
        setTransitionY(0);
      }}
      style={{
        transform: `translate3d(${transitionX}px, ${transitionY}px, 0px)`,
      }}
    >
      {props.item.name}
      <br />
      {props.item.credit_hours}
      {"学分"}
    </button>
  );
}

export default OneClass;

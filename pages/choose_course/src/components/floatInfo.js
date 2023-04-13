import React, { useEffect, useState, useRef } from "react";

function FloatInfo(props) {
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const requestRef = useRef();

  const animate = (timestamp) => {
    setTime(timestamp);
    requestRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    if (opacity < 1) setOpacity(opacity + 0.05);
  }, [time]);
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  useEffect(() => {
    const KeyDown = (e) => {
      e.preventDefault();
      if (e.key === "c") {
        navigator.clipboard.writeText(props.course_id);
        setFlag(true);
      }
    };
    window.addEventListener("keydown", KeyDown);
    return () => {
      window.removeEventListener("keydown", KeyDown);
    };
  }, []);
  if (props.course_id === "未设置") return null;
  return (
    <div
      className="floatInfo"
      style={{
        left: `${props.mousePosition.x + 20}px`,
        top: `${props.mousePosition.y + 10}px`,
        opacity: `${opacity}`,
      }}
    >
      {props.course_id}
      <br />
      {flag ? "[已复制!]" : "[按C复制ID]"}
    </div>
  );
}

export default FloatInfo;

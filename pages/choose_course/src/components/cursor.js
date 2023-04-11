import React, { useState, useEffect, useRef } from "react";
function Cursor(props) {
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [outerX, setOuterX] = useState(0);
  const [outerY, setOuterY] = useState(0);
  const [effectX, setEffectX] = useState(0);
  const [effectY, setEffectY] = useState(0);
  const [time, setTime] = useState(0);
  const [effectScale, setOuterScale] = useState(2);
  const [effectOpacity, setOuterOpacity] = useState(0);
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    function handleMouseClick(e) {
      if (effectScale < 2) return;
      setEffectX(e.clientX);
      setEffectY(e.clientY);
      setOuterScale(0);
      setOuterOpacity(0.1);
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);
  /* useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time + 1000 / 60);
    }, 1000 / 60);
    return () => {
      clearInterval(timer);
    };
  }, []); 
  setInterval有bug，会导致页面卡顿，所以用requestAnimationFrame
  */
  const requestRef = useRef();

  const animate = (timestamp) => {
    setTime(timestamp);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    setOuterX((x) => x + (mousePosition.x - x) * 0.2);
    setOuterY((y) => y + (mousePosition.y - y) * 0.2);
    if (effectScale <= 0.7) setOuterScale((effectScale) => effectScale + 0.05);
    else if (effectScale < 2) setOuterScale((effectScale) => effectScale + 0.02);
    if (effectScale <= 0.6) setOuterOpacity((effectOpacity) => effectOpacity + 0.04);
    if (effectScale >= 0.6 && effectOpacity >= 0)
      setOuterOpacity((effectOpacity) => effectOpacity - 0.03);
  }, [time]);
  return (
    <div className="ako-cursor-container" style={{ opacity: "1" }}>
      <div
        className="ako-cursor-outer"
        style={{
          transform: "translate3d(-50%, -50%, 0px)",
          left: outerX,
          top: outerY,
          backgroundColor: `rgba(255, 255, 255, ${props.stage === 0 ? 0 : 0.6})`,
          width: `${props.stage === 1 ? 20 : 40}px`,
          height: `${props.stage === 1 ? 20 : 40}px`,
        }}
      ></div>
      <div
        className="ako-cursor-effect"
        style={{
          transform: `translate3d(-50%, -50%, 0px) scale(${effectScale})`,
          left: effectX,
          top: effectY,
          opacity: effectOpacity,
        }}
      ></div>
    </div>
  );
}

export default Cursor;

/*
  在App中需要使用的内容:

  const [cursorStage, setCursorStage] = useState(0);
  function changeCursorStage(flag) {
    setCursorStage(flag);
  }
  <Cursor stage={cursorStage} />

*/

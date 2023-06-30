import React, { useState, useRef, useEffect } from "react";
import "./particleItem.css";

function ParticleItem(props) {
  const [position, setPosition] = useState(props.position);
  const [time, setTime] = useState(0);
  const requestRef = useRef();
  const baseSpeed = props.baseSpeed;
  const [speed, setSpeed] = useState(Math.random() * baseSpeed + baseSpeed);
  const [scale, setScale] = useState(10);
  const [direction, setDirection] = useState(() => {
    if (props.direction === 1)
      return props.startTheta + Math.random() * (props.endTheta - props.startTheta);
    else return Math.random() * 2 * Math.PI;
  });
  const animate = (timestamp) => {
    setTime(timestamp);
    requestRef.current = requestAnimationFrame(animate);
  };
  const color = () => {
    return `rgb(${R},${G},${B})`;
  }; // random color
  const [R, setR] = useState(props.R - Math.random() * 10);
  const [G, setG] = useState(props.G - Math.random() * 10);
  const [B, setB] = useState(props.B - Math.random() * 10);
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  useEffect(() => {
    if (props.originLength) {
      const x = props.position.x - props.originLength * Math.cos(direction);
      const y = props.position.y - props.originLength * Math.sin(direction);
      setPosition({ x, y });
    }
  }, [props.originLength]);
  useEffect(() => {
    setPosition((position) => {
      const x = position.x + speed * Math.cos(direction);
      const y = position.y + speed * Math.sin(direction);
      return { x, y };
    });
    setSpeed((speed) => speed * 1.02);
    if (R < 255) setR((R) => R + 2);
    if (G < 255) setG((G) => G + 2);
    if (B < 255) setB((B) => B + 2);
    setScale((scale) => scale * 0.975);
  }, [time]);
  return (
    <div
      className="particle"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        backgroundColor: color(),
        width: `${scale}px`,
        height: `${scale}px`,
        /*模糊效果*/
        // filter: "blur(1px)",
      }}
    ></div>
  );
}

export default ParticleItem;

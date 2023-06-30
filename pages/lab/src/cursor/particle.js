import React, { useEffect, useState, useRef } from "react";
import ParticleItem from "./particleItem";
import { nanoid } from "nanoid";

function Particle(props) {
  const mp = props.mousePosition;
  const [allParticles, setAllParticles] = useState([]);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const requestRef = useRef();

  const animate = (timestamp) => {
    setTime(timestamp);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  const calculateRandomPosition = () => {
    const sita = Math.random() * 2 * Math.PI;
    const r = Math.random() * 10;
    const x = mp.x + r * Math.cos(sita);
    const y = mp.y + r * Math.sin(sita);
    return { x, y };
  };
  useEffect(() => {
    if (timer % 2 !== 0) {
      setTimer((timer) => timer + 1);
      return;
    }
    setTimer((timer) => timer + 1);
    for (let i = 1; i <= 5; i++) {
      const newParticle = (
        <ParticleItem
          key={nanoid()}
          position={calculateRandomPosition()}
          direction={props.mouseDown ? 0 : 1}
          baseSpeed={props.baseSpeed}
          R={props.R}
          G={props.G}
          B={props.B}
          originLength={props.originLength}
          startTheta={props.startTheta}
          endTheta={props.endTheta}
        />
      );
      setAllParticles((allParticles) => [...allParticles, newParticle]);
      setTimeout(() => {
        setAllParticles((prevParticles) =>
          prevParticles.filter((p) => p !== newParticle)
        );
      }, 600 - Math.random() * 500);
    }
  }, [time]);
  return <div className="particle">{allParticles}</div>;
}

export default Particle;

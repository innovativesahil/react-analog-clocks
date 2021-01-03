import React, { useState, useEffect } from "react";
import "./Clock.css";

export default function ModernClockLight({ timeDifference }) {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const updateTime = () => {
    let today = new Date();
    today.setHours(today.getHours() + (timeDifference ?? 0));
    setHours(today.getHours());
    setMinutes(today.getMinutes());
    setSeconds(today.getSeconds());
  };

  useEffect(() => {
    let clockInterval = setInterval(() => {
      updateTime();
    });
    return () => clearInterval(clockInterval);
  }, []);

  const secondsStyle = {
    transform: `rotateZ(${seconds * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotateZ(${minutes * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotateZ(${hours * 30 + minutes / 12}deg)`
  };

  return (
    <div className="clock">
      <div className="hours">
        <div className="hr" style={hoursStyle}></div>
      </div>
      <div className="minutes">
        <div className="min" style={minutesStyle}></div>
      </div>
      <div className="seconds">
        <div className="sec" style={secondsStyle}></div>
      </div>
    </div>
  );
}

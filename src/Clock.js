import React, { useState, useEffect } from "react";
import "./Clock.css";

export default function Clock({ timeDifference }) {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const updateTime = () => {
    let today = new Date();
    today.setHours(today.getHours() + (timeDifference ?? 0));
    let hours = padZero(today.getHours());
    let minutes = padZero(today.getMinutes());
    let seconds = padZero(today.getSeconds());
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  const padZero = (time) => (time < 10 ? `0${time}` : time);

  useEffect(() => {
    let clockInterval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  const secondsStyle = {
    transform: `rotate(${seconds * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${hours * 30 + minutes / 2}deg)`
  };

  return (
    <div className={"clock"}>
      <div className={"analog-clock"}>
        <div className={"dial seconds"} style={secondsStyle} />
        <div className={"dial minutes"} style={minutesStyle} />
        <div className={"dial hours"} style={hoursStyle} />
      </div>
      <div className={"digital-clock"}>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
}

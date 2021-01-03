import React from "react";
import Clock, { ModernClock } from "./Clock";
import ModernClockDark from "./ModernClockDark";
import ModernClockLight from "./ModernClockLight";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <Clock /> */}
      <ModernClockDark />
      <ModernClockLight />
    </div>
  );
}

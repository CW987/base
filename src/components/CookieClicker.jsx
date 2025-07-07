"use client"

import { useState } from "react";

export default function App() {
  const [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  function reductionCounter() {
    setMyCounterState(myCounterState - 1);
  }

  function resetToZero() {
    setMyCounterState(0)
  }

  return (
    <div>
      <p onClick={resetToZero}>You have {myCounterState} cookies.</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={reductionCounter} >Take one away</button>
    </div>
  );
}
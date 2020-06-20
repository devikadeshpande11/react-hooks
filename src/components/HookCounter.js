import React, { useState } from "react";

function HookCounter() {
  const initialCount=10;
  const [Count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={() => setCount(Count - 1)}> Decrement </button>
      {Count} <button onClick={() => setCount(Count + 1)}>Increment </button>
      <button onClick={()=>setCount(initialCount)}>Reset</button>
    </div>
  );
}

export default HookCounter;

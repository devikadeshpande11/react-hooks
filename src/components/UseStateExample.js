import React, { useState } from "react";

function UseStateExample() {
    const [Count, setCount] = useState(0);
    const increment=()=>{
        setCount(Count+1)
    }
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={increment}>Add</button>
    </div>
  );
}
export default UseStateExample;

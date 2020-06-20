import React, { useEffect, useState } from "react";

function IntervalCounter() {
  const [count, setCount] = useState(0);
  const changeValue = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(changeValue, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count, changeValue]);
  return (
    <div>
      <h5>Interval Examples: {count}</h5>
    </div>
  );
}

export default IntervalCounter;

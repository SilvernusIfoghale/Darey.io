import React, { useState } from "react";
import "./../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter</h1>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      {count === 10 && <p>You've reached the limit!</p>}
    </div>
  );
}

export default Counter;

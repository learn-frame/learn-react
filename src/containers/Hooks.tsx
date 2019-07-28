import React, { useState } from 'react';

function Hooks() {
  const [count, setCount] = useState(0);
  // 当累加到 10 的时候清零
  const handleCountChange = (count: number) => {
    count === 10 ? setCount(0) : setCount(count + 1)
  }
  return (
    <div>
      <p>我为长者+{count}s</p>
      <button onClick={() => handleCountChange(count)}>Click me</button>
    </div>
  );
}

export default Hooks;

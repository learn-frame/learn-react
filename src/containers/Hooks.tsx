import React, { useState } from 'react';

function Hooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>我为长者+{count}s</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Hooks;

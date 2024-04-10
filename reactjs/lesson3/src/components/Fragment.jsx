import { useState } from 'react';

const Fragment = () => {
  const [count, setCount] = useState(1);
  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  return (
    <>
      <p>Some text</p>
      <h1>A heading</h1>
      <p>More text</p>
      <h2>Another heading</h2>
      <p>Even more text</p>
      <p>-------------------------------------------------------------</p>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
};

export default Fragment;

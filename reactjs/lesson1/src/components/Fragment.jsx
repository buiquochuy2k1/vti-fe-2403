import { useState } from 'react';

const Fragment = () => {
  const [count, setCount] = useState(1);
  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount((prevState) => prevState - 1);
  }

  const [inputValue, setInputValue] = useState('');
  const handleSubmit = () => {
    alert(inputValue);
    // You can perform additional actions here, like sending the input value to a server
  };
  return (
    <>
      <p>Some text</p>
      <h1>A heading</h1>
      <p>More text</p>
      <h2>Another heading</h2>
      <p>Even more text</p>
      <p>-------------------------------------------------------------</p>
      <p className={count % 2 == 0 ? 'odd' : 'even'}>Count: {count}</p>
      <button disabled={count >= 10} onClick={handleIncrease}>
        Increase
      </button>
      <button disabled={count <= 0} onClick={handleDecrease}>
        Decrease
      </button>
      <p>-------------------------------------------------------------</p>
      <div>
        <p>Name: {inputValue}</p>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Nhập gì đó..." />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Fragment;

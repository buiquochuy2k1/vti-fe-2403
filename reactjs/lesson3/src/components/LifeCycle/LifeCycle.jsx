import React, { useState } from 'react';

const LifeCycle = (props) => {
  console.log('------LIFE CYCLE------');
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <h1>Count: {count}</h1>
        <button
          className="bg-black p-4 text-white rounded-lg"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          Click
        </button> */}
        <h1>{props.counter}</h1>
      </div>
    </>
  );
};

export default LifeCycle;

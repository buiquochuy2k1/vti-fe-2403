import { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import CounterContext from '../../../context/CounterContext';

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <CounterContext.Provider value={counter}>
        <div>
          <h1>Home component - Demo Context</h1>
          <Child1 />
          <button onClick={() => setCounter(counter + 1)} className="px-2 bg-sky-700 rounded-[12px]">
            Click to Increase
          </button>
          <Child2 />
        </div>
      </CounterContext.Provider>
    </>
  );
};

export default Home;

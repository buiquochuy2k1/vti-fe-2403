import React, { useContext } from 'react';
import CounterContext from '../../../context/CounterContext';

const Child2 = () => {
  const currentContext = useContext(CounterContext);
  console.log('Child2: ', currentContext);
  return <div>Child2</div>;
};

export default Child2;

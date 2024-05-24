import React from 'react';

const CounterContext = React.createContext({
  counter: 0,
  setCounter: () => {},
});

export default CounterContext;

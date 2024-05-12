// eslint-disable-next-line no-unused-vars
import React from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <div className="h-screen w-full p-5">
        <Nav />
        <Main />
      </div>
    </>
  );
};

export default App;

import { useState } from 'react';

import ChangeTheme from '../../../context/ChangeTheme';
import Message from './Message';

const HomeTheme = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ChangeTheme.Provider value={theme}>
      <div>
        <Message>Message from grandparents: </Message>

        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="relative overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400 before:via-purple-400 before:to-indigo-400"
        >
          <span className="relative text-white font-bold px-8 py-8">
            Theme {theme === 'light' ? 'dark' : 'light '}
          </span>
        </button>
      </div>
    </ChangeTheme.Provider>
  );
};

export default HomeTheme;

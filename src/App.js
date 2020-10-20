import React, { useState } from 'react';
import Button from './Button';

const themes = {
  'dark': {
    backgroundColor: 'black' ,
    color: 'white'
  },
  'light': {
    backgroundColor: 'white',
    color: 'black'
  }
}

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(themes.dark)
  return (
    <div>
      <ThemeContext.Provider value={ theme }>
        <Button />
        <button onClick={ () => setTheme(themes.light)}>Modo Claro</button>
        <button onClick={ () => setTheme(themes.dark)}>Modo Oscuro</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

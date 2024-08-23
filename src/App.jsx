import { useEffect, useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Fsection from './Components/Bodycontents/Fsection';
import Card from './Components/Card/Card';

const App = () => {
  // It stores the current theme in the local storage
  const storedTheme = localStorage.getItem('current_theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`w-screen min-h-screen transition duration-500 ${theme === 'light' ? 'bg-blue-100' : 'bg-gray-300'}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      

      
      
      
     
    </div>
   
  );
}

export default App;

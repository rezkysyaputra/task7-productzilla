import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={handleToggleDarkMode}>
      {isDarkMode ? <Moon color='white' /> : <Sun />}
    </button>
  );
};

export default DarkModeToggle;

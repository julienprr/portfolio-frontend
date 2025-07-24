import { useState } from 'react';

import { Moon, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className={cn('rounded-full transition-colors duration-300', 'focus-outline-hidden')}>
      {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-violet-700" />}
    </button>
  );
};

export default ThemeToggle;

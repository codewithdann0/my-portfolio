// components/ThemeToggle.tsx
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load initial theme preference from localStorage
  useEffect(() => {
    const isDark = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      aria-pressed={darkMode}
    >
      {darkMode ? <FaSun size={20} color="yellow" /> : <FaMoon size={20} color="white" />}
    </button>
  );
};

export default ThemeToggle;

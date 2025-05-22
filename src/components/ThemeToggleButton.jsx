import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggleButton.css'; // Import the CSS file

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button"> {/* Apply class */}
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

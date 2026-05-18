import React from 'react';


function DarkModeToggle({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button 
      onClick={toggleDarkMode}
      style={{
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: darkMode ? '#f0f0f0' : '#333',
        color: darkMode ? '#333' : '#f0f0f0',
        transition: 'all 0.3s ease',
        fontSize: '14px'
      }}
    >
      {darkMode ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
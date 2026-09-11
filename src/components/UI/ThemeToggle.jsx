import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: isDarkMode
                    ? 'rgba(255,248,231,0.1)'                  // Dark mode: light gold tint
                    : 'rgba(250,243,224,0.6)',                 // ✅ Light mode: cream beige
                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.3)' : 'rgba(197,160,89,0.4)'}`,
                borderRadius: '50px',
                padding: '0.4rem 0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: isDarkMode ? '#fff8e7' : '#1a0a00',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
            }}
        >
            <span style={{ fontSize: '1.2rem' }}>
                {isDarkMode ? '🌙' : '☀️'}
            </span>
            <span style={{ fontSize: '0.75rem' }}>
                {isDarkMode ? 'Dark' : 'Light'}
            </span>
        </button>
    );
};

export default ThemeToggle;
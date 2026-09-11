import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <footer style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            borderTop: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.1)' : 'rgba(0,0,0,0.1)'}`,
            background: isDarkMode ? 'rgba(10,5,0,0.8)' : 'rgba(245,240,235,0.8)'
        }}>
            <p style={{ color: isDarkMode ? 'rgba(255,248,231,0.6)' : 'rgba(0,0,0,0.6)', fontSize: '0.9rem' }}>
                © 2024 Srividya International University for Vedic Science. All rights reserved.
            </p>
            <p style={{ color: isDarkMode ? 'rgba(255,248,231,0.3)' : 'rgba(0,0,0,0.3)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                Where Ancient Wisdom Meets Modern Education
            </p>
        </footer>
    );
};

export default Footer;
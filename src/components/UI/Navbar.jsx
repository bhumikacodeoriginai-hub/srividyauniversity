import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import { asset } from '../../utils/asset';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Disciplines', path: '/disciplines' },
        { name: 'Courses', path: '/courses' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Events', path: '/events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: scrolled ? '0.5rem 2rem' : '1rem 2rem',
            background: isDarkMode
                ? (scrolled ? 'rgba(10,5,0,0.95)' : 'rgba(10,5,0,0.85)')
                : (scrolled ? 'rgba(250,243,224,0.95)' : 'rgba(250,243,224,0.85)'),   // ✅ Cream beige
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.1)' : 'rgba(0,0,0,0.1)'}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.3s ease'
        }}>
            <Link
                to="/"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    textDecoration: 'none'
                }}
            >
                <img
                    src={asset("/images/logo.webp")}
                    alt="Srividya University Logo"
                    style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'contain',
                        display: 'block'
                    }}
                />

                <div>
                    <h1 style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        color: '#C5A059',
                        margin: 0,
                        lineHeight: 1.2,
                        letterSpacing: '1px'
                    }}>
                        Srividya University
                    </h1>
                </div>
            </Link>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        style={{
                            color: location.pathname === link.path
                                ? (isDarkMode ? '#ffffff' : '#1a0a00')
                                : (isDarkMode ? '#b8d4e3' : '#4a3a2a'),
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: location.pathname === link.path ? '600' : '400',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s ease',
                            borderBottom: location.pathname === link.path ? '2px solid #C5A059' : '2px solid transparent',
                            paddingBottom: '4px',
                            fontFamily: "'Times New Roman', Times, serif"
                        }}
                    >
                        {link.name}
                    </Link>
                ))}

                <ThemeToggle />

                <Link to="/login" style={{
                    background: 'transparent',
                    border: `2px solid ${isDarkMode ? '#C5A059' : '#8B6914'}`,
                    color: isDarkMode ? '#C5A059' : '#8B6914',
                    padding: '0.4rem 1.2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    fontFamily: "'Times New Roman', Times, serif"
                }}>
                    Login
                </Link>

                <Link to="/signup" style={{
                    background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                    color: 'white',
                    border: 'none',
                    padding: '0.4rem 1.2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    fontFamily: "'Times New Roman', Times, serif"
                }}>
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
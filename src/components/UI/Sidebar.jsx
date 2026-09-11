import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    const menuItems = [
        { icon: '🏠', label: 'Home', path: '/dashboard' },
        { icon: '👤', label: 'My Profile', path: '/dashboard/profile' },
        { icon: '📚', label: 'My Courses', path: '/dashboard/courses' },
        { icon: '📥', label: 'Downloads', path: '/dashboard/downloads' },
        { icon: '📚', label: 'Courses Offered', path: '/dashboard/courses-offered' },
    ];

    return (
        <div style={{
            width: '280px',
            height: '100vh',
            background: isDarkMode ? '#6B4226' : 'rgba(255,248,231,0.97)',
            borderRight: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.2)'}`,
            position: 'fixed',
            top: 0,
            left: 0,
            padding: '2rem 1rem',
            overflowY: 'auto',
            zIndex: 100
        }}>
            {/* Logo Section — ॐ hata diya, "Srividya University" */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    color: '#FF9933',
                    fontSize: '1.6rem',
                    marginTop: '0.3rem',
                    marginBottom: 0,
                    fontWeight: 700,
                    letterSpacing: '1px'
                }}>
                    Srividya University
                </h2>
                <div style={{
                    width: '40px',
                    height: '2px',
                    background: '#FF9933',
                    margin: '0.5rem auto 0',
                    opacity: 0.5,
                    borderRadius: '2px'
                }} />
            </div>

            {/* Menu Items */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.7rem 1rem',
                            borderRadius: '10px',
                            color: isActive
                                ? (isDarkMode ? '#fff8e7' : '#1a0a00')
                                : (isDarkMode ? 'rgba(255,248,231,0.6)' : 'rgba(26,10,0,0.6)'),
                            background: isActive
                                ? (isDarkMode ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.1)')
                                : 'transparent',
                            textDecoration: 'none',
                            borderLeft: isActive ? '3px solid #FF9933' : '3px solid transparent',
                            fontSize: '0.9rem',
                            fontFamily: "'Times New Roman', Times, serif"
                        })}
                    >
                        <span style={{ fontSize: '1.2rem', width: '30px' }}>{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Dark/Light Mode Toggle */}
            <div style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.2)'}`
            }}>
                <button
                    onClick={toggleTheme}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        width: '100%',
                        background: isDarkMode ? 'rgba(255,248,231,0.05)' : 'rgba(255,153,51,0.08)',
                        border: `1px solid ${isDarkMode ? 'rgba(255,248,231,0.1)' : 'rgba(255,153,51,0.15)'}`,
                        color: isDarkMode ? '#fff8e7' : '#1a0a00',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontFamily: "'Times New Roman', Times, serif",
                        transition: 'all 0.3s ease',
                        justifyContent: 'center'
                    }}
                >
                    <span style={{ fontSize: '1.2rem' }}>
                        {isDarkMode ? '🌙' : '☀️'}
                    </span>
                    <span>{isDarkMode ? 'Dark' : 'Light'}</span>
                </button>
            </div>

            {/* Logout */}
            <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.2)'}`
            }}>
                <NavLink to="/login" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.7rem 1rem',
                    borderRadius: '10px',
                    color: 'rgba(227,66,52,0.8)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: "'Times New Roman', Times, serif"
                }}>
                    <span style={{ fontSize: '1.2rem', width: '30px' }}>🚪</span>
                    <span>Logout</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
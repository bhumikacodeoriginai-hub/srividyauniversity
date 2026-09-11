import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const DashboardLayout = ({ children }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    const menuItems = [
        { icon: '🏠', label: 'Home', path: '/dashboard' },
        { icon: '👤', label: 'My Profile', path: '/dashboard/profile' },
        { icon: '📚', label: 'Enrolled courses', path: '/dashboard/courses' },
        { icon: '📥', label: 'Downloads', path: '/dashboard/downloads' },
        { icon: '📚', label: 'Courses Offered', path: '/dashboard/courses-offered' },
    ];

    const dark = isDarkMode;

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            background: dark
                ? 'radial-gradient(ellipse at center, #1a0a00 0%, #0a0500 100%)'
                : 'radial-gradient(ellipse at center, #FAF3E0 0%, #EFE6D0 100%)',
            paddingTop: '0px'
        }}>
            {/* Sidebar */}
            <div style={{
                width: '280px',
                height: '100vh',
                background: dark ? 'rgba(39, 27, 11, 0.95)' : 'rgba(255,248,231,0.97)',
                borderRight: `1px solid ${dark ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.2)'}`,
                position: 'fixed',
                top: '0px',
                left: 0,
                padding: '2rem 1rem',
                overflowY: 'auto',
                zIndex: 100,
                transition: 'all 0.3s ease'
            }}>
                {/* Logo Section — Srividya + UNIVERSITY (same gradient) */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2rem',
                    paddingBottom: '1rem',
                    borderBottom: `1px solid ${dark ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.2)'}`
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontSize: '1.3rem',
                            marginTop: '0.2rem',
                            marginBottom: 0,
                            fontWeight: 700,
                            letterSpacing: '1px',
                            lineHeight: 1.2,
                            background: 'linear-gradient(135deg, #FF9933, #C5A059)',   // ✅ Same gradient
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Srividya
                        </h2>
                        <p style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontSize: '0.85rem',
                            margin: 0,
                            fontWeight: 500,
                            letterSpacing: '2px',
                            background: 'linear-gradient(135deg, #FF9933, #C5A059)',   // ✅ Same gradient
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            UNIVERSITY
                        </p>
                    </div>

                    {/* Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '50px',
                            background: dark ? 'rgba(255,248,231,0.08)' : 'rgba(255,153,51,0.1)',
                            border: `1px solid ${dark ? 'rgba(255,248,231,0.15)' : 'rgba(255,153,51,0.2)'}`,
                            color: dark ? '#fff8e7' : '#1a0a00',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            fontFamily: "'Times New Roman', Times, serif",
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>
                            {dark ? '🌙' : '☀️'}
                        </span>
                    </button>
                </div>

                {/* Menu Items */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/dashboard'}
                            style={({ isActive }) => ({
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '0.7rem 1rem',
                                borderRadius: '10px',
                                color: isActive
                                    ? (dark ? '#fff8e7' : '#1a0a00')
                                    : (dark ? 'rgba(255,248,231,0.6)' : 'rgba(26,10,0,0.6)'),
                                background: isActive
                                    ? (dark ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.1)')
                                    : 'transparent',
                                textDecoration: 'none',
                                borderLeft: isActive ? '3px solid #FF9933' : '3px solid transparent',
                                fontSize: '0.9rem',
                                fontFamily: "'Times New Roman', Times, serif",
                                letterSpacing: '0.3px',
                                transition: 'all 0.3s ease'
                            })}
                        >
                            <span style={{ fontSize: '1.2rem', width: '30px' }}>{item.icon}</span>
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Logout */}
                <div style={{
                    marginTop: '2rem',
                    paddingTop: '1rem',
                    borderTop: `1px solid ${dark ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.2)'}`
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

            {/* Content Area */}
            <div style={{
                flex: 1,
                padding: '2rem',
                marginLeft: '280px',
                transition: 'all 0.3s ease'
            }}>
                {/* University Header */}
                <div style={{
                    background: dark ? 'rgba(255,248,231,0.03)' : 'rgba(255,248,231,0.6)',
                    border: `1px solid ${dark ? 'rgba(197,160,89,0.1)' : 'rgba(255,153,51,0.2)'}`,
                    borderRadius: '15px',
                    padding: '1.5rem 2rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div>
                        <h1 style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontSize: '1.8rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            margin: 0,
                            letterSpacing: '1px'
                        }}>
                            Srividya International University
                        </h1>
                        <p style={{
                            color: dark ? 'rgba(255,248,231,0.5)' : 'rgba(26,10,0,0.5)',
                            fontSize: '0.85rem',
                            margin: '0.2rem 0 0 0',
                            letterSpacing: '1px',
                            fontFamily: "'Times New Roman', Times, serif"
                        }}>
                            For Vedic Science
                        </p>
                    </div>
                </div>

                {/* Page Content */}
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
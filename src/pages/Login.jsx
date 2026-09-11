import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Login = () => {
    const { isDarkMode } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/dashboard');
        } else {
            setError('Please fill all fields');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '100px 2rem 60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isDarkMode
                ? 'radial-gradient(ellipse at center, #1a0a00 0%, #0a0500 100%)'
                : 'radial-gradient(ellipse at center, #FAF3E0 0%, #EFE6D0 100%)'   // ✅ Cream beige
        }}>
            <div style={{
                background: isDarkMode
                    ? 'rgba(255,248,231,0.05)'
                    : 'rgba(255,248,231,0.8)',
                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.2)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '20px',
                padding: '3rem',
                maxWidth: '400px',
                width: '100%'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {/* ॐ symbol hata diya */}
                    <h2 style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        color: isDarkMode ? '#C5A059' : '#8B6914',
                        fontSize: '2rem',
                        marginTop: '0.5rem',
                        fontWeight: 700
                    }}>Welcome Back</h2>
                    <p style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        color: isDarkMode ? 'rgba(255,248,231,0.6)' : 'rgba(0,0,0,0.6)'
                    }}>Login to your account</p>
                </div>

                {error && (
                    <div style={{
                        background: isDarkMode ? 'rgba(227,66,52,0.1)' : 'rgba(227,66,52,0.1)',
                        border: '1px solid #E34234',
                        color: '#E34234',
                        padding: '0.8rem',
                        borderRadius: '10px',
                        marginBottom: '1rem',
                        textAlign: 'center',
                        fontFamily: "'Times New Roman', Times, serif"
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.7)' : 'rgba(0,0,0,0.7)',
                            fontSize: '0.9rem',
                            display: 'block',
                            marginBottom: '0.3rem'
                        }}>
                            📧 Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: isDarkMode ? 'rgba(255,248,231,0.05)' : 'rgba(255,255,255,0.9)',
                                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.2)' : 'rgba(0,0,0,0.15)'}`,
                                borderRadius: '10px',
                                color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                outline: 'none',
                                fontSize: '1rem',
                                fontFamily: "'Times New Roman', Times, serif"
                            }}
                        />
                    </div>

                    <div>
                        <label style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.7)' : 'rgba(0,0,0,0.7)',
                            fontSize: '0.9rem',
                            display: 'block',
                            marginBottom: '0.3rem'
                        }}>
                            🔒 Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: isDarkMode ? 'rgba(255,248,231,0.05)' : 'rgba(255,255,255,0.9)',
                                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.2)' : 'rgba(0,0,0,0.15)'}`,
                                borderRadius: '10px',
                                color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                outline: 'none',
                                fontSize: '1rem',
                                fontFamily: "'Times New Roman', Times, serif"
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: '0.8rem',
                            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                            border: 'none',
                            borderRadius: '10px',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontFamily: "'Times New Roman', Times, serif"
                        }}
                    >
                        🔐 Login
                    </button>
                </form>

                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <p style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        color: isDarkMode ? 'rgba(255,248,231,0.6)' : 'rgba(0,0,0,0.6)'
                    }}>
                        Don't have account? <Link to="/signup" style={{ color: isDarkMode ? '#C5A059' : '#8B6914', textDecoration: 'none', fontFamily: "'Times New Roman', Times, serif" }}>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
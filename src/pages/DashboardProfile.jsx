import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const DashboardProfile = () => {
    const { isDarkMode } = useTheme();

    // Original data
    const [student, setStudent] = useState({
        name: 'Rahul',
        studentId: 'SIV-2024-001',
        email: 'rahul@srividyauniversity.org',
        course: 'Bachelor of Arts in Shastra (Veda)',
        enrolledDate: 'June 2024',
        phone: '+91 98765 43210',
        address: 'Bangalore, Karnataka, India'
    });

    // Edit mode state
    const [editMode, setEditMode] = useState(false);

    // Handle input change
    const handleChange = (field, value) => {
        setStudent(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div>
            <h1 style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '2.5rem',
                background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                fontWeight: 700
            }}>
            </h1>

            <div style={{
                background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '20px',
                padding: '2rem'
            }}>
                {/* Profile Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        {student.name.charAt(0)}
                    </div>
                    <div>
                        <h2 style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? '#C5A059' : '#8B6914',
                            fontSize: '2rem',
                            fontWeight: 700
                        }}>{student.name}</h2>
                        <p style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)'
                        }}>📚 {student.course}</p>
                        <span style={{
                            background: isDarkMode ? 'rgba(46,204,113,0.2)' : 'rgba(46,204,113,0.1)',
                            border: `1px solid ${isDarkMode ? 'rgba(46,204,113,0.3)' : 'rgba(46,204,113,0.2)'}`,
                            padding: '0.2rem 1rem',
                            borderRadius: '50px',
                            color: '#2ECC71',
                            fontSize: '0.8rem',
                            fontFamily: "'Times New Roman', Times, serif"
                        }}>
                            🟢 Active
                        </span>
                    </div>

                    {/* Edit Button */}
                    <button
                        onClick={() => setEditMode(!editMode)}
                        style={{
                            marginLeft: 'auto',
                            padding: '0.6rem 1.5rem',
                            background: editMode
                                ? 'linear-gradient(135deg, #2ECC71, #27AE60)'
                                : 'linear-gradient(135deg, #FF9933, #C5A059)',
                            border: 'none',
                            borderRadius: '50px',
                            color: 'white',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontFamily: "'Times New Roman', Times, serif",
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {editMode ? '💾 Save' : '✏️ Edit Profile'}
                    </button>
                </div>

                {/* Student Details */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem'
                }}>
                    {/* Student ID — NOT editable */}
                    <div>
                        <label style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                            fontSize: '0.85rem',
                            display: 'block'
                        }}>🆔 Student ID</label>
                        <p style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? '#fff8e7' : '#1a0a00',
                            fontWeight: 600,
                            padding: '0.5rem 0',
                            margin: 0
                        }}>{student.studentId}</p>
                    </div>

                    {/* Email — editable */}
                    <div>
                        <label style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                            fontSize: '0.85rem',
                            display: 'block'
                        }}>📧 Email</label>
                        {editMode ? (
                            <input
                                type="email"
                                value={student.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    background: isDarkMode ? 'rgba(255,248,231,0.05)' : 'rgba(255,255,255,0.9)',
                                    border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.3)' : 'rgba(0,0,0,0.15)'}`,
                                    borderRadius: '8px',
                                    color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                    fontFamily: "'Times New Roman', Times, serif",
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        ) : (
                            <p style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                fontWeight: 600,
                                padding: '0.5rem 0',
                                margin: 0
                            }}>{student.email}</p>
                        )}
                    </div>

                    {/* Course — NOT editable */}
                    <div>
                        <label style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                            fontSize: '0.85rem',
                            display: 'block'
                        }}>📚 Course</label>
                        <p style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? '#fff8e7' : '#1a0a00',
                            fontWeight: 600,
                            padding: '0.5rem 0',
                            margin: 0
                        }}>{student.course}</p>
                    </div>

                    {/* Enrolled Date — editable */}
                    <div>
                        <label style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                            fontSize: '0.85rem',
                            display: 'block'
                        }}>📅 Enrolled Date</label>
                        {editMode ? (
                            <input
                                type="text"
                                value={student.enrolledDate}
                                onChange={(e) => handleChange('enrolledDate', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    background: isDarkMode ? 'rgba(255,248,231,0.05)' : 'rgba(255,255,255,0.9)',
                                    border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.3)' : 'rgba(0,0,0,0.15)'}`,
                                    borderRadius: '8px',
                                    color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                    fontFamily: "'Times New Roman', Times, serif",
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        ) : (
                            <p style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                fontWeight: 600,
                                padding: '0.5rem 0',
                                margin: 0
                            }}>{student.enrolledDate}</p>
                        )}
                    </div>

                    {/* Phone — editable */}
                    <div>
                        <label style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                            fontSize: '0.85rem',
                            display: 'block'
                        }}>📞 Phone</label>
                        {editMode ? (
                            <input
                                type="text"
                                value={student.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    background: isDarkMode ? 'rgba(255,248,231,0.05)' : 'rgba(255,255,255,0.9)',
                                    border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.3)' : 'rgba(0,0,0,0.15)'}`,
                                    borderRadius: '8px',
                                    color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                    fontFamily: "'Times New Roman', Times, serif",
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        ) : (
                            <p style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                fontWeight: 600,
                                padding: '0.5rem 0',
                                margin: 0
                            }}>{student.phone}</p>
                        )}
                    </div>

                    {/* Address — editable */}
                    <div>
                        <label style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                            fontSize: '0.85rem',
                            display: 'block'
                        }}>📍 Address</label>
                        {editMode ? (
                            <input
                                type="text"
                                value={student.address}
                                onChange={(e) => handleChange('address', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    background: isDarkMode ? 'rgba(255,248,231,0.05)' : 'rgba(255,255,255,0.9)',
                                    border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.3)' : 'rgba(0,0,0,0.15)'}`,
                                    borderRadius: '8px',
                                    color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                    fontFamily: "'Times New Roman', Times, serif",
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        ) : (
                            <p style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                fontWeight: 600,
                                padding: '0.5rem 0',
                                margin: 0
                            }}>{student.address}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfile;
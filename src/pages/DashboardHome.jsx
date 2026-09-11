import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const DashboardHome = () => {
    const { isDarkMode } = useTheme();
    const [selectedClass, setSelectedClass] = useState(null);

    const todayClasses = [
        { id: 1, name: 'Veda - Samhitha', time: '10:00 AM - 11:30 AM', teacher: 'Vid. Ganesha Ghanapati', room: 'Room 101', description: 'Learn the sacred hymns of Rigveda Samhitha' },
        { id: 2, name: 'Sanskrit Language', time: '12:00 PM - 1:30 PM', teacher: 'Dr. Manjunath Bhat', room: 'Room 102', description: 'Advanced Sanskrit grammar and literature' },
    ];

    const upcomingClasses = [
        { id: 3, name: 'Jyothisha - Basics', date: 'Tomorrow, 10:00 AM', teacher: 'Dr. S.R. Narasimha Murthy', description: 'Introduction to planetary movements' },
        { id: 4, name: 'Yoga Science', date: 'Tomorrow, 2:00 PM', teacher: 'Dr. Y. Chitharanjan Rao', description: 'Practice of asanas and meditation' },
        { id: 5, name: 'Music Theory', date: 'Day after, 11:00 AM', teacher: 'Dr. M.V. Archana', description: 'Understanding ragas and talas' },
    ];

    const handleClassClick = (cls) => {
        setSelectedClass(cls);
    };

    const closePopup = () => {
        setSelectedClass(null);
    };

    const ClassCard = ({ cls, type }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                onClick={() => handleClassClick(cls)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.8rem 1rem',
                    marginBottom: '0.8rem',
                    background: isDarkMode ? 'rgba(193, 153, 59, 0.03)' : 'rgba(0,0,0,0.03)',
                    borderRadius: '10px',
                    border: isHovered ? `2px solid ${isDarkMode ? '#C5A059' : '#C5A059'}` : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isHovered ? '0 4px 20px rgba(197,160,89,0.15)' : 'none'
                }}
            >
                <div>
                    <div style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        color: isDarkMode ? '#fff8e7' : '#1a0a00',
                        fontWeight: 600
                    }}>{cls.name}</div>
                    <div style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        color: isDarkMode ? 'rgba(255,248,231,0.4)' : 'rgba(0,0,0,0.4)',
                        fontSize: '0.85rem'
                    }}>{cls.teacher} {cls.room ? `• ${cls.room}` : ''}</div>
                </div>
                <span style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    color: '#C5A059',
                    fontSize: '0.9rem',
                    fontWeight: 400
                }}>
                    {cls.time || cls.date}
                </span>
            </div>
        );
    };

    return (
        <div>
            {/* Page Heading */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '2.5rem',
                    background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.3rem',
                    fontWeight: 700
                }}>
                    Dashboard Home
                </h1>
                <p style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                    fontSize: '0.95rem'
                }}>
                    Welcome back! Here's your class schedule for today.
                </p>
            </div>

            {/* Today's Classes */}
            <div style={{
                background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '20px',
                padding: '1.5rem',
                marginBottom: '2rem'
            }}>
                <h3 style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    color: isDarkMode ? '#C5A059' : '#8B6914',
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    📅 Today's Classes
                </h3>

                {todayClasses.map((cls) => (
                    <ClassCard key={cls.id} cls={cls} type="today" />
                ))}
            </div>

            {/* Upcoming Classes */}
            <div style={{
                background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '20px',
                padding: '1.5rem',
                marginBottom: '2rem'
            }}>
                <h3 style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    color: isDarkMode ? '#C5A059' : '#8B6914',
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    📅 Upcoming Classes
                </h3>

                {upcomingClasses.map((cls) => (
                    <ClassCard key={cls.id} cls={cls} type="upcoming" />
                ))}
            </div>

            {/* Class Detail Popup */}
            {selectedClass && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    padding: '2rem'
                }}
                    onClick={closePopup}
                >
                    <div style={{
                        maxWidth: '450px',
                        width: '100%',
                        background: isDarkMode ? '#1a0a00' : '#f5f0eb',
                        borderRadius: '20px',
                        padding: '2rem',
                        position: 'relative'
                    }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closePopup}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                fontSize: '1.8rem',
                                cursor: 'pointer',
                                fontFamily: "'Times New Roman', Times, serif"
                            }}
                        >
                            ✕
                        </button>

                        <h2 style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? '#C5A059' : '#8B6914',
                            fontSize: '1.6rem',
                            marginBottom: '0.5rem',
                            fontWeight: 700
                        }}>
                            {selectedClass.name}
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0.5rem',
                            marginBottom: '1rem'
                        }}>
                            <p style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? 'rgba(255,248,231,0.6)' : 'rgba(0,0,0,0.6)',
                                fontSize: '0.85rem'
                            }}>
                                👨‍🏫 {selectedClass.teacher}
                            </p>
                            <p style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? 'rgba(255,248,231,0.6)' : 'rgba(0,0,0,0.6)',
                                fontSize: '0.85rem'
                            }}>
                                🕐 {selectedClass.time || selectedClass.date}
                            </p>
                            {selectedClass.room && (
                                <p style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: isDarkMode ? 'rgba(255,248,231,0.6)' : 'rgba(0,0,0,0.6)',
                                    fontSize: '0.85rem'
                                }}>
                                    📍 {selectedClass.room}
                                </p>
                            )}
                            {selectedClass.status && (
                                <p style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: '#2ECC71',
                                    fontSize: '0.85rem',
                                    fontWeight: 600
                                }}>
                                    {selectedClass.status}
                                </p>
                            )}
                        </div>

                        {selectedClass.description && (
                            <div style={{
                                padding: '1rem',
                                background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                                borderRadius: '10px',
                                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                marginBottom: '1rem'
                            }}>
                                <p style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: isDarkMode ? 'rgba(255,248,231,0.7)' : 'rgba(0,0,0,0.7)',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {selectedClass.description}
                                </p>
                            </div>
                        )}

                        <button
                            onClick={closePopup}
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                                border: 'none',
                                borderRadius: '10px',
                                color: 'white',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: "'Times New Roman', Times, serif",
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardHome;
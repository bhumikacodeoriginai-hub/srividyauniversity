import React from 'react';
import { useTheme } from '../context/ThemeContext';

const DashboardCoursesOffered = () => {
    const { isDarkMode } = useTheme();

    const coursesOffered = [
        {
            name: 'Diploma',
            icon: '📜',
            duration: '6 months - 1 Year',
            description: 'Introductory knowledge about the chosen subject',
            eligibility: 'Minimum education with knowledge of reading and writing'
        },
        {
            name: 'Bachelor Of Arts in Shastra',
            icon: '🎓',
            duration: '3 years',
            description: 'Bachelor\'s degree with adequate knowledge in selected subjects',
            eligibility: 'Any pre-university qualification or equivalent education'
        },
        {
            name: 'Master Of Arts in Shastra',
            icon: '📚',
            duration: '2 years',
            description: 'Master\'s degree with in-depth knowledge in particular subject',
            eligibility: 'Degree from any University or equivalent educational qualification'
        },
        {
            name: 'Doctoral Degrees (M.Phil, Ph.D., D.Litt.)',
            icon: '🏛️',
            duration: '3-5 years',
            description: 'Research degree to bring out new inventions in the field of knowledge',
            eligibility: 'Masters\' Degree with relative experience in the subject of research'
        },
    ];

    const subjects = ['Veda', 'Agama', 'Tantra', 'Shastra', 'Jyothisham', 'Performing Arts', 'Yogic Science'];

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
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                {coursesOffered.map((course, index) => (
                    <div key={index} style={{
                        background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                        border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: '15px',
                        padding: '1.5rem',
                        transition: 'all 0.3s ease',
                        borderTop: `4px solid ${index === 0 ? '#FF9933' : index === 1 ? '#C5A059' : index === 2 ? '#40E0D0' : '#9B59B6'}`
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0px)';
                            e.target.style.boxShadow = 'none';
                        }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '0.8rem'
                        }}>
                            <div style={{
                                fontSize: '2.5rem'
                            }}>{course.icon}</div>
                            <div>
                                <div style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                    fontSize: '1.1rem',
                                    fontWeight: 600
                                }}>{course.name}</div>
                                <div style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: isDarkMode ? 'rgba(255,248,231,0.4)' : 'rgba(0,0,0,0.4)',
                                    fontSize: '0.8rem'
                                }}>⏱️ {course.duration}</div>
                            </div>
                        </div>

                        <div style={{
                            padding: '0.8rem',
                            background: isDarkMode ? 'rgba(255,248,231,0.02)' : 'rgba(0,0,0,0.02)',
                            borderRadius: '10px',
                            marginBottom: '0.8rem'
                        }}>
                            <p style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? 'rgba(255,248,231,0.7)' : 'rgba(0,0,0,0.7)',
                                fontSize: '0.9rem',
                                margin: 0
                            }}>{course.description}</p>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            background: isDarkMode ? 'rgba(197,160,89,0.05)' : 'rgba(0,0,0,0.03)',
                            borderRadius: '8px'
                        }}>
                            <span style={{
                                fontSize: '1rem'
                            }}>✅</span>
                            <span style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                                fontSize: '0.8rem'
                            }}>{course.eligibility}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Subjects */}
            <div style={{
                background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '20px',
                padding: '1.5rem'
            }}>
                <h3 style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    color: isDarkMode ? '#C5A059' : '#8B6914',
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    fontWeight: 600
                }}>
                    📖 Subjects
                </h3>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem'
                }}>
                    {subjects.map((subject, index) => (
                        <span key={index} style={{
                            background: isDarkMode ? 'rgba(197,160,89,0.1)' : 'rgba(0,0,0,0.05)',
                            border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                            padding: '0.4rem 1.2rem',
                            borderRadius: '50px',
                            color: isDarkMode ? '#C5A059' : '#8B6914',
                            fontSize: '0.9rem',
                            fontFamily: "'Times New Roman', Times, serif",
                            fontWeight: 500
                        }}>
                            {subject}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardCoursesOffered;
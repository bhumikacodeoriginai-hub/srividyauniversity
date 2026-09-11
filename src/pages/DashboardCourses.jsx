import React from 'react';
import { useTheme } from '../context/ThemeContext';

const DashboardCourses = () => {
    const { isDarkMode } = useTheme();

    // Enrolled Courses - Student ki enrolled courses
    const enrolledCourses = [
        {
            name: 'Veda - Samhitha',
            code: 'VED-101',
            progress: 75,
            teacher: 'Vid. Ganesha Ghanapati',
            credits: 4,
            status: 'In Progress',
            icon: '📖'
        },
        {
            name: 'Sanskrit Language',
            code: 'SAN-201',
            progress: 60,
            teacher: 'Dr. Manjunath Bhat',
            credits: 3,
            status: 'In Progress',
            icon: '📚'
        },
        {
            name: 'Jyothisha - Basics',
            code: 'JYO-101',
            progress: 90,
            teacher: 'Dr. S.R. Narasimha Murthy',
            credits: 4,
            status: 'Almost Complete',
            icon: '⭐'
        },
        {
            name: 'Yoga Science',
            code: 'YOG-101',
            progress: 45,
            teacher: 'Dr. Y. Chitharanjan Rao',
            credits: 3,
            status: 'In Progress',
            icon: '🧘'
        },
    ];

    const getStatusColor = (status) => {
        if (status === 'Completed') return '#2ECC71';
        if (status === 'Almost Complete') return '#FF9933';
        if (status === 'In Progress') return '#40E0D0';
        return '#C5A059';
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

            <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                fontSize: '0.95rem',
                marginBottom: '1.5rem'
            }}>
                You are currently enrolled in {enrolledCourses.length} courses
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem'
            }}>
                {enrolledCourses.map((course, index) => (
                    <div key={index} style={{
                        background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                        border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: '15px',
                        padding: '1.5rem',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0px)';
                            e.target.style.boxShadow = 'none';
                        }}>
                        {/* Course Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '0.5rem'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem'
                            }}>
                                <span style={{ fontSize: '2rem' }}>{course.icon}</span>
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
                                    }}>{course.code} • {course.credits} Credits</div>
                                </div>
                            </div>
                            <span style={{
                                padding: '0.2rem 0.8rem',
                                borderRadius: '50px',
                                fontSize: '0.7rem',
                                background: isDarkMode ? `${getStatusColor(course.status)}20` : `${getStatusColor(course.status)}15`,
                                color: getStatusColor(course.status),
                                fontFamily: "'Times New Roman', Times, serif",
                                border: `1px solid ${getStatusColor(course.status)}`
                            }}>
                                {course.status}
                            </span>
                        </div>

                        {/* Teacher */}
                        <div style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            color: isDarkMode ? 'rgba(255,248,231,0.4)' : 'rgba(0,0,0,0.4)',
                            fontSize: '0.85rem',
                            marginBottom: '0.8rem'
                        }}>
                            👨‍🏫 {course.teacher}
                        </div>

                        {/* Progress Bar */}
                        <div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '0.3rem'
                            }}>
                                <span style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: isDarkMode ? 'rgba(255,248,231,0.4)' : 'rgba(0,0,0,0.4)',
                                    fontSize: '0.8rem'
                                }}>Progress</span>
                                <span style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: '#C5A059',
                                    fontWeight: 700
                                }}>{course.progress}%</span>
                            </div>
                            <div style={{
                                width: '100%',
                                height: '6px',
                                background: isDarkMode ? 'rgba(255,248,231,0.1)' : 'rgba(0,0,0,0.1)',
                                borderRadius: '3px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: `${course.progress}%`,
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #FF9933, #C5A059)',
                                    borderRadius: '3px',
                                    transition: 'width 1s ease'
                                }} />
                            </div>
                        </div>

                        {/* Continue Button */}
                        <div style={{
                            marginTop: '1rem',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <button style={{
                                background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                                color: 'white',
                                border: 'none',
                                padding: '0.3rem 1.2rem',
                                borderRadius: '50px',
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                fontFamily: "'Times New Roman', Times, serif",
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}>
                                Continue Learning
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardCourses;
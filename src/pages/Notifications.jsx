import React from 'react';

const Notifications = () => {
    return (
        <div>
            {/* Page Heading */}
            <div style={{
                marginBottom: '2rem'
            }}>
                <h1 style={{
                    fontFamily: 'Times New Roman', Times, serif,
                    fontSize: '2.5rem',
                    background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.3rem'
                }}>
                    🔔 Notifications
                </h1>
                <p style={{
                    color: 'rgba(255,248,231,0.5)',
                    fontSize: '0.95rem'
                }}>
                    Latest updates and announcements
                </p>
            </div>

            {/* Convocation Notice */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '2px solid rgba(197,160,89,0.2)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, transparent, #C5A059, #FF9933, #C5A059, transparent)'
                }}></div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    marginBottom: '0.5rem'
                }}>
                    <span style={{ fontSize: '2rem' }}>📜</span>
                    <h2 style={{
                        fontFamily: 'Times New Roman', Times, serif,
                        color: '#FF9933',
                        fontSize: '1.8rem',
                        margin: 0
                    }}>
                        Convocation Notice
                    </h2>
                </div>

                <p style={{
                    color: '#fff8e7',
                    fontSize: '1.1rem',
                    lineHeight: '1.8'
                }}>
                    <strong style={{ color: '#C5A059' }}>
                        SRIVIDYA INTERNATIONAL UNIVERSITY FOR VEDIC SCIENCE®
                    </strong>
                    <br />
                    will conduct the <strong style={{ color: '#FF9933' }}>2026 Convocation</strong> on
                    <strong style={{ color: '#C5A059' }}> 11-04-2026</strong>
                </p>
                <p style={{
                    color: 'rgba(255,248,231,0.6)',
                    marginTop: '0.5rem'
                }}>
                    Students who are eligible to receive their degrees may contact their respective departments.
                </p>
            </div>

            {/* Admission Notice */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '1px solid rgba(197,160,89,0.15)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '2rem'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    marginBottom: '0.5rem'
                }}>
                    <span style={{ fontSize: '2rem' }}>📝</span>
                    <h2 style={{
                        fontFamily: 'Times New Roman', Times, serif,
                        color: '#FF9933',
                        fontSize: '1.8rem',
                        margin: 0
                    }}>
                        Admission Notice
                    </h2>
                </div>

                <p style={{
                    color: '#fff8e7',
                    fontSize: '1.05rem',
                    lineHeight: '1.8'
                }}>
                    Admissions for the academic year <strong style={{ color: '#C5A059' }}>2024-2025</strong> is now open.
                </p>
                <p style={{
                    color: 'rgba(255,248,231,0.7)',
                    lineHeight: '1.8',
                    marginTop: '0.5rem'
                }}>
                    Students are requested to contact the office through mail or via the phone numbers given below.
                </p>

                <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'rgba(197,160,89,0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(197,160,89,0.1)'
                }}>
                    <p style={{ color: 'rgba(255,248,231,0.8)' }}>
                        🎵 <strong style={{ color: '#C5A059' }}>Dr. Archana M V</strong> - +91 9886077508
                        <span style={{ color: 'rgba(255,248,231,0.4)', fontSize: '0.9rem' }}> [ Music, Dance ]</span>
                    </p>
                    <p style={{ color: 'rgba(255,248,231,0.8)' }}>
                        ⭐ <strong style={{ color: '#C5A059' }}>Dr. S R Narasimha Murthy</strong> - +91 9886714586
                        <span style={{ color: 'rgba(255,248,231,0.4)', fontSize: '0.9rem' }}> [ All other courses ]</span>
                    </p>
                    <p style={{ color: 'rgba(255,248,231,0.8)' }}>
                        ✉️ <strong style={{ color: '#C5A059' }}>Mail ID</strong> - srividyauniversity@gmail.com
                    </p>
                </div>
            </div>

            {/* Affiliate Notice */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '1px solid rgba(227,66,52,0.2)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '2rem',
                borderLeft: '4px solid #E34234'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    marginBottom: '0.5rem'
                }}>
                    <span style={{ fontSize: '2rem' }}>⚠️</span>
                    <h2 style={{
                        fontFamily: 'Times New Roman', Times, serif,
                        color: '#E34234',
                        fontSize: '1.8rem',
                        margin: 0
                    }}>
                        Affiliate Notice
                    </h2>
                </div>

                <div style={{
                    background: 'rgba(227,66,52,0.05)',
                    borderRadius: '12px',
                    padding: '1.2rem',
                    border: '1px solid rgba(227,66,52,0.1)'
                }}>
                    <p style={{
                        color: 'rgba(255,248,231,0.9)',
                        lineHeight: '1.8'
                    }}>
                        <strong style={{ color: '#E34234' }}>ARUDHRA - EDUCATION AND RESEARCH FOUNDATION</strong>
                        <br />
                        <span style={{ color: 'rgba(255,248,231,0.6)', fontSize: '0.95rem' }}>
                            [ Viruksham appartment, no 73, G3 second main road, alwarthirunagar annex, chennai 600087 ]
                        </span>
                    </p>
                    <p style={{
                        color: 'rgba(255,248,231,0.8)',
                        lineHeight: '1.8',
                        marginTop: '0.5rem'
                    }}>
                        is <strong style={{ color: '#E34234' }}>not affiliated</strong> with
                        <strong style={{ color: '#C5A059' }}> SRIVIDYA INTERNATIONAL UNIVERSITY FOR VEDIC SCIENCE®</strong>
                        and <strong style={{ color: '#C5A059' }}>Srividya Vishwa Samshodhana Prathistanam (R.)</strong>, Bangalore.
                    </p>
                    <p style={{
                        color: 'rgba(255,248,231,0.7)',
                        lineHeight: '1.8',
                        marginTop: '0.5rem'
                    }}>
                        SRIVIDYA INTERNATIONAL UNIVERSITY FOR VEDIC SCIENCE® and Srividya Vishwa Samshodhana Prathistanam (R.),
                        is <strong style={{ color: '#E34234' }}>not liable</strong> for any financial payment/academic
                        agreements/other agreements between ARUDHRA - EDUCATION AND RESEARCH FOUNDATION, Chennai and students.
                    </p>
                </div>

                <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'rgba(255,248,231,0.02)',
                    borderRadius: '10px',
                    borderTop: '1px solid rgba(197,160,89,0.1)'
                }}>
                    <p style={{
                        color: 'rgba(255,248,231,0.5)',
                        fontSize: '0.95rem',
                        fontStyle: 'italic'
                    }}>
                        Sd/-
                    </p>
                    <p style={{
                        color: '#C5A059',
                        fontWeight: 'bold'
                    }}>
                        (Dr. S.R. NARASIMHA MURTHY)
                    </p>
                    <p style={{
                        color: 'rgba(255,248,231,0.4)',
                        fontSize: '0.85rem'
                    }}>
                        Pro VC – Admn.
                    </p>
                    <p style={{
                        color: 'rgba(255,248,231,0.3)',
                        fontSize: '0.85rem'
                    }}>
                        Date: 05.04.2025
                    </p>
                </div>
            </div>

            {/* Decorative Footer */}
            <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'rgba(255,248,231,0.02)',
                borderRadius: '15px',
                border: '1px solid rgba(197,160,89,0.05)'
            }}>
                <span style={{
                    fontFamily: 'Tiro Devanagari Sanskrit',
                    fontSize: '1.5rem',
                    color: '#C5A059',
                    opacity: 0.3
                }}>
                    ॐ
                </span>
                <p style={{
                    color: 'rgba(255,248,231,0.2)',
                    fontSize: '0.8rem',
                    marginTop: '0.3rem'
                }}>
                    Stay updated with the latest announcements
                </p>
            </div>
        </div>
    );
};

export default Notifications;
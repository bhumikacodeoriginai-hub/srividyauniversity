import React, { useState, useEffect } from 'react';

const Home = () => {
    const images = [
        { id: 1, title: 'Convocation 2023' },
        { id: 2, title: 'Convocation 2022' },
        { id: 3, title: 'Convocation 2021' },
        { id: 4, title: 'Vedic Symposium' },
        { id: 5, title: 'Music Festival' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const honoraryRecipients = [
        { name: 'Vid. A.V. Anand', association: 'Vid. K.G. Putthanaih' },
        { name: 'Prof. Shingappa', association: '' },
        { name: 'Vid. Smt. M.S. Sheela', association: '' },
    ];

    return (
        <div>
            {/* ===== CONVOCATION NOTICE ===== */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '2px solid rgba(197,160,89,0.2)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '2rem',
                textAlign: 'center',
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

                <span style={{
                    fontFamily: 'Tiro Devanagari Sanskrit',
                    fontSize: '1.5rem',
                    color: '#FF9933',
                    display: 'block',
                    marginBottom: '0.5rem'
                }}>॥ श्री गुरुभ्यो नमः ॥</span>

                <h2 style={{
                    fontFamily: 'Times New Roman', Times, serif,
                    fontSize: '2.2rem',
                    color: '#C5A059',
                    marginBottom: '1rem'
                }}>
                    📜 Convocation Notice
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    color: '#fff8e7',
                    lineHeight: '1.8',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <span style={{ color: '#FF9933', fontWeight: 'bold' }}>
                        SRIVIDYA INTERNATIONAL UNIVERSITY FOR VEDIC SCIENCE®
                    </span>
                    <br />
                    will conduct the <span style={{ color: '#C5A059', fontWeight: 'bold' }}>2026 Convocation</span> on
                    <span style={{ color: '#FF9933', fontWeight: 'bold' }}> 11-04-2026</span>
                </p>
                <p style={{
                    color: 'rgba(255,248,231,0.6)',
                    marginTop: '0.5rem',
                    fontSize: '0.95rem'
                }}>
                    Students who are eligible to receive their degrees may contact their respective departments.
                </p>
            </div>

            {/* ===== HONORARY DOCTORATE ===== */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '1px solid rgba(197,160,89,0.15)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '2rem'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <span style={{
                        fontFamily: 'Tiro Devanagari Sanskrit',
                        fontSize: '2rem',
                        color: '#FF9933',
                        display: 'block'
                    }}>॥ विद्यया अमृतमश्नुते ॥</span>
                    <h2 style={{
                        fontFamily: 'Times New Roman', Times, serif,
                        fontSize: '2rem',
                        background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        The University is proud to Award
                    </h2>
                    <h3 style={{
                        fontFamily: 'Times New Roman', Times, serif,
                        fontSize: '1.8rem',
                        color: '#C5A059'
                    }}>
                        🏅 Honorary Doctorate to:
                    </h3>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {honoraryRecipients.map((recipient, index) => (
                        <div key={index} style={{
                            background: 'rgba(255,248,231,0.05)',
                            border: '1px solid rgba(197,160,89,0.1)',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            textAlign: 'center'
                        }}>
                            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🪷</span>
                            <div style={{ color: '#fff8e7', fontSize: '1.05rem', fontWeight: 'bold' }}>
                                {recipient.name}
                            </div>
                            {recipient.association && (
                                <div style={{
                                    color: 'rgba(255,248,231,0.5)',
                                    fontSize: '0.85rem',
                                    marginTop: '0.3rem'
                                }}>
                                    In association with: {recipient.association}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== IMAGE SLIDER ===== */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '1px solid rgba(197,160,89,0.15)',
                borderRadius: '20px',
                padding: '1.5rem',
                marginBottom: '2rem',
                overflow: 'hidden'
            }}>
                <h3 style={{
                    fontFamily: 'Times New Roman', Times, serif,
                    color: '#C5A059',
                    fontSize: '1.3rem',
                    textAlign: 'center',
                    marginBottom: '1rem'
                }}>📸 Convocation Gallery</h3>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            style={{
                                minWidth: 'calc(33.333% - 0.67rem)',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                transition: 'all 0.5s ease',
                                transform: `translateX(-${currentSlide * 33.333}%)`
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '180px',
                                background: 'linear-gradient(135deg, rgba(197,160,89,0.2), rgba(255,153,51,0.1))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                color: '#C5A059',
                                border: '1px solid rgba(197,160,89,0.1)',
                                borderRadius: '15px'
                            }}>
                                📸
                            </div>
                            <div style={{
                                padding: '0.5rem',
                                textAlign: 'center',
                                color: 'rgba(255,248,231,0.6)',
                                fontSize: '0.85rem'
                            }}>
                                {image.title}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '1rem'
                }}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                border: 'none',
                                background: currentSlide === index ? '#C5A059' : 'rgba(197,160,89,0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* ===== DOWNLOADS ===== */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '1px solid rgba(197,160,89,0.15)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '2rem'
            }}>
                <h3 style={{
                    fontFamily: 'Times New Roman', Times, serif,
                    color: '#C5A059',
                    fontSize: '1.5rem',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                }}>📥 DOWNLOADS</h3>

                <p style={{
                    color: 'rgba(255,248,231,0.5)',
                    textAlign: 'center',
                    marginBottom: '1rem'
                }}>
                    Select the links below to download the application forms you need:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxWidth: '500px', margin: '0 auto' }}>
                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        background: 'rgba(255,248,231,0.05)',
                        border: '1px solid rgba(197,160,89,0.1)',
                        padding: '0.8rem 1.2rem',
                        borderRadius: '10px',
                        color: '#fff8e7',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}>
                        <span>📄</span>
                        <span>Application Form</span>
                        <span style={{ marginLeft: 'auto', color: '#C5A059' }}>⬇</span>
                    </a>
                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        background: 'rgba(255,248,231,0.05)',
                        border: '1px solid rgba(197,160,89,0.1)',
                        padding: '0.8rem 1.2rem',
                        borderRadius: '10px',
                        color: '#fff8e7',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}>
                        <span>📄</span>
                        <span>PhD Proposal Form</span>
                        <span style={{ marginLeft: 'auto', color: '#C5A059' }}>⬇</span>
                    </a>
                </div>

                <h4 style={{
                    color: 'rgba(255,248,231,0.5)',
                    fontSize: '0.9rem',
                    marginTop: '1.5rem',
                    textAlign: 'center'
                }}>
                    Link to Online Application form:
                </h4>
                <a href="#" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    background: 'rgba(255,153,51,0.1)',
                    border: '1px solid rgba(255,153,51,0.2)',
                    padding: '0.8rem 1.2rem',
                    borderRadius: '10px',
                    color: '#FF9933',
                    textDecoration: 'none',
                    maxWidth: '500px',
                    margin: '0.5rem auto 0',
                    transition: 'all 0.3s ease'
                }}>
                    <span>🔗</span>
                    <span>Online Application Form</span>
                </a>
            </div>

            {/* ===== COURSES OFFERED ===== */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '1px solid rgba(197,160,89,0.15)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '2rem'
            }}>
                <h3 style={{
                    fontFamily: 'Times New Roman', Times, serif,
                    color: '#C5A059',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                }}>📚 COURSES OFFERED</h3>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                    maxWidth: '400px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1rem',
                        borderBottom: '1px solid rgba(197,160,89,0.05)',
                        color: 'rgba(255,248,231,0.8)'
                    }}>
                        <span style={{ color: '#C5A059' }}>✦</span>
                        <span>Diploma</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1rem',
                        borderBottom: '1px solid rgba(197,160,89,0.05)',
                        color: 'rgba(255,248,231,0.8)'
                    }}>
                        <span style={{ color: '#C5A059' }}>✦</span>
                        <span>Bachelor Of Arts in Shastra</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1rem',
                        borderBottom: '1px solid rgba(197,160,89,0.05)',
                        color: 'rgba(255,248,231,0.8)'
                    }}>
                        <span style={{ color: '#C5A059' }}>✦</span>
                        <span>Master Of Arts in Shastra</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1rem',
                        color: 'rgba(255,248,231,0.8)'
                    }}>
                        <span style={{ color: '#C5A059' }}>✦</span>
                        <span>Doctoral Degrees (M.Phil, Ph.D., D.Litt.)</span>
                    </div>
                </div>
            </div>

            {/* ===== CONTACT ===== */}
            <div style={{
                background: 'rgba(255,248,231,0.03)',
                border: '1px solid rgba(197,160,89,0.15)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center'
            }}>
                <h3 style={{
                    fontFamily: 'Times New Roman', Times, serif,
                    color: '#C5A059',
                    fontSize: '1.5rem',
                    marginBottom: '1rem'
                }}>📞 CONTACT</h3>

                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    padding: '1.5rem',
                    background: 'rgba(197,160,89,0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(197,160,89,0.1)'
                }}>
                    <p style={{ color: 'rgba(255,248,231,0.8)', lineHeight: '1.8' }}>
                        Srividya Vishwa Samshodhana Prathishthanam (R.),<br />
                        Sy. No. 46/1, 3rd Main, Veeranjaneya Nagar,<br />
                        Turahalli, Uttaraiah, Hobi,<br />
                        Bangalore - 560 061
                    </p>
                    <div style={{ marginTop: '1rem' }}>
                        <p style={{ color: '#C5A059' }}>📱 +91 98867 14586</p>
                        <p style={{ color: '#C5A059' }}>📱 +91 98860 77508</p>
                        <p style={{ color: '#C5A059' }}>📱 +91 99860 48091</p>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <p style={{ color: 'rgba(255,248,231,0.7)' }}>
                            🌐 <a href="#" style={{ color: '#FF9933', textDecoration: 'none' }}>srividyauniversity.org</a>
                        </p>
                        <p style={{ color: 'rgba(255,248,231,0.7)' }}>
                            ✉️ <a href="mailto:srividyauniversity@gmail.com" style={{ color: '#FF9933', textDecoration: 'none' }}>srividyauniversity@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';

const CoursesSection = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        {
            name: 'Diploma',
            duration: 'Three levels',
            details: 'Age: 10 years and no upper limit. For Indian Students: Diploma-Level 1 and 2, Level-3 (International certification)'
        },
        {
            name: 'Bachelor of Arts (BA)',
            duration: '3 years',
            details: 'Age: Completed 18 years. Education: 10th pass /PUC plus minimum 2 years training in related art form.'
        },
        {
            name: 'Master of Arts (MA)',
            duration: '2 years',
            details: 'Age: Completed 21 years. Education: Any art related degree OR Any degree plus minimum 5 years training.'
        },
        {
            name: 'DLit',
            duration: '2 years',
            details: 'Age: Minimum 40 years. 10 years experience. Written exam and Viva Voce required.'
        },
        {
            name: 'Integrated Masters and PhD',
            duration: '4 years',
            details: 'Age: Completed 21 years. Any art related degree OR Any degree plus minimum 8 years training.'
        },
        {
            name: 'PhD',
            duration: '2+ years',
            details: 'Age: Completed 23 years. 10 years experience. Written exam and Viva Voce required.'
        }
    ];

    const guides = {
        music: ['Dr. Meena Ganapathy', 'Dr. Vatsala Patil', 'Dr. N. Raghu'],
        dance: ['Dr. Jayashree Ravi Hegde', 'Dr. Santoshi Simha'],
        yogic: ['Dr. Jayashree Ravi Hegde'],
        jyotishya: ['Dr. S.R. Narasimha Murthy']
    };

    return (
        <section id="courses" style={{
            minHeight: '100vh',
            padding: '100px 2rem 60px',
            position: 'relative'
        }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span style={{
                        fontFamily: 'Tiro Devanagari Sanskrit',
                        fontSize: '1.8rem',
                        color: '#FF9933',
                        display: 'block',
                        marginBottom: '0.5rem',
                        opacity: 0.8
                    }}>पाठ्यक्रम</span>
                    <h2 style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '3.5rem',
                        background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700
                    }}>Our Courses</h2>
                    <p style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        color: 'rgba(255,248,231,0.7)',
                        fontSize: '1.2rem',
                        letterSpacing: '1px'
                    }}>Academic programs for holistic education</p>
                </div>

                {/* Courses Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }} data-aos="fade-up">
                    {courses.map((course, index) => (
                        <div key={index} onClick={() => setSelectedCourse(selected === index ? null : index)} style={{
                            background: selectedCourse === index ? 'rgba(197,160,89,0.05)' : 'rgba(255,248,231,0.03)',
                            border: `2px solid ${selectedCourse === index ? '#C5A059' : 'rgba(197,160,89,0.1)'}`,
                            borderRadius: '15px',
                            padding: '1.5rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <h3 style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: '#fff8e7',
                                    fontSize: '1.3rem',
                                    fontWeight: 600
                                }}>{course.name}</h3>
                                <span style={{
                                    background: 'rgba(197,160,89,0.15)',
                                    padding: '0.3rem 1rem',
                                    borderRadius: '50px',
                                    color: '#C5A059',
                                    fontSize: '0.8rem',
                                    fontFamily: "'Times New Roman', Times, serif"
                                }}>{course.duration}</span>
                            </div>
                            <div style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: 'rgba(255,248,231,0.7)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                {course.details}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recognised Guides */}
                <div data-aos="fade-up">
                    <h3 style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '2rem',
                        color: '#C5A059',
                        textAlign: 'center',
                        marginBottom: '2rem',
                        fontWeight: 600
                    }}>Recognised Guides</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div>
                            <h4 style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: '#C5A059',
                                fontSize: '1.1rem',
                                fontWeight: 600
                            }}>🎵 Music</h4>
                            {guides.music.map((g, i) => <p key={i} style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: 'rgba(255,248,231,0.7)',
                                margin: '0.3rem 0'
                            }}>{g}</p>)}
                        </div>
                        <div>
                            <h4 style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: '#C5A059',
                                fontSize: '1.1rem',
                                fontWeight: 600
                            }}>💃 Dance</h4>
                            {guides.dance.map((g, i) => <p key={i} style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: 'rgba(255,248,231,0.7)',
                                margin: '0.3rem 0'
                            }}>{g}</p>)}
                        </div>
                        <div>
                            <h4 style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: '#C5A059',
                                fontSize: '1.1rem',
                                fontWeight: 600
                            }}>🧘 Yogic Science</h4>
                            {guides.yogic.map((g, i) => <p key={i} style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: 'rgba(255,248,231,0.7)',
                                margin: '0.3rem 0'
                            }}>{g}</p>)}
                        </div>
                        <div>
                            <h4 style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: '#C5A059',
                                fontSize: '1.1rem',
                                fontWeight: 600
                            }}>⭐ Jyotishya</h4>
                            {guides.jyotishya.map((g, i) => <p key={i} style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: 'rgba(255,248,231,0.7)',
                                margin: '0.3rem 0'
                            }}>{g}</p>)}
                        </div>
                    </div>
                    <p style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        color: 'rgba(255,248,231,0.5)',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        textAlign: 'center',
                        marginTop: '1rem'
                    }}>
                        Note: University will designate appropriate Guides in the respective discipline
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
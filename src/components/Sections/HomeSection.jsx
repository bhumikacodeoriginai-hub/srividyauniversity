import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSection = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeg99cvPBfU9C4wwzUTdt0hqSjceADiNpVReRjgwiO7B5FE0A/viewform?pli=1';
    const GOOGLE_IMAGES_URL = 'https://www.google.com/search?q=srividya+university&tbm=isch';

    const handleApplyNow = () => {
        window.open(GOOGLE_FORM_URL, '_blank');
    };

    // Vedic Science related slides
    const slides = [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=400&fit=crop',
            title: 'Veda',
            subtitle: 'The eternal wisdom of the ancient scriptures'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=1200&h=400&fit=crop',
            title: 'Agama',
            subtitle: 'Temple rituals and sacred traditions'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&h=400&fit=crop',
            title: 'Tantra',
            subtitle: 'Ancient practices of spiritual energy'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&h=400&fit=crop',
            title: 'Shastra',
            subtitle: 'Traditional sciences and texts'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&h=400&fit=crop',
            title: 'Jyothisham',
            subtitle: 'The science of light and time'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop',
            title: 'Performing Arts',
            subtitle: 'Music, dance and dramatic traditions'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=400&fit=crop',
            title: 'Yogic Science',
            subtitle: 'Harmony of body, mind and spirit'
        }
    ];

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '100px 2rem 60px',
            position: 'relative'
        }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

                {/* Slogan */}
                <p style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontSize: '1.4rem',
                    color: '#f09031ff',
                    marginTop: '1rem',
                    marginBottom: '3rem',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    "A Decade of service in preserving and spreading Indian traditional knowledge"
                </p>

                {/* Top Row: Left Content + Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    {/* Left Column */}
                    <div data-aos="fade-right">
                        {/* Accredited Badge */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'rgba(255,153,51,0.1)',
                            border: '2px solid rgba(255,153,51,0.2)',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            color: '#C5A059',
                            marginBottom: '1rem'
                        }}>
                            <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Accredited Higher Education Institution</span>
                        </div>

                        <h1 style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontSize: '3.5rem',
                            lineHeight: '1.2',
                            marginTop: '0.5rem'
                        }}>
                            <span style={{
                                fontFamily: 'Tiro Devanagari Sanskrit',
                                fontSize: '1.8rem',
                                color: '#FF9933',
                                display: 'block',
                                marginTop: '0.5rem'
                            }}>श्रीविद्या</span>

                            {/* Srividya — clickable to Google Images */}
                            <span
                                onClick={() => window.open(GOOGLE_IMAGES_URL, '_blank')}
                                style={{
                                    fontSize: '4.2rem',
                                    background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    display: 'block',
                                    cursor: 'pointer',
                                    transition: 'opacity 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                Srividya
                            </span>
                            <span style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                fontSize: '1rem',
                                color: '#1a1919ff',
                                display: 'block',
                                fontWeight: '300',
                                letterSpacing: '2px'
                            }}>International University for Vedic Science</span>
                        </h1>

                        <p style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontSize: '1.05rem',
                            color: 'rgba(255,248,231,0.8)',
                            lineHeight: '1.8',
                            marginTop: '1.5rem'
                        }}>
                            Srividya International University for Vedic Science is an accredited higher education institution in
                            <span style={{ color: '#FF9933', fontWeight: '600' }}> Florida, USA</span>, specializing in Vedic-Sanskrit studies
                            and traditional Shastras, featuring a decade of academic history, three convocations,
                            and over 25 doctoral graduates.
                        </p>

                        {/* Stats */}
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            padding: '1.5rem',
                            background: 'rgba(255,248,231,0.05)',
                            borderRadius: '15px',
                            border: '1px solid rgba(197,160,89,0.2)',
                            marginTop: '2rem'
                        }}>
                            <div><div style={{ fontSize: '2rem', fontWeight: '700', color: '#C5A059', fontFamily: "'Times New Roman', Times, serif" }}>10+</div><div style={{ fontSize: '0.8rem', color: 'rgba(255,248,231,0.6)' }}>Years</div></div>
                            <div style={{ width: '1px', background: 'rgba(197,160,89,0.3)' }}></div>
                            <div><div style={{ fontSize: '2rem', fontWeight: '700', color: '#C5A059', fontFamily: "'Times New Roman', Times, serif" }}>25+</div><div style={{ fontSize: '0.8rem', color: 'rgba(255,248,231,0.6)' }}>Graduates</div></div>
                            <div style={{ width: '1px', background: 'rgba(197,160,89,0.3)' }}></div>
                            <div><div style={{ fontSize: '2rem', fontWeight: '700', color: '#C5A059', fontFamily: "'Times New Roman', Times, serif" }}>3</div><div style={{ fontSize: '0.8rem', color: 'rgba(255,248,231,0.6)' }}>Convocations</div></div>
                        </div>

                        {/* Buttons */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <button
                                onClick={handleApplyNow}
                                style={{
                                    padding: '1rem 2.5rem',
                                    border: 'none',
                                    borderRadius: '50px',
                                    background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                                    color: 'white',
                                    fontFamily: "'Times New Roman', Times, serif",
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                            >
                                Apply Now
                            </button>
                            <button
                                onClick={() => navigate('/courses')}
                                style={{
                                    padding: '1rem 2.5rem',
                                    border: '2px solid #c79e52ff',
                                    borderRadius: '50px',
                                    background: 'transparent',
                                    color: '#fff8e7',
                                    fontFamily: "'Times New Roman', Times, serif",
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                            >
                                Explore Programs
                            </button>
                        </div>
                    </div>

                    {/* Right Column — Blank */}
                    <div data-aos="fade-left"></div>
                </div>

                {/* ================= IMAGE SLIDER (buttons ke NICHE) ================= */}
                <div
                    data-aos="fade-up"
                    style={{
                        marginTop: '4rem',
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '2px solid rgba(197,160,89,0.2)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                        height: '400px'
                    }}
                >
                    {/* Slide — Image */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={slides[currentSlide].src}
                            alt={slides[currentSlide].title}
                            onError={(e) => {
                                // Fallback: gradient background with emoji if image fails
                                e.target.style.display = 'none';
                                e.target.parentElement.style.background = 'linear-gradient(135deg, #FF9933, #C5A059)';
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'opacity 0.5s ease'
                            }}
                        />

                        {/* Dark overlay with text */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                            padding: '2rem',
                            textAlign: 'center'
                        }}>
                            <h3 style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                fontSize: '2.2rem',
                                fontWeight: 700,
                                color: 'white',
                                marginBottom: '0.3rem',
                                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                            }}>
                                {slides[currentSlide].title}
                            </h3>
                            <p style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                fontSize: '1rem',
                                color: 'rgba(255,255,255,0.9)',
                                fontStyle: 'italic'
                            }}>
                                {slides[currentSlide].subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '15px',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.3)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '45px',
                            height: '45px',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(5px)',
                            zIndex: 10
                        }}
                    >
                        ‹
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '15px',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.3)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '45px',
                            height: '45px',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(5px)',
                            zIndex: 10
                        }}
                    >
                        ›
                    </button>

                    {/* Dots */}
                    <div style={{
                        position: 'absolute',
                        bottom: '15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '8px',
                        zIndex: 10
                    }}>
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                style={{
                                    width: currentSlide === i ? '30px' : '10px',
                                    height: '10px',
                                    borderRadius: '5px',
                                    background: currentSlide === i ? 'white' : 'rgba(255,255,255,0.5)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Address Cards */}
                <div
                    data-aos="fade-up"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '3rem'
                    }}
                >
                    <div style={{
                        background: 'rgba(255,248,231,0.03)',
                        border: '2px solid rgba(197,160,89,0.1)',
                        borderRadius: '15px',
                        padding: '1.5rem'
                    }}>
                        <h3 style={{ fontFamily: "'Times New Roman', Times, serif", color: '#C5A059', fontSize: '1.2rem' }}> International Centre</h3>
                        <p style={{ fontFamily: "'Times New Roman', Times, serif", color: 'rgba(255,248,231,0.8)' }}>Srividya Vishwa Samshodhana Pratishthanam (R.)</p>
                        <p style={{ fontFamily: "'Times New Roman', Times, serif", color: 'rgba(255,248,231,0.6)' }}>2498, Northumbria Dr, Sanford, FL 32771, USA</p>
                    </div>

                    <div style={{
                        background: 'rgba(255,248,231,0.03)',
                        border: '2px solid rgba(197,160,89,0.1)',
                        borderRadius: '15px',
                        padding: '1.5rem'
                    }}>
                        <h3 style={{ fontFamily: "'Times New Roman', Times, serif", color: '#C5A059', fontSize: '1.2rem' }}> Indian Centre</h3>
                        <p style={{ fontFamily: "'Times New Roman', Times, serif", color: 'rgba(255,248,231,0.7)' }}>No. 12, 1st Floor, 2nd Main, Dattatreya Nagara,</p>
                        <p style={{ fontFamily: "'Times New Roman', Times, serif", color: 'rgba(255,248,231,0.7)' }}>Hoskerehalli, BSK III stage, Bengaluru 560085</p>
                    </div>

                    <div style={{
                        background: 'rgba(255,248,231,0.03)',
                        border: '2px solid rgba(197,160,89,0.1)',
                        borderRadius: '15px',
                        padding: '1.5rem'
                    }}>
                        <h3 style={{ fontFamily: "'Times New Roman', Times, serif", color: '#C5A059', fontSize: '1.2rem' }}> Contact</h3>
                        <p style={{ fontFamily: "'Times New Roman', Times, serif", color: 'rgba(255,248,231,0.7)' }}><strong style={{ color: '#fff8e7' }}>Website:</strong> srividyauniversity.com</p>
                        <p style={{ fontFamily: "'Times New Roman', Times, serif", color: 'rgba(255,248,231,0.7)' }}><strong style={{ color: '#fff8e7' }}>Email:</strong> srividyauniversity.gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
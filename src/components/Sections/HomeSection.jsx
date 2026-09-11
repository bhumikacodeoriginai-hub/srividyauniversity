import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSection = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeg99cvPBfU9C4wwzUTdt0hqSjceADiNpVReRjgwiO7B5FE0A/viewform?pli=1';

    const handleApplyNow = () => window.open(GOOGLE_FORM_URL, '_blank');

    // Vedic Science related slides
    const slides = [
        { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=400&fit=crop', title: 'Veda', subtitle: 'The eternal wisdom of the ancient scriptures' },
        { src: 'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=1200&h=400&fit=crop', title: 'Agama', subtitle: 'Temple rituals and sacred traditions' },
        { src: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&h=400&fit=crop', title: 'Tantra', subtitle: 'Ancient practices of spiritual energy' },
        { src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&h=400&fit=crop', title: 'Shastra', subtitle: 'Traditional sciences and texts' },
        { src: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&h=400&fit=crop', title: 'Jyothisham', subtitle: 'The science of light and time' },
        { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop', title: 'Performing Arts', subtitle: 'Music, dance and dramatic traditions' },
        { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=400&fit=crop', title: 'Yogic Science', subtitle: 'Harmony of body, mind and spirit' }
    ];

    useEffect(() => {
        const interval = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4500);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

    const ink = '#2A1A10';
    const inkSoft = '#5C4634';

    return (
        <section id="home" className="svu-hero">
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

                {/* Slogan */}
                <p className="svu-hero__tagline">
                    &ldquo;A decade of service in preserving and spreading Indian traditional knowledge&rdquo;
                </p>

                <div className="svu-divider"><span className="svu-divider__mark">॥ ॐ ॥</span></div>

                {/* Hero grid */}
                <div className="svu-hero__grid">
                    {/* Left column */}
                    <div data-aos="fade-right">
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                            background: 'rgba(122,31,31,.08)', border: '1px solid rgba(122,31,31,.25)',
                            padding: '.45rem 1.2rem', borderRadius: '50px', fontSize: '.95rem',
                            color: '#7A1F1F', fontWeight: 600, marginBottom: '1rem'
                        }}>
                            &#10022; Accredited Higher Education Institution
                        </div>

                        <h1 style={{ lineHeight: 1.15, margin: 0 }}>
                            <span style={{ fontFamily: 'Tiro Devanagari Sanskrit, serif', fontSize: '1.8rem', color: '#E4802A', display: 'block' }}>श्रीविद्या</span>
                            <span style={{ fontSize: '3.8rem', color: '#7A1F1F', display: 'block', fontWeight: 800 }}>Srividya</span>
                            <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '1.05rem', color: inkSoft, display: 'block', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                                International University for Vedic Science
                            </span>
                        </h1>

                        <p style={{ fontSize: '1.08rem', color: ink, lineHeight: 1.85, marginTop: '1.5rem' }}>
                            Srividya International University for Vedic Science is an accredited higher education institution in
                            <span style={{ color: '#7A1F1F', fontWeight: 700 }}> Florida, USA</span>, specialising in Vedic&ndash;Sanskrit
                            studies and traditional Shastras — with a decade of academic history, three convocations and over
                            twenty-five doctoral graduates.
                        </p>

                        {/* Stats */}
                        <div className="svu-stats">
                            <div><div className="svu-stats__num">10+</div><div className="svu-stats__label">Years</div></div>
                            <div className="svu-stats__sep"></div>
                            <div><div className="svu-stats__num">25+</div><div className="svu-stats__label">Doctoral Graduates</div></div>
                            <div className="svu-stats__sep"></div>
                            <div><div className="svu-stats__num">3</div><div className="svu-stats__label">Convocations</div></div>
                        </div>

                        {/* Buttons */}
                        <div className="svu-hero__actions">
                            <button onClick={handleApplyNow} className="svu-btn svu-btn--primary">Apply Now</button>
                            <button onClick={() => navigate('/courses')} className="svu-btn svu-btn--outline">Explore Programs</button>
                        </div>
                    </div>

                    {/* Right column — traditional emblem panel */}
                    <div data-aos="fade-left">
                        <div className="svu-hero__emblem">
                            <span className="svu-hero__om">ॐ</span>
                            <h3>Vidyā Amṛtam Aśnute</h3>
                            <p>&ldquo;Through knowledge one attains the eternal.&rdquo;</p>
                            <div style={{ height: 1, background: 'rgba(255,255,255,.25)', margin: '1.4rem 0', position: 'relative' }}></div>
                            <p style={{ position: 'relative' }}>
                                Veda &middot; Agama &middot; Tantra &middot; Shastra<br />
                                Jyothisham &middot; Yogic Science &middot; Performing Arts
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image slider */}
                <div data-aos="fade-up" style={{
                    marginTop: '3rem', position: 'relative', borderRadius: '18px', overflow: 'hidden',
                    border: '1px solid var(--line)', boxShadow: '0 18px 44px rgba(94,22,22,.15)', height: '420px'
                }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                        <img
                            src={slides[currentSlide].src}
                            alt={slides[currentSlide].title}
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(135deg, #E4802A, #7A1F1F)'; }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity .5s ease' }}
                        />
                        <div className="svu-on-dark" style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                            padding: '2.2rem', textAlign: 'center'
                        }}>
                            <h3 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#fff', marginBottom: '.3rem', textShadow: '0 2px 10px rgba(0,0,0,.5)' }}>
                                {slides[currentSlide].title}
                            </h3>
                            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.92)', fontStyle: 'italic', margin: 0 }}>
                                {slides[currentSlide].subtitle}
                            </p>
                        </div>
                    </div>

                    <button onClick={prevSlide} aria-label="Previous slide" style={sliderBtn('left')}>&#8249;</button>
                    <button onClick={nextSlide} aria-label="Next slide" style={sliderBtn('right')}>&#8250;</button>

                    <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
                        {slides.map((_, i) => (
                            <button key={i} onClick={() => setCurrentSlide(i)} aria-label={`Go to slide ${i + 1}`}
                                style={{ width: currentSlide === i ? '28px' : '10px', height: '10px', borderRadius: '5px', background: currentSlide === i ? '#fff' : 'rgba(255,255,255,.55)', border: 'none', cursor: 'pointer', transition: 'all .3s ease' }} />
                        ))}
                    </div>
                </div>

                {/* Address cards */}
                <div data-aos="fade-up" className="svu-cards-3">
                    <div className="svu-card">
                        <h3>International Centre</h3>
                        <p>Srividya Vishwa Samshodhana Pratishthanam (R.)</p>
                        <p>2498, Northumbria Dr, Sanford, FL 32771, USA</p>
                    </div>
                    <div className="svu-card">
                        <h3>Indian Centre</h3>
                        <p>No. 12, 1st Floor, 2nd Main, Dattatreya Nagara,</p>
                        <p>Hoskerehalli, BSK III Stage, Bengaluru 560085</p>
                    </div>
                    <div className="svu-card">
                        <h3>Contact</h3>
                        <p><strong style={{ color: '#7A1F1F' }}>Website:</strong> srividyauniversity.com</p>
                        <p><strong style={{ color: '#7A1F1F' }}>Email:</strong> info@srividyauniversity.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

function sliderBtn(side) {
    return {
        position: 'absolute', top: '50%', [side]: '15px', transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,.35)', border: '1px solid rgba(255,255,255,.4)', borderRadius: '50%',
        width: '46px', height: '46px', cursor: 'pointer', fontSize: '1.6rem', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', zIndex: 10
    };
}

export default HomeSection;

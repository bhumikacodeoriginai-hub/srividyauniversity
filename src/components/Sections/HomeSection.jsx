import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { asset } from '../../utils/asset';

/* Small count-up number that animates when scrolled into view */
const Counter = ({ end, suffix = '', duration = 1400 }) => {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const done = useRef(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting && !done.current) {
                    done.current = true;
                    const start = performance.now();
                    const step = (now) => {
                        const t = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - t, 3);
                        setVal(Math.round(eased * end));
                        if (t < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            });
        }, { threshold: 0.4 });
        io.observe(el);
        return () => io.disconnect();
    }, [end, duration]);
    return <span ref={ref} className="svu-stats__num">{val}{suffix}</span>;
};

const HomeSection = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeg99cvPBfU9C4wwzUTdt0hqSjceADiNpVReRjgwiO7B5FE0A/viewform?pli=1';

    const handleApplyNow = () => window.open(GOOGLE_FORM_URL, '_blank');

    // Real photographs from the University (public/images)
    const slides = [
        { src: '/images/IMG-20230609-WA0016.jpg', title: 'Convocation 2023', subtitle: 'Celebrating our doctoral graduates' },
        { src: '/images/DSC_0059.jpg', title: 'Academic Ceremonies', subtitle: 'Honouring scholarship and tradition' },
        { src: '/images/20200105_140802.jpg', title: 'Cultural Programmes', subtitle: 'Music, dance and the performing arts' },
        { src: '/images/IMG-20170612-WA0079.jpg', title: 'Workshops & Lectures', subtitle: 'Learning from eminent scholars' },
        { src: '/images/DSC_0175.jpg', title: 'Life on Campus', subtitle: 'A vibrant community of learners' },
        { src: '/images/IMG-20230609-WA0030.jpg', title: 'Preserving Tradition', subtitle: 'Vedic knowledge for a new generation' }
    ];

    useEffect(() => {
        const interval = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4500);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

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
                        <div className="svu-badge">&#10022; Accredited Higher Education Institution</div>

                        <h1 style={{ lineHeight: 1.15, margin: 0 }}>
                            <span className="svu-hero__sanskrit">श्रीविद्या</span>
                            <span className="svu-hero__name">Srividya</span>
                            <span className="svu-hero__tag">International University for Vedic Science</span>
                        </h1>

                        <p className="svu-hero__lead">
                            Srividya International University for Vedic Science is an accredited higher education institution in
                            <strong> Florida, USA</strong>, specialising in Vedic&ndash;Sanskrit studies and traditional Shastras —
                            with a decade of academic history, three convocations and over twenty-five doctoral graduates.
                        </p>

                        {/* Stats */}
                        <div className="svu-stats">
                            <div><Counter end={10} suffix="+" /><div className="svu-stats__label">Years</div></div>
                            <div className="svu-stats__sep"></div>
                            <div><Counter end={25} suffix="+" /><div className="svu-stats__label">Doctoral Graduates</div></div>
                            <div className="svu-stats__sep"></div>
                            <div><Counter end={3} /><div className="svu-stats__label">Convocations</div></div>
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
                            key={currentSlide}
                            src={asset(slides[currentSlide].src)}
                            alt={slides[currentSlide].title}
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(135deg, #E4802A, #7A1F1F)'; }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'svuFadeIn .8s ease' }}
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
                        <p><strong style={{ color: 'var(--heading)' }}>Website:</strong> srividyauniversity.com</p>
                        <p><strong style={{ color: 'var(--heading)' }}>Email:</strong> info@srividyauniversity.com</p>
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

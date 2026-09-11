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

    const disciplines = [
        { name: 'Veda', icon: '📖', sub: 'Sacred scriptures' },
        { name: 'Agama', icon: '🏛️', sub: 'Temple traditions' },
        { name: 'Jyothisha', icon: '✨', sub: 'Vedic astronomy' },
        { name: 'Music', icon: '🎵', sub: 'Classical sangeetha' },
        { name: 'Dance', icon: '💃', sub: 'Performing arts' },
        { name: 'Yogic Science', icon: '🧘', sub: 'Body, mind & spirit' }
    ];

    const whyUs = [
        { icon: '🎓', title: 'Accredited Degrees', text: 'Recognised Diploma, Bachelor\u2019s, Master\u2019s and Doctoral programmes in traditional Shastras.' },
        { icon: '📜', title: 'Eminent Scholars', text: 'Learn from distinguished vidwans and professors with decades of experience.' },
        { icon: '🌍', title: 'Global Community', text: 'Centres in the USA and India, welcoming students from across the world.' },
        { icon: '🪔', title: 'Authentic Tradition', text: 'Faithful to the Vedic worldview while adapting to a modern context.' }
    ];

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

                {/* Image slider — full photo shown (contain) over a blurred fill */}
                <div data-aos="fade-up" className="svu-slider">
                    {/* Blurred backdrop fills the frame so any photo shape looks good */}
                    <img
                        key={`bg-${currentSlide}`}
                        className="svu-slider__bg"
                        src={asset(slides[currentSlide].src)}
                        alt=""
                        aria-hidden="true"
                    />
                    {/* Foreground photo — always fully visible, never cropped */}
                    <img
                        key={currentSlide}
                        className="svu-slider__img"
                        src={asset(slides[currentSlide].src)}
                        alt={slides[currentSlide].title}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="svu-on-dark svu-slider__caption">
                        <h3>{slides[currentSlide].title}</h3>
                        <p>{slides[currentSlide].subtitle}</p>
                    </div>

                    <button onClick={prevSlide} aria-label="Previous slide" style={sliderBtn('left')}>&#8249;</button>
                    <button onClick={nextSlide} aria-label="Next slide" style={sliderBtn('right')}>&#8250;</button>

                    <div className="svu-slider__dots">
                        {slides.map((_, i) => (
                            <button key={i} onClick={() => setCurrentSlide(i)} aria-label={`Go to slide ${i + 1}`}
                                className={currentSlide === i ? 'is-active' : ''} />
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

                {/* Disciplines highlight */}
                <div className="svu-block">
                    <div className="svu-head" data-aos="fade-up">
                        <span className="svu-eyebrow">॥ शास्त्राणि ॥</span>
                        <h2 className="svu-title">Our Disciplines</h2>
                        <div className="svu-divider"><span className="svu-divider__mark">❁</span></div>
                        <p className="svu-subtitle">Timeless traditions taught by eminent scholars</p>
                    </div>
                    <div className="svu-feature-grid" data-aos="fade-up">
                        {disciplines.map((d) => (
                            <div key={d.name} className="svu-feature" onClick={() => navigate('/disciplines')} role="button" tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter') navigate('/disciplines'); }}>
                                <span className="svu-feature__icon">{d.icon}</span>
                                <div className="svu-feature__title">{d.name}</div>
                                <div className="svu-feature__sub">{d.sub}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
                        <button className="svu-btn svu-btn--outline" onClick={() => navigate('/disciplines')}>Explore All Disciplines</button>
                    </div>
                </div>

                {/* Why Srividya */}
                <div className="svu-block">
                    <div className="svu-head" data-aos="fade-up">
                        <span className="svu-eyebrow">॥ किमर्थम् ॥</span>
                        <h2 className="svu-title">Why Srividya</h2>
                        <div className="svu-divider"><span className="svu-divider__mark">❁</span></div>
                        <p className="svu-subtitle">Where ancient wisdom meets modern education</p>
                    </div>
                    <div className="svu-why-grid" data-aos="fade-up">
                        {whyUs.map((w) => (
                            <div key={w.title} className="svu-why">
                                <div className="svu-why__icon">{w.icon}</div>
                                <h3>{w.title}</h3>
                                <p>{w.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Convocation announcement */}
                <div className="svu-block">
                    <div className="svu-announce" data-aos="fade-up">
                        <div className="svu-announce__badge">11 APR<br /><small>2026</small></div>
                        <div>
                            <h3>Convocation 2026</h3>
                            <p>Srividya International University for Vedic Science will conduct its 2026 convocation on 11 April 2026.
                                Students eligible to receive their degrees may contact their respective departments.</p>
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <div className="svu-cta-band" data-aos="zoom-in">
                    <span className="svu-hero__om">ॐ</span>
                    <h2>Begin your journey in Vedic learning</h2>
                    <p>Join a community devoted to preserving India&rsquo;s traditional knowledge. Applications for our
                        Diploma, Bachelor&rsquo;s, Master&rsquo;s and Doctoral programmes are open.</p>
                    <div className="svu-cta-band__actions">
                        <button className="svu-btn svu-btn--primary" onClick={handleApplyNow}>Apply Now</button>
                        <button className="svu-btn svu-btn--outline" onClick={() => navigate('/contact')}>Contact Admissions</button>
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

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { asset } from '../../utils/asset';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Disciplines', path: '/disciplines' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close the mobile menu whenever the route changes
    useEffect(() => { setOpen(false); }, [location.pathname]);

    return (
        <nav className={`svu-nav${scrolled ? ' svu-nav--scrolled' : ''}`}>
            <Link to="/" className="svu-nav__brand" onClick={() => setOpen(false)}>
                <img src={asset('/images/logo.webp')} alt="Srividya University logo" />
                <span>
                    <span className="svu-nav__title">Srividya University</span>
                    <span className="svu-nav__sub">Vedic Science &middot; Since a Decade</span>
                </span>
            </Link>

            <button
                className="svu-nav__toggle"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                {open ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                )}
            </button>

            <div className={`svu-nav__menu${open ? ' is-open' : ''}`}>
                <div className="svu-nav__links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`svu-nav__link${location.pathname === link.path ? ' is-active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="svu-nav__actions">
                    <ThemeToggle />
                    <Link to="/login" className="svu-nav__btn svu-nav__btn--outline">Login</Link>
                    <Link to="/signup" className="svu-nav__btn svu-nav__btn--solid">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

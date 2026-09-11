import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../utils/asset';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="svu-footer">
            <div className="svu-footer__inner">
                <div className="svu-footer__brand">
                    <div className="svu-footer__logo">
                        <img src={asset('/images/logo.webp')} alt="Srividya University logo" />
                        <div>
                            <span className="svu-footer__name">Srividya University</span>
                            <span className="svu-footer__tag">International University for Vedic Science</span>
                        </div>
                    </div>
                    <p className="svu-footer__mission">
                        Where ancient wisdom meets modern education — preserving and spreading
                        India&rsquo;s traditional knowledge across the world.
                    </p>
                    <div className="svu-footer__om">॥ विद्यया अमृतमश्नुते ॥</div>
                </div>

                <div className="svu-footer__col">
                    <h4>Explore</h4>
                    <Link to="/about">About</Link>
                    <Link to="/disciplines">Disciplines</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/faculty">Faculty</Link>
                </div>

                <div className="svu-footer__col">
                    <h4>Community</h4>
                    <Link to="/events">Events</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Student Login</Link>
                </div>

                <div className="svu-footer__col">
                    <h4>Reach Us</h4>
                    <p>Sanford, Florida, USA</p>
                    <p>Bengaluru, Karnataka, India</p>
                    <a href="mailto:info@srividyauniversity.com">info@srividyauniversity.com</a>
                    <a href="https://www.srividyauniversity.com" target="_blank" rel="noreferrer">srividyauniversity.com</a>
                </div>
            </div>

            <div className="svu-footer__bar">
                <span>&copy; {year} Srividya International University for Vedic Science. All rights reserved.</span>
                <span>Knowledge &middot; Wisdom &middot; Service</span>
            </div>
        </footer>
    );
};

export default Footer;

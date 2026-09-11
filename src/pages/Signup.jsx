import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { asset } from '../utils/asset';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        setError('');
        navigate('/login');
    };

    return (
        <div className="svu-auth">
            <div className="svu-auth__card" data-aos="zoom-in">
                {/* Decorative side */}
                <aside className="svu-auth__aside">
                    <span className="svu-auth__om">ॐ</span>
                    <h2>Join Srividya</h2>
                    <p>Create your account to begin learning the timeless traditions of Vedic science.</p>
                    <div className="svu-auth__line"></div>
                    <ul>
                        <li>Veda, Agama &amp; Jyothisha</li>
                        <li>Music, Dance &amp; Yoga</li>
                        <li>Accredited programmes</li>
                    </ul>
                </aside>

                {/* Form */}
                <div className="svu-auth__form">
                    <div className="svu-auth__brand">
                        <img src={asset('/images/logo.webp')} alt="Srividya University logo" />
                        <span>Srividya University</span>
                    </div>
                    <h1 className="svu-auth__title">Create your account</h1>
                    <p className="svu-auth__sub">Join our community of learners and scholars.</p>

                    {error && <div className="svu-auth__error">{error}</div>}

                    <form onSubmit={handleSignup} noValidate>
                        <div className="svu-field">
                            <label className="svu-label" htmlFor="su-name">Full Name</label>
                            <input id="su-name" className="svu-input" type="text" value={name}
                                onChange={(e) => setName(e.target.value)} placeholder="Your full name" autoComplete="name" />
                        </div>

                        <div className="svu-field">
                            <label className="svu-label" htmlFor="su-email">Email Address</label>
                            <input id="su-email" className="svu-input" type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
                        </div>

                        <div className="svu-field">
                            <label className="svu-label" htmlFor="su-pwd">Password</label>
                            <div className="svu-input-wrap">
                                <input id="su-pwd" className="svu-input svu-input--pwd" type={showPwd ? 'text' : 'password'}
                                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" autoComplete="new-password" />
                                <button type="button" className="svu-eye" aria-label={showPwd ? 'Hide password' : 'Show password'}
                                    onClick={() => setShowPwd((v) => !v)}>{showPwd ? '🙈' : '👁'}</button>
                            </div>
                        </div>

                        <div className="svu-field">
                            <label className="svu-label" htmlFor="su-cpwd">Confirm Password</label>
                            <input id="su-cpwd" className="svu-input" type={showPwd ? 'text' : 'password'}
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter your password" autoComplete="new-password" />
                        </div>

                        <button type="submit" className="svu-btn svu-btn--primary" style={{ width: '100%' }}>Create Account</button>
                    </form>

                    <p className="svu-auth__switch">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { asset } from '../utils/asset';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            setError('');
            navigate('/dashboard');
        } else {
            setError('Please fill in all fields.');
        }
    };

    return (
        <div className="svu-auth">
            <div className="svu-auth__card" data-aos="zoom-in">
                {/* Decorative side */}
                <aside className="svu-auth__aside">
                    <span className="svu-auth__om">ॐ</span>
                    <h2>Welcome Back</h2>
                    <p>Sign in to continue your journey in Vedic learning at Srividya International University.</p>
                    <div className="svu-auth__line"></div>
                    <ul>
                        <li>Access courses &amp; materials</li>
                        <li>Track your progress</li>
                        <li>Downloads &amp; notifications</li>
                    </ul>
                </aside>

                {/* Form */}
                <div className="svu-auth__form">
                    <div className="svu-auth__brand">
                        <img src={asset('/images/logo.webp')} alt="Srividya University logo" />
                        <span>Srividya University</span>
                    </div>
                    <h1 className="svu-auth__title">Login to your account</h1>
                    <p className="svu-auth__sub">Enter your credentials to access the student portal.</p>

                    {error && <div className="svu-auth__error">{error}</div>}

                    <form onSubmit={handleLogin} noValidate>
                        <div className="svu-field">
                            <label className="svu-label" htmlFor="login-email">Email Address</label>
                            <div className="svu-input-wrap">
                                <input id="login-email" className="svu-input" type="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
                            </div>
                        </div>

                        <div className="svu-field">
                            <label className="svu-label" htmlFor="login-password">Password</label>
                            <div className="svu-input-wrap">
                                <input id="login-password" className="svu-input svu-input--pwd" type={showPwd ? 'text' : 'password'}
                                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password" />
                                <button type="button" className="svu-eye" aria-label={showPwd ? 'Hide password' : 'Show password'}
                                    onClick={() => setShowPwd((v) => !v)}>{showPwd ? '🙈' : '👁'}</button>
                            </div>
                        </div>

                        <div className="svu-auth__row">
                            <span></span>
                            <Link to="/contact">Forgot password?</Link>
                        </div>

                        <button type="submit" className="svu-btn svu-btn--primary" style={{ width: '100%' }}>Login</button>
                    </form>

                    <p className="svu-auth__switch">Don&rsquo;t have an account? <Link to="/signup">Create one</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress((window.scrollY / total) * 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '3px',
            background: 'rgba(255,248,231,0.05)',
            zIndex: 9999
        }}>
            <div style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #FF9933, #C5A059)',
                transition: 'width 0.1s ease'
            }} />
        </div>
    );
};

export default ScrollProgress;
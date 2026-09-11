import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    }, []);

    if (!isLoading) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#0a0500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            flexDirection: 'column',
            gap: '2rem'
        }}>
            <span style={{ fontFamily: 'Tiro Devanagari Sanskrit', fontSize: '4rem', color: '#FF9933' }}>ॐ</span>
            <div style={{
                color: '#C5A059',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '1.2rem',
                letterSpacing: '2px'
            }}>
                Loading...
            </div>
        </div>
    );
};

export default LoadingScreen;
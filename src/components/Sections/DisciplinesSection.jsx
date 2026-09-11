import React, { useState } from 'react';

const DisciplinesSection = () => {
  const [activeTab, setActiveTab] = useState('dance');

  const disciplines = ['Veda', 'Agama', 'Jyothisha', 'Music', 'Dance', 'Yogic Science'];
  const danceList = ['Bharatanatyam', 'Kathak', 'Kuchipudi', 'Mohini Attam', 'Odissi', 'Kathakali', 'Manipuri', 'Sattriya', 'Yakshagana'];
  const musicList = ['Karnataka Sangeetha', 'Hindustani Sangeetha'];
  const talavadyaList = ['Mridanga', 'Tabla', 'Flute', 'Violin', 'Veena', 'Jalatarang', 'Santoor', 'Saksophone', 'Gatam', 'Khanjeera', 'Morsing', 'Tavile (Dolak)', 'Konnakol', 'Nattuvanga'];

  return (
    <section id="disciplines" style={{
      minHeight: '100vh',
      padding: '100px 2rem 60px',
      position: 'relative'
    }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          <span style={{
            fontFamily: 'Tiro Devanagari Sanskrit',
            fontSize: '1.8rem',
            color: '#FF9933',
            display: 'block',
            marginBottom: '0.5rem',
            opacity: 0.8
          }}>शास्त्राणि</span>
          <h2 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '3.5rem',
            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>Our Disciplines</h2>
          <p style={{
            fontFamily: "'Times New Roman', Times, serif",
            color: 'rgba(255,248,231,0.7)',
            fontSize: '1.2rem',
            letterSpacing: '1px'
          }}>Explore the ancient wisdom traditions</p>
        </div>

        {/* Main Disciplines */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }} data-aos="fade-up">
          {disciplines.map((discipline, index) => {
            const icons = ['📖', '🏛️', '⭐', '🎵', '💃', '🧘'];
            return (
              <div key={index} style={{
                background: 'rgba(255,248,231,0.03)',
                border: '2px solid rgba(197,160,89,0.1)',
                borderRadius: '15px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icons[index]}</div>
                <h3 style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  color: '#fff8e7',
                  fontSize: '1rem',
                  fontWeight: 600
                }}>{discipline}</h3>
              </div>
            );
          })}
        </div>

        {/* Art Disciplines */}
        <div data-aos="fade-up">
          <h3 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '2rem',
            color: '#C5A059',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 600
          }}>Various Art Disciplines</h3>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <button onClick={() => setActiveTab('dance')} style={{
              padding: '0.8rem 2rem',
              border: `2px solid ${activeTab === 'dance' ? '#C5A059' : 'rgba(197,160,89,0.3)'}`,
              borderRadius: '50px',
              background: activeTab === 'dance' ? 'linear-gradient(135deg, #FF9933, #C5A059)' : 'transparent',
              color: activeTab === 'dance' ? 'white' : 'rgba(255,248,231,0.7)',
              cursor: 'pointer',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              fontWeight: activeTab === 'dance' ? 600 : 400
            }}>💃 Dance</button>

            <button onClick={() => setActiveTab('music')} style={{
              padding: '0.8rem 2rem',
              border: `2px solid ${activeTab === 'music' ? '#C5A059' : 'rgba(197,160,89,0.3)'}`,
              borderRadius: '50px',
              background: activeTab === 'music' ? 'linear-gradient(135deg, #FF9933, #C5A059)' : 'transparent',
              color: activeTab === 'music' ? 'white' : 'rgba(255,248,231,0.7)',
              cursor: 'pointer',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              fontWeight: activeTab === 'music' ? 600 : 400
            }}>🎵 Music</button>

            <button onClick={() => setActiveTab('talavadya')} style={{
              padding: '0.8rem 2rem',
              border: `2px solid ${activeTab === 'talavadya' ? '#C5A059' : 'rgba(197,160,89,0.3)'}`,
              borderRadius: '50px',
              background: activeTab === 'talavadya' ? 'linear-gradient(135deg, #FF9933, #C5A059)' : 'transparent',
              color: activeTab === 'talavadya' ? 'white' : 'rgba(255,248,231,0.7)',
              cursor: 'pointer',
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              fontWeight: activeTab === 'talavadya' ? 600 : 400
            }}>🥁 Talavadya</button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1rem'
          }}>
            {activeTab === 'dance' && danceList.map((item, index) => (
              <span key={index} style={{
                background: 'rgba(255,248,231,0.05)',
                border: '2px solid rgba(197,160,89,0.1)',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                textAlign: 'center',
                color: 'rgba(255,248,231,0.8)',
                fontSize: '0.9rem',
                fontFamily: "'Times New Roman', Times, serif"
              }}>{item}</span>
            ))}
            {activeTab === 'music' && musicList.map((item, index) => (
              <span key={index} style={{
                background: 'rgba(255,248,231,0.05)',
                border: '2px solid rgba(197,160,89,0.1)',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                textAlign: 'center',
                color: 'rgba(255,248,231,0.8)',
                fontSize: '0.9rem',
                fontFamily: "'Times New Roman', Times, serif"
              }}>{item}</span>
            ))}
            {activeTab === 'talavadya' && talavadyaList.map((item, index) => (
              <span key={index} style={{
                background: 'rgba(255,248,231,0.05)',
                border: '2px solid rgba(197,160,89,0.1)',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                textAlign: 'center',
                color: 'rgba(255,248,231,0.8)',
                fontSize: '0.9rem',
                fontFamily: "'Times New Roman', Times, serif"
              }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
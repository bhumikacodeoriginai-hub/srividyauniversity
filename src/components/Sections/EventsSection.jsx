import React from 'react';

const EventsSection = () => {
  return (
    <section id="events" style={{
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
          }}>उत्सव</span>
          <h2 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '3.5rem',
            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>Events</h2>
          <p style={{
            fontFamily: "'Times New Roman', Times, serif",
            color: 'rgba(255,248,231,0.7)',
            fontSize: '1.2rem',
            letterSpacing: '1px'
          }}>Celebrating knowledge and community</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '4rem'
        }} data-aos="fade-up">
          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '2rem'
          }}>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: 600
            }}>Recent Events</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{
                padding: '0.8rem 0',
                borderBottom: '2px solid rgba(197,160,89,0.05)',
                color: 'rgba(255,248,231,0.8)',
                fontFamily: "'Times New Roman', Times, serif"
              }}>3rd Convocation - December 2023</li>
              <li style={{
                padding: '0.8rem 0',
                borderBottom: '2px solid rgba(197,160,89,0.05)',
                color: 'rgba(255,248,231,0.8)',
                fontFamily: "'Times New Roman', Times, serif"
              }}>Vedic Symposium - November 2023</li>
              <li style={{
                padding: '0.8rem 0',
                color: 'rgba(255,248,231,0.8)',
                fontFamily: "'Times New Roman', Times, serif"
              }}>Music Festival - October 2023</li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '2rem'
          }}>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: 600
            }}>Upcoming Events</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{
                padding: '0.8rem 0',
                borderBottom: '2px solid rgba(197,160,89,0.05)',
                color: 'rgba(255,248,231,0.8)',
                fontFamily: "'Times New Roman', Times, serif"
              }}>Music Festival - January 2024</li>
              <li style={{
                padding: '0.8rem 0',
                borderBottom: '2px solid rgba(197,160,89,0.05)',
                color: 'rgba(255,248,231,0.8)',
                fontFamily: "'Times New Roman', Times, serif"
              }}>Yoga Workshop - February 2024</li>
              <li style={{
                padding: '0.8rem 0',
                color: 'rgba(255,248,231,0.8)',
                fontFamily: "'Times New Roman', Times, serif"
              }}>Vedic Conference - March 2024</li>
            </ul>
          </div>
        </div>

        {/* Affiliates */}
        <div data-aos="fade-up">
          <h3 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '2rem',
            color: '#C5A059',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 600
          }}>Affiliates</h3>
          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h4 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.1rem',
              fontWeight: 600
            }}>🤝 Trust</h4>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}>Sru Purandara Dasa Mahavidyala Seva Trust</p>
          </div>

          <h3 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '2rem',
            color: '#C5A059',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 600
          }}>Study Centres</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {['Vatsala Patil', 'Sri Shankara Veda Pathashala', 'Srividya Shaktipaath'].map((center, i) => (
              <div key={i} style={{
                background: 'rgba(255,248,231,0.03)',
                border: '2px solid rgba(197,160,89,0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🏛️</span>
                <p style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  color: 'rgba(255,248,231,0.8)'
                }}>{center}</p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h4 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              fontWeight: 600
            }}>Mahayogashram ®</h4>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.7)'
            }}>2912, A Ward, Wangi Bol</p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.7)'
            }}>Mahadwar Road, Kolhapur 416012</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
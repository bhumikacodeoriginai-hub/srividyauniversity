import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" style={{
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
          }}>संपर्क</span>
          <h2 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '3.5rem',
            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>Contact Us</h2>
          <p style={{
            fontFamily: "'Times New Roman', Times, serif",
            color: 'rgba(255,248,231,0.7)',
            fontSize: '1.2rem',
            letterSpacing: '1px'
          }}>Connect with us for any inquiries</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }} data-aos="fade-up">
          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              marginBottom: '0.8rem',
              fontWeight: 600
            }}>Indian Centre</h3>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)',
              lineHeight: '1.6'
            }}>No. 12, First Floor, 2nd Main, Dattatreya Nagara,</p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)',
              lineHeight: '1.6'
            }}>Hoskerehalli, BSK III stage, Bengaluru 560085</p>
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              marginBottom: '0.8rem',
              fontWeight: 600
            }}>Global Head Office</h3>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}><strong style={{ color: '#C5A059' }}>S.R. Narasimha Murthy</strong></p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}>98867 14586</p>
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              marginBottom: '0.8rem',
              fontWeight: 600
            }}>General Admissions</h3>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}><strong style={{ color: '#C5A059' }}>Dr. Sowmya</strong></p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}>98453 06034</p>
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              marginBottom: '0.8rem',
              fontWeight: 600
            }}>Music</h3>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}><strong style={{ color: '#C5A059' }}>Dr. M.V. Archana</strong></p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}>98860 77508</p>
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              marginBottom: '0.8rem',
              fontWeight: 600
            }}>Dance & Yogic Science</h3>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}><strong style={{ color: '#C5A059' }}>Dr. Jayashree Ravi Hegde</strong></p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}>9740440658</p>
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              marginBottom: '0.8rem',
              fontWeight: 600
            }}>Office Timings</h3>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}>Monday-Friday: 10.00a.m - 5.00 p.m. (IST)</p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.4)',
              fontStyle: 'italic'
            }}>Saturday and Sunday Holidays</p>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '2px solid rgba(197,160,89,0.1)'
        }} data-aos="fade-up">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}><strong style={{ color: '#C5A059' }}>Website:</strong> srividyauniversity.com</p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}><strong style={{ color: '#C5A059' }}>Email:</strong> srividyauniversity.gmail.com</p>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)'
            }}><strong style={{ color: '#C5A059' }}>Jyotishya:</strong> Dr. S.R. Narasimha Murthy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
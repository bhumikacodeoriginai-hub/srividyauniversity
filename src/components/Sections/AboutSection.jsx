import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" style={{
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
          }}>आत्मनो मोक्षार्थं जगद्धिताय च</span>
          <h2 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '3.5rem',
            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>About Srividya</h2>
          <p style={{
            fontFamily: "'Times New Roman', Times, serif",
            color: 'rgba(255,248,231,0.7)',
            fontSize: '1.2rem',
            letterSpacing: '1px'
          }}>Where Ancient Wisdom Meets Modern Education</p>
        </div>

        {/* Vision & Mission */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '4rem'
        }} data-aos="fade-up">
          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '20px',
            padding: '2.5rem'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></div>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '2rem',
              color: '#C5A059',
              marginBottom: '1rem',
              fontWeight: 600
            }}>Vision</h3>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)',
              lineHeight: '1.8'
            }}>
              To foster global spiritual well-being through advanced Vedic knowledge,
              cultivating deep proficiency and faith in traditional systems including
              Tantra, Agama, Jyothisha, Music, and Yoga. Srividya International University
              aims to inspire an enduring commitment to the Vedic worldview—a framework
              that imparts profound meaning and purpose to human existence, while offering
              an ethical pathway toward personal fulfilment and self-realization.
            </p>
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '20px',
            padding: '2.5rem'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></div>
            <h3 style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '2rem',
              color: '#C5A059',
              marginBottom: '1rem',
              fontWeight: 600
            }}>Mission</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{
                display: 'flex',
                gap: '1rem',
                padding: '0.8rem 0',
                borderBottom: '2px solid rgba(197,160,89,0.05)',
                color: 'rgba(255,248,231,0.8)',
                lineHeight: '1.6',
                fontFamily: "'Times New Roman', Times, serif"
              }}>
                <span style={{ color: '#C5A059', fontWeight: 700 }}>✓</span>
                <span>Contemporary Vedic Education: To deliver comprehensive instruction in Vedic Science, effectively adapting ancient wisdom to modern contextual frameworks.</span>
              </li>
              <li style={{
                display: 'flex',
                gap: '1rem',
                padding: '0.8rem 0',
                borderBottom: '2px solid rgba(197,160,89,0.05)',
                color: 'rgba(255,248,231,0.8)',
                lineHeight: '1.6',
                fontFamily: "'Times New Roman', Times, serif"
              }}>
                <span style={{ color: '#C5A059', fontWeight: 700 }}>✓</span>
                <span>Advanced Traditional Studies: To provide specialized higher education in Veda, Tantra, Agama, Jyothisha, Yoga, Music, Dance, Ayurveda, and allied traditional disciplines.</span>
              </li>
              <li style={{
                display: 'flex',
                gap: '1rem',
                padding: '0.8rem 0',
                borderBottom: '2px solid rgba(197,160,89,0.05)',
                color: 'rgba(255,248,231,0.8)',
                lineHeight: '1.6',
                fontFamily: "'Times New Roman', Times, serif"
              }}>
                <span style={{ color: '#C5A059', fontWeight: 700 }}>✓</span>
                <span>Degree Conferral: To offer globally recognized academic programs, awarding Diploma, Associate's, Bachelor's, Master's, and Doctoral degrees in traditional shastras.</span>
              </li>
              <li style={{
                display: 'flex',
                gap: '1rem',
                padding: '0.8rem 0',
                color: 'rgba(255,248,231,0.8)',
                lineHeight: '1.6',
                fontFamily: "'Times New Roman', Times, serif"
              }}>
                <span style={{ color: '#C5A059', fontWeight: 700 }}>✓</span>
                <span>Global Outreach & Engagement: To organize international courses, workshops, symposiums, lectures, and demonstrations, making Vedic traditions accessible to a global audience.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Governance */}
        <div style={{ marginTop: '3rem' }} data-aos="fade-up">
          <h3 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '2rem',
            color: '#C5A059',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 600
          }}>Governance & Committees</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(255,248,231,0.03)',
              border: '2px solid rgba(197,160,89,0.1)',
              borderRadius: '15px',
              padding: '1.5rem'
            }}>
              <h4 style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#C5A059',
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                fontWeight: 600
              }}> President</h4>
              <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#fff8e7',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>Dr. Ashok Ramakrishnan</p>
              <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'rgba(255,248,231,0.7)',
                fontSize: '0.9rem'
              }}>Sri Ashok Ramakrishnan, a resident of Sanford, Florida is the Founder President. He is an Engineer, an enthusiastic NRI, very keen in promoting Vedic Studies & has formed the University with innovative ideas.</p>
            </div>

            <div style={{
              background: 'rgba(255,248,231,0.03)',
              border: '2px solid rgba(197,160,89,0.1)',
              borderRadius: '15px',
              padding: '1.5rem'
            }}>
              <h4 style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#C5A059',
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                fontWeight: 600
              }}>Vice Chancellor</h4>
              <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#fff8e7',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>Dr. J. Sreenivasa Murthy</p>
              <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'rgba(255,248,231,0.7)',
                fontSize: '0.9rem'
              }}>The first Vice-Chancellor of the University is Dr. J. Sreenivasa Murthy, an Eminent Scholar of Sanskrit, retired Principal & HOD, Sanskrit, M.E.S College, Bangalore.</p>
            </div>

            <div style={{
              background: 'rgba(255,248,231,0.03)',
              border: '2px solid rgba(197,160,89,0.1)',
              borderRadius: '15px',
              padding: '1.5rem'
            }}>
              <h4 style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#C5A059',
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                fontWeight: 600
              }}>Vice President</h4>
              <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#fff8e7',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>Dr. S.R. Narasimha Murthy</p>
            </div>

            <div style={{
              background: 'rgba(255,248,231,0.03)',
              border: '2px solid rgba(197,160,89,0.1)',
              borderRadius: '15px',
              padding: '1.5rem'
            }}>
              <h4 style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#C5A059',
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                fontWeight: 600
              }}>Syndicate Member</h4>
              <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#fff8e7',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>Dr. M.V. Archana</p>
              <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'rgba(255,248,231,0.7)',
                fontSize: '0.9rem'
              }}>An accomplished musician with over 40 years of distinguished experience. Currently serves as Syndicate Member and Dean of the Music Department.</p>
            </div>
          </div>
        </div>

        {/* Academic Council */}
        <div style={{ marginTop: '4rem' }} data-aos="fade-up">
          <h3 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '2rem',
            color: '#C5A059',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 600
          }}>Academic Council</h3>
          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '2rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: '2px solid rgba(197,160,89,0.1)',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'rgba(255,248,231,0.6)'
              }}><span style={{ fontWeight: 600 }}>Chairman:</span> <span style={{ color: '#fff8e7' }}>Dr. Srinivas Murty</span></div>
              <div style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'rgba(255,248,231,0.6)'
              }}><span style={{ fontWeight: 600 }}>Co-ordinator:</span> <span style={{ color: '#fff8e7' }}>Dr. S.R. Narasimha Murthy</span></div>
            </div>
            <div style={{
              display: 'grid',
              gap: '1rem'
            }}>
              <div style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'rgba(255,248,231,0.8)'
              }}><span style={{ color: '#C5A059', fontWeight: 600 }}>Agama:</span> Vid. Ganapathi Mahabaleshwara Shastry, Bangalore</div>
              <div style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'rgba(255,248,231,0.8)'
              }}><span style={{ color: '#C5A059', fontWeight: 600 }}>Music:</span> Dr. N. Raghu, Dr. M.V. Archana</div>
              <div style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'rgba(255,248,231,0.8)'
              }}><span style={{ color: '#C5A059', fontWeight: 600 }}>Dance and Yogic Science:</span> Dr. Jayashree Ravi Hegde</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
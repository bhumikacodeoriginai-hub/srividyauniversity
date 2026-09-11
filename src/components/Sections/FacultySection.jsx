import React from 'react';

const FacultySection = () => {
  const faculty = {
    vedaAgama: ['Vid. Ganapathi Mahabaleshwara Shastry, Bangalore'],
    music: ['Dr. M.V. Archana', 'Dr. G. Sowmya'],
    percussion: ['Vid. B.S Prashant'],
    jyotishya: ['Dr. S.R. Narasimha Murthy']
  };

  // Governance & Committees
  const governance = [
    {
      name: 'Dr. Ashok Ramakrishnan',
      role: 'President',
      desc: 'Sri Ashok Ramakrishnan, a resident of Sanford, Florida is the Founder President. He is an Engineer, an enthusiastic NRI, very keen in promoting Vedic Studies & has formed the University with innovative ideas.'
    },
    {
      name: 'Dr. J. Sreenivasa Murthy',
      role: 'Vice Chancellor',
      desc: 'The first Vice-Chancellor of the University is Dr. J. Sreenivasa Murthy, an Eminent Scholar of Sanskrit, retired Principal & HOD, Sanskrit, M.E.S College, Bangalore. He is an Educationist associated with Advisory and Evaluation committee of many Universities and Colleges. Under his able guidance the University has launched its activities.'
    },
    {
      name: 'Dr. S.R. Narasimha Murthy',
      role: 'Vice President',
      desc: ''
    },
    {
      name: 'Dr. M.V. Archana',
      role: 'Syndicate Member',
      desc: 'An accomplished musician with over 40 years of distinguished experience in the industry. A former visiting faculty member in the Music Department at Bangalore University, they currently serve as a Syndicate Member and Dean of the Music Department at SVSP, where she also oversee the examination section.'
    }
  ];

  // Academic Council
  const academicCouncil = {
    chairman: 'Dr. Srinivas Murty',
    coordinator: 'Dr. S.R. Narasimha Murthy',
    members: [
      { subject: 'Agama', names: ['Vid. Ganapathi Mahabaleshwara Shastry, Bangalore'] },
      { subject: 'Music', names: ['Dr. N. Raghu', 'Dr. M.V. Archana'] },
      { subject: 'Dance and Yogic Science', names: ['Dr. Jayashree Ravi Hegde'] }
    ]
  };

  return (
    <section id="faculty" style={{
      minHeight: '100vh',
      padding: '100px 2rem 60px',
      position: 'relative'
    }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

        {/* ============ FACULTY HEADER ============ */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          <span style={{
            fontFamily: 'Tiro Devanagari Sanskrit',
            fontSize: '1.8rem',
            color: '#FF9933',
            display: 'block',
            marginBottom: '0.5rem',
            opacity: 0.8
          }}>आचार्य</span>
          <h2 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '3.5rem',
            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>Our Faculty</h2>
          <p style={{
            fontFamily: "'Times New Roman', Times, serif",
            color: 'rgba(255,248,231,0.7)',
            fontSize: '1.2rem',
            letterSpacing: '1px'
          }}>Guiding lights of wisdom</p>
        </div>

        {/* ============ FACULTY GRID ============ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }} data-aos="fade-up">
          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📖</div>
            <h4 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              fontWeight: 600
            }}>Veda & Agama</h4>
            {faculty.vedaAgama.map((name, i) => <p key={i} style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)',
              margin: '0.3rem 0'
            }}>{name}</p>)}
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎵</div>
            <h4 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              fontWeight: 600
            }}>Music</h4>
            {faculty.music.map((name, i) => <p key={i} style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)',
              margin: '0.3rem 0'
            }}>{name}</p>)}
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🥁</div>
            <h4 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              fontWeight: 600
            }}>Percussion</h4>
            {faculty.percussion.map((name, i) => <p key={i} style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)',
              margin: '0.3rem 0'
            }}>{name}</p>)}
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.1)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⭐</div>
            <h4 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              fontWeight: 600
            }}>Jyotishya</h4>
            {faculty.jyotishya.map((name, i) => <p key={i} style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: 'rgba(255,248,231,0.8)',
              margin: '0.3rem 0'
            }}>{name}</p>)}
          </div>
        </div>

        {/* ============ GOVERNANCE & COMMITTEES ============ */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '4rem' }} data-aos="fade-up">
          <span style={{
            fontFamily: 'Tiro Devanagari Sanskrit',
            fontSize: '1.5rem',
            color: '#FF9933',
            display: 'block',
            marginBottom: '0.5rem',
            opacity: 0.8
          }}>प्रशासन</span>
          <h2 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '2.8rem',
            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>Governance & Committees</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }} data-aos="fade-up">
          {governance.map((person, i) => (
            <div key={i} style={{
              background: 'rgba(255,248,231,0.03)',
              border: '2px solid rgba(197,160,89,0.1)',
              borderRadius: '15px',
              padding: '1.5rem'
            }}>
              <h4 style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#C5A059',
                fontSize: '1.15rem',
                marginBottom: '0.3rem',
                fontWeight: 700
              }}>{person.name}</h4>
              <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#FF9933',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                marginBottom: '0.8rem',
                fontWeight: 600
              }}>{person.role}</p>
              {person.desc && (
                <p style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  color: 'rgba(255,248,231,0.7)',
                  fontSize: '0.9rem',
                  lineHeight: '1.6'
                }}>{person.desc}</p>
              )}
            </div>
          ))}
        </div>

        {/* ============ ACADEMIC COUNCIL ============ */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '5rem' }} data-aos="fade-up">
          <span style={{
            fontFamily: 'Tiro Devanagari Sanskrit',
            fontSize: '1.5rem',
            color: '#FF9933',
            display: 'block',
            marginBottom: '0.5rem',
            opacity: 0.8
          }}>शैक्षिक परिषद</span>
          <h2 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '2.8rem',
            background: 'linear-gradient(135deg, #FF9933, #C5A059)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>Academic Council</h2>
        </div>

        {/* Chairman & Coordinator */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }} data-aos="fade-up">
          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.2)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#FF9933',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              marginBottom: '0.5rem'
            }}>Chairman</p>
            <h4 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              fontWeight: 700
            }}>{academicCouncil.chairman}</h4>
          </div>

          <div style={{
            background: 'rgba(255,248,231,0.03)',
            border: '2px solid rgba(197,160,89,0.2)',
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#FF9933',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              marginBottom: '0.5rem'
            }}>Co-ordinator</p>
            <h4 style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: '#C5A059',
              fontSize: '1.2rem',
              fontWeight: 700
            }}>{academicCouncil.coordinator}</h4>
          </div>
        </div>

        {/* Members */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }} data-aos="fade-up">
          {academicCouncil.members.map((group, i) => (
            <div key={i} style={{
              background: 'rgba(255,248,231,0.03)',
              border: '2px solid rgba(197,160,89,0.1)',
              borderRadius: '15px',
              padding: '1.5rem'
            }}>
              <h4 style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#C5A059',
                fontSize: '1.1rem',
                marginBottom: '0.8rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(197,160,89,0.2)',
                paddingBottom: '0.5rem'
              }}>{group.subject}</h4>
              {group.names.map((name, j) => (
                <p key={j} style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  color: 'rgba(255,248,231,0.8)',
                  fontSize: '0.95rem',
                  margin: '0.4rem 0'
                }}>{name}</p>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacultySection;
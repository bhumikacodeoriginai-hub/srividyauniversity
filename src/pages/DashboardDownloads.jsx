import React from 'react';
import { useTheme } from '../context/ThemeContext';

const DashboardDownloads = () => {
    const { isDarkMode } = useTheme();

    const downloads = [
        {
            name: 'Application Form',
            icon: '📄',
            desc: 'Download the application form for admission',
            size: '2.4 MB',
            date: 'Updated: 01-09-2024',
            url: 'https://srividyauniversity.org/sites/default/files/Application_2025.pdf'
        },
        {
            name: 'PhD Proposal Form',
            icon: '📄',
            desc: 'Download the PhD proposal form for research',
            size: '1.8 MB',
            date: 'Updated: 15-08-2024',
            url: 'https://srividyauniversity.org/sites/default/files/Phd_Proposal_Form.pdf'
        },
        {
            name: 'Online Application Form',
            icon: '🔗',
            desc: 'Link to online application form',
            size: 'Online',
            date: 'Active: 24/7',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSeg99cvPBfU9C4wwzUTdt0hqSjceADiNpVReRjgwiO7B5FE0A/viewform?pli=1'
        },
    ];

    const handleDownload = (url, name) => {
        // For online form, open in new tab
        if (url.startsWith('http')) {
            window.open(url, '_blank');
        } else {
            // For PDF downloads
            const link = document.createElement('a');
            link.href = url;
            link.download = name + '.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div>
            <h1 style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '2.5rem',
                background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                fontWeight: 700
            }}>
            </h1>

            <p style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: isDarkMode ? 'rgba(255,248,231,0.5)' : 'rgba(0,0,0,0.5)',
                fontSize: '0.95rem',
                marginBottom: '1.5rem'
            }}>
                Select the links below to download the application forms you need:
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem'
            }}>
                {downloads.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleDownload(item.url, item.name)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1.5rem',
                            background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                            border: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                            borderRadius: '15px',
                            textDecoration: 'none',
                            color: isDarkMode ? '#fff8e7' : '#1a0a00',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateX(10px)';
                            e.target.style.boxShadow = isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateX(0px)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{
                                fontSize: '2.5rem'
                            }}>{item.icon}</div>
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    fontWeight: 600,
                                    fontSize: '1.1rem'
                                }}>{item.name}</div>
                                <div style={{
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: isDarkMode ? 'rgba(255,248,231,0.4)' : 'rgba(0,0,0,0.4)',
                                    fontSize: '0.85rem'
                                }}>{item.desc}</div>
                            </div>
                            <div style={{
                                color: '#C5A059',
                                fontSize: '1.5rem'
                            }}>{item.url.startsWith('http') ? '🔗' : '⬇'}</div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '0.8rem',
                            paddingTop: '0.8rem',
                            borderTop: `1px solid ${isDarkMode ? 'rgba(197,160,89,0.05)' : 'rgba(0,0,0,0.05)'}`
                        }}>
                            <span style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? 'rgba(255,248,231,0.3)' : 'rgba(0,0,0,0.3)',
                                fontSize: '0.75rem'
                            }}>{item.size}</span>
                            <span style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: isDarkMode ? 'rgba(255,248,231,0.3)' : 'rgba(0,0,0,0.3)',
                                fontSize: '0.75rem'
                            }}>{item.date}</span>
                            <span style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                color: '#C5A059',
                                fontSize: '0.75rem',
                                fontWeight: 600
                            }}>
                                {item.url.startsWith('http') ? 'Click to Open' : 'Click to Download'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardDownloads;
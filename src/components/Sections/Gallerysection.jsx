import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { asset } from '../../utils/asset';

const GallerySection = () => {
    const { isDarkMode } = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const galleryImages = [
        // ===== Convocation =====
        { id: 1, src: '/images/Convocationi invitation_1.png', title: 'Convocation Invitation', category: 'Convocation' },

        // ===== Events (20200105 series) =====
        { id: 2, src: '/images/20200105_101040_0.jpg', title: '', category: 'Events' },
        { id: 3, src: '/images/20200105_101059.jpg', title: '', category: 'Events' },
        { id: 4, src: '/images/20200105_101419.jpg', title: '', category: 'Events' },
        { id: 5, src: '/images/20200105_140802.jpg', title: '', category: 'Events' },
        { id: 6, src: '/images/20200105_140827.jpg', title: '', category: 'Events' },
        { id: 7, src: '/images/20200105_151400.jpg', title: '', category: 'Events' },

        // ===== Events (DSC series) =====
        { id: 8, src: '/images/DSC_0011.jpg', title: '', category: 'Events' },
        { id: 9, src: '/images/DSC_0016.jpg', title: '', category: 'Events' },
        { id: 10, src: '/images/DSC_0017.jpg', title: '', category: 'Events' },
        { id: 11, src: '/images/DSC_0044.jpg', title: '', category: 'Events' },
        { id: 12, src: '/images/DSC_0048.jpg', title: '', category: 'Events' },
        { id: 13, src: '/images/DSC_0051.jpg', title: '', category: 'Events' },
        { id: 14, src: '/images/DSC_0059.jpg', title: '', category: 'Events' },
        { id: 15, src: '/images/DSC_0061.jpg', title: '', category: 'Events' },
        { id: 16, src: '/images/DSC_0063.jpg', title: '', category: 'Events' },
        { id: 17, src: '/images/DSC_0064.jpg', title: '', category: 'Events' },
        { id: 18, src: '/images/DSC_0072.jpg', title: '', category: 'Events' },
        { id: 19, src: '/images/DSC_0131.jpg', title: '', category: 'Events' },
        { id: 20, src: '/images/DSC_0132.jpg', title: '', category: 'Events' },
        { id: 21, src: '/images/DSC_0135.jpg', title: '', category: 'Events' },
        { id: 22, src: '/images/DSC_0138.jpg', title: '', category: 'Events' },
        { id: 23, src: '/images/DSC_0144.jpg', title: '', category: 'Events' },
        { id: 24, src: '/images/DSC_0148.jpg', title: '', category: 'Events' },
        { id: 25, src: '/images/DSC_0149.jpg', title: '', category: 'Events' },
        { id: 26, src: '/images/DSC_0150.jpg', title: '', category: 'Events' },
        { id: 27, src: '/images/DSC_0154.jpg', title: '', category: 'Events' },
        { id: 28, src: '/images/DSC_0175.jpg', title: '', category: 'Events' },
        { id: 29, src: '/images/DSC_0199.jpg', title: '', category: 'Events' },
        { id: 30, src: '/images/DSC_0200.jpg', title: '', category: 'Events' },
        { id: 31, src: '/images/DSC_0201.jpg', title: '', category: 'Events' },
        { id: 32, src: '/images/DSC_0202.jpg', title: '', category: 'Events' },
        { id: 33, src: '/images/DSC_0204.jpg', title: '', category: 'Events' },
        { id: 34, src: '/images/DSC_0205.jpg', title: '', category: 'Events' },
        { id: 35, src: '/images/DSC_0208.jpg', title: '', category: 'Events' },
        { id: 36, src: '/images/DSC_0210.jpg', title: '', category: 'Events' },
        { id: 37, src: '/images/DSC_0212.jpg', title: '', category: 'Events' },
        { id: 38, src: '/images/DSC_0214.jpg', title: '', category: 'Events' },
        { id: 39, src: '/images/DSC_0215.jpg', title: '', category: 'Events' },
        { id: 40, src: '/images/DSC_0216.jpg', title: '', category: 'Events' },
        { id: 41, src: '/images/DSC_0221.jpg', title: '', category: 'Events' },

        // ===== Events (IMG-20170612 series) =====
        { id: 42, src: '/images/IMG-20170612-WA0048.jpg', title: '', category: 'Events' },
        { id: 43, src: '/images/IMG-20170612-WA0049.jpg', title: '', category: 'Events' },
        { id: 44, src: '/images/IMG-20170612-WA0059.jpg', title: '', category: 'Events' },
        { id: 45, src: '/images/IMG-20170612-WA0064.jpg', title: '', category: 'Events' },
        { id: 46, src: '/images/IMG-20170612-WA0075.jpg', title: '', category: 'Events' },
        { id: 47, src: '/images/IMG-20170612-WA0079.jpg', title: '', category: 'Events' },
        { id: 48, src: '/images/IMG-20170612-WA0080.jpg', title: '', category: 'Events' },
        { id: 49, src: '/images/IMG-20170612-WA0082.jpg', title: '', category: 'Events' },
        { id: 50, src: '/images/IMG-20170612-WA0092.jpg', title: '', category: 'Events' },
        { id: 51, src: '/images/IMG-20170612-WA0096.jpg', title: '', category: 'Events' },
        { id: 52, src: '/images/IMG-20170612-WA0104.jpg', title: '', category: 'Events' },
        { id: 53, src: '/images/IMG-20170612-WA0105.jpg', title: '', category: 'Events' },
        { id: 54, src: '/images/IMG-20170612-WA0112.jpg', title: '', category: 'Events' },

        // ===== Events (IMG-20170918 series) =====
        { id: 55, src: '/images/IMG-20170918-WA0036.jpg', title: '', category: 'Events' },
        { id: 56, src: '/images/IMG-20170918-WA0037.jpg', title: '', category: 'Events' },
        { id: 57, src: '/images/IMG-20170918-WA0045.jpg', title: '', category: 'Events' },
        { id: 58, src: '/images/IMG-20170918-WA0052.jpg', title: '', category: 'Events' },
        { id: 59, src: '/images/IMG-20170918-WA0088.jpg', title: '', category: 'Events' },

        // ===== Events (IMG-20230609 series) =====
        { id: 60, src: '/images/IMG-20230609-WA0007.jpg', title: '', category: 'Events' },
        { id: 61, src: '/images/IMG-20230609-WA0008.jpg', title: '', category: 'Events' },
        { id: 62, src: '/images/IMG-20230609-WA0010.jpg', title: '', category: 'Events' },
        { id: 63, src: '/images/IMG-20230609-WA0012.jpg', title: '', category: 'Events' },
        { id: 64, src: '/images/IMG-20230609-WA0013.jpg', title: '', category: 'Events' },
        { id: 65, src: '/images/IMG-20230609-WA0015.jpg', title: '', category: 'Events' },
        { id: 66, src: '/images/IMG-20230609-WA0016.jpg', title: '', category: 'Events' },
        { id: 67, src: '/images/IMG-20230609-WA0017.jpg', title: '', category: 'Events' },
        { id: 68, src: '/images/IMG-20230609-WA0019.jpg', title: '', category: 'Events' },
        { id: 69, src: '/images/IMG-20230609-WA0021.jpg', title: '', category: 'Events' },
        { id: 70, src: '/images/IMG-20230609-WA0022.jpg', title: '', category: 'Events' },
        { id: 71, src: '/images/IMG-20230609-WA0023.jpg', title: '', category: 'Events' },
        { id: 72, src: '/images/IMG-20230609-WA0024.jpg', title: '', category: 'Events' },
        { id: 73, src: '/images/IMG-20230609-WA0025.jpg', title: '', category: 'Events' },
        { id: 74, src: '/images/IMG-20230609-WA0026.jpg', title: '', category: 'Events' },
        { id: 75, src: '/images/IMG-20230609-WA0027.jpg', title: '', category: 'Events' },
        { id: 76, src: '/images/IMG-20230609-WA0028.jpg', title: '', category: 'Events' },
        { id: 77, src: '/images/IMG-20230609-WA0029.jpg', title: '', category: 'Events' },
        { id: 78, src: '/images/IMG-20230609-WA0030.jpg', title: '', category: 'Events' },
        { id: 79, src: '/images/IMG-20230609-WA0031.jpg', title: '', category: 'Events' },
        { id: 80, src: '/images/IMG-20230609-WA0032.jpg', title: '', category: 'Events' },
        { id: 81, src: '/images/IMG-20230609-WA0034.jpg', title: '', category: 'Events' },
        { id: 82, src: '/images/IMG-20230609-WA0035.jpg', title: '', category: 'Events' },
        { id: 83, src: '/images/IMG-20230609-WA0036.jpg', title: '', category: 'Events' },
        { id: 84, src: '/images/IMG-20230609-WA0037.jpg', title: '', category: 'Events' },
        { id: 85, src: '/images/IMG-20230609-WA0038.jpg', title: '', category: 'Events' },
        { id: 86, src: '/images/IMG-20230609-WA0039.jpg', title: '', category: 'Events' },
        { id: 87, src: '/images/IMG-20230609-WA0040.jpg', title: '', category: 'Events' },
        { id: 88, src: '/images/IMG-20230609-WA0041.jpg', title: '', category: 'Events' },
        { id: 89, src: '/images/IMG-20230609-WA0042.jpg', title: '', category: 'Events' },
        { id: 90, src: '/images/IMG-20230609-WA0043.jpg', title: '', category: 'Events' },
        { id: 91, src: '/images/IMG-20230609-WA0044.jpg', title: '', category: 'Events' },
        { id: 92, src: '/images/IMG-20230609-WA0045.jpg', title: '', category: 'Events' },
        { id: 93, src: '/images/IMG-20230609-WA0047.jpg', title: '', category: 'Events' },
        { id: 94, src: '/images/IMG-20230609-WA0048.jpg', title: '', category: 'Events' },
        { id: 95, src: '/images/IMG-20230609-WA0049.jpg', title: '', category: 'Events' },
        { id: 96, src: '/images/IMG-20230609-WA0051.jpg', title: '', category: 'Events' },
        { id: 97, src: '/images/IMG-20230609-WA0052.jpg', title: '', category: 'Events' },
        { id: 98, src: '/images/IMG-20230609-WA0053.jpg', title: '', category: 'Events' },
    ];

    const categories = ['All', 'Convocation', 'Events', 'Workshop', 'Classes'];

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <section id="gallery" style={{
            minHeight: '100vh',
            padding: '100px 2rem 60px',
            position: 'relative'
        }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span style={{
                        fontFamily: 'Tiro Devanagari Sanskrit',
                        fontSize: '1.8rem',
                        color: '#FF9933',
                        display: 'block',
                        marginBottom: '0.5rem',
                        opacity: 0.8
                    }}>॥ चित्रशाला ॥</span>
                    <h2 style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '3.5rem',
                        background: 'linear-gradient(135deg, #FF9933, #C5A059)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700
                    }}>Gallery</h2>
                    <p style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        color: isDarkMode ? 'rgba(255,248,231,0.7)' : 'rgba(0,0,0,0.7)',
                        fontSize: '1.2rem',
                        letterSpacing: '1px'
                    }}>
                        Photos from events held by the University
                    </p>
                </div>

                {/* Category Filter */}
                <div style={{
                    display: 'flex',
                    gap: '0.8rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem',
                    justifyContent: 'center'
                }} data-aos="fade-up">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '50px',
                                border: `2px solid ${activeCategory === category ? '#C5A059' : isDarkMode ? 'rgba(197,160,89,0.2)' : 'rgba(0,0,0,0.1)'}`,
                                background: activeCategory === category
                                    ? 'linear-gradient(135deg, #FF9933, #C5A059)'
                                    : isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                                color: activeCategory === category
                                    ? 'white'
                                    : isDarkMode ? 'rgba(255,248,231,0.7)' : 'rgba(0,0,0,0.7)',
                                cursor: 'pointer',
                                fontFamily: "'Times New Roman', Times, serif",
                                fontSize: '0.9rem',
                                fontWeight: activeCategory === category ? 600 : 400,
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }} data-aos="fade-up">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            onClick={() => setSelectedImage(image)}
                            style={{
                                background: isDarkMode ? 'rgba(255,248,231,0.03)' : 'rgba(0,0,0,0.03)',
                                border: `2px solid ${isDarkMode ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.1)'}`,
                                borderRadius: '15px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0px)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src={asset(image.src)}
                                alt={image.title || image.category}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            {image.title && (
                                <div style={{
                                    padding: '0.6rem 1rem',
                                    fontFamily: "'Times New Roman', Times, serif",
                                    color: isDarkMode ? '#fff8e7' : '#1a0a00',
                                    fontSize: '1rem',
                                    fontWeight: 600
                                }}>
                                    {image.title}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Image Popup Modal */}
                {selectedImage && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '2rem'
                    }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <div style={{
                            maxWidth: '700px',
                            width: '100%',
                            background: isDarkMode ? '#1a0a00' : '#f5f0eb',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'rgba(0,0,0,0.55)',
                                    border: 'none',
                                    color: '#ffffff',
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    width: '34px',
                                    height: '34px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 1,
                                    lineHeight: 1
                                }}
                            >
                                ✕
                            </button>

                            <img
                                src={asset(selectedImage.src)}
                                alt={selectedImage.title || selectedImage.category}
                                style={{
                                    width: '100%',
                                    maxHeight: '70vh',
                                    objectFit: 'contain',
                                    display: 'block',
                                    background: '#000'
                                }}
                            />

                            {selectedImage.title && (
                                <div style={{ padding: '1rem 1.5rem' }}>
                                    <h3 style={{
                                        fontFamily: "'Times New Roman', Times, serif",
                                        color: isDarkMode ? '#C5A059' : '#8B6914',
                                        fontSize: '1.3rem',
                                        margin: 0,
                                        fontWeight: 700
                                    }}>
                                        {selectedImage.title}
                                    </h3>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
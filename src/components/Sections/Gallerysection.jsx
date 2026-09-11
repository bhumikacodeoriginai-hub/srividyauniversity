import React, { useState, useEffect, useCallback } from 'react';
import { asset } from '../../utils/asset';

const GallerySection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    const galleryImages = [
        { id: 1, src: '/images/Convocationi invitation_1.png', title: 'Convocation Invitation', category: 'Convocation' },
        { id: 2, src: '/images/20200105_101040_0.jpg', title: '', category: 'Events' },
        { id: 3, src: '/images/20200105_101059.jpg', title: '', category: 'Events' },
        { id: 4, src: '/images/20200105_101419.jpg', title: '', category: 'Events' },
        { id: 5, src: '/images/20200105_140802.jpg', title: '', category: 'Events' },
        { id: 6, src: '/images/20200105_140827.jpg', title: '', category: 'Events' },
        { id: 7, src: '/images/20200105_151400.jpg', title: '', category: 'Events' },
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
        { id: 55, src: '/images/IMG-20170918-WA0036.jpg', title: '', category: 'Events' },
        { id: 56, src: '/images/IMG-20170918-WA0037.jpg', title: '', category: 'Events' },
        { id: 57, src: '/images/IMG-20170918-WA0045.jpg', title: '', category: 'Events' },
        { id: 58, src: '/images/IMG-20170918-WA0052.jpg', title: '', category: 'Events' },
        { id: 59, src: '/images/IMG-20170918-WA0088.jpg', title: '', category: 'Events' },
        { id: 60, src: '/images/IMG-20230609-WA0007.jpg', title: '', category: 'Convocation' },
        { id: 61, src: '/images/IMG-20230609-WA0008.jpg', title: '', category: 'Convocation' },
        { id: 62, src: '/images/IMG-20230609-WA0010.jpg', title: '', category: 'Convocation' },
        { id: 63, src: '/images/IMG-20230609-WA0012.jpg', title: '', category: 'Convocation' },
        { id: 64, src: '/images/IMG-20230609-WA0013.jpg', title: '', category: 'Convocation' },
        { id: 65, src: '/images/IMG-20230609-WA0015.jpg', title: '', category: 'Convocation' },
        { id: 66, src: '/images/IMG-20230609-WA0016.jpg', title: '', category: 'Convocation' },
        { id: 67, src: '/images/IMG-20230609-WA0017.jpg', title: '', category: 'Convocation' },
        { id: 68, src: '/images/IMG-20230609-WA0019.jpg', title: '', category: 'Convocation' },
        { id: 69, src: '/images/IMG-20230609-WA0021.jpg', title: '', category: 'Convocation' },
        { id: 70, src: '/images/IMG-20230609-WA0022.jpg', title: '', category: 'Convocation' },
        { id: 71, src: '/images/IMG-20230609-WA0023.jpg', title: '', category: 'Convocation' },
        { id: 72, src: '/images/IMG-20230609-WA0024.jpg', title: '', category: 'Convocation' },
        { id: 73, src: '/images/IMG-20230609-WA0025.jpg', title: '', category: 'Convocation' },
        { id: 74, src: '/images/IMG-20230609-WA0026.jpg', title: '', category: 'Convocation' },
        { id: 75, src: '/images/IMG-20230609-WA0027.jpg', title: '', category: 'Convocation' },
        { id: 76, src: '/images/IMG-20230609-WA0028.jpg', title: '', category: 'Convocation' },
        { id: 77, src: '/images/IMG-20230609-WA0029.jpg', title: '', category: 'Convocation' },
        { id: 78, src: '/images/IMG-20230609-WA0030.jpg', title: '', category: 'Convocation' },
        { id: 79, src: '/images/IMG-20230609-WA0031.jpg', title: '', category: 'Convocation' },
        { id: 80, src: '/images/IMG-20230609-WA0032.jpg', title: '', category: 'Convocation' },
        { id: 81, src: '/images/IMG-20230609-WA0034.jpg', title: '', category: 'Convocation' },
        { id: 82, src: '/images/IMG-20230609-WA0035.jpg', title: '', category: 'Convocation' },
        { id: 83, src: '/images/IMG-20230609-WA0036.jpg', title: '', category: 'Convocation' },
        { id: 84, src: '/images/IMG-20230609-WA0037.jpg', title: '', category: 'Convocation' },
        { id: 85, src: '/images/IMG-20230609-WA0038.jpg', title: '', category: 'Convocation' },
        { id: 86, src: '/images/IMG-20230609-WA0039.jpg', title: '', category: 'Convocation' },
        { id: 87, src: '/images/IMG-20230609-WA0040.jpg', title: '', category: 'Convocation' },
        { id: 88, src: '/images/IMG-20230609-WA0041.jpg', title: '', category: 'Convocation' },
        { id: 89, src: '/images/IMG-20230609-WA0042.jpg', title: '', category: 'Convocation' },
        { id: 90, src: '/images/IMG-20230609-WA0043.jpg', title: '', category: 'Convocation' },
        { id: 91, src: '/images/IMG-20230609-WA0044.jpg', title: '', category: 'Convocation' },
        { id: 92, src: '/images/IMG-20230609-WA0045.jpg', title: '', category: 'Convocation' },
        { id: 93, src: '/images/IMG-20230609-WA0047.jpg', title: '', category: 'Convocation' },
        { id: 94, src: '/images/IMG-20230609-WA0048.jpg', title: '', category: 'Convocation' },
        { id: 95, src: '/images/IMG-20230609-WA0049.jpg', title: '', category: 'Convocation' },
        { id: 96, src: '/images/IMG-20230609-WA0051.jpg', title: '', category: 'Convocation' },
        { id: 97, src: '/images/IMG-20230609-WA0052.jpg', title: '', category: 'Convocation' },
        { id: 98, src: '/images/IMG-20230609-WA0053.jpg', title: '', category: 'Convocation' }
    ];

    const categories = ['All', 'Convocation', 'Events'];
    const countFor = (cat) => cat === 'All' ? galleryImages.length : galleryImages.filter((i) => i.category === cat).length;

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    const openAt = (i) => setLightboxIndex(i);
    const close = useCallback(() => setLightboxIndex(-1), []);
    const next = useCallback(() => setLightboxIndex((i) => (i + 1) % filteredImages.length), [filteredImages.length]);
    const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length), [filteredImages.length]);

    // Keyboard controls + scroll lock while lightbox open
    useEffect(() => {
        if (lightboxIndex < 0) return;
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
        };
        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow; };
    }, [lightboxIndex, close, next, prev]);

    const current = lightboxIndex >= 0 ? filteredImages[lightboxIndex] : null;

    return (
        <section id="gallery" style={{ padding: '110px 2rem 70px', position: 'relative' }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2.4rem' }} data-aos="fade-up">
                    <span className="svu-eyebrow">॥ चित्रशाला ॥</span>
                    <h2 className="svu-title">Gallery</h2>
                    <div className="svu-divider"><span className="svu-divider__mark">❁</span></div>
                    <p className="svu-subtitle">Moments from convocations, events and celebrations at the University</p>
                </div>

                {/* Filters */}
                <div className="svu-gallery__filters" data-aos="fade-up">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`svu-chip${activeCategory === category ? ' is-active' : ''}`}
                        >
                            {category} <span style={{ opacity: .7 }}>({countFor(category)})</span>
                        </button>
                    ))}
                </div>

                {/* Masonry grid */}
                <div className="svu-gallery__grid" data-aos="fade-up">
                    {filteredImages.map((image, i) => (
                        <figure className="svu-tile" key={image.id} onClick={() => openAt(i)}>
                            <img
                                src={asset(image.src)}
                                alt={image.title || `${image.category} photo`}
                                loading="lazy"
                                onError={(e) => { e.currentTarget.closest('.svu-tile').style.display = 'none'; }}
                            />
                            <span className="svu-tile__zoom">⤢</span>
                            <figcaption className="svu-tile__overlay">
                                <span className="svu-tile__cat">{image.title || image.category}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                {/* Lightbox */}
                {current && (
                    <div className="svu-lightbox" onClick={close}>
                        <button className="svu-lightbox__close" aria-label="Close" onClick={close}>✕</button>
                        <button className="svu-lightbox__btn svu-lightbox__prev" aria-label="Previous"
                            onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
                        <img
                            className="svu-lightbox__img"
                            src={asset(current.src)}
                            alt={current.title || current.category}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button className="svu-lightbox__btn svu-lightbox__next" aria-label="Next"
                            onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
                        <div className="svu-lightbox__count">{lightboxIndex + 1} / {filteredImages.length}</div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;

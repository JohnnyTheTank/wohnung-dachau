import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  category: 'living' | 'kitchen' | 'bathroom' | 'outdoor' | 'general';
}

const getWebPUrl = (jpgUrl: string, size?: '1x' | '2x' | '3x') => {
  const base = jpgUrl.replace(/\.JPG$|\.jpg$|\.png$/i, '');
  const urlPath = size ? `${base}_${size}.webp` : `${base}.webp`;
  const cleanPath = urlPath.startsWith('/') ? urlPath.substring(1) : urlPath;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const images: GalleryImage[] = [
  // Wohn- & Schlafräume (living)
  { url: '/images/5b2f09f3-8168-4777-89b5-ac5bebfd28ab.JPG', title: 'Lichtdurchfluteter Essecke für die Familie', category: 'living' },
  { url: '/images/7b40747f-0d0f-4d0c-9328-e15c5167cd9b.JPG', title: 'Lichtdurchfluteter Essecke für die Familie', category: 'living' },
  { url: '/images/90bb765f-e08b-4605-8642-c3485e1296f4.JPG', title: 'Helles Wohnzimmer mit Wohlfühl-Atmosphäre', category: 'living' },
  { url: '/images/9f1e2436-1d84-4145-9feb-f68dc2c9838e.JPG', title: 'Helles Wohnzimmer mit Wohlfühl-Atmosphäre', category: 'living' },
  { url: '/images/616dd408-ab9d-4faf-b599-b51a2f2abf86.JPG', title: 'Gemütliches Schlafzimmer', category: 'living' },
  { url: '/images/d4ae2014-3593-4f73-81df-eaf061d0050a.JPG', title: 'Flexibles Arbeits- & Kinderzimmer', category: 'living' },

  // Küche (kitchen)
  { url: '/images/5ce46b82-a4cb-4f14-b19b-93e096c36471.JPG', title: 'Moderne Einbauküche', category: 'kitchen' },
  { url: '/images/1f8f0fca-d3dc-405a-b80a-bc98f3b80a88.JPG', title: 'Moderne Einbauküche (Spülbereich)', category: 'kitchen' },
  { url: '/images/ab0dd1c1-4333-46ac-825a-214e348af35f.JPG', title: 'Moderne Einbauküche', category: 'kitchen' },

  // Badezimmer (bathroom)
  { url: '/images/69f55939-6c63-490f-bddc-c2b5684d7916.JPG', title: 'Badewanne mit Duschbereich & Tageslicht', category: 'bathroom' },
  { url: '/images/b52503f2-bdc2-4b72-85e2-f2ee6cd1952c.JPG', title: 'Badewanne mit Duschbereich & Tageslicht', category: 'bathroom' },
  { url: '/images/f34dcf2a-43ed-4c23-b656-eab0267d8970.JPG', title: 'Separates Gäste-WC', category: 'bathroom' },

  // Balkon & Außenbereich (outdoor)
  { url: '/images/52271d39-d192-40a3-9ce2-709a3dee98af.JPG', title: 'Ruhiger, überdachter Süd-Balkon', category: 'outdoor' },

  // Flur & Grundriss (general / nur unter "Alle Bilder" sichtbar)
  { url: '/images/13aa8e10-884e-4c89-834d-d8c426283d91.JPG', title: 'Heller Eingangsbereich & Flur', category: 'general' },
  { url: '/images/1995c338-45c1-415a-8b0b-af3161115a4d.JPG', title: 'Heller Eingangsbereich & Flur', category: 'general' },
  { url: '/images/8f9a87f0-58d6-499d-b834-4ad4d5424fd9.JPG', title: 'Heller Eingangsbereich & Flur', category: 'general' },
  { url: '/images/grundriss.png', title: 'Durchdachter Wohnungsgrundriss', category: 'general' }
];

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'living' | 'kitchen' | 'bathroom' | 'outdoor'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Filtered list
  const filteredImages = selectedFilter === 'all' 
    ? images 
    : images.filter(img => img.category === selectedFilter);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setZoomScale(1);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
    setZoomScale(1);
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    setZoomScale(1);
  }, [lightboxIndex]);

  const openLightbox = (url: string) => {
    const idx = images.findIndex(img => img.url === url);
    setLightboxIndex(idx);
    setZoomScale(1);
  };

  // Manage body scroll lock based on lightbox state
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Touch handlers for swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX; // Reset to start position to prevent stale swipes on pure taps
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 60) {
      // swipe left -> next
      nextImage();
    }
    if (touchEndX.current - touchStartX.current > 60) {
      // swipe right -> prev
      prevImage();
    }
  };

  // Prevent touch propagation from interactive controls to the background swipe container
  const preventTouchPropagation = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const downloadImage = async () => {
    if (lightboxIndex === null) return;
    const imgUrl = images[lightboxIndex].url;
    const fullUrl = `${import.meta.env.BASE_URL}${imgUrl.startsWith('/') ? imgUrl.substring(1) : imgUrl}`;
    
    try {
      const response = await fetch(fullUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = imgUrl.substring(imgUrl.lastIndexOf('/') + 1);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Failed to download image", error);
      // Fallback: open in new tab if fetching fails
      window.open(fullUrl, '_blank');
    }
  };

  const zoomIn = () => setZoomScale(prev => Math.min(prev + 0.3, 3));
  const zoomOut = () => setZoomScale(prev => Math.max(prev - 0.3, 1));

  return (
    <section id="gallery" className="section gallery-section" style={styles.section}>
      <div className="gallery-header" style={styles.header}>
        <span style={styles.tag}>FOTOGALERIE</span>
        <h2 className="serif-heading" style={styles.title}>Einblicke in Ihr neues Zuhause</h2>
        <p style={styles.subtitle}>
          Verschaffen Sie sich einen Eindruck von den frisch teilsanierten Wohnräumen, der hochwertigen Einbauküche und dem traumhaften Blick vom Balkon.
        </p>
        <div style={styles.divider} />
      </div>

      {/* Categories Filter Bar */}
      <div className="gallery-filter-bar" style={styles.filterBar}>
        <button 
          style={{ ...styles.filterBtn, ...(selectedFilter === 'all' ? styles.filterBtnActive : {}) }}
          onClick={() => setSelectedFilter('all')}
        >
          Alle Bilder ({images.length})
        </button>
        <button 
          style={{ ...styles.filterBtn, ...(selectedFilter === 'living' ? styles.filterBtnActive : {}) }}
          onClick={() => setSelectedFilter('living')}
        >
          Wohn- & Schlafräume
        </button>
        <button 
          style={{ ...styles.filterBtn, ...(selectedFilter === 'kitchen' ? styles.filterBtnActive : {}) }}
          onClick={() => setSelectedFilter('kitchen')}
        >
          Küche
        </button>
        <button 
          style={{ ...styles.filterBtn, ...(selectedFilter === 'bathroom' ? styles.filterBtnActive : {}) }}
          onClick={() => setSelectedFilter('bathroom')}
        >
          Badezimmer
        </button>
        <button 
          style={{ ...styles.filterBtn, ...(selectedFilter === 'outdoor' ? styles.filterBtnActive : {}) }}
          onClick={() => setSelectedFilter('outdoor')}
        >
          Balkon & Außenbereich
        </button>
      </div>

      {/* Grid Display (showing all filtered images with elegant hover) */}
      <div className="gallery-grid" style={styles.grid}>
        {filteredImages.map((img) => (
          <div 
            key={img.url} 
            className="gallery-grid-item"
            style={styles.gridItem}
            onClick={() => openLightbox(img.url)}
          >
            <img 
              src={getWebPUrl(img.url, '2x')} 
              srcSet={`${getWebPUrl(img.url, '1x')} 600w, ${getWebPUrl(img.url, '2x')} 1200w, ${getWebPUrl(img.url, '3x')} 2000w`} 
              sizes="(max-width: 600px) 450px, (max-width: 1200px) 900px, 1500px"
              alt={img.title} 
              style={styles.gridImg} 
              loading="lazy" 
            />
            <div style={styles.overlay}>
              <Maximize2 size={24} style={styles.overlayIcon} />
              <span style={styles.overlayText}>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          style={styles.lightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Panel */}
          <div 
            className="lightbox-header"
            style={styles.lbHeader}
            onTouchStart={preventTouchPropagation}
            onTouchMove={preventTouchPropagation}
            onTouchEnd={preventTouchPropagation}
          >
            <div style={styles.lbInfo}>
              <span style={styles.lbCount}>{lightboxIndex + 1} / {images.length}</span>
              <h4 style={styles.lbTitle}>{images[lightboxIndex].title}</h4>
            </div>

            <div style={styles.lbControls}>
              <button style={styles.lbControlBtn} onClick={downloadImage} title="Bild herunterladen">
                <Download size={20} />
              </button>
              <button style={styles.lbControlBtn} onClick={zoomIn} title="Vergrößern">
                <ZoomIn size={20} />
              </button>
              <button style={styles.lbControlBtn} onClick={zoomOut} title="Verkleinern">
                <ZoomOut size={20} />
              </button>
              <button style={{ ...styles.lbControlBtn, ...styles.lbCloseBtn }} onClick={closeLightbox} title="Schließen">
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Left Arrow */}
          <button 
            className="lightbox-nav-btn left-btn"
            style={styles.lbNavBtn} 
            onClick={prevImage}
            onTouchStart={preventTouchPropagation}
            onTouchMove={preventTouchPropagation}
            onTouchEnd={preventTouchPropagation}
            title="Vorheriges Bild"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Main Image Viewport */}
          <div className="lightbox-viewport" style={styles.lbViewport} onClick={closeLightbox}>
            <img 
              className="lightbox-img"
              src={getWebPUrl(images[lightboxIndex].url, '3x')} 
              srcSet={`${getWebPUrl(images[lightboxIndex].url, '1x')} 600w, ${getWebPUrl(images[lightboxIndex].url, '2x')} 1200w, ${getWebPUrl(images[lightboxIndex].url, '3x')} 2000w`} 
              sizes="100vw"
              alt={images[lightboxIndex].title} 
              style={{ 
                ...styles.lbImg, 
                transform: `scale(${zoomScale})`
              }} 
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Right Arrow */}
          <button 
            className="lightbox-nav-btn right-btn"
            style={styles.lbNavBtn} 
            onClick={nextImage}
            onTouchStart={preventTouchPropagation}
            onTouchMove={preventTouchPropagation}
            onTouchEnd={preventTouchPropagation}
            title="Nächstes Bild"
          >
            <ChevronRight size={36} />
          </button>

          {/* Bottom Thumbnails Strip for quick jumping */}
          <div 
            className="lightbox-thumbs-strip"
            style={styles.lbThumbsStrip}
            onTouchStart={preventTouchPropagation}
            onTouchMove={preventTouchPropagation}
            onTouchEnd={preventTouchPropagation}
          >
            {images.map((img, idx) => (
              <div 
                key={`thumb-${img.url}`}
                style={{ 
                  ...styles.lbThumb, 
                  ...(lightboxIndex === idx ? styles.lbThumbActive : {}),
                  backgroundImage: `url(${getWebPUrl(img.url, '1x')})` 
                }}
                onClick={() => { setLightboxIndex(idx); setZoomScale(1); }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: 'transparent',
    overflow: 'visible'
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  },
  tag: {
    color: 'var(--accent-gold)',
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '0.15em'
  },
  title: {
    fontSize: 'clamp(28px, 4vw, 42px)',
    color: 'var(--text-primary)',
    fontWeight: 500
  },
  subtitle: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    maxWidth: '650px',
    margin: '0 auto'
  },
  divider: {
    width: '60px',
    height: '3px',
    background: 'var(--accent-gold)',
    marginTop: '8px',
    borderRadius: '2px'
  },
  filterBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '32px'
  },
  filterBtn: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
    padding: '8px 16px',
    borderRadius: '100px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'var(--transition-fast)'
  },
  filterBtnActive: {
    background: 'var(--accent-gold)',
    borderColor: 'var(--accent-gold)',
    color: '#12141a'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
  },
  gridItem: {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    height: '280px',
    flex: '1 1 280px',
  },
  gridImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(10, 11, 13, 0.85), rgba(10, 11, 13, 0.1))',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '20px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  overlayIcon: {
    color: '#ffffff',
    marginBottom: '8px',
    transform: 'scale(0.8)',
    transition: 'transform 0.3s ease',
  },
  overlayText: {
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: 500
  },
  moreActionContainer: {
    marginTop: '32px',
    textAlign: 'center'
  },
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#0a0b0d',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lbHeader: {
    width: '100%',
    background: 'rgba(10, 11, 13, 0.9)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    zIndex: 10
  },
  lbInfo: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  lbCount: {
    fontSize: '12px',
    color: 'var(--accent-gold)',
    fontWeight: 600
  },
  lbTitle: {
    fontSize: '16px',
    color: '#ffffff',
    fontWeight: 500,
    margin: 0
  },
  lbControls: {
    display: 'flex',
    gap: '12px'
  },
  lbControlBtn: {
    background: 'rgba(255, 255, 255, 0.08)',
    border: 'none',
    color: '#ffffff',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s ease'
  },
  lbCloseBtn: {
    background: 'rgba(235, 87, 87, 0.15)',
    color: '#eb5757'
  },
  lbNavBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'var(--transition-fast)',
    zIndex: 5,
  },
  lbViewport: {
    flex: '1 1 0%',
    width: '100%',
    minHeight: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  lbImg: {
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    transition: 'transform 0.25s ease-out',
    userSelect: 'none',
    pointerEvents: 'auto'
  },
  lbThumbsStrip: {
    width: '100%',
    background: 'rgba(10, 11, 13, 0.9)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '16px 24px',
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    justifyContent: 'flex-start',
    scrollbarWidth: 'thin'
  },
  lbThumb: {
    width: '60px',
    height: '45px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    opacity: 0.5,
    flexShrink: 0,
    border: '1px solid transparent',
    transition: 'all 0.2s ease'
  },
  lbThumbActive: {
    opacity: 1,
    borderColor: 'var(--accent-gold)',
    transform: 'scale(1.08)'
  }
};

// Add standard hover support via CSS injected globally or dynamically
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    .gallery-section div:hover img {
      transform: scale(1.04);
    }
    .gallery-section div:hover div {
      opacity: 1;
    }
    .gallery-section div:hover div svg {
      transform: scale(1.0);
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-8px);
      }
      60% {
        transform: translateY(-4px);
      }
    }
  `;
  document.head.appendChild(style);
}

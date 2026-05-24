import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, MapPin } from 'lucide-react';

const heroImages = [
  `${import.meta.env.BASE_URL}images/1f8f0fca-d3dc-405a-b80a-bc98f3b80a88_3x.webp`,
  `${import.meta.env.BASE_URL}images/6dd85c35-50a8-4a55-af60-0479f66b3b3f_3x.webp`,
  `${import.meta.env.BASE_URL}images/8f9a87f0-58d6-499d-b834-4ad4d5424fd9_3x.webp`,
  `${import.meta.env.BASE_URL}images/9f1e2436-1d84-4145-9feb-f68dc2c9838e_3x.webp`,
  `${import.meta.env.BASE_URL}images/90bb765f-e08b-4605-8642-c3485e1296f4_3x.webp`,
  `${import.meta.env.BASE_URL}images/52271d39-d192-40a3-9ce2-709a3dee98af_3x.webp`,
  `${import.meta.env.BASE_URL}images/ab0dd1c1-4333-46ac-825a-214e348af35f_3x.webp`
];

export const Hero: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentBg]); // Reset interval timer when user manually switches slides

  const scrollToNext = () => {
    const nextSection = document.getElementById('key-facts');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" style={styles.hero}>
      {heroImages.map((img, idx) => (
        <div
          key={img}
          style={{
            ...styles.bgSlide,
            backgroundImage: `linear-gradient(to bottom, rgba(10, 11, 13, 0.2), rgba(10, 11, 13, 0.55)), url(${img})`,
            opacity: currentBg === idx ? 1 : 0,
            transform: currentBg === idx ? 'scale(1.05)' : 'scale(1.0)',
          }}
        />
      ))}

      {/* Main minimal and elegant hero overlay */}
      <div className="animate-fade-in-up" style={styles.content}>
        <div className="hero-badge" style={styles.badge}>
          <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
          <span>TEILSANIERTE WOHNUNG ZUR VERMIETUNG</span>
        </div>

        <h1 className="serif-heading hero-title" style={styles.title}>
          Modernes Wohnglück<br />
          <span style={styles.goldText}>am Udldinger Hang</span>
        </h1>

        <div className="hero-location" style={styles.location}>
          <MapPin size={18} style={{ color: 'var(--accent-gold)' }} />
          <span>Richard-Strauß-Weg 6, 85221 Dachau</span>
        </div>

        <div className="hero-actions" style={styles.actions}>
          <a href="#gallery" className="btn btn-primary" style={styles.ctaBtn}>
            Galerie ansehen
          </a>
        </div>
      </div>

      {/* Elegant, interactive slideshow dot navigation */}
      <div className="hero-dots" style={styles.dotsContainer}>
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentBg(idx)}
            style={{
              ...styles.dot,
              background: currentBg === idx ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.35)',
              width: currentBg === idx ? '24px' : '8px',
            }}
            aria-label={`Bild ${idx + 1} anzeigen`}
          />
        ))}
      </div>

      <div style={styles.scrollDown} onClick={scrollToNext}>
        <span className="hero-scroll-text">Entdecken Sie Ihr neues Zuhause</span>
        <ChevronDown size={24} style={styles.chevron} />
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  hero: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    color: '#ffffff',
    padding: '0 24px',
    overflow: 'hidden',
  },
  bgSlide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-in-out',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '850px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    marginTop: '-40px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '8px 16px',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    color: '#ffffff',
  },
  title: {
    fontSize: 'clamp(36px, 6vw, 64px)',
    lineHeight: 1.15,
    margin: 0,
    fontWeight: 500,
  },
  goldText: {
    color: 'var(--accent-gold)',
    fontWeight: 600,
  },
  location: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: 'clamp(14px, 2.5vw, 18px)',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 500,
  },
  actions: {
    display: 'flex',
    gap: '16px',
    marginTop: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ctaBtn: {
    boxShadow: '0 8px 30px rgba(191, 161, 95, 0.4)',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '110px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 3,
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  dot: {
    height: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    padding: 0,
  },
  scrollDown: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    letterSpacing: '0.1em',
    color: 'rgba(255, 255, 255, 0.6)',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  chevron: {
    animation: 'bounce 2s infinite',
  }
};

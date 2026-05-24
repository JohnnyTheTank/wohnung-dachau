import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, MapPin } from 'lucide-react';

const heroImages = [
  `${import.meta.env.BASE_URL}images/13aa8e10-884e-4c89-834d-d8c426283d91_2x.webp`,
  `${import.meta.env.BASE_URL}images/5ce46b82-a4cb-4f14-b19b-93e096c36471_2x.webp`,
  `${import.meta.env.BASE_URL}images/25247a78-def0-4dd1-ae0f-7d3e776d679b_2x.webp`,
  `${import.meta.env.BASE_URL}images/b52503f2-bdc2-4b72-85e2-f2ee6cd1952c_2x.webp`
];

export const Hero: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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
            backgroundImage: `linear-gradient(to bottom, rgba(10, 11, 13, 0.4), rgba(10, 11, 13, 0.85)), url(${img})`,
            opacity: currentBg === idx ? 1 : 0,
            transform: currentBg === idx ? 'scale(1.05)' : 'scale(1.0)',
          }}
        />
      ))}

      <div className="animate-fade-in-up" style={styles.content}>
        <div style={styles.badge}>
          <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
          <span>FRISCH SANIERTE WOHNUNG ZUR VERMIETUNG</span>
        </div>

        <h1 className="serif-heading" style={styles.title}>
          Modernes Wohnglück<br />
          <span style={styles.goldText}>am Udldinger Hang</span>
        </h1>

        <div style={styles.location}>
          <MapPin size={18} style={{ color: 'var(--accent-gold)' }} />
          <span>Richard-Strauß-Weg 6, 85221 Dachau</span>
        </div>

        <p style={styles.subtitle}>
          Erstklassige 3-Zimmer-Wohnung auf 70,1 m² • Stilvolle Einbauküche inklusive • Großer Süd-Balkon mit Blick ins Grüne • Eigener Tiefgaragen-Stellplatz
        </p>

        <div style={styles.tagsContainer}>
          <span style={styles.tag}>70,1 m² Wohnfläche</span>
          <span style={styles.tag}>3 helle Zimmer</span>
          <span style={styles.tag}>Edler Vinylboden</span>
          <span style={styles.tag}>1.425 € Kaltmiete</span>
        </div>

        <div style={styles.actions}>
          <a href="#gallery" className="btn btn-primary" style={styles.ctaBtn}>
            Galerie ansehen
          </a>
        </div>
      </div>

      <div style={styles.scrollDown} onClick={scrollToNext}>
        <span>Entdecken Sie Ihr neues Zuhause</span>
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
  subtitle: {
    fontSize: 'clamp(14px, 2vw, 17px)',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '650px',
    margin: '0 auto',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    margin: '8px 0',
  },
  tag: {
    background: 'rgba(191, 161, 95, 0.15)',
    border: '1px solid rgba(191, 161, 95, 0.3)',
    color: 'var(--accent-gold)',
    padding: '6px 14px',
    borderRadius: '100px',
    fontSize: '13px',
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
  galleryBtn: {
    color: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    background: 'rgba(255, 255, 255, 0.05)',
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

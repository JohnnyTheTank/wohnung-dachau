import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { KeyFacts } from './components/KeyFacts';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Floorplan } from './components/Floorplan';
import { Location } from './components/Location';
import { EnergyTechnical } from './components/EnergyTechnical';
import { Building2, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Eckdaten', href: '#key-facts' },
    { label: 'Ausstattung', href: '#features' },
    { label: 'Mietkonditionen', href: '#pricing' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Grundriss', href: '#floorplan' },
    { label: 'Lage', href: '#location' },
    { label: 'Energie', href: '#technical' }
  ];

  return (
    <div style={styles.appContainer}>
      {/* Premium Sticky Navigation Bar */}
      <header 
        style={{ 
          ...styles.header, 
          ...(isScrolled ? styles.headerScrolled : {}) 
        }}
      >
        <div style={styles.navContainer}>
          <a href="#" style={styles.logo}>
            <Building2 size={24} style={{ color: 'var(--accent-gold)' }} />
            <span style={styles.logoText}>Udldinger Hang</span>
          </a>

          {/* Desktop Nav */}
          <nav style={styles.desktopNav}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileMenuBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav overlay */}
        {mobileMenuOpen && (
          <div style={styles.mobileNav}>
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                style={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Page Layout Sections */}
      <main>
        <Hero />
        <KeyFacts />
        <Features />
        <Pricing />
        <Gallery />
        <Floorplan />
        <Location />
        <EnergyTechnical />
        {/* <Contact /> */}
      </main>

      {/* Premium Footer with legal disclaimers */}
      <footer style={styles.footer}>
        <div style={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Richard-Strauß-Weg 6, Dachau. Alle Rechte vorbehalten.</span>
          <span>Exposé-Webseite erstellt für private Vermietung</span>
        </div>
      </footer>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  appContainer: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 999,
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    borderBottom: '1px solid transparent',
  },
  headerScrolled: {
    height: '64px',
    background: 'var(--bg-glass)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)'
  },
  navContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
  },
  desktopNav: {
    display: 'flex',
    gap: '24px',
    '@media (max-width: 900px)': {
      display: 'none',
    }
  } as any,
  navLink: {
    fontSize: '14.5px',
    fontWeight: 500,
    textDecoration: 'none',
    color: 'var(--text-secondary)',
    transition: 'var(--transition-fast)'
  },
  mobileMenuBtn: {
    background: 'transparent',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    display: 'none',
    padding: '8px',
    '@media (max-width: 900px)': {
      display: 'block',
    }
  } as any,
  mobileNav: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'var(--bg-glass)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid var(--border-color)',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxShadow: 'var(--shadow-md)',
  },
  mobileNavLink: {
    fontSize: '16px',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    textAlign: 'left',
    padding: '8px 0',
  },
  footer: {
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-color)',
    padding: '24px 24px',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1.8fr)',
    gap: '40px',
    paddingBottom: '40px',
    borderBottom: '1px solid var(--border-color)',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
      gap: '30px'
    }
  } as any,
  footerBranding: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    textAlign: 'left'
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  footerLogoText: {
    fontSize: '16px',
    fontWeight: 600,
    color: 'var(--text-primary)'
  },
  footerDesc: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: 'var(--text-secondary)'
  },
  footerLinksCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'left'
  },
  footerTitle: {
    fontSize: '15px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: 0
  },
  docsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  footerLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'var(--transition-fast)'
  },
  footerDisclaimer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'left'
  },
  disclaimerText: {
    fontSize: '12.5px',
    lineHeight: '1.6',
    color: 'var(--text-muted)'
  },
  footerBottom: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
    fontSize: '12px',
    color: 'var(--text-muted)'
  }
};

// Global styles & micro-interactions support
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    /* Custom hover navigation highlight */
    header nav a:hover {
      color: var(--accent-gold) !important;
    }
    
    footer div div a:hover {
      color: var(--accent-gold) !important;
    }
  `;
  document.head.appendChild(style);
}

export default App;

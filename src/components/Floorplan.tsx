import React, { useState } from 'react';
import { Eye, Download, Maximize2 } from 'lucide-react';

export const Floorplan: React.FC = () => {
  const [showFullPlan, setShowFullPlan] = useState(false);

  return (
    <section id="floorplan" className="section" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.tag}>RAUMAUFTEILUNG</span>
        <h2 className="serif-heading" style={styles.title}>Durchdachter Grundriss</h2>
        <div style={styles.divider} />
      </div>

      <div style={styles.container}>
        {/* Centered Floor plan display card with hover effect & lightbox trigger */}
        <div className="glass-card plan-card" style={styles.planCard}>
          <div 
            className="plan-image-container" 
            style={styles.imgWrapper} 
            onClick={() => setShowFullPlan(true)}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/grundriss_2x.webp`} 
              alt="Wohnungsgrundriss Dachau" 
              style={styles.planImg} 
            />
            <div className="plan-overlay-trigger" style={styles.planOverlay}>
              <div style={styles.zoomCircle}>
                <Maximize2 size={24} style={{ color: 'var(--accent-gold)' }} />
              </div>
              <span style={styles.overlayText}>Grundriss vergrößern</span>
            </div>
          </div>
          <div style={styles.planFooter}>
            <button className="btn btn-secondary" style={styles.footerBtn} onClick={() => setShowFullPlan(true)}>
              <Eye size={18} />
              <span>Vollbild anzeigen</span>
            </button>
            <a 
              href={`${import.meta.env.BASE_URL}images/grundriss.png`} 
              download="Grundriss_Udldinger_Hang.png" 
              className="btn btn-secondary" 
              style={styles.footerBtn}
            >
              <Download size={18} />
              <span>Herunterladen</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox for floor plan */}
      {showFullPlan && (
        <div style={styles.lightbox} onClick={() => setShowFullPlan(false)}>
          <div style={styles.lbHeader} onClick={(e) => e.stopPropagation()}>
            <h4 style={styles.lbTitle}>Grundriss - Richard-Strauß-Weg 6, Dachau</h4>
            <button style={styles.closeBtn} onClick={() => setShowFullPlan(false)}>Vollbild schließen</button>
          </div>
          <div style={styles.lbContent} onClick={() => setShowFullPlan(false)}>
            <img 
              src={`${import.meta.env.BASE_URL}images/grundriss.webp`} 
              alt="Wohnungsgrundriss Dachau" 
              style={styles.lbImg} 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: 'transparent',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
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
  divider: {
    width: '60px',
    height: '3px',
    background: 'var(--accent-gold)',
    marginTop: '8px',
    borderRadius: '2px'
  },
  container: {
    maxWidth: '650px',
    margin: '0 auto',
    width: '100%',
  },
  planCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    background: 'var(--bg-glass)',
    padding: '24px',
    width: '100%',
  },
  imgWrapper: {
    position: 'relative',
    background: '#ffffff',
    padding: '20px',
    borderRadius: 'var(--border-radius-sm)',
    border: '1px solid var(--border-color)',
    cursor: 'pointer',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  planImg: {
    width: '100%',
    height: 'auto',
    maxHeight: '520px',
    objectFit: 'contain',
    display: 'block'
  },
  planOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(10, 11, 13, 0.4)',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    transition: 'opacity 0.3s ease',
  },
  zoomCircle: {
    background: 'rgba(255, 255, 255, 0.95)',
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
  },
  overlayText: {
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.05em'
  },
  planFooter: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center'
  },
  footerBtn: {
    padding: '10px 20px',
    fontSize: '13.5px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(10, 11, 13, 0.95)',
    zIndex: 99999,
    display: 'flex',
    flexDirection: 'column',
    padding: '24px'
  },
  lbHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '16px',
    marginBottom: '24px'
  },
  lbTitle: {
    fontSize: '18px',
    color: '#ffffff',
    fontWeight: 500,
    margin: 0
  },
  closeBtn: {
    background: 'var(--accent-gold)',
    border: 'none',
    color: '#12141a',
    padding: '8px 16px',
    borderRadius: '100px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600
  },
  lbContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto'
  },
  lbImg: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    background: '#ffffff',
    padding: '20px',
    borderRadius: '8px'
  }
};

// Inject hover styles for Floorplan image
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    .plan-image-container:hover .plan-overlay-trigger {
      opacity: 1 !important;
    }
  `;
  document.head.appendChild(style);
}

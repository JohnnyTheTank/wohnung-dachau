import React, { useState } from 'react';
import { Eye, Download, Maximize2 } from 'lucide-react';

export const Floorplan: React.FC = () => {
  const [showFullPlan, setShowFullPlan] = useState(false);

  const rooms = [
    { name: 'Wohn- & Essbereich (inkl. Essecke)', size: '24,14 m²' },
    { name: 'Schlafzimmer', size: '15,10 m²' },
    { name: 'Kinder- / Arbeitszimmer', size: '10,94 m²' },
    { name: 'Separate Küche (inkl. Einbauküche)', size: '7,76 m²' },
    { name: 'Badezimmer (mit Badewanne & Fenster)', size: '5,78 m²' },
    { name: 'Diele / Garderobe', size: '4,81 m²' },
    { name: 'Abstellraum', size: '0,73 m²' },
    { name: 'Separates Gäste-WC', size: '1,85 m²' },
    { name: 'Süd-Balkon (überdacht, zur Hälfte angerechnet)', size: '3,67 m² (7,34 m² Grundfläche)' },
    { name: 'Wohnfläche Gesamt', size: '70,1 m²', isTotal: true }
  ];

  return (
    <section id="floorplan" className="section" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.tag}>RAUMAUFTEILUNG</span>
        <h2 className="serif-heading" style={styles.title}>Durchdachter Grundriss</h2>
        <div style={styles.divider} />
      </div>

      <div style={styles.container}>
        {/* Left Side: Room list table */}
        <div className="glass-card" style={styles.tableCard}>
          <h3 style={styles.cardTitle}>Flächenberechnung</h3>
          <p style={styles.cardDesc}>
            Dank des perfekten Schnitts der Wohnung wird jeder Quadratmeter optimal genutzt. Der getrennte Wohn- und Schlafbereich sorgt für ein ruhiges Wohngefühl.
          </p>
          <div style={styles.table}>
            {rooms.map((room, idx) => (
              <div 
                key={idx} 
                style={{ 
                  ...styles.row, 
                  ...(room.isTotal ? styles.totalRow : {}),
                  borderBottom: idx === rooms.length - 1 ? 'none' : '1px solid var(--border-color)' 
                }}
              >
                <span style={room.isTotal ? { fontWeight: 700 } : {}}>{room.name}</span>
                <span style={{ ...styles.sizeValue, ...(room.isTotal ? styles.totalValue : {}) }}>{room.size}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Floor plan display with hover effect & lightbox trigger */}
        <div className="glass-card" style={styles.planCard}>
          <div style={styles.imgWrapper} onClick={() => setShowFullPlan(true)}>
            <img 
              src={`${import.meta.env.BASE_URL}images/grundriss_2x.webp`} 
              alt="Wohnungsgrundriss Dachau" 
              style={styles.planImg} 
            />
            <div style={styles.planOverlay}>
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
            <a href={`${import.meta.env.BASE_URL}images/grundriss.png`} download="Grundriss_Udldinger_Hang.png" className="btn btn-secondary" style={styles.footerBtn}>
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
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
    gap: '32px',
    alignItems: 'stretch',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    }
  } as any,
  tableCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    textAlign: 'left'
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0
  },
  cardDesc: {
    fontSize: '14.5px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    margin: 0
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    fontSize: '14.5px',
    color: 'var(--text-secondary)'
  },
  sizeValue: {
    fontWeight: 500,
    color: 'var(--text-primary)'
  },
  totalRow: {
    padding: '16px 0',
    borderTop: '2px solid var(--accent-gold)',
    color: 'var(--text-primary)',
    fontWeight: 700
  },
  totalValue: {
    fontSize: '18px',
    color: 'var(--accent-gold)',
    fontWeight: 700
  },
  planCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    background: 'var(--bg-glass)',
    padding: '24px'
  },
  imgWrapper: {
    position: 'relative',
    background: '#f2eded',
    padding: '12px',
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
    maxHeight: '480px',
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
    maxHeight: '80vh',
    maxWidth: '90vw',
    objectFit: 'contain',
    background: '#f2eded',
    padding: '16px',
    borderRadius: '8px'
  }
};

// Inject hover styles for Floorplan image
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    #floorplan .glass-card:hover .planOverlay_hover_trigger {
      /* Handled inside hover styles */
    }
  `;
  document.head.appendChild(style);
}

import React from 'react';
import { Flame, Award, FileText } from 'lucide-react';

export const EnergyTechnical: React.FC = () => {
  const technicalSpecs = [
    { label: 'Objekt-Nummer', value: '010288' },
    { label: 'Ausweisart', value: 'Verbrauchsausweis' },
    { label: 'Endenergieverbrauch', value: '144,3 kWh/(m²a)' },
    { label: 'Primärenergieverbrauch', value: '158,7 kWh/(m²a)' },
    { label: 'Energieeffizienzklasse', value: 'Klasse E' },
    { label: 'Wesentlicher Energieträger', value: 'Erdgas E (Heizung & Warmwasser)' },
    { label: 'Baujahr Gebäude', value: '1988' },
    { label: 'Baujahr Wärmeerzeuger', value: '2012 (Gas-Heizkessel)' },
    { label: 'Treibhausgasemissionen', value: '34,6 kg CO₂-Äquivalent/(m²a)' },
    { label: 'Gültigkeit Energieausweis', value: 'Bis 26.04.2033' },
    { label: 'Registriernummer (GEG)', value: 'BY-2023-004521225' }
  ];

  const classes = [
    { name: 'A+', range: '< 30', color: '#27ae60' },
    { name: 'A', range: '< 50', color: '#2ecc71' },
    { name: 'B', range: '< 75', color: '#9b59b6' }, // Wait, standard colors or warm transition
    { name: 'C', range: '< 100', color: '#f1c40f' },
    { name: 'D', range: '< 130', color: '#f39c12' },
    { name: 'E', range: '< 160', color: '#d35400', active: true },
    { name: 'F', range: '< 200', color: '#e67e22' },
    { name: 'G', range: '< 250', color: '#e74c3c' },
    { name: 'H', range: '> 250', color: '#c0392b' }
  ];

  return (
    <section id="technical" className="section" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.tag}>TECHNIK & ENERGIE</span>
        <h2 className="serif-heading" style={styles.title}>Technische Details & Energieausweis</h2>
        <p style={styles.subtitle}>
          Gesetzliche Pflichtangaben gemäß § 87 Gebäudeenergiegesetz (GEG) und weitere technische Objektdetails im Überblick.
        </p>
        <div style={styles.divider} />
      </div>

      <div className="responsive-grid-2col" style={styles.container}>
        {/* Left Side: Technical facts list */}
        <div className="glass-card" style={styles.specsCard}>
          <div style={styles.specsHeader}>
            <FileText size={22} style={{ color: 'var(--accent-gold)' }} />
            <h3 style={styles.cardTitle}>Objekt- & Energiedaten</h3>
          </div>
          <div className="spec-list">
            {technicalSpecs.map((spec, idx) => (
              <div key={idx} className="spec-row">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Energy Efficiency scale display */}
        <div className="glass-card" style={styles.energyCard}>
          <div style={styles.specsHeader}>
            <Award size={22} style={{ color: 'var(--accent-gold)' }} />
            <h3 style={styles.cardTitle}>Energieeffizienz-Klassifizierung</h3>
          </div>
          
          <p style={styles.energyDesc}>
            Mit einem Endenergieverbrauch von <strong>144,3 kWh/(m²a)</strong> liegt das Gebäude im soliden Mittelfeld für Mehrfamilienhäuser dieses Baujahrs. Die Beheizung erfolgt über eine moderne Gas-Zentralheizung aus dem Jahr 2012.
          </p>

          {/* Graphical scale bar */}
          <div style={styles.scaleContainer}>
            {classes.map((cls) => (
              <div 
                key={cls.name} 
                style={{ 
                  ...styles.scaleSegment, 
                  background: cls.color,
                  ...(cls.active ? styles.activeSegment : {}) 
                }}
              >
                <span className="energy-scale-name" style={styles.scaleName}>{cls.name}</span>
                <span className="energy-scale-range" style={styles.scaleRange}>{cls.range}</span>
                {cls.active && (
                  <div className="energy-active-indicator" style={styles.activeIndicator}>
                    <div style={styles.indicatorPin} />
                    <span className="energy-indicator-label" style={styles.indicatorLabel}>Unser Objekt (144,3)</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={styles.noticeBox}>
            <Flame size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
            <p style={styles.noticeText}>
              <strong>Heizung & Instandhaltung:</strong> Der Wärmeerzeuger wurde 2012 durch ein modernes, energieeffizientes Modell ausgetauscht. Das gesamte Wohngebäude wird fortlaufend professionell instand gehalten, um niedrige Verbrauchswerte zu sichern.
            </p>
          </div>
        </div>
      </div>
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
  subtitle: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    maxWidth: '700px',
    margin: '0 auto'
  },
  divider: {
    width: '60px',
    height: '3px',
    background: 'var(--accent-gold)',
    marginTop: '8px',
    borderRadius: '2px'
  },
  container: {},
  specsCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    textAlign: 'left'
  },
  specsHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '16px'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0
  },
  energyCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    textAlign: 'left',
    background: 'var(--bg-glass)',
  },
  energyDesc: {
    fontSize: '14.5px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)'
  },
  scaleContainer: {
    display: 'flex',
    height: '50px',
    width: '100%',
    borderRadius: '8px',
    overflow: 'visible',
    marginTop: '30px',
    marginBottom: '20px',
    position: 'relative'
  },
  scaleSegment: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: 700,
    position: 'relative',
    transition: 'var(--transition-fast)'
  },
  activeSegment: {
    transform: 'scaleY(1.15)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    zIndex: 2
  },
  scaleName: {
    fontSize: '13px',
    fontWeight: 700
  },
  scaleRange: {
    fontSize: '8px',
    opacity: 0.8,
    marginTop: '2px'
  },
  activeIndicator: {
    position: 'absolute',
    top: '-32px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
    width: 'max-content'
  },
  indicatorPin: {
    width: '0',
    height: '0',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid var(--accent-gold)',
    marginTop: '2px'
  },
  indicatorLabel: {
    background: 'var(--accent-gold)',
    color: '#12141a',
    fontSize: '10px',
    fontWeight: 700,
    padding: '3px 8px',
    borderRadius: '4px',
    boxShadow: 'var(--shadow-sm)'
  },
  noticeBox: {
    display: 'flex',
    gap: '12px',
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '16px',
    border: '1px solid var(--border-color)',
    textAlign: 'left'
  },
  noticeText: {
    fontSize: '13.5px',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    margin: 0
  }
};

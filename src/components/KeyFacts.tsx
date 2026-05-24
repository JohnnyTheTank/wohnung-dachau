import React from 'react';
import { Maximize2, Compass, Home, Calendar, Star, CalendarCheck, Utensils, Car } from 'lucide-react';

export const KeyFacts: React.FC = () => {
  const facts = [
    {
      icon: <Maximize2 size={24} style={styles.icon} />,
      label: 'Wohnfläche',
      value: '70,1 m²',
      desc: 'Großzügige Raumaufteilung (aktualisierte Fläche entgegen Alt-Exposé)'
    },
    {
      icon: <Home size={24} style={styles.icon} />,
      label: 'Zimmer',
      value: '3 Zimmer',
      desc: 'Lichtdurchfluteter Wohnbereich mit Ess-Ecke, Schlafzimmer & Kinder-/Arbeitszimmer'
    },
    {
      icon: <Compass size={24} style={styles.icon} />,
      label: 'Stockwerk & Lage',
      value: '1. OG (Eckwohnung)',
      desc: 'Sehr helle und ruhige Lage, ca. 80 Meter von der nächsten befahrenen Straße entfernt'
    },
    {
      icon: <CalendarCheck size={24} style={styles.icon} />,
      label: 'Bezugstermin',
      value: 'Ab 1. September 2026',
      desc: 'Bezugsfertig saniert und bezugsbereit für Ihren Einzug'
    },
    {
      icon: <Calendar size={24} style={styles.icon} />,
      label: 'Baujahr',
      value: '1988 (Wärmeerzeuger 2012)',
      desc: 'Solide Bausubstanz, fortlaufend instand gehalten und modernisiert'
    },
    {
      icon: <Star size={24} style={styles.icon} />,
      label: 'Sanierungsstand',
      value: 'Neu saniert (2023/24)',
      desc: 'Hochwertiger, moderner Vinylboden verlegt, Bäder erneuert.'
    },
    {
      icon: <Utensils size={24} style={styles.icon} />,
      label: 'Küche',
      value: 'Einbauküche',
      desc: 'Voll ausgestattete Einbauküche inklusive plus großes, trockenes Kellerabteil'
    },
    {
      icon: <Car size={24} style={styles.icon} />,
      label: 'Stellplatz',
      value: 'Tiefgarage',
      desc: 'Eigener, sicherer Einzelstellplatz direkt im Haus (bequem erreichbar)'
    }
  ];

  return (
    <section id="key-facts" className="section" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.tag}>ECKDATEN</span>
        <h2 className="serif-heading" style={styles.title}>Die Wohnung im Überblick</h2>
        <div style={styles.divider} />
      </div>

      <div className="features-grid">
        {facts.map((fact, idx) => (
          <div key={idx} className="glass-card" style={styles.card}>
            <div style={styles.iconWrapper}>
              {fact.icon}
            </div>
            <span style={styles.cardLabel}>{fact.label}</span>
            <h3 style={styles.cardValue}>{fact.value}</h3>
            <p style={styles.cardDesc}>{fact.desc}</p>
          </div>
        ))}
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
  divider: {
    width: '60px',
    height: '3px',
    background: 'var(--accent-gold)',
    marginTop: '8px',
    borderRadius: '2px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '12px',
    textAlign: 'left',
    height: '100%'
  },
  iconWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'var(--accent-gold-light)',
    marginBottom: '8px'
  },
  icon: {
    color: 'var(--accent-gold)'
  },
  cardLabel: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.05em',
    color: 'var(--text-muted)',
    textTransform: 'uppercase'
  },
  cardValue: {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0
  },
  cardDesc: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    margin: 0
  }
};

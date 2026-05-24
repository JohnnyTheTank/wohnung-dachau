import React from 'react';
import { Maximize2, Compass, Home, Calendar, Star, CalendarCheck, Utensils, Car, Archive } from 'lucide-react';

export const KeyFacts: React.FC = () => {
  const facts = [
    {
      icon: <Maximize2 className="key-fact-icon" />,
      label: 'Wohnfläche',
      value: '70,1 m²',
      desc: 'Großzügige Raumaufteilung'
    },
    {
      icon: <Home className="key-fact-icon" />,
      label: 'Zimmer',
      value: '3 Zimmer',
      desc: 'Lichtdurchfluteter Wohnbereich mit Ess-Ecke, Schlafzimmer & Kinder-/Arbeitszimmer'
    },
    {
      icon: <Compass className="key-fact-icon" />,
      label: 'Stockwerk & Lage',
      value: '1. OG (Eckwohnung)',
      desc: 'Sehr helle und ruhige Lage, ca. 80 Meter von der nächsten befahrenen Straße entfernt'
    },
    {
      icon: <CalendarCheck className="key-fact-icon" />,
      label: 'Bezugstermin',
      value: 'Ab 1. September 2026',
      desc: 'Teilsaniert und bezugsbereit für Ihren Einzug'
    },
    {
      icon: <Calendar className="key-fact-icon" />,
      label: 'Baujahr',
      value: '1988 (Wärmeerzeuger 2012)',
      desc: 'Solide Bausubstanz, fortlaufend instand gehalten und modernisiert'
    },
    {
      icon: <Star className="key-fact-icon" />,
      label: 'Sanierungsstand',
      value: 'Teilsaniert (2023/24)',
      desc: 'Hochwertiger, moderner Vinylboden verlegt, Bäder erneuert.'
    },
    {
      icon: <Utensils className="key-fact-icon" />,
      label: 'Küche',
      value: 'Einbauküche',
      desc: 'Voll ausgestattete Einbauküche bereits im Mietpreis enthalten'
    },
    {
      icon: <Archive className="key-fact-icon" />,
      label: 'Kellerabteil',
      value: 'Kellerabteil',
      desc: 'Großes, trockenes Kellerabteil bietet reichlich zusätzlichen Stauraum'
    },
    {
      icon: <Car className="key-fact-icon" />,
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
          <div key={idx} className="glass-card key-fact-card">
            <div className="key-fact-icon-wrapper">
              {fact.icon}
            </div>
            <span className="key-fact-label">{fact.label}</span>
            <h3 className="key-fact-value">{fact.value}</h3>
            <p className="key-fact-desc">{fact.desc}</p>
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
  }
};

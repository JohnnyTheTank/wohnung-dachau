import React from 'react';
import { MapPin, Compass, Train, Car, Footprints, ShoppingBag } from 'lucide-react';

export const Location: React.FC = () => {
  const points = [
    {
      icon: <Footprints size={20} style={styles.poiIcon} />,
      title: 'Historische Altstadt Dachau',
      dist: 'Ca. 10 Gehminuten',
      desc: 'Zahlreiche Cafés, exzellente Restaurants, kleine Boutiquen und das Schloss Dachau mit seinem barocken Hofgarten.'
    },
    {
      icon: <Compass size={20} style={styles.poiIcon} />,
      title: 'Idyllische Amperauen',
      dist: 'Ca. 5 Gehminuten',
      desc: 'Natur pur direkt vor der Haustür. Weitläufige Spazierwege entlang der Amper und ideale Radstrecken ins Dachauer Umland.'
    },
    {
      icon: <ShoppingBag size={20} style={styles.poiIcon} />,
      title: 'Einkaufsmöglichkeiten des täglichen Bedarfs',
      dist: 'Ca. 8 Gehminuten',
      desc: 'Supermärkte, Bäckereien, Apotheken und Drogerien befinden sich im direkten Umkreis. Größere Einkäufe im Gewerbegebiet.'
    },
    {
      icon: <Compass size={20} style={styles.poiIcon} />,
      title: 'Dachauer Familien-Freibad',
      dist: 'Ca. 12 Gehminuten',
      desc: 'Das beliebte Freibad ist bequem zu Fuß oder mit dem Fahrrad erreichbar. Perfekte Abkühlung im Sommer.'
    },
    {
      icon: <Train size={20} style={styles.poiIcon} />,
      title: 'S-Bahn Station Dachau (S2)',
      dist: 'Ca. 5 Fahrminuten',
      desc: 'Hervorragende Anbindung an die Münchner Innenstadt. Die S2 fährt im 10- bzw. 20-Minuten-Takt direkt zum Hauptbahnhof München (ca. 20 min Fahrtzeit).'
    },
    {
      icon: <Car size={20} style={styles.poiIcon} />,
      title: 'Hervorragende Autobahnanbindung',
      dist: 'Ca. 8 Fahrminuten',
      desc: 'Schnelle Verbindung an die Autobahnen A8 (Stuttgart), A99 (Münchner Ring) und A9 (Flughafen/Nürnberg).'
    }
  ];

  return (
    <section id="location" style={styles.outerSection}>
      <div className="section" style={styles.section}>
        <div style={styles.header}>
          <span style={styles.tag}>LAGE & UMGEBUNG</span>
          <h2 className="serif-heading" style={styles.title}>Wohnen am Udldinger Hang</h2>
          <p style={styles.subtitle}>
            Erleben Sie die perfekte Kombination aus ruhigem Wohnen im Grünen und der unmittelbaren Nähe zur charmanten Dachauer Altstadt sowie der Metropole München.
          </p>
          <div style={styles.divider} />
        </div>

        <div style={styles.container}>
          {/* Left: Location summary, map marker badge & amenities list */}
          <div style={styles.amenities}>
            <div className="glass-card" style={styles.locationCard}>
              <div style={styles.locationHeader}>
                <MapPin size={28} style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <h3 style={styles.locationTitle}>Richard-Strauß-Weg 6, 85221 Dachau</h3>
                  <span style={styles.locationSub}>Beliebte, ruhige Wohnlage</span>
                </div>
              </div>
              
              <div style={styles.mapVisual}>
                <iframe
                  title="Google Maps - Richard-Strauß-Weg 6, Dachau"
                  src="https://maps.google.com/maps?q=Richard-Strau%C3%9F-Weg%206,%20Dachau&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="embedded-map"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p style={styles.locationDesc}>
                Der Udldinger Hang gilt als eine der attraktivsten Wohnlagen in Dachau. Die Nachbarschaft zeichnet sich durch gepflegte Wohnanlagen, verkehrsberuhigte Straßen und reichlich Baumbestand aus. Genießen Sie die idyllische Ruhe ohne auf eine urbane Infrastruktur verzichten zu müssen. Die Wohnung liegt geschützt im hinteren, ruhigen Teil des Areals und ist ca. 80 Meter von der nächsten befahrenen Straße entfernt – eine wunderbar ruhige Eckwohnung mit viel Lichteinfall durch zahlreiche Fenster.
              </p>
            </div>

            <div style={styles.poiGrid}>
              {points.map((point, idx) => (
                <div key={idx} className="glass-card" style={styles.poiCard}>
                  <div style={styles.poiHeader}>
                    <div style={styles.iconWrapper}>
                      {point.icon}
                    </div>
                    <div style={styles.poiHeaderText}>
                      <h4 style={styles.poiTitle}>{point.title}</h4>
                      <span style={styles.poiDist}>{point.dist}</span>
                    </div>
                  </div>
                  <p style={styles.poiDesc}>{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  outerSection: {
    background: 'var(--bg-secondary)',
    width: '100%',
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: '40px',
  },
  amenities: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  locationCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'left'
  },
  locationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px'
  },
  locationTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0
  },
  locationSub: {
    fontSize: '13px',
    color: 'var(--accent-gold)',
    fontWeight: 600
  },
  locationDesc: {
    fontSize: '14.5px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    margin: 0
  },
  poiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px'
  },
  poiCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'left',
    padding: '24px'
  },
  poiHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  iconWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    background: 'var(--accent-gold-light)',
    flexShrink: 0
  },
  poiIcon: {
    color: 'var(--accent-gold)'
  },
  poiHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  poiTitle: {
    fontSize: '14.5px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    lineHeight: '1.3',
    margin: 0
  },
  poiDist: {
    fontSize: '12px',
    color: 'var(--accent-teal)',
    fontWeight: 600,
    marginTop: '2px'
  },
  poiDesc: {
    fontSize: '13.5px',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    margin: 0
  },
  mapMockCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    background: 'var(--bg-glass)',
    height: '100%',
    justifyContent: 'space-between',
    padding: '32px'
  },
  mapTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0,
    textAlign: 'left'
  },
  mapVisual: {
    position: 'relative',
    height: 'clamp(280px, 45vh, 450px)',
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--border-radius-sm)',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
  },
  mapPin: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 3
  },
  pulseRing: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(191, 161, 95, 0.4)',
    animation: 'pulse 2s infinite',
    transform: 'translateY(-10px)'
  },
  pinDot: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: 'var(--accent-gold)',
    border: '3px solid #ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    zIndex: 4,
    transform: 'translateY(-10px)'
  },
  pinLabel: {
    fontSize: '10px',
    fontWeight: 700,
    background: 'var(--accent-gold)',
    color: '#12141a',
    padding: '3px 8px',
    borderRadius: '100px',
    marginTop: '4px',
    boxShadow: 'var(--shadow-sm)'
  },
  mapNode: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2
  },
  nodeLabel: {
    fontSize: '12px',
    fontWeight: 500,
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    padding: '4px 10px',
    borderRadius: '4px',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)'
  },
  nodeLine: {
    width: '0px',
    height: '35px',
    borderLeft: '2px dashed var(--accent-gold)',
    opacity: 0.6
  },
  mapLegend: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  legendItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13.5px',
    fontWeight: 500
  },
  legendDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%'
  }
};

// Add standard pulse keyframes for map pin
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes pulse {
      0% {
        transform: scale(0.6);
        opacity: 1;
      }
      100% {
        transform: scale(1.6);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

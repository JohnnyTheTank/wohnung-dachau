import React from 'react';
import { Layers, Flame, Sun, Wind, Key, Archive, Check, Sparkles, Trees, MapPin } from 'lucide-react';

export const Features: React.FC = () => {
  const listItems = [
    {
      icon: <Layers size={24} style={styles.icon} />,
      title: 'Frisch saniert & moderner Vinylboden',
      desc: 'Die Wohnung wurde kürzlich umfassend modernisiert. Der neue, edle Vinylboden in Holzoptik verleiht allen Wohnräumen eine warme, zeitgemäße Atmosphäre und ist besonders pflegeleicht und strapazierfähig.'
    },
    {
      icon: <Flame size={24} style={styles.icon} />,
      title: 'Moderne Einbauküche (inklusive)',
      desc: 'Die voll ausgestattete Einbauküche ist bereits Teil der Vermietung. Sie bietet hochwertige Elektrogeräte (Herd, Ofen, Kühlschrank, Spüle) und viel Stauraum, sodass Sie sofort und ohne Extrakosten loskochen können.'
    },
    {
      icon: <Sun size={24} style={styles.icon} />,
      title: 'Großer, überdachter Süd-Balkon',
      desc: 'Das absolute Highlight für laue Sommerabende: Der großzügige, überdachte Süd-Balkon bietet einen traumhaften, ungestörten Blick in den grünen, parkähnlichen Innenhof. Perfekt für Ihr Frühstück im Freien.'
    },
    {
      icon: <Wind size={24} style={styles.icon} />,
      title: 'Tageslichtbad & separates Gäste-WC',
      desc: 'Keine Kompromisse am Morgen: Genießen Sie ein helles, einladendes Badezimmer mit eigenem Fenster, Badewanne und Platz für die Waschmaschine. Zusätzlich steht ein separates Gäste-WC zur Verfügung.'
    },
    {
      icon: <Key size={24} style={styles.icon} />,
      title: 'Tiefgaragenstellplatz (Einzelplatz)',
      desc: 'Ihr Auto parkt sicher und geschützt vor Wind und Wetter auf einem eigenen Einzelstellplatz in der frisch renovierten Tiefgarage. Komfortabler Zugang direkt über das Wohnareal.'
    },
    {
      icon: <Archive size={24} style={styles.icon} />,
      title: 'Großes Kellerabteil & Fahrradraum',
      desc: 'Reichlich Platz für alles, was nicht in die Wohnung soll: Ein großes, trockenes Kellerabteil gehört zur Wohnung. Zusätzlich gibt es im Haus einen gemeinschaftlichen Fahrradkeller.'
    },
    {
      icon: <Sparkles size={24} style={styles.icon} />,
      title: 'Sehr helle & ruhige Ecklage',
      desc: 'Diese wunderschöne Eckwohnung verfügt über zahlreiche Fenster, die für ein helles, lichtdurchflutetes Ambiente sorgen. Sie liegt absolut ruhig im hinteren Teil des Areals, ca. 80 Meter von der nächsten befahrenen Straße entfernt.'
    },
    {
      icon: <Trees size={24} style={styles.icon} />,
      title: 'Grüne, parkähnliche Wohnanlage',
      desc: 'Die äußerst gepflegte Wohnanlage besticht durch großzügige Rasenflächen, schattenspendenden Baumbestand und Spielplätze. Ein echtes Natur-Idyll für entspanntes Wohnen direkt vor der Haustür.'
    },
    {
      icon: <MapPin size={24} style={styles.icon} />,
      title: 'Erstklassige Lage & Anbindung',
      desc: 'In nur 5 Gehminuten erreichen Sie die idyllischen Amperauen und in 10 Gehminuten die historische Dachauer Altstadt. Mit der S-Bahn S2 sind Sie zudem in nur 20 Minuten am Hauptbahnhof München.'
    }
  ];

  return (
    <section id="features" className="section" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.tag}>HIGHLIGHTS</span>
        <h2 className="serif-heading" style={styles.title}>Wohnkomfort auf ganzer Linie</h2>
        <div style={styles.divider} />
      </div>

      <div style={styles.grid}>
        {listItems.map((item, idx) => (
          <div key={idx} className="glass-card" style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
            </div>
            <p style={styles.cardDesc}>{item.desc}</p>
            <div style={styles.checkLine}>
              <Check size={16} style={{ color: 'var(--accent-teal)' }} />
              <span style={styles.checkText}>Premium-Ausstattung</span>
            </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '28px',
    marginTop: '40px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'left',
    height: '100%',
    justifyContent: 'space-between'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  iconWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '46px',
    height: '46px',
    borderRadius: '10px',
    background: 'var(--accent-gold-light)',
    flexShrink: 0
  },
  icon: {
    color: 'var(--accent-gold)'
  },
  cardTitle: {
    fontSize: '17px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    lineHeight: '1.3',
    margin: 0
  },
  cardDesc: {
    fontSize: '14.5px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    margin: 0,
    flexGrow: 1
  },
  checkLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '12px',
    marginTop: '8px'
  },
  checkText: {
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  }
};

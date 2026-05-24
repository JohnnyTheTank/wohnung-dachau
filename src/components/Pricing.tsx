import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" style={styles.outerSection}>
      <div className="section" style={styles.section}>
        <div style={styles.header}>
          <span style={styles.tag}>FINANZEN</span>
          <h2 className="serif-heading" style={styles.title}>Mietkonditionen im Detail</h2>
          <div style={styles.divider} />
        </div>

        <div style={styles.container}>
          {/* Main Financial breakdown card */}
          <div className="glass-card" style={styles.mainCard}>
            <div style={styles.mainCardHeader}>
              <h3 style={styles.mainCardTitle}>Monatliche Mietkosten</h3>
              <div style={styles.totalBadge}>Kaltmiete</div>
            </div>

            <div style={styles.kaltmieteHighlight}>
              <span style={styles.kaltmieteLabel}>Basis-Kaltmiete (inkl. Einbauküche)</span>
              <span style={styles.kaltmieteValue}>1.425,00 €</span>
            </div>

            <div style={styles.priceBreakdown}>
              <div style={styles.priceRow}>
                <span style={styles.priceLabel}>Nebenkosten (Vorauszahlung)</span>
                <span style={styles.priceValue}>+ 220,00 €</span>
              </div>
              <div style={styles.priceRow}>
                <span style={styles.priceLabel}>Tiefgaragen-Stellplatz (Einzelstellplatz)</span>
                <span style={styles.priceValue}>+ 65,00 €</span>
              </div>
              
              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Gesamtmiete (Warm)</span>
                <span style={styles.totalValue}>1.710,00 €</span>
              </div>
            </div>

            <div style={styles.visualBar}>
              <div style={{ ...styles.barSegment, width: '83%', background: 'var(--accent-gold)' }} title="Kaltmiete 83%" />
              <div style={{ ...styles.barSegment, width: '4%', background: 'var(--accent-teal)' }} title="Garage 4%" />
              <div style={{ ...styles.barSegment, width: '13%', background: 'var(--text-muted)' }} title="Nebenkosten 13%" />
            </div>
            
            <div style={styles.barLegend}>
              <span style={styles.legendItem}><span style={{ ...styles.legendColor, background: 'var(--accent-gold)' }} /> Kaltmiete</span>
              <span style={styles.legendItem}><span style={{ ...styles.legendColor, background: 'var(--accent-teal)' }} /> Stellplatz</span>
              <span style={styles.legendItem}><span style={{ ...styles.legendColor, background: 'var(--text-muted)' }} /> Nebenkosten</span>
            </div>
          </div>

          {/* Secondary Details & Conditions */}
          <div style={styles.sidePanel}>
            <div className="glass-card" style={styles.sideCard}>
              <div style={styles.sideCardHeader}>
                <ShieldCheck size={24} style={{ color: 'var(--accent-gold)' }} />
                <h4 style={styles.sideCardTitle}>Sicherheiten & Vertrag</h4>
              </div>
              <div style={styles.depositRow}>
                <div style={styles.depositLabel}>Mietkaution</div>
                <div style={styles.depositValue}>4.275,00 €</div>
                <div style={styles.depositSub}>(Entspricht 3 Monatskaltmieten)</div>
              </div>
              <ul style={styles.bulletList}>
                <li style={styles.bulletItem}>
                  <CheckCircle2 size={16} style={styles.bulletIcon} />
                  <strong>Bezugsfrei ab 1. September 2026</strong>
                </li>
                <li style={styles.bulletItem}>
                  <CheckCircle2 size={16} style={styles.bulletIcon} />
                  <span>Unbefristeter Mietvertrag mit gesetzlicher Kündigungsfrist</span>
                </li>
                <li style={styles.bulletItem}>
                  <CheckCircle2 size={16} style={styles.bulletIcon} />
                  <span>Einbauküche im Mietpreis bereits voll enthalten</span>
                </li>
                <li style={styles.bulletItem}>
                  <CheckCircle2 size={16} style={styles.bulletIcon} />
                  <span>Keine Staffelmiete oder Indexmiete vorgesehen</span>
                </li>
              </ul>
            </div>

            <div style={styles.warningBox}>
              <AlertCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
              <p style={styles.warningText}>
                <strong>Wichtig für Bewerber:</strong> Zur Anmietung werden eine positive Schufa-Auskunft, die letzten drei Gehaltsnachweise sowie eine Mieterselbstauskunft vorausgesetzt.
              </p>
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
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
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
  divider: {
    width: '60px',
    height: '3px',
    background: 'var(--accent-gold)',
    marginTop: '8px',
    borderRadius: '2px'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
    gap: '32px',
    alignItems: 'start',
    marginTop: '40px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    }
  } as any, // override type for media query in custom styles (resolved below)
  mainCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    background: 'var(--bg-glass)',
  },
  mainCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainCardTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  totalBadge: {
    background: 'var(--accent-gold-light)',
    border: '1px solid var(--accent-gold)',
    color: 'var(--accent-gold)',
    padding: '4px 12px',
    borderRadius: '100px',
    fontSize: '13px',
    fontWeight: 600,
  },
  priceBreakdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  priceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--border-color)',
    fontSize: '15px',
    color: 'var(--text-secondary)',
  },
  priceValue: {
    fontWeight: 500,
    color: 'var(--text-primary)',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '8px',
    fontSize: '18px',
    fontWeight: 700,
    color: 'var(--text-primary)',
  },
  totalValue: {
    fontSize: '20px',
    color: 'var(--text-primary)',
  },
  kaltmieteHighlight: {
    background: 'var(--accent-gold-light)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '24px 20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    boxShadow: 'inset 0 0 20px rgba(191, 161, 95, 0.03)',
  },
  kaltmieteLabel: {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  kaltmieteValue: {
    fontSize: '36px',
    fontWeight: 700,
    color: 'var(--accent-gold)',
    lineHeight: 1,
  },
  visualBar: {
    display: 'flex',
    height: '10px',
    borderRadius: '100px',
    overflow: 'hidden',
    marginTop: '10px',
  },
  barSegment: {
    height: '100%',
  },
  barLegend: {
    display: 'flex',
    gap: '20px',
    fontSize: '13px',
    color: 'var(--text-muted)',
    justifyContent: 'center',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  legendColor: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
  sidePanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  sideCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  sideCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  sideCardTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0,
  },
  depositRow: {
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid var(--border-color)',
  },
  depositLabel: {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
  },
  depositValue: {
    fontSize: '22px',
    fontWeight: 700,
    color: 'var(--text-primary)',
    margin: '4px 0',
  },
  depositSub: {
    fontSize: '12px',
    color: 'var(--text-muted)',
  },
  bulletList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'left',
  },
  bulletItem: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
    fontSize: '14px',
    color: 'var(--text-secondary)',
  },
  bulletIcon: {
    color: 'var(--accent-teal)',
    flexShrink: 0,
    marginTop: '2px',
  },
  warningBox: {
    display: 'flex',
    gap: '12px',
    background: 'var(--accent-gold-light)',
    border: '1px dashed var(--accent-gold)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '16px',
    textAlign: 'left',
  },
  warningText: {
    fontSize: '13.5px',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    margin: 0,
  }
};

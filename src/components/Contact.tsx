import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    income: '',
    occupants: '1',
    moveInDate: '',
    message: '',
    schufa: false,
    pets: false,
    smoker: false,
    source: '',
    referrerName: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Subject for the email
    const subject = `Bewerbung Wohnung Richard-Strauß-Weg 6, Dachau - ${formData.name}`;

    // Elegant text body formatting
    const sourceFormatted = formData.source === 'Bekanntenkreis' 
      ? `Bekanntenkreis (Name: ${formData.referrerName})` 
      : formData.source;

    const body = `Sehr geehrte Vermieter,

hiermit bekunde ich mein Interesse an der sanierten 3-Zimmer-Wohnung im Richard-Strauß-Weg 6 in Dachau.

Hier sind meine Bewerberdaten:
--------------------------------------------------
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone || 'Nicht angegeben'}
Wunsch-Einzugstermin: ${formData.moveInDate || 'Flexibel'}
Personenanzahl: ${formData.occupants} Person(en)
Monatliches Nettoeinkommen: ${formData.income ? formData.income + ' €' : 'Keine Angabe'}
Aufmerksam geworden über: ${sourceFormatted || 'Nicht angegeben'}

Zusätzliche Angaben:
- Positive Schufa vorhanden? ${formData.schufa ? 'Ja, liegt vor' : 'Nein / Noch ausstehend'}
- Haustiere? ${formData.pets ? 'Ja' : 'Nein / Keine'}
- Raucher? ${formData.smoker ? 'Ja' : 'Nein / Nichtraucher'}

Bewerbungsanschreiben / Nachricht:
${formData.message || 'Keine zusätzliche Nachricht hinterlassen.'}
--------------------------------------------------

Ich freue mich über Rückmeldung bezüglich eines Besichtigungstermins.

Mit freundlichen Grüßen,
${formData.name}`;

    // Generate mailto link
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.tag}>KONTAKT & INTERESSE</span>
        <h2 className="serif-heading" style={styles.title}>Bewerben Sie sich für Ihr neues Zuhause</h2>
        <p style={styles.subtitle}>
          Haben wir Ihr Interesse geweckt? Füllen Sie ganz einfach das Formular aus und senden Sie uns Ihre Bewerberdaten direkt per E-Mail oder nehmen Sie Kontakt auf.
        </p>
        <div style={styles.divider} />
      </div>

      <div style={styles.container}>
        {/* Left Side: Contact guidance cards */}
        <div style={styles.guidanceColumn}>
          <div className="glass-card" style={styles.guideCard}>
            <h3 style={styles.guideTitle}>Der Bewerbungsablauf</h3>
            
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepContent}>
                <h4 style={styles.stepTitle}>Daten ausfüllen</h4>
                <p style={styles.stepDesc}>Geben Sie Ihre grundlegenden Eckdaten wie Einzugstermin, Personenanzahl und Nettoeinkommen an.</p>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepContent}>
                <h4 style={styles.stepTitle}>E-Mail generieren</h4>
                <p style={styles.stepDesc}>Klicken Sie auf "Bewerbung senden". Es öffnet sich automatisch Ihr E-Mail-Programm mit einer perfekt vorformulierten Nachricht.</p>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepContent}>
                <h4 style={styles.stepTitle}>Unterlagen vorbereiten</h4>
                <p style={styles.stepDesc}>Zum Besichtigungstermin bringen Sie bitte eine ausgefüllte Mieterselbstauskunft, Gehaltsnachweise der letzten 3 Monate und eine SCHUFA-Auskunft mit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="glass-card" style={styles.formCard}>
          {submitted ? (
            <div style={styles.successWrapper}>
              <CheckCircle2 size={64} style={{ color: 'var(--accent-teal)', marginBottom: '16px' }} />
              <h3 style={styles.successTitle}>Bewerbung vorbereitet!</h3>
              <p style={styles.successDesc}>
                Ihr E-Mail-Programm sollte sich soeben geöffnet haben. Bitte überprüfen Sie den Entwurf und senden Sie die E-Mail ab.
              </p>
              <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                Formular erneut bearbeiten
              </button>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} style={styles.form}>
              <h3 style={styles.formTitle}>Mieter-Selbstauskunft & Anfrage</h3>
              
              <div style={styles.formGrid}>
                <div className="form-group" style={styles.fullWidth}>
                  <label className="form-label">Vollständiger Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="z.B. Max Mustermann" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">E-Mail-Adresse *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="max@beispiel.de" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Telefonnummer</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="z.B. 0170 1234567" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Personenanzahl *</label>
                  <select 
                    name="occupants" 
                    value={formData.occupants} 
                    onChange={handleChange} 
                    className="form-control"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Personen</option>
                    <option value="3">3 Personen</option>
                    <option value="4+">4 oder mehr Personen</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Wunsch-Einzugstermin</label>
                  <input 
                    type="text" 
                    name="moveInDate" 
                    value={formData.moveInDate} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="z.B. 01.09.2026 oder flexibel" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Aufmerksam geworden über *</label>
                  <select 
                    name="source" 
                    required 
                    value={formData.source} 
                    onChange={handleChange} 
                    className="form-control"
                  >
                    <option value="">Bitte auswählen...</option>
                    <option value="Direkter Kontakt mit Vermieter">Direkter Kontakt mit Vermieter</option>
                    <option value="Bekanntenkreis">Bekanntenkreis (Name eingeben)</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>

                {formData.source === 'Bekanntenkreis' && (
                  <div className="form-group" style={styles.fullWidth}>
                    <label className="form-label">Name der Person aus dem Bekanntenkreis *</label>
                    <input 
                      type="text" 
                      name="referrerName" 
                      required 
                      value={formData.referrerName} 
                      onChange={handleChange} 
                      className="form-control" 
                      placeholder="z.B. Frau Müller / Herr Schmidt" 
                    />
                  </div>
                )}

                <div className="form-group" style={styles.fullWidth}>
                  <label className="form-label">Monatliches Haushaltsnettoeinkommen (Gesamt)</label>
                  <input 
                    type="text" 
                    name="income" 
                    value={formData.income} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="z.B. 3.200 €" 
                  />
                </div>

                <div className="form-group" style={styles.fullWidth}>
                  <label className="form-label">Persönliche Nachricht / Vorstellung</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Erzählen Sie uns kurz etwas über sich (Berufstätigkeit, Grund des Umzugs etc.)..." 
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div style={styles.checkboxes}>
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="schufa" 
                    name="schufa" 
                    checked={formData.schufa} 
                    onChange={handleChange} 
                    className="checkbox-control" 
                  />
                  <label htmlFor="schufa" className="checkbox-label">
                    Positive SCHUFA-Auskunft vorhanden (zum Besichtigungstermin)
                  </label>
                </div>

                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="pets" 
                    name="pets" 
                    checked={formData.pets} 
                    onChange={handleChange} 
                    className="checkbox-control" 
                  />
                  <label htmlFor="pets" className="checkbox-label">
                    Ich bringe Haustiere mit
                  </label>
                </div>

                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="smoker" 
                    name="smoker" 
                    checked={formData.smoker} 
                    onChange={handleChange} 
                    className="checkbox-control" 
                  />
                  <label htmlFor="smoker" className="checkbox-label">
                    Ich bin Raucher
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
                <Mail size={18} />
                <span>Bewerbung per E-Mail generieren</span>
              </button>
            </form>
          )}
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
  container: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
    gap: '32px',
    alignItems: 'start',
    marginTop: '40px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    }
  } as any,
  guidanceColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  guideCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    textAlign: 'left'
  },
  guideTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '12px',
    margin: 0
  },
  step: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start'
  },
  stepNumber: {
    background: 'var(--accent-gold-light)',
    border: '1px solid var(--accent-gold)',
    color: 'var(--accent-gold)',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 700,
    flexShrink: 0
  },
  stepContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    textAlign: 'left'
  },
  stepTitle: {
    fontSize: '15px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0
  },
  stepDesc: {
    fontSize: '13.5px',
    lineHeight: '1.45',
    color: 'var(--text-secondary)',
    margin: 0
  },
  quickCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'left',
    background: 'var(--bg-glass)',
  },
  quickTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0
  },
  quickDesc: {
    fontSize: '13.5px',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    margin: 0
  },
  whatsappBtn: {
    background: '#25D366',
    color: '#ffffff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: 'var(--border-radius-full)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: 600,
    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
    transition: 'all 0.3s ease',
  },
  formCard: {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--bg-glass)',
  },
  formTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '20px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '12px',
    textAlign: 'left',
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '4px'
  },
  fullWidth: {
    gridColumn: '1 / -1'
  },
  checkboxes: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    marginTop: '12px',
    marginBottom: '16px'
  },
  submitBtn: {
    width: '100%',
    boxShadow: '0 4px 15px rgba(191, 161, 95, 0.25)'
  },
  successWrapper: {
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '12px'
  },
  successTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    margin: 0
  },
  successDesc: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    maxWidth: '360px',
    margin: '0 auto 16px'
  }
};

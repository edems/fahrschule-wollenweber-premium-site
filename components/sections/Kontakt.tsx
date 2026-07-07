'use client';

import { useMemo, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { KATEGORIEN } from '@/lib/klassen';
import { STANDORTE, HAUPTNUMMER } from '@/lib/standorte';
import MonatsKalender from '@/components/kalender/MonatsKalender';
import SectionHeader from '@/components/ui/SectionHeader';
import { PremiumReveal } from '@/components/ui/ScrollMotion';

const WHATSAPP_URL = 'https://wa.me/491704769911?text=Hi%2C%20ich%20möchte%20mich%20gerne%20anmelden.';

type Status = 'idle' | 'sending' | 'success' | 'error';
type KontaktAction = 'email' | 'whatsapp';
type KatId = (typeof KATEGORIEN)[number]['id'];

export default function Kontakt() {
  const [datum, setDatum] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [activeKategorie, setActiveKategorie] = useState<KatId>('auto');
  const [selectedKlasse, setSelectedKlasse] = useState('B');

  const aktiveKategorie = KATEGORIEN.find((k) => k.id === activeKategorie) ?? KATEGORIEN[0];
  const selectedKlasseInfo = useMemo(() => {
    for (const kategorie of KATEGORIEN) {
      const klasse = kategorie.klassen.find((klasse) => klasse.code === selectedKlasse);
      if (klasse) return { ...klasse, kategorie: kategorie.label };
    }
    return null;
  }, [selectedKlasse]);

  const handleDateChange = (nextDate: string) => {
    setDatum(nextDate);
    if (status === 'error') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const submitDetails = (form: HTMLFormElement, action: KontaktAction) => {
    if (!form.checkValidity()) {
      setStatus('error');
      setStatusMessage('Bitte fülle alle Pflichtfelder korrekt aus.');
      form.reportValidity();
      return;
    }
    if (!datum) {
      setStatus('error');
      setStatusMessage('Bitte wähle einen Termin im Kalender.');
      return;
    }
    if (!selectedKlasseInfo) {
      setStatus('error');
      setStatusMessage('Bitte wähle eine Führerscheinklasse aus.');
      return;
    }
    setStatus('sending');
    const formData = new FormData(form);
    const data = {
      vorname: formData.get('vorname'),
      name: formData.get('name'),
      telefon: formData.get('telefon'),
      email: formData.get('email'),
      klasse: `${selectedKlasseInfo.code} · ${selectedKlasseInfo.name} (${selectedKlasseInfo.kategorie})`,
      standort: formData.get('standort'),
      datum,
      nachricht: formData.get('nachricht'),
    };

    const betreff = `Anmeldung ${selectedKlasseInfo.code} – ${data.vorname} ${data.name}`;
    const body = [
      `Name: ${data.vorname} ${data.name}`,
      `Telefon: ${data.telefon}`,
      `E-Mail: ${data.email}`,
      `Klasse: ${data.klasse}`,
      `Standort: ${data.standort}`,
      `Wunschtermin: ${data.datum}`,
      ``,
      `Nachricht:`,
      `${data.nachricht ?? ''}`,
    ].join('\n');

    const target =
      action === 'email'
        ? `mailto:${HAUPTNUMMER.email}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(body)}`
        : `https://wa.me/491704769911?text=${encodeURIComponent(`Hallo Fahrschule Wollenweber,\n\nich möchte mich gerne melden:\n\n${body}`)}`;

    setStatus('success');
    setStatusMessage(
      action === 'email'
        ? 'Vielen Dank! Wir öffnen jetzt dein Mail-Programm mit allen Details.'
        : 'Vielen Dank! Wir öffnen jetzt WhatsApp mit allen Details.'
    );

    setTimeout(() => {
      window.location.href = target;
    }, 600);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitDetails(e.currentTarget, 'email');
  };

  return (
    <section id="kontakt" className="section section-light kontakt-section relative">
      <div className="container-page relative">
        <PremiumReveal>
          <SectionHeader
            eyebrow="Anmeldung & Kontakt"
            title={
              <>
                Bereit <span className="gradient-text gradient-text-italic">loszufahren?</span>
              </>
            }
            description={
              <>
                <strong>Keine Angst, wir beraten gerne — kostenlos und unverbindlich.</strong>{' '}
                Wähle deinen Wunschtermin und deinen Lieblings-Kontaktweg.
              </>
            }
          />
        </PremiumReveal>

        {/* Quick-Contact: Mobil, WhatsApp, E-Mail, Kontaktformular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="kontakt-channels"
        >
          <a href={`tel:${HAUPTNUMMER.mobilTel}`} className="kontakt-channel kontakt-channel-call">
            <div className="kontakt-channel-icon" aria-hidden>📱</div>
            <div className="kontakt-channel-meta">
              <div className="kontakt-channel-label">Mobil anrufen</div>
              <div className="kontakt-channel-value">{HAUPTNUMMER.mobil}</div>
            </div>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="kontakt-channel kontakt-channel-whatsapp">
            <div className="kontakt-channel-icon" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </div>
            <div className="kontakt-channel-meta">
              <div className="kontakt-channel-label">WhatsApp schreiben</div>
              <div className="kontakt-channel-value">Sofortige Antwort</div>
            </div>
          </a>
          <a href={`mailto:${HAUPTNUMMER.email}`} className="kontakt-channel kontakt-channel-mail">
            <div className="kontakt-channel-icon" aria-hidden>✉️</div>
            <div className="kontakt-channel-meta">
              <div className="kontakt-channel-label">E-Mail senden</div>
              <div className="kontakt-channel-value">Schriftlich</div>
            </div>
          </a>
          <a href="#kontakt-form" className="kontakt-channel kontakt-channel-form">
            <div className="kontakt-channel-icon" aria-hidden>📋</div>
            <div className="kontakt-channel-meta">
              <div className="kontakt-channel-label">Kontaktformular</div>
              <div className="kontakt-channel-value">Unten ausfüllen</div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="kontakt-grid"
          id="kontakt-form"
        >
          <div>
            <div className="eyebrow mb-4" style={{ color: 'rgba(26, 26, 46, 0.6)' }}>Schritt 1 · Termin wählen</div>
            <MonatsKalender value={datum} onChange={handleDateChange} />
          </div>

          <form onSubmit={handleSubmit} className="kontakt-form" noValidate>
            <div className="eyebrow mb-4" style={{ color: 'rgba(26, 26, 46, 0.6)' }}>Schritt 2 · Daten eingeben</div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="vorname">Vorname</label>
                <input id="vorname" name="vorname" type="text" required autoComplete="given-name" />
              </div>
              <div className="form-field">
                <label htmlFor="name">Nachname</label>
                <input id="name" name="name" type="text" required autoComplete="family-name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="telefon">Telefon</label>
                <input id="telefon" name="telefon" type="tel" required autoComplete="tel" placeholder="z. B. 0170 1234567" />
              </div>
              <div className="form-field">
                <label htmlFor="email">E-Mail</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>

            <div className="klasse-picker" aria-labelledby="klasse-picker-label">
              <div id="klasse-picker-label" className="form-label">Klasse wählen</div>
              <input type="hidden" name="klasse" value={selectedKlasse} />
              <div className="klasse-category-tabs" role="tablist" aria-label="Führerscheinkategorie">
                {KATEGORIEN.map((kategorie) => {
                  const isActive = kategorie.id === activeKategorie;
                  return (
                    <button
                      key={kategorie.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`klasse-category-tab ${isActive ? 'is-active' : ''}`}
                      onClick={() => {
                        setActiveKategorie(kategorie.id);
                        setSelectedKlasse(kategorie.klassen[0]?.code ?? selectedKlasse);
                      }}
                    >
                      {kategorie.label}
                    </button>
                  );
                })}
              </div>

              <div className="klasse-chip-grid" role="radiogroup" aria-label={`${aktiveKategorie.label} Klassen`}>
                {aktiveKategorie.klassen.map((klasse) => {
                  const isSelected = klasse.code === selectedKlasse;
                  return (
                    <button
                      key={klasse.code}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      className={`klasse-choice ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setSelectedKlasse(klasse.code)}
                    >
                      <span className="klasse-choice-code">{klasse.code}</span>
                      <span className="klasse-choice-copy">
                        <span className="klasse-choice-name">{klasse.name}</span>
                        <span className="klasse-choice-desc">{klasse.beschreibung}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="standort">Standort</label>
                <select id="standort" name="standort" required defaultValue="">
                  <option value="" disabled>Bitte wählen</option>
                  {STANDORTE.map((s) => (
                    <option key={s.ort} value={s.ort}>{s.ort}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="nachricht">Nachricht (optional)</label>
              <textarea id="nachricht" name="nachricht" rows={3} placeholder="Fragen, Wünsche oder Anmerkungen …" />
            </div>

            <div className="form-field">
              <label htmlFor="datum">Wunschtermin</label>
              <input
                id="datum"
                name="datum"
                type="text"
                value={datum ? new Date(datum).toLocaleDateString('de-DE') : ''}
                placeholder="Bitte im Kalender links wählen"
                readOnly
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary justify-center" disabled={status === 'sending'}>
                {status === 'sending' ? 'Wird vorbereitet …' : 'Per E-Mail senden'}
                <span aria-hidden>→</span>
              </button>
              <button
                type="button"
                className="btn-whatsapp justify-center"
                disabled={status === 'sending'}
                onClick={(event) => {
                  const form = event.currentTarget.form;
                  if (form) submitDetails(form, 'whatsapp');
                }}
              >
                Per WhatsApp senden
                <span aria-hidden>→</span>
              </button>
            </div>

            {status === 'success' && (
              <div className="form-status form-status-success" role="status" aria-live="polite">
                ✓ {statusMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="form-status form-status-error" role="alert" aria-live="assertive">
                ⚠ {statusMessage}
              </div>
            )}

            <p className="form-hint">
              Beim Klick öffnet sich dein Mail-Programm oder WhatsApp mit allen ausgefüllten Daten. Du entscheidest, wie du die Anfrage absendest.
            </p>
          </form>
        </motion.div>
      </div>

      <style jsx global>{`
        .kontakt-section {
          background:
            radial-gradient(ellipse at 12% 12%, rgba(91, 79, 233, 0.13) 0%, transparent 36%),
            radial-gradient(ellipse at 88% 20%, rgba(37, 211, 102, 0.11) 0%, transparent 34%),
            radial-gradient(ellipse at 52% 100%, rgba(236, 72, 153, 0.08) 0%, transparent 42%),
            linear-gradient(180deg, #F8F6F0 0%, #EDE9E1 54%, #F8FAFC 100%);
        }
        .kontakt-section::before {
          background:
            linear-gradient(115deg, rgba(255, 255, 255, 0.62), transparent 36%),
            linear-gradient(290deg, rgba(255, 255, 255, 0.52), transparent 42%);
        }
        .kontakt-channels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 18px;
          margin-bottom: 56px;
        }
        @media (min-width: 1280px) {
          .kontakt-channels { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .kontakt-channel {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(22px) saturate(165%);
          -webkit-backdrop-filter: blur(22px) saturate(165%);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.82),
            0 18px 54px -40px rgba(26, 26, 46, 0.34);
          text-decoration: none;
          transition: all 250ms cubic-bezier(0.22, 1, 0.36, 1);
          min-height: 104px;
        }
        .kontakt-channel:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px -12px rgba(91, 79, 233, 0.22);
        }
        .kontakt-channel-call:hover { border-color: rgba(124, 58, 237, 0.4); }
        .kontakt-channel-whatsapp {
          background: linear-gradient(135deg, rgba(37, 211, 102, 0.18) 0%, rgba(255, 255, 255, 0.62) 100%);
          border-color: rgba(37, 211, 102, 0.3);
        }
        .kontakt-channel-whatsapp:hover { border-color: rgba(37, 211, 102, 0.6); }
        .kontakt-channel-mail:hover { border-color: rgba(124, 58, 237, 0.4); }
        .kontakt-channel-form {
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.16) 0%, rgba(255, 255, 255, 0.62) 100%);
          border-color: rgba(124, 58, 237, 0.3);
        }
        .kontakt-channel-form:hover { border-color: rgba(124, 58, 237, 0.5); }
        .kontakt-channel-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          font-size: 22px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(26, 26, 46, 0.08);
          border-radius: 16px;
          color: var(--c-navy);
          flex-shrink: 0;
        }
        .kontakt-channel-whatsapp .kontakt-channel-icon {
          background: rgba(37, 211, 102, 0.18);
          color: #128C7E;
          border-color: rgba(37, 211, 102, 0.3);
        }
        .kontakt-channel-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }
        .kontakt-channel-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26, 26, 46, 0.6);
          line-height: 1.2;
        }
        .kontakt-channel-value {
          font-size: 15px;
          font-weight: 700;
          color: var(--c-navy);
          line-height: 1.3;
          overflow-wrap: anywhere;
        }
        @media (max-width: 520px) {
          .kontakt-channels {
            grid-template-columns: 1fr;
          }
          .kontakt-channel {
            min-height: 94px;
            padding: 20px;
          }
        }

        .kontakt-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(26, 26, 46, 0.1);
        }
        @media (min-width: 1024px) {
          .kontakt-grid { grid-template-columns: 0.9fr 1.1fr; gap: 32px; }
        }
        .kontakt-form {
          padding: 28px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.72);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          backdrop-filter: blur(24px) saturate(170%);
          -webkit-backdrop-filter: blur(24px) saturate(170%);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.86),
            0 28px 72px -48px rgba(26, 26, 46, 0.38);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 600px) {
          .form-row { grid-template-columns: 1fr 1fr; }
        }
        .form-field { display: flex; flex-direction: column; gap: 6px; }
        .form-field label,
        .form-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26, 26, 46, 0.6);
        }
        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          color: var(--c-navy);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(26, 26, 46, 0.15);
          border-radius: 10px;
          font-family: inherit;
          transition: border-color 200ms, background 200ms, box-shadow 200ms;
        }
        .form-field input::placeholder,
        .form-field textarea::placeholder { color: rgba(26, 26, 46, 0.4); }
        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          outline: none;
          border-color: #7C3AED;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
        }
        .form-field select { appearance: none; cursor: pointer; }
        .form-field textarea { resize: vertical; min-height: 80px; }
        .klasse-picker {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .klasse-category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .klasse-category-tab {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid rgba(26, 26, 46, 0.1);
          background: rgba(255, 255, 255, 0.58);
          color: rgba(26, 26, 46, 0.68);
          font-size: 13px;
          font-weight: 700;
          transition: transform 200ms, border-color 200ms, background 200ms, color 200ms, box-shadow 200ms;
        }
        .klasse-category-tab:hover {
          transform: translateY(-1px);
          border-color: rgba(124, 58, 237, 0.28);
          color: var(--c-navy);
        }
        .klasse-category-tab.is-active {
          border-color: transparent;
          background: linear-gradient(135deg, #5B4FE9 0%, #7C3AED 100%);
          color: #F8F8FB;
          box-shadow: 0 12px 28px -14px rgba(124, 58, 237, 0.72);
        }
        .klasse-chip-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 720px) {
          .klasse-chip-grid { grid-template-columns: 1fr 1fr; }
        }
        .klasse-choice {
          display: flex;
          gap: 12px;
          min-height: 92px;
          padding: 14px;
          text-align: left;
          border-radius: 16px;
          border: 1px solid rgba(26, 26, 46, 0.1);
          background: rgba(255, 255, 255, 0.58);
          transition: transform 220ms, border-color 220ms, background 220ms, box-shadow 220ms;
        }
        .klasse-choice:hover {
          transform: translateY(-2px);
          border-color: rgba(124, 58, 237, 0.26);
          background: rgba(255, 255, 255, 0.76);
        }
        .klasse-choice.is-selected {
          border-color: rgba(37, 211, 102, 0.48);
          background:
            linear-gradient(135deg, rgba(37, 211, 102, 0.14), rgba(255, 255, 255, 0.82)),
            rgba(255, 255, 255, 0.82);
          box-shadow: 0 16px 32px -20px rgba(37, 211, 102, 0.58);
        }
        .klasse-choice-code {
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          min-width: 44px;
          height: 34px;
          padding: 0 10px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.14), rgba(124, 58, 237, 0.12));
          border: 1px solid rgba(124, 58, 237, 0.24);
          color: #6D28D9;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.08em;
        }
        .klasse-choice.is-selected .klasse-choice-code {
          background: linear-gradient(135deg, #25D366 0%, #5B4FE9 100%);
          border-color: transparent;
          color: #F8F8FB;
        }
        .klasse-choice-copy {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 4px;
        }
        .klasse-choice-name {
          color: var(--c-navy);
          font-size: 14px;
          font-weight: 800;
          line-height: 1.25;
        }
        .klasse-choice-desc {
          color: rgba(26, 26, 46, 0.62);
          font-size: 12.5px;
          line-height: 1.45;
        }
        .form-actions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 640px) {
          .form-actions { grid-template-columns: 1fr 1fr; }
        }
        .form-actions .btn-primary,
        .form-actions .btn-whatsapp {
          width: 100%;
          min-height: 54px;
        }
        .form-status {
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 13.5px;
          line-height: 1.5;
        }
        .form-status-success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #15803D;
        }
        .form-status-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #B91C1C;
        }
        .form-hint {
          font-size: 12px;
          color: rgba(26, 26, 46, 0.6);
          line-height: 1.5;
          margin-top: -4px;
        }
      `}</style>
    </section>
  );
}

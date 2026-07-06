'use client';

import Link from 'next/link';
import { KATEGORIEN } from '@/lib/klassen';
import { STANDORTE, HAUPTNUMMER } from '@/lib/standorte';
import { BRAND_SLOGAN } from '@/lib/modes';

const WHATSAPP_URL = 'https://wa.me/491704769911?text=Hi%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Fahrstunde%20bei%20Wollenweber.';

const NAV_LINKS = [
  { href: '#klassen', label: 'Klassen & Seminare' },
  { href: '#lernpfade', label: 'Lernpfade' },
  { href: '#bewertungen', label: 'Bewertungen' },
  { href: '#team', label: 'Team' },
  { href: '#standorte', label: 'Standorte' },
  { href: '#regionen', label: 'Regionen' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-page">
        <div className="footer-cta-strip">
          <div>
            <div className="eyebrow mb-2" style={{ color: 'rgba(248, 248, 251, 0.7)' }}>Bereit loszufahren?</div>
            <h3 className="text-2xl font-semibold text-offwhite md:text-3xl">
              {BRAND_SLOGAN} – <span className="gradient-text gradient-text-italic">mit Wollenweber.</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#kontakt" className="btn-primary">Kontaktformular →</a>
            <a href={`tel:${HAUPTNUMMER.mobilTel}`} className="btn-ghost-dark">
              {HAUPTNUMMER.mobil} <span aria-hidden>📱</span>
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <a href="#top" className="footer-brand">
              <div className="footer-mark">W</div>
              <div>
                <div className="footer-brand-name">Fahrschule Wollenweber</div>
                <div className="footer-brand-sub">Fahrschule-Wollenweber GmbH</div>
              </div>
            </a>
            <p className="footer-tagline">
              Drei Fahrlehrer, zwei Standorte, über 20 Klassen. Premium Fahrschule im Westerwald seit Jahrzehnten.
            </p>
            <div className="footer-social">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
              <a href={`mailto:${HAUPTNUMMER.email}`} aria-label="E-Mail" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-head">Klassen</div>
            <ul className="footer-list">
              {KATEGORIEN.map((k) => (
                <li key={k.id}>
                  <a href="#klassen">{k.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-head">Standorte</div>
            <ul className="footer-list">
              {STANDORTE.map((s) => (
                <li key={s.ort}>
                  <a href="#standorte">
                    {s.ort}
                    <span className="footer-list-sub">{s.adresse}</span>
                    <span className="footer-list-sub">Mobil: {HAUPTNUMMER.mobil}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-head">Kontakt</div>
            <ul className="footer-list">
              <li>
                <a href={`tel:${HAUPTNUMMER.mobilTel}`}>
                  Mobil: {HAUPTNUMMER.mobil}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp schreiben</a>
              </li>
              <li>
                <a href={`mailto:${HAUPTNUMMER.email}`}>{HAUPTNUMMER.email}</a>
              </li>
              <li>
                <a href="#kontakt">Kontaktformular</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-meta">
          <div className="footer-meta-left">
            <span>© {new Date().getFullYear()} Fahrschule-Wollenweber GmbH</span>
            <span className="dot-sep">·</span>
            <Link href="/impressum/">Impressum</Link>
            <span className="dot-sep">·</span>
            <Link href="/datenschutz/">Datenschutz</Link>
            <span className="dot-sep">·</span>
            <Link href="/agb/">AGB</Link>
          </div>
          <div className="footer-meta-right">
            <a href={NAV_LINKS.find((l) => l.label === 'Kontakt')!.href} className="footer-cta">Jetzt anmelden →</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 72px 0 32px 0;
          background: #0a0a14;
          border-top: 1px solid var(--c-line);
        }
        .footer-cta-strip {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
          justify-content: space-between;
          padding: 32px 36px;
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.1) 0%, rgba(124, 58, 237, 0.06) 100%);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          margin-bottom: 56px;
        }
        @media (min-width: 768px) {
          .footer-cta-strip { flex-direction: row; align-items: center; }
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--c-line);
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 48px; }
        }
        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .footer-mark {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #5B4FE9 0%, #7C3AED 100%);
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 17px;
          color: #F8F8FB;
          box-shadow: 0 6px 24px -8px rgba(124, 58, 237, 0.6);
        }
        .footer-brand-name {
          font-size: 15px;
          font-weight: 600;
          color: #F8F8FB;
        }
        .footer-brand-sub {
          font-size: 10.5px;
          letter-spacing: 0.12em;
          color: var(--c-mute);
          margin-top: 2px;
        }
        .footer-tagline {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--c-mute);
          max-width: 320px;
          margin-bottom: 18px;
        }
        .footer-social {
          display: flex;
          gap: 10px;
        }
        .footer-social-link {
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--c-line);
          color: var(--c-mute);
          transition: all 200ms;
        }
        .footer-social-link:hover {
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%);
          border-color: rgba(124, 58, 237, 0.4);
          color: #F8F8FB;
        }
        .footer-head {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #F8F8FB;
          margin-bottom: 18px;
        }
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-list a {
          font-size: 13.5px;
          color: var(--c-mute);
          transition: color 200ms;
          display: block;
        }
        .footer-list a:hover { color: #c4b5fd; }
        .footer-list-sub {
          display: block;
          font-size: 11.5px;
          color: rgba(248, 248, 251, 0.4);
          margin-top: 1px;
        }
        .footer-meta {
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
          justify-content: space-between;
          padding-top: 28px;
        }
        @media (min-width: 768px) {
          .footer-meta { flex-direction: row; align-items: center; }
        }
        .footer-meta-left {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 12.5px;
          color: var(--c-mute);
          align-items: center;
        }
        .footer-meta-left :global(a) { color: var(--c-mute); transition: color 200ms; }
        .footer-meta-left :global(a:hover) { color: #F8F8FB; }
        .dot-sep { opacity: 0.4; }
        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          color: #F8F8FB;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--c-line);
          border-radius: 999px;
          transition: background 200ms, border-color 200ms;
        }
        .footer-cta:hover {
          background: rgba(124, 58, 237, 0.15);
          border-color: rgba(124, 58, 237, 0.5);
        }
      `}</style>
    </footer>
  );
}

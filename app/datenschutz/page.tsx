import { HAUPTNUMMER } from '@/lib/standorte';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung',
};

export default function Datenschutz() {
  return (
    <>
      <main className="legal-page">
        <div className="container-page">
          <div className="eyebrow mb-4">Rechtliches</div>
          <h1 className="display-2 mb-10 text-offwhite">
            Datenschutz&shy;erklärung
          </h1>

          <section className="legal-section">
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              Fahrschule-Wollenweber GmbH
              <br />
              Michael Wollenweber
              <br />
              Neuer Weg 3
              <br />
              56470 Bad Marienberg
              <br />
              {HAUPTNUMMER.email}
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen wie IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL und Zeitpunkt des Zugriffs durch unseren Hosting-Anbieter erfasst (Server-Log-Dateien). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Kontaktformular und Anmeldung</h2>
            <p>
              Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahme) bzw. lit. a (Einwilligung).
            </p>
            <p>
              Diese Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck der Speicherung entfällt.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Cookies</h2>
            <p>
              Unsere Website verwendet keine technisch nicht notwendigen Cookies. Wir setzen kein Tracking, keine Analyse-Tools wie Google Analytics und keine Werbe-Cookies ein.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie an uns übermitteln, für Dritte nicht lesbar.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Externe Dienste / Video-Embeds</h2>
            <p>
              Unsere Website bindet lokal gehostete Videos ein, die direkt von unserem Webserver ausgeliefert werden. Es werden keine Drittanbieter wie YouTube oder Vimeo eingebunden. Beim Abspielen der Videos werden keine Daten an externe Dienste übermittelt.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch und Beschwerde bei der zuständigen Aufsichtsbehörde.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Beschwerderecht</h2>
            <p>
              Zuständige Aufsichtsbehörde: Landesbeauftragter für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz ({' '}
              <a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer">www.datenschutz.rlp.de</a>).
            </p>
          </section>
        </div>
      </main>
      <Footer />

      <style>{`
        .legal-page {
          padding: 140px 0 80px 0;
          min-height: 100vh;
        }
        .legal-section {
          max-width: 720px;
          margin-bottom: 40px;
        }
        .legal-section h2 {
          font-size: 18px;
          font-weight: 600;
          color: #F8F8FB;
          margin-bottom: 12px;
        }
        .legal-section p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(248, 248, 251, 0.75);
        }
        .legal-section a {
          color: #c4b5fd;
          text-decoration: underline;
          text-decoration-color: rgba(124, 58, 237, 0.3);
          text-underline-offset: 3px;
        }
        .legal-section a:hover { color: #F8F8FB; }
      `}</style>
    </>
  );
}

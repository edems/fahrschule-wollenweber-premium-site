import Footer from '@/components/Footer';

export const metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
};

export default function AGB() {
  return (
    <>
      <main className="legal-page">
        <div className="container-page">
          <div className="eyebrow mb-4">Rechtliches</div>
          <h1 className="display-2 mb-10 text-offwhite">
            Allgemeine Geschäfts&shy;bedingungen
          </h1>

          <section className="legal-section">
            <h2>§ 1 Geltungsbereich</h2>
            <p>
              Diese AGB gelten für alle Verträge zwischen der Fahrschule-Wollenweber GmbH (nachfolgend „Fahrschule") und ihren Fahrschülerinnen und Fahrschülern (nachfolgend „Kunde") über die Erteilung von Fahrunterricht.
            </p>
          </section>

          <section className="legal-section">
            <h2>§ 2 Vertragsschluss</h2>
            <p>
              Der Ausbildungsvertrag kommt durch Unterzeichnung des Anmeldeformulars und Aushändigung einer Ausbildungsbescheinigung zustande. Mündliche Nebenabreden bestehen nicht.
            </p>
          </section>

          <section className="legal-section">
            <h2>§ 3 Pflichten des Kunden</h2>
            <p>
              Der Kunde verpflichtet sich, den Unterricht regelmäßig zu besuchen, die vereinbarten Termine einzuhalten und dem Fahrlehler alle für die Ausbildung notwendigen Informationen und Unterlagen rechtzeitig zur Verfügung zu stellen.
            </p>
            <p>
              Bei Verhinderung sind Fahrstunden mindestens 24 Stunden vor Termin abzusagen. Bei kurzfristigerer Absage oder Nichterscheinen behält sich die Fahrschule vor, die ausgefallene Fahrstunde in Rechnung zu stellen.
            </p>
          </section>

          <section className="legal-section">
            <h2>§ 4 Pflichten der Fahrschule</h2>
            <p>
              Die Fahrschule verpflichtet sich, den Kunden entsprechend der geltenden Fahrschüler-Ausbildungs-Ordnung und der Fahrerlaubnis-Verordnung ordnungsgemäß auszubilden.
            </p>
          </section>

          <section className="legal-section">
            <h2>§ 5 Preise und Zahlungsbedingungen</h2>
            <p>
              Die Preise richten sich nach der aktuellen Preisliste der Fahrschule. Die vereinbarten Gebühren sind nach jeder Fahrstunde bzw. nach Abschluss von Theorieblöcken fällig. Bei Sonderleistungen wie Intensivkursen kann eine Vorauszahlung vereinbart werden.
            </p>
          </section>

          <section className="legal-section">
            <h2>§ 6 Haftung</h2>
            <p>
              Die Fahrschule haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Für Schäden während der Fahrausbildung durch den Kunden am Fahrzeug besteht eine Kaskoversicherung. Der Kunde haftet für von ihm schuldhaft verursachte Schäden.
            </p>
          </section>

          <section className="legal-section">
            <h2>§ 7 Kündigung</h2>
            <p>
              Der Ausbildungsvertrag kann von beiden Seiten jederzeit schriftlich gekündigt werden. Bereits erbrachte Leistungen sind anteilig zu vergüten.
            </p>
          </section>

          <section className="legal-section">
            <h2>§ 8 Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </section>

          <section className="legal-section">
            <p className="text-mute italic">Stand: 2024</p>
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
          margin-bottom: 32px;
        }
        .legal-section h2 {
          font-size: 17px;
          font-weight: 600;
          color: #F8F8FB;
          margin-bottom: 10px;
        }
        .legal-section p {
          font-size: 14.5px;
          line-height: 1.7;
          color: rgba(248, 248, 251, 0.75);
        }
      `}</style>
    </>
  );
}

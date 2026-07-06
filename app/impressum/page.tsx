import { HAUPTNUMMER } from '@/lib/standorte';
import TopNav from '@/components/nav/TopNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum',
};

export default function Impressum() {
  return (
    <>
      <main className="legal-page">
        <div className="container-page">
          <div className="eyebrow mb-4">Rechtliches</div>
          <h1 className="display-2 mb-10 text-offwhite">
            Impressum & <span className="gradient-text gradient-text-italic">Anbieterkennzeichnung</span>
          </h1>

          <section className="legal-section">
            <h2>Anbieter (§ 5 TMG)</h2>
            <p>
              <strong>Fahrschule-Wollenweber GmbH</strong>
              <br />
              Neuer Weg 3
              <br />
              56470 Bad Marienberg
            </p>
            <p>
              <strong>Geschäftsführung und Verantwortlicher Leiter:</strong>
              <br />
              Michael Wollenweber
            </p>
          </section>

          <section className="legal-section">
            <h2>Kontakt</h2>
            <p>
              <strong>Telefon (Mobil):</strong> {HAUPTNUMMER.mobil}
              <br />
              <strong>E-Mail:</strong> <a href={`mailto:${HAUPTNUMMER.email}`}>{HAUPTNUMMER.email}</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>Registereintrag</h2>
            <p>
              <strong>Handelsregister:</strong> Amtsgericht Montabaur
              <br />
              <strong>Registernummer:</strong> HRB 22962
              <br />
              <strong>Steuernummer:</strong> 02/670/10726
            </p>
          </section>

          <section className="legal-section">
            <h2>Aufsichtsbehörde</h2>
            <p>
              Verbandsgemeinde Bad Marienberg
              <br />
              – Ordnungsamt –
              <br />
              Kirburger Straße 4
              <br />
              56470 Bad Marienberg
            </p>
          </section>

          <section className="legal-section">
            <h2>Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</h2>
            <p>
              Michael Wollenweber
              <br />
              Anschrift wie oben
            </p>
          </section>

          <section className="legal-section">
            <h2>EU-Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="legal-section">
            <h2>Haftung für Inhalte und Links</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
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
        .legal-section strong { color: #F8F8FB; font-weight: 600; }
      `}</style>
    </>
  );
}

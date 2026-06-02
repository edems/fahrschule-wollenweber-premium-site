'use client';

import { motion } from 'framer-motion';
import { KATEGORIEN } from '@/lib/klassen';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Preise() {
  return (
    <section id="preise" className="section relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="Investition"
          title={
            <>
              Preise <span className="gradient-text gradient-text-italic">auf Anfrage.</span>
            </>
          }
          description="Die Kosten für den Führerschein hängen von deiner Klasse, deinem Lerntempo und der Anzahl der Fahrstunden ab. Wir beraten dich persönlich und transparent."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="preise-card"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-offwhite">
                Warum wir keine Listenpreise zeigen
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-mute">
                Ein Führerschein ist so individuell wie du. Die Führerscheinklassen unterscheiden
                sich stark in Theorie-Stunden, Praxis-Stunden und Prüfungsgebühren. Dazu kommt,
                dass jede Fahrschülerin und jeder Fahrschüler unterschiedlich viele Fahrstunden
                braucht.
              </p>
              <p className="text-[15px] leading-relaxed text-mute">
                Statt einer Liste, die am Ende nicht passt, bekommst du bei uns ein ehrliches,
                persönliches Angebot nach einem kurzen Beratungsgespräch – kostenlos und
                unverbindlich.
              </p>
            </div>

            <div className="preise-stats">
              <div className="eyebrow mb-4">Was im Preis enthalten ist</div>
              <ul className="space-y-3 text-[14px]">
                {[
                  'Theorie-Unterricht',
                  'Praxis-Fahrstunden (nach Bedarf)',
                  'Prüfungsvorbereitung',
                  'Anmeldung & Behördenwege',
                  'Lehrmaterial digital',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3 text-mute"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-blue to-violet" />
                    <span className="text-offwhite/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="preise-cta-row">
            <div>
              <div className="eyebrow mb-2">Klassen-Übersicht</div>
              <div className="flex flex-wrap gap-2">
                {KATEGORIEN.map((k) => (
                  <span key={k.id} className="preise-kat-pill">
                    {k.label} · {k.klassen.length}
                  </span>
                ))}
              </div>
            </div>
            <a href="#kontakt" className="btn-primary self-start">
              Beratungstermin anfragen <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .preise-card {
          background: rgba(26, 26, 46, 0.4);
          border: 1px solid var(--c-line);
          border-radius: 28px;
          padding: 36px 32px 32px 32px;
          backdrop-filter: blur(8px);
          transition: border-color 300ms, transform 300ms;
        }
        .preise-card:hover {
          border-color: rgba(124, 58, 237, 0.25);
        }
        .preise-stats {
          padding: 28px;
          background: rgba(10, 10, 20, 0.4);
          border: 1px solid var(--c-line);
          border-radius: 20px;
        }
        .preise-cta-row {
          margin-top: 32px;
          padding-top: 28px;
          border-top: 1px solid var(--c-line);
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: space-between;
          align-items: flex-start;
        }
        @media (min-width: 768px) {
          .preise-cta-row { flex-direction: row; align-items: center; }
        }
        .preise-kat-pill {
          display: inline-block;
          padding: 5px 11px;
          font-size: 12px;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--c-line);
          border-radius: 999px;
          color: var(--c-mute);
          transition: background 200ms, border-color 200ms;
        }
        .preise-kat-pill:hover {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.3);
        }
      `}</style>
    </section>
  );
}

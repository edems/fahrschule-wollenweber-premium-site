'use client';

import { motion } from 'framer-motion';
import { REGIONEN, REGIONEN_COUNT } from '@/lib/regionen';
import { HAUPTNUMMER } from '@/lib/standorte';
import SectionHeader from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/ScrollMotion';

const FEATURED_REGIONS = [
  'Bad Marienberg',
  'Hachenburg',
  'Westerburg',
  'Rennerod',
  'Altenkirchen',
  'Daaden',
];

const regionGroups = [
  { title: 'Rund um Bad Marienberg', towns: REGIONEN.slice(0, 23) },
  { title: 'Rund um Hachenburg', towns: REGIONEN.slice(23, 49) },
  { title: 'Westerwald und Umgebung', towns: REGIONEN.slice(49) },
];

export default function Regionen() {
  return (
    <section id="regionen" className="section section-light transition-to-dark relative">
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Deine Region"
          title={
            <>
              Zufriedene Fahrschüler <span className="gradient-text gradient-text-italic">aus dem Westerwald.</span>
            </>
          }
          description={`Viele unserer Fahrschüler kommen aus Westerburg, Hachenburg, Bad Marienberg, Altenkirchen und den umliegenden Orten. Über ${REGIONEN_COUNT} Orte im Westerwald zeigen, wo Fahrschule Wollenweber regional gesucht und empfohlen wird.`}
        />

        <Reveal delay={0.1} className="region-shell">
          <div className="region-intro">
            <div className="region-map-card">
              <div className="eyebrow mb-3" style={{ color: 'rgba(26, 26, 46, 0.58)' }}>Einzugsgebiet</div>
              <div className="region-count">{REGIONEN_COUNT}</div>
              <p>Orte im Westerwald, mit Fokus auf Bad Marienberg, Hachenburg und die umliegenden Dörfer.</p>
            </div>
            <div className="region-featured" aria-label="Wichtige Orte im Einzugsgebiet">
              {FEATURED_REGIONS.map((ort) => (
                <span key={ort}>{ort}</span>
              ))}
            </div>
          </div>

          <div className="region-groups">
            {regionGroups.map((group, groupIndex) => (
              <motion.article
                key={group.title}
                className="region-group"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: groupIndex * 0.06, ease: 'easeOut' }}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.towns.map((ort) => (
                    <li key={ort}>{ort}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className="region-footer">
            <p>
              Dein Ort ist nicht dabei? Schreib uns per WhatsApp oder ruf mobil an – wir sagen dir, welcher Standort und Ablauf für dich passt.
            </p>
            <a href={`tel:${HAUPTNUMMER.mobilTel}`} className="btn-outline-light shrink-0">
              {HAUPTNUMMER.mobil}
            </a>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .region-shell {
          border-radius: 24px;
          border: 1px solid rgba(26, 26, 46, 0.08);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(248, 248, 251, 0.78)),
            radial-gradient(circle at 16% 12%, rgba(91, 79, 233, 0.1), transparent 32%);
          box-shadow: 0 26px 70px -44px rgba(26, 26, 46, 0.34);
          padding: clamp(22px, 4vw, 40px);
        }
        .region-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 18px;
          align-items: stretch;
          margin-bottom: 18px;
        }
        .region-map-card {
          min-height: 190px;
          border-radius: 18px;
          padding: 22px;
          color: var(--c-navy);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(235, 238, 255, 0.62)),
            repeating-linear-gradient(90deg, rgba(26, 26, 46, 0.04) 0 1px, transparent 1px 34px),
            repeating-linear-gradient(0deg, rgba(26, 26, 46, 0.035) 0 1px, transparent 1px 34px);
          border: 1px solid rgba(26, 26, 46, 0.08);
        }
        .region-count {
          font-family: var(--font-display);
          font-size: clamp(58px, 8vw, 98px);
          line-height: 0.9;
          color: var(--c-violet);
        }
        .region-map-card p {
          margin-top: 14px;
          max-width: 24rem;
          font-size: 14px;
          line-height: 1.65;
          color: rgba(26, 26, 46, 0.68);
        }
        .region-featured {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .region-featured span {
          display: flex;
          align-items: center;
          min-height: 56px;
          padding: 12px 15px;
          border-radius: 14px;
          border: 1px solid rgba(26, 26, 46, 0.08);
          background: rgba(255, 255, 255, 0.72);
          color: var(--c-navy);
          font-size: 15px;
          font-weight: 750;
        }
        .region-groups {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .region-group {
          border-radius: 16px;
          border: 1px solid rgba(26, 26, 46, 0.08);
          background: rgba(255, 255, 255, 0.62);
          padding: 18px;
        }
        .region-group h3 {
          margin-bottom: 12px;
          color: var(--c-navy);
          font-size: 15px;
          font-weight: 800;
        }
        .region-group ul {
          columns: 2;
          column-gap: 18px;
        }
        .region-group li {
          break-inside: avoid;
          padding: 3px 0;
          color: rgba(26, 26, 46, 0.66);
          font-size: 12.5px;
          line-height: 1.35;
        }
        .region-footer {
          margin-top: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-top: 1px solid rgba(26, 26, 46, 0.1);
          padding-top: 20px;
        }
        .region-footer p {
          max-width: 46rem;
          color: rgba(26, 26, 46, 0.64);
          font-size: 13.5px;
          line-height: 1.55;
        }
        @media (max-width: 900px) {
          .region-intro,
          .region-groups {
            grid-template-columns: 1fr;
          }
          .region-featured {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 560px) {
          .region-featured {
            grid-template-columns: 1fr;
          }
          .region-group ul {
            columns: 1;
          }
          .region-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}

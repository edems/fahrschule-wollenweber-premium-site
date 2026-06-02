'use client';

import { motion } from 'framer-motion';
import { REGIONEN, REGIONEN_COUNT } from '@/lib/regionen';
import SectionHeader from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/ScrollMotion';

export default function Regionen() {
  return (
    <section id="regionen" className="section relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="Deine Region"
          title={
            <>
              Wir bilden dich aus, <span className="gradient-text gradient-text-italic">wo du wohnst.</span>
            </>
          }
          description={`Ob Westerburg, Hachenburg, Bad Marienberg oder Altenkirchen – wir holen dich in deiner Region ab. Über ${REGIONEN_COUNT} Orte im Westerwald zählen auf Fahrschule Wollenweber.`}
        />

        <Reveal delay={0.1} className="glass-panel rounded-3xl p-6 md:p-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="eyebrow mb-1">Alle Orte im Einzugsgebiet</div>
              <div className="text-[15px] font-semibold text-offwhite">
                {REGIONEN_COUNT} Orte · gesamter Westerwald
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-mute">
              <span className="h-2 w-2 rounded-full bg-violet" />
              Live-Liste
            </div>
          </div>

          <ul className="flex flex-wrap gap-2">
            {REGIONEN.map((ort, i) => (
              <motion.li
                key={ort}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.35,
                  delay: (i % 12) * 0.02,
                  ease: 'easeOut',
                }}
              >
                <span className="region-pill">
                  <span className="region-pin" aria-hidden>●</span>
                  {ort}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13.5px] text-mute">
              Dein Ort ist nicht dabei? Ruf uns an – wir prüfen, ob wir dich einsammeln können.
            </p>
            <a href="tel:02661-915550" className="btn-ghost shrink-0">
              02661 - 91 55 50 <span aria-hidden>☎</span>
            </a>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .region-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 13px;
          font-size: 12.5px;
          font-weight: 500;
          color: #F8F8FB;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--c-line);
          border-radius: 999px;
          transition: all 200ms;
          cursor: default;
        }
        .region-pill:hover {
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%);
          border-color: rgba(124, 58, 237, 0.4);
          transform: translateY(-1px);
        }
        .region-pin {
          font-size: 7px;
          color: #c4b5fd;
        }
      `}</style>
    </section>
  );
}

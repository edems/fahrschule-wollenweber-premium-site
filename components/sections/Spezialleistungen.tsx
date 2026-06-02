'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEMINARE } from '@/lib/seminare';
import SectionHeader from '@/components/ui/SectionHeader';
import { Reveal, Stagger } from '@/components/ui/ScrollMotion';
import {
  LifebuoyIcon,
  TruckIcon,
  ForkliftIcon,
  ExcavatorIcon,
  WarningIcon,
  CertificateIcon,
} from '@/components/icons/SeminarIcons';

const ICON_MAP = {
  life: LifebuoyIcon,
  truck: TruckIcon,
  forklift: ForkliftIcon,
  excavator: ExcavatorIcon,
  warning: WarningIcon,
  certificate: CertificateIcon,
} as const;

export default function Spezialleistungen() {
  const [active, setActive] = useState(SEMINARE[0].id);
  const aktive = SEMINARE.find((s) => s.id === active)!;
  const Icon = ICON_MAP[aktive.icon];

  return (
    <section id="spezialleistungen" className="section relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="Spezialleistungen"
          title={
            <>
              Mehr als <span className="gradient-text gradient-text-italic">nur Führerschein.</span>
            </>
          }
          description="Berufskraftfahrer-Weiterbildung, Staplerschein, Baumaschinenführer, Aufbauseminare, Fahreignungsseminar – bei uns bist du fachlich richtig."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Stagger delayStep={0.06} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {SEMINARE.map((s) => {
              const ItemIcon = ICON_MAP[s.icon];
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s.id)}
                  className={`seminare-tab ${isActive ? 'is-active' : ''}`}
                >
                  <span className="seminare-tab-icon">
                    <ItemIcon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-left">
                    <span className="seminare-tab-kurz">{s.kurz}</span>
                    <span className="seminare-tab-titel">{s.titel}</span>
                  </span>
                  <span aria-hidden className={`seminare-tab-arrow ${isActive ? 'is-active' : ''}`}>→</span>
                </button>
              );
            })}
          </Stagger>

          <AnimatePresence mode="wait">
            <motion.div
              key={aktive.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-3xl p-6 md:p-8"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="seminare-detail-icon">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="eyebrow mb-1">{aktive.kurz}</div>
                  <h3 className="text-2xl font-semibold text-offwhite">{aktive.titel}</h3>
                </div>
              </div>

              <p className="mb-6 text-[15px] leading-relaxed text-mute">{aktive.beschreibung}</p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="eyebrow mb-1.5 text-[10px]">Zielgruppe</div>
                  <div className="text-[13.5px] text-offwhite/90">{aktive.zielgruppe}</div>
                </div>
                <div>
                  <div className="eyebrow mb-1.5 text-[10px]">Dauer</div>
                  <div className="text-[13.5px] text-offwhite/90">{aktive.dauer}</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="eyebrow mb-2.5 text-[10px]">Inhalte</div>
                <ul className="space-y-2">
                  {aktive.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-mute">
                      <span className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-gradient-to-br from-brand-blue to-violet" />
                      <span className="text-offwhite/90">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="seminare-abschluss">
                <div className="eyebrow mb-1 text-[10px] text-violet-light">Abschluss</div>
                <div className="text-[14px] font-semibold text-offwhite">{aktive.abschluss}</div>
              </div>

              <a href="#kontakt" className="btn-primary mt-6 w-full justify-center">
                {aktive.titel} anfragen
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .seminare-tab {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: rgba(26, 26, 46, 0.4);
          border: 1px solid var(--c-line);
          border-radius: 18px;
          transition: all 250ms;
          width: 100%;
        }
        .seminare-tab:hover {
          border-color: rgba(124, 58, 237, 0.3);
          background: rgba(26, 26, 46, 0.55);
        }
        .seminare-tab.is-active {
          border-color: rgba(124, 58, 237, 0.5);
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.12) 0%, rgba(124, 58, 237, 0.12) 100%);
          box-shadow: 0 8px 28px -10px rgba(124, 58, 237, 0.4);
        }
        .seminare-tab-icon {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(124, 58, 237, 0.12);
          color: #c4b5fd;
          border: 1px solid rgba(124, 58, 237, 0.2);
          transition: background 250ms;
        }
        .seminare-tab.is-active .seminare-tab-icon {
          background: linear-gradient(135deg, #5B4FE9 0%, #7C3AED 100%);
          color: #F8F8FB;
          border-color: transparent;
        }
        .seminare-tab-kurz {
          display: block;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: var(--c-mute);
          text-transform: uppercase;
        }
        .seminare-tab.is-active .seminare-tab-kurz { color: #c4b5fd; }
        .seminare-tab-titel {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #F8F8FB;
          line-height: 1.3;
          margin-top: 2px;
        }
        .seminare-tab-arrow {
          color: var(--c-mute);
          transition: all 250ms;
          font-size: 16px;
        }
        .seminare-tab-arrow.is-active {
          color: #c4b5fd;
          transform: translateX(4px);
        }
        .seminare-detail-icon {
          display: grid;
          place-items: center;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, #5B4FE9 0%, #7C3AED 100%);
          color: #F8F8FB;
          box-shadow: 0 8px 28px -10px rgba(124, 58, 237, 0.6);
        }
        .seminare-abschluss {
          padding: 16px 18px;
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 12px;
        }
      `}</style>
    </section>
  );
}

'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { KATEGORIEN } from '@/lib/klassen';
import { ICON_MAP } from '@/components/icons/KlassenIcons';
import SectionHeader from '@/components/ui/SectionHeader';

type KatId = (typeof KATEGORIEN)[number]['id'];

export default function KlassenHub() {
  const [active, setActive] = useState<KatId>('auto');
  const aktiveKat = KATEGORIEN.find((k) => k.id === active)!;
  const Icon = ICON_MAP[aktiveKat.iconKey];

  return (
    <section id="klassen" className="section relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="Führerscheinklassen"
          title={
            <>
              Von Mofa bis <span className="gradient-text gradient-text-italic">Bus.</span>
            </>
          }
          description="Wähle deine Kategorie und entdecke alle Klassen, die wir im Westerwald ausbilden. Klick auf eine Klasse für die Anmeldung."
        />

        <motion.div
          role="tablist"
          aria-label="Klassen-Kategorien"
          className="mb-10 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {KATEGORIEN.map((k) => {
            const TabIcon = ICON_MAP[k.iconKey];
            const isActive = k.id === active;
            return (
              <button
                key={k.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="klassen-panel"
                onClick={() => setActive(k.id)}
                className={`klasse-tab ${isActive ? 'is-active' : ''}`}
              >
                <TabIcon className="h-4 w-4 shrink-0" />
                <span>{k.label}</span>
              </button>
            );
          })}
        </motion.div>

        <div
          id="klassen-panel"
          role="tabpanel"
          aria-labelledby={active}
          className="glass-panel relative overflow-hidden rounded-3xl p-6 md:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue/30 to-violet/30 text-violet-light ring-1 ring-violet/30"
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <div>
                  <div className="eyebrow mb-1">Kategorie</div>
                  <h3 className="text-2xl font-semibold text-offwhite md:text-3xl">
                    {aktiveKat.label}
                  </h3>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {aktiveKat.klassen.map((k, idx) => (
                  <motion.li
                    key={k.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <KlasseCard k={k} />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .klasse-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--c-mute);
          border: 1px solid var(--c-line);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.02);
          transition: color 250ms, background 250ms, border-color 250ms, transform 250ms;
        }
        .klasse-tab:hover {
          color: #F8F8FB;
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-1px);
        }
        .klasse-tab.is-active {
          color: #F8F8FB;
          background: linear-gradient(135deg, #5B4FE9 0%, #7C3AED 100%);
          border-color: transparent;
          box-shadow: 0 6px 20px -6px rgba(124, 58, 237, 0.7);
        }
      `}</style>
    </section>
  );
}

function KlasseCard({ k }: { k: { code: string; name: string; beschreibung: string; lang?: string } }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={`#kontakt?klasse=${k.code}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      className="klasse-card group flex h-full flex-col rounded-2xl border border-line bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:bg-white/[0.04]"
    >
      <div className="mb-4 flex items-baseline justify-between">
        <span className="klasse-code">{k.code}</span>
        <span
          aria-hidden
          className="text-mute transition-transform group-hover:translate-x-1 group-hover:text-violet-light"
        >
          →
        </span>
      </div>
      <h4 className="mb-2 text-[15px] font-semibold text-offwhite">
        {k.name}
      </h4>
      <p className="text-[13.5px] leading-relaxed text-mute">
        {k.beschreibung}
      </p>
      {k.lang && (
        <p className="mt-2 text-[12px] leading-relaxed text-mute/80">
          {k.lang}
        </p>
      )}

      <style jsx>{`
        .klasse-code {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 4px 10px;
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.18) 0%, rgba(124, 58, 237, 0.18) 100%);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 999px;
          color: #c4b5fd;
        }
      `}</style>
    </motion.a>
  );
}

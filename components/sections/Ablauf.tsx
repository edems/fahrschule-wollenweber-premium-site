'use client';

import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { PremiumReveal } from '@/components/ui/ScrollMotion';

const ABLAUF_STEPS = [
  {
    title: 'Beraten lassen',
    icon: '01',
    text: 'Melde dich entspannt online, telefonisch oder per WhatsApp. Susanne und Michael klären mit dir alle Formalitäten: Sehtest, Erste-Hilfe-Kurs und Antragsstellung.',
  },
  {
    title: 'Anmelden',
    icon: '02',
    text: 'Wir nehmen deine Daten auf, wählen gemeinsam die passende Führerscheinklasse und geben dir einen klaren Fahrplan mit allen nächsten Schritten.',
  },
  {
    title: 'Theorie smart meistern',
    icon: '03',
    text: 'Lerne mit moderner App, wo immer du willst. Zusätzlich bieten wir spannenden Theorie-Unterricht vor Ort mit echtem Praxisbezug: nie langweilig, immer effektiv.',
  },
  {
    title: 'Fahrpraxis sammeln',
    icon: '04',
    text: 'Du startest in ruhigen Zonen und baust Stück für Stück deine Fähigkeiten auf. Kein Stress, dein Tempo: auf Straßen, die du kennst.',
  },
  {
    title: 'Prüfung bestehen & feiern',
    icon: '05',
    text: 'Perfekt vorbereitet gehst du in die Prüfung. Wir simulieren die Situation vorher, damit du genau weißt, was dich erwartet. Und dann: Freiheit!',
  },
] as const;

function AblaufStep({ step, index }: { step: (typeof ABLAUF_STEPS)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.46, once: false });

  return (
    <motion.article
      ref={ref}
      className="ablauf-step"
      initial={reduce ? false : { opacity: 0, y: 34, filter: 'blur(10px)' }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.34 }}
      transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={`ablauf-number ${inView ? 'is-active' : ''}`}
        aria-hidden
        animate={reduce ? undefined : { scale: inView ? 1.08 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {step.icon}
      </motion.div>

      <div className="ablauf-card premium-edge">
        <div className="ablauf-card-glow" aria-hidden />
        <div className="ablauf-meta">Schritt {step.icon}</div>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </motion.article>
  );
}

export default function Ablauf() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start center', 'end center'],
  });
  const progressRaw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const progress = useSpring(progressRaw, { stiffness: 90, damping: 28, mass: 0.4 });

  return (
    <section id="ablauf" className="section section-light ablauf-section">
      <div className="container-page">
        <PremiumReveal>
          <SectionHeader
            eyebrow="Ablauf"
            title={
              <>
                Dein Weg zum Führerschein —<br />
                <span className="gradient-text gradient-text-italic">klar geführt.</span>
              </>
            }
            description="Von der ersten Beratung bis zur Prüfung: Wir halten den Weg übersichtlich, persönlich und passend zu deinem Tempo."
          />
        </PremiumReveal>

        <div ref={wrapperRef} className="ablauf-wrapper">
          <div className="ablauf-line" aria-hidden>
            <motion.div
              className="ablauf-progress"
              style={reduce ? { scaleY: 1 } : { scaleY: progress }}
            />
          </div>

          {ABLAUF_STEPS.map((step, index) => (
            <AblaufStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .ablauf-section {
          background:
            radial-gradient(ellipse at 14% 10%, rgba(91, 79, 233, 0.16) 0%, transparent 38%),
            radial-gradient(ellipse at 86% 20%, rgba(37, 211, 102, 0.12) 0%, transparent 34%),
            radial-gradient(ellipse at 58% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 40%),
            linear-gradient(180deg, #F8F6F0 0%, #EDE9E1 52%, #F8FAFC 100%);
        }
        .ablauf-section::before {
          background:
            linear-gradient(115deg, rgba(255, 255, 255, 0.64), transparent 34%),
            linear-gradient(295deg, rgba(255, 255, 255, 0.48), transparent 42%);
        }
        .ablauf-section .display-2 {
          color: var(--c-navy);
        }
        .ablauf-wrapper {
          position: relative;
          width: min(100%, 780px);
          margin: clamp(42px, 6vw, 72px) auto 0;
          padding-bottom: 4px;
        }
        .ablauf-line {
          position: absolute;
          top: 12px;
          bottom: 34px;
          left: 16px;
          width: 2px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(26, 26, 46, 0.1);
        }
        .ablauf-progress {
          width: 100%;
          height: 100%;
          transform-origin: top;
          border-radius: inherit;
          background: linear-gradient(180deg, #25D366 0%, #5B4FE9 42%, #7C3AED 72%, #EC4899 100%);
          box-shadow: 0 0 24px rgba(91, 79, 233, 0.32);
        }
        .ablauf-step {
          position: relative;
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: clamp(20px, 4vw, 38px);
          margin-bottom: clamp(22px, 4vw, 34px);
        }
        .ablauf-step:last-child {
          margin-bottom: 0;
        }
        .ablauf-number {
          position: relative;
          z-index: 2;
          display: grid;
          width: 34px;
          height: 34px;
          margin-top: 28px;
          place-items: center;
          border-radius: 999px;
          border: 1px solid rgba(26, 26, 46, 0.12);
          background: rgba(255, 255, 255, 0.72);
          color: rgba(26, 26, 46, 0.6);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition: color 260ms, border-color 260ms, background 260ms, box-shadow 260ms;
        }
        .ablauf-number.is-active {
          border-color: rgba(37, 211, 102, 0.72);
          background: linear-gradient(135deg, #25D366 0%, #5B4FE9 100%);
          color: #F8F8FB;
          box-shadow:
            0 0 0 7px rgba(37, 211, 102, 0.1),
            0 18px 36px -16px rgba(37, 211, 102, 0.72);
        }
        .ablauf-card {
          position: relative;
          overflow: hidden;
          min-height: 168px;
          padding: clamp(24px, 4vw, 34px);
          border: 1px solid rgba(255, 255, 255, 0.74);
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.46));
          backdrop-filter: blur(26px) saturate(170%);
          -webkit-backdrop-filter: blur(26px) saturate(170%);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.86),
            inset 0 -1px 0 rgba(26, 26, 46, 0.04),
            0 26px 70px -42px rgba(26, 26, 46, 0.32);
          transition: border-color 300ms, transform 300ms, background 300ms;
        }
        .ablauf-card:hover {
          transform: translateY(-3px);
          border-color: rgba(124, 58, 237, 0.28);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.58));
        }
        .ablauf-card-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 16% 0%, rgba(37, 211, 102, 0.18), transparent 30%),
            radial-gradient(circle at 96% 12%, rgba(236, 72, 153, 0.14), transparent 32%),
            linear-gradient(135deg, rgba(91, 79, 233, 0.06), transparent 54%);
          opacity: 0.95;
          pointer-events: none;
        }
        .ablauf-meta {
          position: relative;
          z-index: 1;
          margin-bottom: 12px;
          color: #7C3AED;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .ablauf-card h3 {
          position: relative;
          z-index: 1;
          margin: 0 0 12px;
          color: var(--c-navy);
          font-size: clamp(22px, 3vw, 31px);
          line-height: 1.08;
          font-weight: 750;
          letter-spacing: -0.02em;
        }
        .ablauf-card p {
          position: relative;
          z-index: 1;
          max-width: 58ch;
          color: rgba(26, 26, 46, 0.68);
          font-size: 15px;
          line-height: 1.7;
        }
        @media (max-width: 640px) {
          .ablauf-wrapper {
            margin-top: 36px;
          }
          .ablauf-step {
            grid-template-columns: 30px minmax(0, 1fr);
            gap: 16px;
          }
          .ablauf-line {
            left: 14px;
          }
          .ablauf-number {
            width: 30px;
            height: 30px;
            margin-top: 24px;
            font-size: 10px;
          }
          .ablauf-card {
            border-radius: 18px;
            padding: 22px 20px;
          }
        }
      `}</style>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { FAQ_ITEMS } from '@/lib/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section section-light faq-section relative">
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Häufige Fragen"
          title={
            <>
              Gut zu wissen, <span className="gradient-text gradient-text-italic">bevor du startest.</span>
            </>
          }
          description="Kurze Antworten auf die Fragen, die vor der Anmeldung meistens auftauchen. Alles Weitere klären wir gern persönlich."
        />

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <motion.article
              key={item.frage}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.48, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`faq-item ${openIndex === index ? 'is-open' : ''}`}
            >
              <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="faq-content">
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                >
                  <span>{item.frage}</span>
                  <motion.span
                    className="faq-plus"
                    aria-hidden
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                      className="faq-answer-wrap"
                    >
                      <p>{item.antwort}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background:
            radial-gradient(ellipse at 86% 12%, rgba(91, 79, 233, 0.1) 0%, transparent 34%),
            linear-gradient(180deg, #EDE9E1 0%, #F8FAFC 100%);
        }
        .faq-list {
          display: grid;
          gap: 12px;
          max-width: 980px;
        }
        .faq-item {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 18px;
          padding: 18px 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(124, 58, 237, 0.12);
          box-shadow: 0 16px 42px -36px rgba(91, 79, 233, 0.34);
          backdrop-filter: blur(14px) saturate(150%);
          -webkit-backdrop-filter: blur(14px) saturate(150%);
          transition: border-color 220ms, background 220ms, box-shadow 220ms;
        }
        .faq-item.is-open {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(124, 58, 237, 0.22);
          box-shadow: 0 20px 48px -34px rgba(91, 79, 233, 0.34);
        }
        .faq-number {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.12), rgba(236, 72, 153, 0.1));
          border: 1px solid rgba(124, 58, 237, 0.22);
          color: #6D28D9;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
        }
        .faq-content {
          min-width: 0;
        }
        .faq-question {
          display: flex;
          width: 100%;
          min-height: 38px;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          text-align: left;
          color: var(--c-navy);
          font-size: 18px;
          font-weight: 760;
          line-height: 1.25;
          transition: color 180ms;
        }
        .faq-question:hover {
          color: #6D28D9;
        }
        .faq-plus {
          display: grid;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 999px;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.14);
          color: #6D28D9;
          font-size: 22px;
          font-weight: 500;
          line-height: 1;
        }
        .faq-answer-wrap {
          overflow: hidden;
        }
        .faq-item p {
          margin-top: 12px;
          padding-right: 48px;
          color: rgba(26, 26, 46, 0.72);
          font-size: 14.5px;
          line-height: 1.65;
        }
        @media (min-width: 980px) {
          .faq-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .faq-item:last-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 540px) {
          .faq-item {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 20px;
          }
          .faq-number {
            width: 34px;
            height: 34px;
          }
          .faq-item p {
            padding-right: 0;
          }
        }
      `}</style>
    </section>
  );
}

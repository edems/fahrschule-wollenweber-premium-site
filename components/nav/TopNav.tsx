'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { searchTargets, type SearchTarget } from '@/lib/search';

const LINKS = [
  { href: '#klassen', label: 'Klassen & Seminare' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#team', label: 'Team' },
  { href: '#standorte', label: 'Standorte' },
  { href: '#regionen', label: 'Regionen' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchTargets(query), [query]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const navProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (!searchOpen) return;
    inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) setSearchOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSearchOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [searchOpen]);

  const jumpToTarget = (target: SearchTarget) => {
    setSearchOpen(false);
    setOpen(false);
    setQuery('');
    if (target.code) {
      window.dispatchEvent(new CustomEvent('wollenweber:klasse-target', { detail: { code: target.code } }));
      return;
    }
    document.querySelector(target.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const submitSearch = () => {
    if (results[0]) jumpToTarget(results[0]);
  };

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.12] bg-navy-deep/70 backdrop-blur-2xl shadow-[0_18px_60px_-36px_rgba(0,0,0,0.9)]'
          : 'border-b border-white/[0.06] bg-navy-deep/34 backdrop-blur-xl'
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[1px] origin-left bg-gradient-to-r from-brand-blue via-violet to-brand-blue"
        style={{ scaleX: navProgress, opacity: scrolled ? 0.6 : 0 }}
      />

      <div className="container-page flex h-[76px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.6 } }}
            className="premium-edge grid h-9 w-9 place-items-center rounded-[10px] bg-gradient-to-br from-brand-blue to-violet text-sm font-extrabold text-offwhite shadow-[0_6px_24px_-8px_rgba(124,58,237,0.6)]"
          >
            W
          </motion.div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-wide transition-colors group-hover:text-violet-light">
              Fahrschule Wollenweber
            </div>
            <div className="mt-0.5 text-[10.5px] uppercase tracking-[0.2em] text-mute">
              Bad Marienberg · Hachenburg
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-7 text-[14px] font-medium text-mute xl:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div ref={searchRef} className="search-wrap">
            <button
              type="button"
              aria-label="Suche öffnen"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((value) => !value)}
              className="search-toggle"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>

            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="search-panel"
                >
                  <div className="search-input-wrap">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" />
                    </svg>
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') submitSearch();
                      }}
                      placeholder="z. B. Stapler, Automatik, 125er"
                      aria-label="Angebot suchen"
                    />
                  </div>
                  <div className="search-results" role="listbox" aria-label="Suchergebnisse">
                    {query.trim() ? (
                      results.length ? (
                        <>
                          <div className="search-results-head">
                            <span>{results.length === 1 ? 'Bester Treffer' : `${results.length} Treffer`}</span>
                            <small>Enter öffnet den ersten Treffer</small>
                          </div>
                          {results.map((result) => (
                            <button
                              key={result.id}
                              type="button"
                              className="search-result"
                              onClick={() => jumpToTarget(result)}
                              role="option"
                            >
                              <span className="search-result-icon" aria-hidden>
                                {result.code ? result.code.slice(0, 2) : '↳'}
                              </span>
                              <span className="search-result-copy">
                                <strong>{result.label}</strong>
                                <small>{result.detail}</small>
                              </span>
                              <span className="search-result-arrow" aria-hidden>→</span>
                            </button>
                          ))}
                        </>
                      ) : (
                        <div className="search-empty">Nichts gefunden. Versuch z. B. „PKW“, „Motorrad“ oder „WhatsApp“.</div>
                      )
                    ) : (
                      <div className="search-empty">Suche nach Klasse, Thema oder Standort.</div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#kontakt"
            className="premium-press premium-edge hidden xl:inline-flex btn-primary !py-2.5 !px-5 !text-[13px]"
          >
            Anmelden <span aria-hidden>→</span>
          </a>
          <button
            aria-label="Menü öffnen"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/[0.04] xl:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-4 bg-offwhite transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
              <span className={`block h-px w-4 bg-offwhite transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/[0.1] bg-navy-deep/86 backdrop-blur-2xl xl:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-mute hover:bg-white/5 hover:text-offwhite"
                >
                  {l.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setOpen(false)} className="btn-primary mt-2 self-start">
                Anmelden →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-link {
          position: relative;
          transition: color 200ms;
        }
        .nav-link:hover { color: #F8F8FB; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 1px;
          background: linear-gradient(90deg, #5B4FE9 0%, #7C3AED 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .search-wrap {
          position: relative;
        }
        .search-toggle {
          display: grid;
          width: 40px;
          height: 40px;
          place-items: center;
          border-radius: 999px;
          border: 1px solid rgba(248, 248, 251, 0.14);
          background: rgba(255, 255, 255, 0.05);
          color: #F8F8FB;
          transition: transform 200ms, border-color 200ms, background 200ms;
        }
        .search-toggle:hover {
          transform: translateY(-1px);
          border-color: rgba(124, 58, 237, 0.45);
          background: rgba(255, 255, 255, 0.09);
        }
        .search-panel {
          position: absolute;
          right: 0;
          top: calc(100% + 12px);
          width: min(420px, calc(100vw - 32px));
          padding: 12px;
          border-radius: 20px;
          border: 1px solid rgba(248, 248, 251, 0.16);
          background: rgba(10, 10, 20, 0.9);
          box-shadow: 0 24px 80px -36px rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(26px) saturate(180%);
          -webkit-backdrop-filter: blur(26px) saturate(180%);
        }
        .search-input-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 13px;
          border-radius: 14px;
          border: 1px solid rgba(248, 248, 251, 0.12);
          background: rgba(255, 255, 255, 0.07);
          color: rgba(248, 248, 251, 0.62);
        }
        .search-input-wrap input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #F8F8FB;
          font-size: 14px;
        }
        .search-input-wrap input::placeholder {
          color: rgba(248, 248, 251, 0.42);
        }
        .search-results {
          margin-top: 10px;
          display: grid;
          gap: 7px;
          max-height: min(360px, 60vh);
          overflow: auto;
        }
        .search-results-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 2px 3px 4px;
          color: rgba(248, 248, 251, 0.58);
        }
        .search-results-head span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .search-results-head small {
          font-size: 11.5px;
          color: rgba(248, 248, 251, 0.42);
        }
        .search-result {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr) 18px;
          align-items: center;
          gap: 11px;
          width: 100%;
          min-height: 62px;
          padding: 10px 12px 10px 10px;
          text-align: left;
          border-radius: 15px;
          border: 1px solid rgba(248, 248, 251, 0.08);
          background: rgba(255, 255, 255, 0.045);
          color: #F8F8FB;
          transition: background 180ms, transform 180ms, border-color 180ms;
        }
        .search-result:hover {
          transform: translateX(2px);
          border-color: rgba(124, 58, 237, 0.34);
          background: rgba(124, 58, 237, 0.16);
        }
        .search-result-icon {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(91, 79, 233, 0.28), rgba(37, 211, 102, 0.12));
          border: 1px solid rgba(248, 248, 251, 0.12);
          color: #F8F8FB;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.02em;
        }
        .search-result-copy {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .search-result-copy strong {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 13.5px;
          font-weight: 750;
        }
        .search-result-arrow {
          color: rgba(248, 248, 251, 0.44);
          font-weight: 800;
        }
        .search-result-copy small,
        .search-empty {
          color: rgba(248, 248, 251, 0.58);
          font-size: 12px;
          line-height: 1.45;
        }
        .search-empty {
          padding: 12px;
        }
      `}</style>
    </motion.nav>
  );
}

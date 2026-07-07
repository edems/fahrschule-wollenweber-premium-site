'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import type { ModeId } from '@/lib/modes';
import { MODES } from '@/lib/modes';

type Props = {
  active: ModeId;
};

export default function VideoStage({ active }: Props) {
  const refs = useRef<Record<ModeId, HTMLVideoElement | null>>({
    auto: null,
    motorrad: null,
    lkw: null,
    landwirtschaft: null,
    bus: null,
    seminare: null,
    handicap: null,
  });
  const [reducedMotion, setReducedMotion] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  const reducedMotionRef = useRef(reducedMotion);
  const reduce = useReducedMotion();

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    reducedMotionRef.current = reducedMotion;
  }, [reducedMotion]);

  const playActiveVideo = async () => {
    if (reducedMotionRef.current) return true;
    if (MODES[activeRef.current].media !== 'video') return true;
    const v = refs.current[activeRef.current];
    if (!v) return false;
    v.classList.add('is-active');
    try {
      await v.play();
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const v = refs.current[active];
    if (!v) return;
    v.classList.add('is-active');
    if (reducedMotion) {
      v.classList.add('is-paused');
      return;
    }
    v.classList.remove('is-paused');
    if (v.paused) {
      v.currentTime = 0;
      playActiveVideo();
    }
  }, [active, reducedMotion]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      playActiveVideo().then((played) => {
        if (!played) return;
        unlocked = true;
        events.forEach((event) => {
          document.removeEventListener(event, unlock, true);
        });
      });
    };
    const events = ['pointerdown', 'touchstart', 'click', 'keydown'];

    events.forEach((event) => {
      document.addEventListener(event, unlock, { capture: true, passive: true });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, unlock, true);
      });
    };
  }, []);

  // Scroll-Tracking – Video skaliert raus beim Raus-Scrollen, 3D-Tilt mit Maus
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end start'],
  });
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const scale = useSpring(scaleRaw, { stiffness: 60, damping: 22, mass: 0.5 });
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y = useSpring(yRaw, { stiffness: 60, damping: 22, mass: 0.5 });
  const rotateXRaw = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const rotateX = useSpring(rotateXRaw, { stiffness: 50, damping: 20 });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 0.9]);
  const activeMode = MODES[active];

  return (
    <div
      ref={stageRef}
      className="absolute inset-0 z-0 overflow-hidden"
      id="video-stage"
      style={{
        perspective: '1200px',
        backgroundImage: "url('videos/mobile/hero-auto-v1-poster.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : {
          scale,
          y,
          rotateX,
          transformOrigin: 'center 80%',
          transformStyle: 'preserve-3d',
        }}
      >
        {activeMode.media === 'image' ? (
          <div
            key={active}
            data-mode={active}
            aria-hidden="true"
            className="hero-video hero-static is-active"
          >
            <div className="hero-static-bg" />
            <img src={activeMode.image} alt="" aria-hidden="true" className="hero-static-icon" />
            <div className="hero-static-grid" />
          </div>
        ) : (
          <video
            key={active}
            ref={(el) => {
              refs.current[active] = el;
            }}
            data-mode={active}
            muted
            loop
            playsInline
            width={1920}
            height={1080}
            preload="metadata"
            poster={activeMode.poster}
            aria-hidden="true"
            className={`hero-video is-active ${reducedMotion ? 'is-paused' : ''}`}
          >
            <source src={activeMode.videoMobile} type="video/mp4" media="(max-width: 640px)" />
            <source src={activeMode.video} type="video/mp4" />
          </video>
        )}
      </motion.div>

      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-navy-deep"
          style={{ opacity: overlayOpacity }}
        />
      )}

      <style jsx>{`
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 700ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }
        .hero-video.is-active {
          opacity: 1;
        }
        .hero-video.is-paused {
          animation: none !important;
        }
        .hero-static {
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 50% 42%, rgba(37, 211, 102, 0.18), transparent 26%),
            radial-gradient(circle at 30% 60%, rgba(91, 79, 233, 0.24), transparent 34%),
            linear-gradient(135deg, rgba(10, 10, 20, 0.98), rgba(26, 26, 46, 0.88));
        }
        .hero-static-bg {
          position: absolute;
          width: min(70vw, 620px);
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(circle, rgba(248, 248, 251, 0.12), transparent 58%),
            linear-gradient(135deg, rgba(91, 79, 233, 0.28), rgba(37, 211, 102, 0.14));
          filter: blur(2px);
          transform: translateY(4%);
        }
        .hero-static-icon {
          position: relative;
          z-index: 1;
          width: min(38vw, 280px);
          height: min(38vw, 280px);
          object-fit: contain;
          padding: 44px;
          border-radius: 34px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(248, 248, 251, 0.14);
          box-shadow: 0 28px 90px -36px rgba(124, 58, 237, 0.9);
          backdrop-filter: blur(18px);
        }
        .hero-static-grid {
          position: absolute;
          inset: 0;
          opacity: 0.14;
          background-image:
            linear-gradient(rgba(248, 248, 251, 0.24) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 248, 251, 0.24) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at 50% 48%, black, transparent 68%);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-video.is-active {
            transition: opacity 300ms ease !important;
          }
        }
      `}</style>
    </div>
  );
}

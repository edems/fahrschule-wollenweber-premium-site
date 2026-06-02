'use client';

import { useEffect } from 'react';

/**
 * Lenis wurde entfernt: das künstliche Scroll-Lerping fühlt sich tot an,
 * wenn keine scroll-getriebenen Animationen darauf reagieren.
 * Stattdessen nutzen wir natives Browser-Scrolling + Framer-Motion `whileInView`,
 * sodass sichtbare Animationen die User-Energy in Feedback verwandeln.
 *
 * Diese Komponente bleibt als Hook-Punkt erhalten (z. B. für spätere
 * Scroll-Progress-Effekte, Reading-Time, etc.) – aktuell ist sie no-op.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Native browser scroll behavior – kein Lerp, keine künstliche Bremse.
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return null;
}

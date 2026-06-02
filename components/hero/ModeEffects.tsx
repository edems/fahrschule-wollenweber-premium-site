'use client';

import { useEffect } from 'react';
import type { ModeId } from '@/lib/modes';
import { MODES } from '@/lib/modes';

type Props = { active: ModeId };

export default function ModeEffects({ active }: Props) {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const m = MODES[active];
    document.title = `${m.label} · Fahrschule Wollenweber`;
  }, [active]);

  return null;
}

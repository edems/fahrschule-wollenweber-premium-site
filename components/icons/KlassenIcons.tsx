import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { accent?: string };

const baseProps = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function MotorradIcon({ accent = '#7C3AED', ...rest }: IconProps) {
  return (
    <svg {...baseProps} {...rest}>
      <circle cx="8" cy="22" r="4" />
      <circle cx="24" cy="22" r="4" />
      <path d="M8 22 L14 14 L20 14 L24 22" />
      <path d="M14 14 L17 8 L20 8" />
      <path d="M17 8 L21 8" />
      <circle cx="14" cy="14" r="0.8" fill={accent} stroke={accent} />
    </svg>
  );
}

export function AutoIcon({ accent = '#7C3AED', ...rest }: IconProps) {
  return (
    <svg {...baseProps} {...rest}>
      <path d="M4 20 L6 14 L11 12 L21 12 L26 14 L28 20 Z" />
      <circle cx="9" cy="22" r="2.5" />
      <circle cx="23" cy="22" r="2.5" />
      <path d="M4 20 L28 20" />
      <path d="M12 14 L13 18 L19 18 L20 14" />
      <circle cx="25" cy="16" r="0.8" fill={accent} stroke={accent} />
    </svg>
  );
}

export function LkwIcon({ accent = '#7C3AED', ...rest }: IconProps) {
  return (
    <svg {...baseProps} {...rest}>
      <path d="M2 22 L2 10 L14 10 L14 22" />
      <path d="M14 14 L20 14 L24 18 L24 22 L14 22" />
      <circle cx="6" cy="22" r="2.5" />
      <circle cx="19" cy="22" r="2.5" />
      <path d="M16 16 L22 16" />
      <rect x="16" y="16" width="6" height="2" fill={accent} stroke={accent} />
    </svg>
  );
}

export function BusIcon({ accent = '#7C3AED', ...rest }: IconProps) {
  return (
    <svg {...baseProps} {...rest}>
      <path d="M3 22 L3 8 L25 8 L25 22 Z" />
      <path d="M3 17 L25 17" />
      <circle cx="8" cy="22" r="2.5" />
      <circle cx="20" cy="22" r="2.5" />
      <path d="M5 12 L9 12 M11 12 L15 12 M17 12 L21 12" />
      <rect x="22" y="18" width="3" height="2" fill={accent} stroke={accent} />
    </svg>
  );
}

export function LandwirtschaftIcon({ accent = '#7C3AED', ...rest }: IconProps) {
  return (
    <svg {...baseProps} {...rest}>
      <circle cx="22" cy="22" r="5" />
      <circle cx="9" cy="24" r="2.5" />
      <path d="M9 24 L9 18 L17 14 L22 17" />
      <path d="M9 18 L13 18" />
      <path d="M22 17 L22 8" />
      <rect x="20" y="6" width="4" height="2" fill={accent} stroke={accent} />
    </svg>
  );
}

export function SeminareIcon({ accent = '#7C3AED', ...rest }: IconProps) {
  return (
    <svg {...baseProps} {...rest}>
      <path d="M8 4 L24 4 L24 28 L8 28 Z" />
      <path d="M8 8 L24 8" />
      <path d="M12 14 L20 14 M12 18 L20 18 M12 22 L17 22" />
      <path d="M22 20 L24 22 L22 24" stroke={accent} />
    </svg>
  );
}

export const ICON_MAP = {
  motorrad: MotorradIcon,
  auto: AutoIcon,
  lkw: LkwIcon,
  bus: BusIcon,
  landwirtschaft: LandwirtschaftIcon,
  seminare: SeminareIcon,
} as const;

import type { SVGProps } from 'react';

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

export function LifebuoyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="7" />
      <path d="M16 5 L16 9" />
      <path d="M16 23 L16 27" />
      <path d="M5 16 L9 16" />
      <path d="M23 16 L27 16" />
    </svg>
  );
}

export function TruckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M2 22 L2 10 L16 10 L16 22" />
      <path d="M16 14 L22 14 L26 18 L26 22 L16 22" />
      <circle cx="6" cy="22" r="2.5" />
      <circle cx="22" cy="22" r="2.5" />
      <path d="M18 16 L24 16" />
    </svg>
  );
}

export function ForkliftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="10" cy="24" r="3" />
      <circle cx="22" cy="24" r="3" />
      <path d="M10 24 L10 12 L14 12" />
      <path d="M10 18 L16 18" />
      <path d="M16 18 L16 14 L20 14" />
      <path d="M6 10 L6 24" />
    </svg>
  );
}

export function ExcavatorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="8" cy="24" r="3" />
      <circle cx="22" cy="24" r="3" />
      <path d="M5 24 L14 18 L20 20" />
      <path d="M20 20 L24 12 L27 14" />
      <path d="M14 18 L14 22" />
      <path d="M20 20 L20 22" />
    </svg>
  );
}

export function WarningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M16 4 L28 26 L4 26 Z" />
      <path d="M16 12 L16 18" />
      <circle cx="16" cy="22" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function CertificateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="5" y="4" width="18" height="22" rx="1" />
      <path d="M9 10 L19 10" />
      <path d="M9 14 L19 14" />
      <path d="M9 18 L15 18" />
      <circle cx="20" cy="22" r="3" />
      <path d="M20 22 L20 28" />
    </svg>
  );
}

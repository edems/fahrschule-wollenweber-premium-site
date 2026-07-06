export type ModeId = 'auto' | 'motorrad' | 'lkw' | 'landwirtschaft' | 'bus' | 'seminare';

export type ModeConfig = {
  id: ModeId;
  label: string;
  media: 'video' | 'image';
  video: string;
  videoMobile: string;
  poster: string;
  image?: string;
  badge: string;
  badgeItems: { code: string; label?: string }[];
  headline: [string, string, string];
  versprechen: string[];
  cta: string;
  ctaHref: string;
  stats: { value: string; label: string }[];
};

export const BRAND_SLOGAN = 'Dein Weg zum Führerschein';
export const BRAND_VERSPRECHEN = [
  'An vielen Standorten im Westerwald',
  'Lockere Atmosphäre',
  'Qualität steht bei uns im Vordergrund',
  'Wir lehren Sicherheit und Selbstvertrauen',
];

export const MODES: Record<ModeId, ModeConfig> = {
  auto: {
    id: 'auto',
    label: 'PKW',
    media: 'video',
    video: 'videos/hero-auto-v1.mp4',
    videoMobile: 'videos/mobile/hero-auto-v1-mobile.mp4',
    poster: 'videos/mobile/hero-auto-v1-poster.webp',
    badge: 'B197 · BF17 · BE · B96',
    badgeItems: [
      { code: 'B' },
      { code: 'B197' },
      { code: 'BF17' },
      { code: 'BE' },
      { code: 'B96' },
    ],
    headline: ['Dein Weg', 'zum Führerschein.', 'Im Westerwald.'],
    versprechen: [
      'Vom klassischen Autoführerschein bis B197',
      'Michael, Susanne & Alexander bilden dich aus',
      'Lerne auf deinen Straßen, nicht auf fremden',
    ],
    cta: 'Klasse B starten',
    ctaHref: '#kontakt',
    stats: [
      { value: '20+', label: 'Klassen' },
      { value: '2', label: 'Standorte' },
      { value: '3', label: 'Fahrlehrer' },
    ],
  },
  motorrad: {
    id: 'motorrad',
    label: 'Motorrad',
    media: 'video',
    video: 'videos/hero-motorrad-v1.mp4',
    videoMobile: 'videos/mobile/hero-motorrad-v1-mobile.mp4',
    poster: 'videos/mobile/hero-motorrad-v1-poster.webp',
    badge: 'AM · A1 · B196 · A2 · A',
    badgeItems: [
      { code: 'AM' },
      { code: 'A1' },
      { code: 'B196' },
      { code: 'A2' },
      { code: 'A' },
    ],
    headline: ['Freiheit', 'auf zwei Rädern.', 'Kurvig, ehrlich.'],
    versprechen: [
      'Vom Mofa bis zur offenen Motorradklasse',
      'Spezialist Michael für A-Klassen',
      'Sicherheit und Selbstvertrauen von Anfang an',
    ],
    cta: 'Motorrad-Klasse wählen',
    ctaHref: '#kontakt',
    stats: [
      { value: '5', label: 'Motorrad-Klassen' },
      { value: '1', label: 'Spezialistin' },
      { value: '100%', label: 'Leidenschaft' },
    ],
  },
  lkw: {
    id: 'lkw',
    label: 'LKW',
    media: 'video',
    video: 'videos/hero-lkw-v1.mp4',
    videoMobile: 'videos/mobile/hero-lkw-v1-mobile.mp4',
    poster: 'videos/mobile/hero-lkw-v1-poster.webp',
    badge: 'C1 · C1E · C · CE',
    badgeItems: [
      { code: 'C1' },
      { code: 'C1E' },
      { code: 'C' },
      { code: 'CE' },
    ],
    headline: ['Profi am Steuer.', 'Jeder Zentner.', 'Sicher unterwegs.'],
    versprechen: [
      'Berufskraftfahrer-Weiterbildung',
      'Vom leichten C1 bis zum schweren Lastzug CE',
      'Verantwortung lernen, die trägt',
    ],
    cta: 'LKW-Ausbildung anfragen',
    ctaHref: '#kontakt',
    stats: [
      { value: '4', label: 'LKW-Klassen' },
      { value: '5×7h', label: 'Module' },
      { value: 'BKrFQG', label: 'anerkannt' },
    ],
  },
  landwirtschaft: {
    id: 'landwirtschaft',
    label: 'Traktor',
    media: 'video',
    video: 'videos/hero-Landwirtschaft-v1.mp4',
    videoMobile: 'videos/mobile/hero-Landwirtschaft-v1-mobile.mp4',
    poster: 'videos/mobile/hero-Landwirtschaft-v1-poster.webp',
    badge: 'L · T',
    badgeItems: [
      { code: 'L' },
      { code: 'T' },
    ],
    headline: ['Vom Hof', 'auf die Straße.', 'Direkt aus der Region.'],
    versprechen: [
      'Zugmaschinen und landwirtschaftliche Nutzung',
      'Klasse L bis 40 km/h, Klasse T ohne Grenze',
      'Praxisnah, mit Hof, Feld und Straße im Blick',
    ],
    cta: 'Klasse L/T anfragen',
    ctaHref: '#kontakt',
    stats: [
      { value: '2', label: 'Klassen' },
      { value: '15+', label: 'Jahre Erfahrung' },
      { value: 'Ww.', label: 'kompetent' },
    ],
  },
  bus: {
    id: 'bus',
    label: 'Bus',
    media: 'video',
    video: 'videos/hero-bus-v1.mp4',
    videoMobile: 'videos/mobile/hero-bus-v1-mobile.mp4',
    poster: 'videos/mobile/hero-bus-v1-poster.webp',
    badge: 'D1 · D1E · D · DE',
    badgeItems: [
      { code: 'D1' },
      { code: 'D1E' },
      { code: 'D' },
      { code: 'DE' },
    ],
    headline: ['Menschen bewegen.', 'Sicher ankommen.', 'Täglich.'],
    versprechen: [
      'Omnibus-Klassen für den Personenverkehr',
      'D1 bis DE – vom Kleinbus bis zum Gelenkbus',
      'Verantwortung für Fahrgäste verstehen lernen',
    ],
    cta: 'Bus-Klasse anfragen',
    ctaHref: '#kontakt',
    stats: [
      { value: '4', label: 'Bus-Klassen' },
      { value: '24/7', label: 'Beratung' },
      { value: '1', label: 'Mission' },
    ],
  },
  seminare: {
    id: 'seminare',
    label: 'Seminare',
    media: 'image',
    video: '',
    videoMobile: '',
    poster: 'icons/optimized/klassen-seminare.webp',
    image: 'icons/optimized/klassen-seminare.webp',
    badge: 'ASF · FES · BKrFQG · Stapler',
    badgeItems: [
      { code: 'ASF' },
      { code: 'FES' },
      { code: 'BKrFQG' },
      { code: 'Stapler' },
    ],
    headline: ['Seminare', 'mit Erlaubnis.', 'Direkt vor Ort.'],
    versprechen: [
      'Einzige Fahrschule für alle Klassen an den Standorten Bad Marienberg und Hachenburg mit Seminarerlaubnis',
      'ASF Probezeit: Aufbauseminare für Fahranfänger',
      'FES Punkteabbau: Fahreignungsseminar bei Punkten in Flensburg',
    ],
    cta: 'Seminar anfragen',
    ctaHref: '#kontakt',
    stats: [
      { value: 'ASF', label: 'Probezeit' },
      { value: 'FES', label: 'Punkteabbau' },
      { value: '95', label: 'BKrFQG' },
    ],
  },
};

export const MODE_ORDER: ModeId[] = ['auto', 'motorrad', 'lkw', 'bus', 'landwirtschaft', 'seminare'];

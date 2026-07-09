import { KATEGORIEN, klasseAnchorId, type Kategorie } from './klassen';

export type SearchTarget = {
  id: string;
  label: string;
  detail: string;
  href: string;
  code?: string;
  aliases: string[];
};

const SECTION_TARGETS: SearchTarget[] = [
  {
    id: 'kontakt',
    label: 'Kontakt & Anmeldung',
    detail: 'Kontaktformular, WhatsApp, E-Mail',
    href: '#kontakt',
    aliases: ['kontakt', 'anmeldung', 'anmelden', 'whatsapp', 'email', 'e-mail', 'telefon', 'beratung'],
  },
  {
    id: 'standorte',
    label: 'Standorte',
    detail: 'Bad Marienberg und Hachenburg',
    href: '#standorte',
    aliases: ['standort', 'standorte', 'bad marienberg', 'hachenburg', 'adresse', 'öffnungszeiten', 'oeffnungszeiten'],
  },
  {
    id: 'preise',
    label: 'Preise',
    detail: 'Kosten und Preisübersicht',
    href: '#preise',
    aliases: ['preise', 'preis', 'kosten', 'gebühren', 'gebuehren', 'was kostet'],
  },
  {
    id: 'faq',
    label: 'Häufige Fragen',
    detail: 'Anmeldung, Unterlagen, Kosten, Wechsel',
    href: '#faq',
    aliases: ['faq', 'fragen', 'antworten', 'unterlagen', 'anmeldung', 'wechsel', 'fahrschulwechsel', 'kosten'],
  },
  {
    id: 'ablauf',
    label: 'Ablauf',
    detail: 'Von Beratung bis Prüfung',
    href: '#ablauf',
    aliases: ['ablauf', 'prüfung', 'pruefung', 'theorie', 'praxis', 'fahrstunden', 'führerschein weg'],
  },
];

const CATEGORY_ALIASES: Partial<Record<Kategorie['id'], string[]>> = {
  auto: ['pkw', 'auto', 'klasse b', 'anhänger', 'anhaenger'],
  motorrad: ['motorrad', 'mofa', 'roller', 'zweirad'],
  lkw: ['lkw', 'truck', 'c', 'ce', 'c1', 'lastwagen'],
  bus: ['bus', 'omnibus', 'd', 'de', 'personenverkehr'],
  landwirtschaft: ['traktor', 'landwirtschaft', 'trecker', 'zugmaschine', 'klasse t', 'klasse l'],
  seminare: ['seminar', 'seminare', 'weiterbildung', 'spezialschein'],
  handicap: ['handicap', 'handikap', 'behinderung', 'barrierefrei', 'eingeschränkt', 'eingeschraenkt'],
};

const CLASS_ALIASES: Record<string, string[]> = {
  B: ['pkw', 'auto', 'klasse b', 'autoführerschein', 'autofuehrerschein'],
  B197: ['b197', 'automatik', 'schaltkompetenz', 'automatikführerschein', 'automatikfuehrerschein'],
  BF17: ['bf17', 'begleitetes fahren', 'führerschein ab 17', 'fuehrerschein ab 17'],
  BE: ['be', 'anhänger', 'anhaenger', 'großer anhänger', 'grosser anhaenger'],
  B96: ['b96', 'anhänger', 'anhaenger', 'wohnwagen'],
  AM: ['am', 'roller', 'moped', 'kleinkraftrad'],
  M: ['mofa'],
  A1: ['a1', '125er', 'leichtkraftrad'],
  B196: ['b196', '125er', 'a1 erweiterung'],
  A2: ['a2', '35 kw', 'stufenaufstieg'],
  A: ['a offen', 'offene klasse', 'motorrad offen'],
  BKF: ['bkf', 'berufskraftfahrer', 'ladungssicherung', 'lkw weiterbildung'],
  Gabelstapler: ['gabelstapler', 'stapler', 'staplerschein', 'flurförderfahrzeug', 'flurfoerderfahrzeug'],
  Baumaschinen: ['baumaschinen', 'bagger', 'radlader', 'baumaschinenführer', 'baumaschinenfuehrer'],
  ASF: ['asf', 'aufbauseminar', 'probezeit', 'nachschulung'],
  FES: ['fes', 'fahreignungsseminar', 'punkte', 'punkteabbau', 'flensburg'],
  Handicap: ['handicap', 'handikap', 'behinderung', 'führerschein mit handicap', 'fuehrerschein mit handicap'],
};

export const SEARCH_TARGETS: SearchTarget[] = [
  ...KATEGORIEN.flatMap((kategorie) =>
    kategorie.klassen.map((klasse) => ({
      id: `klasse-${klasse.code}`,
      label: `${klasse.code} · ${klasse.name}`,
      detail: kategorie.label,
      href: `#${klasseAnchorId(klasse.code)}`,
      code: klasse.code,
      aliases: [
        klasse.code,
        klasse.name,
        klasse.beschreibung,
        kategorie.label,
        ...(CATEGORY_ALIASES[kategorie.id] ?? []),
        ...(CLASS_ALIASES[klasse.code] ?? []),
      ],
    }))
  ),
  ...SECTION_TARGETS,
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const levenshtein = (a: string, b: string) => {
  if (a === b) return 0;
  if (!a) return b.length;
  if (!b) return a.length;

  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  const curr = Array.from({ length: b.length + 1 }, () => 0);

  for (let i = 1; i <= a.length; i += 1) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j += 1) prev[j] = curr[j];
  }

  return prev[b.length];
};

const scoreTarget = (query: string, target: SearchTarget) => {
  const q = normalize(query);
  if (!q) return 0;
  const haystack = [target.label, target.detail, ...target.aliases].map(normalize).filter(Boolean);
  const qWords = q.split(' ').filter(Boolean);
  let best = 0;

  for (const text of haystack) {
    if (text === q) best = Math.max(best, 120);
    if (text.startsWith(q)) best = Math.max(best, 95);
    if (text.includes(q)) best = Math.max(best, 82);

    const words = text.split(' ').filter(Boolean);
    for (const word of words) {
      for (const qWord of qWords) {
        if (word === qWord) best = Math.max(best, 72);
        if (word.length >= 3 && qWord.length >= 3 && (word.startsWith(qWord) || qWord.startsWith(word))) {
          best = Math.max(best, 58);
        }
        const distance = levenshtein(qWord, word);
        const tolerance = qWord.length <= 4 ? 1 : 2;
        if (word.length >= 3 && qWord.length >= 3 && distance <= tolerance) best = Math.max(best, 52 - distance * 8);
      }
    }
  }

  return best;
};

export const searchTargets = (query: string, limit = 6) =>
  SEARCH_TARGETS
    .map((target) => ({ target, score: scoreTarget(query, target) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.target.label.localeCompare(b.target.label))
    .slice(0, limit)
    .map((entry) => entry.target);

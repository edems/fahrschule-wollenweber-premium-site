export type Klasse = {
  code: string;
  name: string;
  beschreibung: string;
  lang?: string;
};

export type Kategorie = {
  id: 'motorrad' | 'auto' | 'lkw' | 'bus' | 'landwirtschaft' | 'seminare' | 'handicap';
  label: string;
  iconKey: 'motorrad' | 'auto' | 'lkw' | 'bus' | 'landwirtschaft' | 'seminare' | 'handicap';
  klassen: Klasse[];
};

export const klasseAnchorId = (code: string) => `klasse-${code}`;

export const KATEGORIEN: Kategorie[] = [
  {
    id: 'auto',
    label: 'PKW',
    iconKey: 'auto',
    klassen: [
      { code: 'B', name: 'Klasse B', beschreibung: 'Der klassische Pkw-Führerschein für Alltag, Arbeit und private Mobilität.' },
      { code: 'B197', name: 'Automatik mit Schaltkompetenz', beschreibung: 'Ausbildung auf Automatik mit zusätzlicher Schaltkompetenz. Danach darfst du auch Schaltwagen fahren.' },
      { code: 'BF17', name: 'Begleitetes Fahren', beschreibung: 'Führerschein ab 17 mit eingetragenen Begleitpersonen.', lang: 'Begleitetes Fahren ab 17 Jahren' },
      { code: 'BE', name: 'Große Anhänger', beschreibung: 'Für Pkw-Anhängerkombinationen, wenn B96 nicht mehr ausreicht.' },
      { code: 'B96', name: 'Auto mit Anhänger', beschreibung: 'Erweiterung für mehr Anhängelast ohne vollständige BE-Ausbildung.' },
    ],
  },
  {
    id: 'motorrad',
    label: 'Motorrad & Mofa',
    iconKey: 'motorrad',
    klassen: [
      { code: 'AM', name: 'Kleinkraftrad', beschreibung: 'Einstieg in motorisierte Zweiräder.' },
      { code: 'M', name: 'Mofa', beschreibung: 'Mofa und frühe Mobilität.' },
      { code: 'A1', name: 'Leichtkraftrad', beschreibung: 'Motorrad bis 125 cm³.' },
      { code: 'B196', name: '125er-Erweiterung', beschreibung: 'Leichtkraftrad-Erweiterung für Klasse-B-Inhaber.' },
      { code: 'A2', name: 'Stufenaufstieg', beschreibung: 'Motorrad bis 35 kW.' },
      { code: 'A', name: 'Offene Klasse', beschreibung: 'Motorrad ohne Leistungsgrenze.' },
    ],
  },
  {
    id: 'lkw',
    label: 'LKW',
    iconKey: 'lkw',
    klassen: [
      { code: 'C1', name: 'Leichte LKW', beschreibung: 'LKW bis 7,5 t.' },
      { code: 'C1E', name: 'C1 mit Anhänger', beschreibung: 'Kombinationen der C1-Klasse.' },
      { code: 'C', name: 'Schwere LKW', beschreibung: 'LKW über 7,5 t.' },
      { code: 'CE', name: 'Schwere Lastzüge', beschreibung: 'LKW mit großen Anhängern.' },
    ],
  },
  {
    id: 'bus',
    label: 'Bus',
    iconKey: 'bus',
    klassen: [
      { code: 'D1', name: 'Kleinere Busse', beschreibung: 'Bus bis 16 Fahrgastplätze.' },
      { code: 'D1E', name: 'D1 mit Anhänger', beschreibung: 'D1-Kombinationen.' },
      { code: 'D', name: 'Omnibus', beschreibung: 'Personenverkehr.' },
      { code: 'DE', name: 'Bus mit Anhänger', beschreibung: 'Große Bus-Kombinationen.' },
    ],
  },
  {
    id: 'landwirtschaft',
    label: 'Traktor',
    iconKey: 'landwirtschaft',
    klassen: [
      { code: 'L', name: 'Zugmaschine', beschreibung: 'Landwirtschaftliche Nutzung bis 40 km/h.' },
      { code: 'T', name: 'Große Zugmaschinen', beschreibung: 'Landwirtschaftliche Zugmaschinen.' },
    ],
  },
  {
    id: 'seminare',
    label: 'Seminare',
    iconKey: 'seminare',
    klassen: [
      { code: 'BKF', name: 'Berufskraftfahrer', beschreibung: 'Berufliche Weiterbildung für Fahrer und Unternehmen, inklusive Ladungssicherung mit direktem Praxisbezug.' },
      { code: 'Gabelstapler', name: 'Staplerschein', beschreibung: 'Spezialschein für Betrieb und Logistik. Berufliche Weiterbildung für den sicheren Umgang mit Flurförderfahrzeugen.' },
      { code: 'Baumaschinen', name: 'Baumaschinenführer', beschreibung: 'Spezialschein für Baustelle und Maschine. Sicherer Umgang mit Baumaschinen in Theorie und Praxis.' },
    ],
  },
  {
    id: 'handicap',
    label: 'Handicap',
    iconKey: 'handicap',
    klassen: [
      {
        code: 'Handicap',
        name: 'Führerschein mit Handicap',
        beschreibung:
          'Individuelle Fahrausbildung mit Ruhe, Geduld und angepasstem Ablauf. Wir schauen gemeinsam, was du brauchst, und begleiten dich Schritt für Schritt zum Führerschein.',
      },
    ],
  },
];

export const findKategorieIdByKlasseCode = (code: string): Kategorie['id'] | null => {
  const kat = KATEGORIEN.find((k) => k.klassen.some((klasse) => klasse.code === code));
  return kat?.id ?? null;
};

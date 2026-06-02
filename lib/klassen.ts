export type Klasse = {
  code: string;
  name: string;
  beschreibung: string;
  lang?: string;
};

export type Kategorie = {
  id: 'motorrad' | 'auto' | 'lkw' | 'bus' | 'landwirtschaft' | 'seminare';
  label: string;
  iconKey: 'motorrad' | 'auto' | 'lkw' | 'bus' | 'landwirtschaft' | 'seminare';
  klassen: Klasse[];
};

export const KATEGORIEN: Kategorie[] = [
  {
    id: 'motorrad',
    label: 'Motorrad & Mofa',
    iconKey: 'motorrad',
    klassen: [
      { code: 'AM', name: 'Kleinkraftrad', beschreibung: 'Einstieg in motorisierte Zweiräder.' },
      { code: 'M', name: 'Mofa', beschreibung: 'Mofa und frühe Mobilität.' },
      { code: 'A1', name: 'Leichtkraftrad', beschreibung: 'Motorrad bis 125 cm³.' },
      { code: 'A2', name: 'Stufenaufstieg', beschreibung: 'Motorrad bis 35 kW.' },
      { code: 'A', name: 'Offene Klasse', beschreibung: 'Motorrad ohne Leistungsgrenze.' },
    ],
  },
  {
    id: 'auto',
    label: 'Auto & Anhänger',
    iconKey: 'auto',
    klassen: [
      { code: 'B', name: 'Auto', beschreibung: 'Klassischer Autoführerschein.' },
      { code: 'BF17', name: 'Begleitetes Fahren', beschreibung: 'Führerschein ab 17.', lang: 'Begleitetes Fahren ab 17 Jahren' },
      { code: 'B96', name: 'Auto mit Anhänger', beschreibung: 'Mehr Anhängelast ohne BE.' },
      { code: 'BE', name: 'Große Anhänger', beschreibung: 'Anhängerkombinationen.' },
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
    label: 'Landwirtschaft',
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
      { code: 'BKF', name: 'Berufskraftfahrer', beschreibung: 'Berufliche Weiterbildung.', lang: 'Weiterbildung nach BKrFQG' },
      { code: 'GABEL', name: 'Staplerschein', beschreibung: 'Spezialschein für Betrieb und Logistik.' },
      { code: 'BAGGER', name: 'Baumaschinenführer', beschreibung: 'Spezialschein Baustelle und Maschine.' },
      { code: 'ASF', name: 'Aufbauseminare', beschreibung: 'Angeordnete oder freiwillige Nachschulung.' },
      { code: 'FES', name: 'Fahreignungsseminar', beschreibung: 'Punkteabbau und Fahreignung.' },
    ],
  },
];

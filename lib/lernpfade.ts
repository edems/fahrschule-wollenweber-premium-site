export type Lernpfad = {
  id: string;
  titel: string;
  untertitel: string;
  beschreibung: string;
  dauer: string;
  zielgruppe: string;
  cta: string;
};

export const LERNPFADE: Lernpfad[] = [
  {
    id: 'bf17',
    titel: 'Begleitetes Fahren ab 17',
    untertitel: 'BF17',
    beschreibung:
      'Schon mit 17 den Führerschein machen und mit Begleitung Praxis sammeln. Wir bereiten dich und deine Begleiter umfassend vor.',
    dauer: 'ca. 6–9 Monate',
    zielgruppe: 'Junge Fahranfänger & Eltern',
    cta: 'BF17-Beratung',
  },
  {
    id: 'intensiv',
    titel: 'Intensivkurs',
    untertitel: 'Ferien & Kompakt',
    beschreibung:
      'Theorie-Block und Praxis-Marathon in den Ferien. Für alle, die in kurzer Zeit den Führerschein wollen.',
    dauer: '2–4 Wochen',
    zielgruppe: 'Berufstätige & Schüler',
    cta: 'Intensiv-Termin anfragen',
  },
  {
    id: 'automatik',
    titel: 'Automatik-Ausbildung',
    untertitel: 'B197 & reine Automatik',
    beschreibung:
      'Moderne Fahrzeuge, entspanntes Lernen. Mit B197 kannst du später auch Schaltwagen fahren.',
    dauer: 'individuell',
    zielgruppe: 'Alle, die es ruhiger angehen',
    cta: 'Automatik-Info',
  },
  {
    id: 'auffrischung',
    titel: 'Auffrischung',
    untertitel: 'Wiedereinsteiger',
    beschreibung:
      'Lange nicht gefahren? Wir bringen dich mit gezielten Fahrstunden wieder auf Kurs – ohne Prüfungsdruck.',
    dauer: 'flexibel',
    zielgruppe: 'Wiedereinsteiger',
    cta: 'Auffrischung buchen',
  },
  {
    id: 'beruf',
    titel: 'Berufskraftfahrer',
    untertitel: 'Weiterbildung',
    beschreibung:
      'Praxisnahe Weiterbildung für Berufskraftfahrer mit Modulen für Sicherheit, Wirtschaftlichkeit und Verantwortung im Alltag.',
    dauer: '5 Module à 7h',
    zielgruppe: 'Speditionen, Busunternehmen, Landwirte',
    cta: 'Weiterbildung anfragen',
  },
  {
    id: 'spezial',
    titel: 'Spezialscheine',
    untertitel: 'Stapler · Baumaschine',
    beschreibung:
      'Staplerschein, Baumaschinenführer – für Betrieb, Logistik und Baustelle.',
    dauer: '1–5 Tage',
    zielgruppe: 'Betriebe & Privatpersonen',
    cta: 'Spezialschein-Info',
  },
];

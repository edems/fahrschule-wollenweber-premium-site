export type TeamMember = {
  name: string;
  rolle: string;
  klassen: string[];
  bio: string;
  zitat: string;
  foto: string;
  erfahrung: string;
  highlights: string[];
};

export const TEAM: TeamMember[] = [
  {
    name: 'Michael Wollenweber',
    rolle: 'Inhaber & Geschäftsführer',
    klassen: ['AM', 'M', 'A1', 'B196', 'A2', 'A', 'B', 'BF17', 'B96', 'BE', 'C1', 'C1E', 'C', 'CE', 'D1', 'D1E', 'D', 'DE', 'L', 'T'],
    bio: 'Michael bildet in allen Klassen aus – vom Mofa bis zum LKW. Klare Linie, viel Geduld, ehrliches Feedback. Spezialgebiet: Berufskraftfahrer.',
    zitat: 'Dein Erfolg ist mir wichtig. Ich nehme mir Zeit für jeden.',
    foto: 'images/optimized/team-michael.webp',
    erfahrung: '20+ Jahre',
    highlights: [
      'Inhaber seit 20+ Jahren',
      'Alle Klassen',
      'Seminarleiter ASF und FES',
    ],
  },
  {
    name: 'Susanne Wollenweber',
    rolle: 'Fahrlehrerin · PKW & Motorrad',
    klassen: ['AM', 'A1', 'B196', 'A2', 'A', 'B', 'BF17', 'B96', 'BE', 'L'],
    bio: 'Susanne betreut dich ruhig und sicher im Auto und auf dem Motorrad. Sie ist spezialisiert auf Einsteiger, Wiedereinsteiger und alle, die mit Vertrauen auf zwei oder vier Rädern fahren lernen wollen.',
    zitat: 'Wir lehren Sicherheit und Selbstvertrauen — Schritt für Schritt.',
    foto: 'images/optimized/team-susanne.webp',
    erfahrung: 'PKW · Motorrad · geduldig',
    highlights: [
      'PKW und Motorrad',
      'AM · A1 · A2 · A · B196',
      'Sanfte, geduldige Ausbildung',
    ],
  },
  {
    name: 'Alexander Wollenweber',
    rolle: 'Fahrlehrer',
    klassen: ['AM', 'M', 'A1', 'B196', 'A2', 'A', 'B', 'BF17', 'B96', 'BE', 'C1', 'C1E', 'C', 'CE', 'D1', 'D1E', 'D', 'DE', 'L', 'T'],
    bio: 'Alex begleitet Fahrschüler seit Jahrzehnten durch den Westerwald. Dazu kommen Seminare und die Leitung von ASF und FES – von der Ausbildung bis zur Nachschulung klar, ruhig und erfahren.',
    zitat: 'Klare Linie, viel Geduld, ehrliches Feedback. So lernst du nachhaltig.',
    foto: 'images/optimized/team-alexander.webp',
    erfahrung: 'Alle Klassen',
    highlights: [
      'Alle Klassen',
      'Seminarleiter ASF und FES',
      'LKW & Bus',
    ],
  },
];

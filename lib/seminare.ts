export type Seminar = {
  id: string;
  titel: string;
  kurz: string;
  beschreibung: string;
  zielgruppe: string;
  dauer: string;
  abschluss: string;
  details: string[];
  icon: 'life' | 'truck' | 'forklift' | 'excavator' | 'warning' | 'certificate';
};

export const SEMINARE: Seminar[] = [
  {
    id: 'bf17',
    titel: 'Begleitetes Fahren ab 17',
    kurz: 'BF17',
    beschreibung:
      'Schon mit 17 den Führerschein Klasse B machen und ein Jahr lang unter Aufsicht Praxis sammeln. So startest du sicherer ins Autofahrer-Leben.',
    zielgruppe: 'Junge Fahranfänger · 17 bis 18 Jahre',
    dauer: 'ca. 6–9 Monate',
    abschluss: 'Fahrerlaubnis Klasse B (begleitet bis 18)',
    icon: 'certificate',
    details: [
      'Mehrere Begleitpersonen eintragbar',
      'Begleiter mind. 30 Jahre alt',
      'Begleiter mind. 5 Jahre Führerschein Klasse B oder BE',
      'Begleiter max. 1 Punkt in Flensburg',
      'Fahrten nur in Deutschland und Österreich erlaubt',
    ],
  },
  {
    id: 'berufskraftfahrer',
    titel: 'Berufskraftfahrer-Weiterbildung',
    kurz: 'BKrFQG',
    beschreibung:
      'Pflicht-Weiterbildung für Berufskraftfahrer nach dem Berufskraftfahrer-Qualifikations-Gesetz. Alle 5 Module, anerkannt und praxisnah.',
    zielgruppe: 'Speditionen · Busunternehmen · Selbständige Fahrer',
    dauer: '5 Module à 7 Stunden',
    abschluss: 'Eintrag Schlüsselzahl 95 im Führerschein',
    icon: 'truck',
    details: [
      'Modul 1: Eco-Training',
      'Modul 2: Soziale Sicherheit · Gesundheit',
      'Modul 3: Sicherheitstechnik · Fahrsicherheit',
      'Modul 4: Schaltstelle Fahrer',
      'Modul 5: Wirtschaftliche Fahrweise',
    ],
  },
  {
    id: 'stapler',
    titel: 'Staplerschein',
    kurz: 'Flurförderfahrzeuge',
    beschreibung:
      'Ausbildung zum Bediener von Gabelstaplern und Flurförderfahrzeugen nach DGUV-Vorschrift 68. Für Betrieb und Logistik.',
    zielgruppe: 'Lager · Logistik · Produktion',
    dauer: '1–2 Tage Theorie + 1 Tag Praxis',
    abschluss: 'Fahrausweis für Flurförderfahrzeuge',
    icon: 'forklift',
    details: [
      'Theorie: Recht, Unfallverhütung, Aufbau & Funktion',
      'Praxis: Fahrübungen, Lastaufnahme, Stapelübungen',
      'Prüfung schriftlich + praktisch',
      'Jährliche Unterweisung empfohlen',
    ],
  },
  {
    id: 'baumaschine',
    titel: 'Baumaschinenführer',
    kurz: 'Baumaschinen',
    beschreibung:
      'Sicherer Umgang mit Baggern, Radladern und anderen Baumaschinen. Für Baustelle, Garten- und Landschaftsbau sowie Kommunen.',
    zielgruppe: 'Bauwirtschaft · GaLaBau · Kommunen',
    dauer: '2–5 Tage je nach Maschine',
    abschluss: 'Bedienernachweis Baumaschinen',
    icon: 'excavator',
    details: [
      'Bagger, Radlader, Teleskoplader',
      'Theorie: Recht, Sicherheit, Wartung',
      'Praxis: Erd- und Ladearbeiten',
      'DGUV-konform',
    ],
  },
  {
    id: 'aufbauseminar',
    titel: 'Aufbauseminare',
    kurz: 'ASF',
    beschreibung:
      'Angeordnete oder freiwillige Aufbauseminare für auffällige Verkehrsteilnehmer – 4 Gruppensitzungen + 1 Fahrprobe.',
    zielgruppe: 'Fahrer mit Punkte-Konto in Flensburg',
    dauer: '4 Sitzungen + 1 Fahrprobe',
    abschluss: 'Punkteabbau 2 Punkte möglich',
    icon: 'warning',
    details: [
      'Von der Fahrerlaubnisbehörde angeordnet oder freiwillig',
      'Max. 6 Teilnehmer pro Gruppe',
      'Bewährung nach 6 Monaten ohne neue Verstöße',
      'Freiwillige Teilnahme ebenfalls möglich',
    ],
  },
  {
    id: 'fes',
    titel: 'Fahreignungsseminar',
    kurz: 'FES',
    beschreibung:
      'Freiwilliges Seminar zum Punkteabbau für Inhaber einer Fahrerlaubnis mit 1 bis 5 Punkten in Flensburg.',
    zielgruppe: 'Verkehrsteilnehmer mit Punkten in Flensburg',
    dauer: '90 Minuten Einzelgespräch + 16 Stunden Gruppensitzung',
    abschluss: 'Punkteabbau 1 Punkt möglich',
    icon: 'life',
    details: [
      'Max. 6 Teilnehmer pro Gruppe',
      'Verkehrspsychologische Begleitung',
      'Freiwillige Teilnahme',
      'Nicht für Inhaber einer Fahrerlaubnis auf Probe mit Eignungszweifeln',
    ],
  },
];

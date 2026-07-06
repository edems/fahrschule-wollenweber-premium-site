export type Review = {
  name: string;
  initialen: string;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: 'Arthur',
    initialen: 'A',
    text: 'Ich kann die Fahrschule auf jeden Fall weiterempfehlen. Meine Fahrlehrerin hat alles immer ruhig und verständlich erklärt. Man hat sich nie unter Druck gesetzt gefühlt und konnte in seinem eigenen Tempo lernen.',
  },
  {
    name: 'Adam Horn',
    initialen: 'AH',
    text: 'Sehr empfehlenswerte Fahrschule! Die Fahrstunden waren immer entspannt, lehrreich und gut strukturiert. Mein Fahrlehrer war geduldig, freundlich und hat alles verständlich erklärt. Ich habe mich jederzeit gut aufgehoben gefühlt.',
  },
  {
    name: 'Merle',
    initialen: 'M',
    text: 'Ich kann die Fahrschule Wollenweber absolut nur weiterempfehlen. Man merkt sofort, mit wie viel Kompetenz und Herzblut hier gearbeitet wird. Der Theorieunterricht ist super gestaltet und informativ, die Praxisstunden sind top.',
  },
  {
    name: 'Annalena Kerzan',
    initialen: 'AK',
    text: 'Ich bin unglaublich froh, dass ich den Führerschein bei der Fahrschule Wollenweber gemacht habe. Ich hab mich dort von Anfang an wohl und gut aufgehoben gefühlt. Es ist einfach die beste Fahrschule!',
  },
  {
    name: 'Lorena',
    initialen: 'L',
    text: 'Ich kann die Fahrschule Wollenweber nur von Herzen weiterempfehlen und bin unglaublich froh, meinen Führerschein dort gemacht zu haben! Susi und Michi sind zwei herzensliebe Menschen.',
  },
  {
    name: 'Fiona Thomae',
    initialen: 'FT',
    text: 'Die Fahrschule kann man nur weiterempfehlen. Es hat mir immer viel Spaß gemacht mit Susi zu fahren und der Theorieunterricht war auch immer sehr unterhaltsam. Man hat sich immer gut aufgehoben gefühlt.',
  },
  {
    name: 'Chrissi',
    initialen: 'C',
    text: 'Fahrschule Wollenweber war die beste Entscheidung! Die Fahrstunden waren immer entspannt und gleichzeitig sehr lehrreich. Michael hat alles super verständlich und ruhig erklärt.',
  },
  {
    name: 'Michelle Heidt',
    initialen: 'MH',
    text: 'Ich kann die Fahrschule zu 100% weiterempfehlen! Habe heute bestanden und bin mehr als glücklich. Ich verdanke meinem Fahrlehrer, dass ich schnell meine Ausbildung abschließen konnte.',
  },
  {
    name: 'Sarah Beyersdorf',
    initialen: 'SB',
    text: 'Ich empfehle diese Fahrschule nur zu gerne weiter! Sowohl in der Theorie als auch in den Praxisstunden hatte ich viel Spaß und konnte sehr viel lernen. Michael ist sehr freundlich, witzig und verständnisvoll.',
  },
];

export const REVIEW_SUMMARY = {
  rating: 5.0,
  total: 322,
  locations: [
    { name: 'Hachenburg', rating: 5.0, count: 206 },
    { name: 'Bad Marienberg', rating: 5.0, count: 116 },
  ],
};

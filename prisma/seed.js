import { PrismaClient, QuestionCategory, CorrectAnswer } from "@prisma/client";
const prisma = new PrismaClient();

const questions = [
  // TRAFFIC_SIGNS - Znaki drogowe (10 pytań)
  {
    content:
      "Co oznacza znak drogowy w kształcie trójkąta z czerwoną obwódką skierowanego wierzchołkiem do góry?",
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Znak nakazu",
    answerB: "Znak ostrzegawczy",
    answerC: "Znak zakazu",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Trójkątne znaki z czerwoną obwódką to znaki ostrzegawcze informujące o potencjalnym niebezpieczeństwie.",
    points: 1,
  },
  {
    content: 'Jaki kształt ma znak "STOP"?',
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Ośmiokąt",
    answerB: "Koło",
    answerC: "Kwadrat",
    correctAnswer: CorrectAnswer.A,
    explanation:
      "Znak STOP ma charakterystyczny kształt ośmiokąta i jest jedynym znakiem o takim kształcie.",
    points: 1,
  },
  {
    content:
      "Co oznacza znak okrągły z niebieskim tłem i białą strzałką w prawo?",
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Zakaz skrętu w prawo",
    answerB: "Nakaz jazdy w prawo",
    answerC: "Ostrzeżenie przed skrzyżowaniem",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Znaki okrągłe niebieskie ze strzałkami to znaki nakazu określające obowiązkowy kierunek jazdy.",
    points: 1,
  },
  {
    content: "Znak drogowy w kształcie kwadratu z niebieskim tłem to:",
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Znak informacyjny",
    answerB: "Znak zakazu",
    answerC: "Znak ostrzegawczy",
    correctAnswer: CorrectAnswer.A,
    explanation:
      "Kwadratowe lub prostokątne znaki z niebieskim tłem to znaki informacyjne.",
    points: 1,
  },
  {
    content:
      "Co oznacza znak okrągły z białym tłem, czerwoną obwódką i liczbą 50?",
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Minimalna prędkość 50 km/h",
    answerB: "Maksymalna prędkość 50 km/h",
    answerC: "Zalecana prędkość 50 km/h",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Okrągły znak z białym tłem i czerwoną obwódką określa maksymalną dozwoloną prędkość.",
    points: 1,
  },
  {
    content:
      "Znak drogowy przedstawiający czarną strzałkę skierowaną w dół na białym tle z czerwoną obwódką oznacza:",
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Nakaz jazdy prosto",
    answerB: "Zakaz zawracania",
    answerC: "Droga jednokierunkowa",
    correctAnswer: CorrectAnswer.B,
    explanation: "Ten znak zakazuje wykonania manewru zawracania pojazdu.",
    points: 1,
  },
  {
    content: "Co oznacza żółty romb z białą obwódką?",
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Droga z pierwszeństwem przejazdu",
    answerB: "Strefa zamieszkania",
    answerC: "Droga szybkiego ruchu",
    correctAnswer: CorrectAnswer.A,
    explanation: "Żółty romb oznacza drogę z pierwszeństwem przejazdu.",
    points: 1,
  },
  {
    content:
      "Znak przedstawiający sylwetkę pieszego w trójkącie z czerwoną obwódką oznacza:",
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Przejście dla pieszych",
    answerB: "Ostrzeżenie przed przejściem dla pieszych",
    answerC: "Zakaz ruchu pieszych",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Trójkątny znak ostrzega kierowcę o zbliżającym się przejściu dla pieszych.",
    points: 1,
  },
  {
    content: 'Co oznacza okrągły niebieski znak z białym symbolem "P"?',
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Zakaz parkowania",
    answerB: "Miejsce parkingowe",
    answerC: "Strefa płatnego parkowania",
    correctAnswer: CorrectAnswer.B,
    explanation: "Ten znak informuje o miejscu dozwolonego parkowania.",
    points: 1,
  },
  {
    content: "Znak poziomy w postaci podwójnej linii ciągłej oznacza:",
    category: QuestionCategory.TRAFFIC_SIGNS,
    answerA: "Można ją przekroczyć podczas wyprzedzania",
    answerB: "Bezwzględny zakaz przekraczania",
    answerC: "Zalecenie nieprzekraczania",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Podwójna linia ciągła oznacza bezwzględny zakaz jej przekraczania.",
    points: 1,
  },

  // TRAFFIC_RULES - Przepisy ruchu drogowego (15 pytań)
  {
    content:
      "Kto ma pierwszeństwo przejazdu na skrzyżowaniu równorzędnych dróg?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Pojazd nadjeżdżający z lewej strony",
    answerB: "Pojazd nadjeżdżający z prawej strony",
    answerC: "Pojazd jadący szybciej",
    correctAnswer: CorrectAnswer.B,
    explanation:
      'Na skrzyżowaniu równorzędnym obowiązuje zasada "prawej ręki" - pierwszeństwo ma pojazd z prawej strony.',
    points: 1,
  },
  {
    content:
      "Jaka jest maksymalna dopuszczalna prędkość w terenie zabudowanym dla samochodu osobowego?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "40 km/h",
    answerB: "50 km/h",
    answerC: "60 km/h",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "W terenie zabudowanym obowiązuje ograniczenie prędkości do 50 km/h w godzinach 5:00-23:00.",
    points: 1,
  },
  {
    content:
      "Ile metrów przed przejściem dla pieszych obowiązuje zakaz wyprzedzania?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "10 metrów",
    answerB: "25 metrów",
    answerC: "Bezpośrednio przed przejściem",
    correctAnswer: CorrectAnswer.C,
    explanation:
      "Zakaz wyprzedzania obowiązuje bezpośrednio przed przejściem dla pieszych i na nim.",
    points: 1,
  },
  {
    content: "Kiedy należy użyć świateł awaryjnych?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Podczas parkowania",
    answerB: "W przypadku awarii lub gwałtownego hamowania",
    answerC: "Podczas jazdy w nocy",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Światła awaryjne używa się w przypadku awarii pojazdu, wymuszenia pierwszeństwa lub gwałtownego hamowania.",
    points: 1,
  },
  {
    content:
      "Jaką minimalną odległość należy zachować od pojazdu poprzedzającego?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "10 metrów",
    answerB: "Taką, aby móc bezpiecznie zatrzymać pojazd",
    answerC: "50 metrów",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Odległość powinna pozwalać na bezpieczne zatrzymanie pojazdu i uniknięcie zderzenia.",
    points: 1,
  },
  {
    content: "Czy można przekroczyć prędkość o 10 km/h podczas wyprzedzania?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Tak, zawsze",
    answerB: "Nie, nigdy",
    answerC: "Tak, ale tylko poza terenem zabudowanym",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Nie wolno przekraczać dozwolonej prędkości w żadnych okolicznościach, również podczas wyprzedzania.",
    points: 1,
  },
  {
    content: "Kto ma pierwszeństwo na oznakowanym przejściu dla pieszych?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Kierowca jadący prosto",
    answerB: "Pieszy znajdujący się na przejściu",
    answerC: "Pieszy dopiero wchodzący na przejście",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Kierowca musi ustąpić pierwszeństwa pieszemu znajdującemu się na przejściu lub wchodzącemu na nie.",
    points: 1,
  },
  {
    content: "W jakiej odległości od skrzyżowania można zostawić pojazd?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Co najmniej 5 metrów",
    answerB: "Co najmniej 10 metrów",
    answerC: "Bezpośrednio przy skrzyżowaniu",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Zatrzymanie i postój jest zabronione w odległości mniejszej niż 10 metrów od skrzyżowania.",
    points: 1,
  },
  {
    content:
      "Jaka jest maksymalna dopuszczalna zawartość alkoholu we krwi kierowcy?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "0,0 promila",
    answerB: "0,2 promila",
    answerC: "0,5 promila",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Dopuszczalna zawartość alkoholu to 0,2 promila. Powyżej tej wartości kierowca znajduje się w stanie nietrzeźwości.",
    points: 1,
  },
  {
    content: "Kiedy kierowca jest zobowiązany używać świateł mijania?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Tylko w nocy",
    answerB: "Tylko podczas złej widoczności",
    answerC: "Przez cały rok, w dzień i w nocy",
    correctAnswer: CorrectAnswer.C,
    explanation:
      "W Polsce obowiązuje nakaz jazdy ze światłami włączonymi przez cały rok.",
    points: 1,
  },
  {
    content: "Co oznacza żółte migające światło sygnalizatora?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Uwaga, zaraz zapali się czerwone",
    answerB: "Można jechać z zachowaniem ostrożności",
    answerC: "Należy zatrzymać się",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Żółte migające światło oznacza, że można kontynuować jazdę zachowując szczególną ostrożność.",
    points: 1,
  },
  {
    content: "Czy można cofać na autostradzie?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Tak, jeśli to bezpieczne",
    answerB: "Nie, jest to zabronione",
    answerC: "Tak, ale tylko na pasie awaryjnym",
    correctAnswer: CorrectAnswer.B,
    explanation: "Cofanie na autostradzie jest kategorycznie zabronione.",
    points: 1,
  },
  {
    content:
      "W jakiej odległości od przystanku autobusowego obowiązuje zakaz postoju?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "5 metrów przed i za",
    answerB: "10 metrów przed i za",
    answerC: "15 metrów przed i za",
    correctAnswer: CorrectAnswer.C,
    explanation:
      "Zakaz postoju obowiązuje w odległości 15 metrów przed i za przystankiem.",
    points: 1,
  },
  {
    content:
      "Kto ma obowiązek ustąpienia pierwszeństwa przy zmianie pasa ruchu?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Kierowca jadący szybciej",
    answerB: "Kierowca zmieniający pas ruchu",
    answerC: "Kierowca jadący wolniej",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Kierowca zmieniający pas ruchu jest zobowiązany ustąpić pierwszeństwa pojazdom jadącym na pasie, na który zamierza wjechać.",
    points: 1,
  },
  {
    content: "Jakie światła powinny być włączone podczas holowania pojazdu?",
    category: QuestionCategory.TRAFFIC_RULES,
    answerA: "Światła awaryjne",
    answerB: "Światła mijania",
    answerC: "Światła drogowe",
    correctAnswer: CorrectAnswer.A,
    explanation:
      "Podczas holowania oba pojazdy powinny mieć włączone światła awaryjne.",
    points: 1,
  },

  // FIRST_AID - Pierwsza pomoc (8 pytań)
  {
    content: "Jaki jest prawidłowy numer telefonu alarmowego w Polsce?",
    category: QuestionCategory.FIRST_AID,
    answerA: "911",
    answerB: "112",
    answerC: "999",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "W Polsce numer alarmowy to 112 - działa ze wszystkich sieci telefonicznych.",
    points: 1,
  },
  {
    content:
      "W jakiej pozycji należy ułożyć osobę nieprzytomną, ale oddychającą?",
    category: QuestionCategory.FIRST_AID,
    answerA: "Na wznak",
    answerB: "W pozycji bocznej ustalonej",
    answerC: "W pozycji siedzącej",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Pozycja boczna ustalona zapobiega zachłyśnięciu się i zapewnia drożność dróg oddechowych.",
    points: 1,
  },
  {
    content:
      "Jak często należy wykonywać uciśnięcia klatki piersiowej podczas resuscytacji?",
    category: QuestionCategory.FIRST_AID,
    answerA: "60 razy na minutę",
    answerB: "100-120 razy na minutę",
    answerC: "150 razy na minutę",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Prawidłowa częstotliwość uciskania klatki piersiowej to 100-120 razy na minutę.",
    points: 1,
  },
  {
    content:
      "Co należy zrobić w pierwszej kolejności po przybyciu na miejsce wypadku?",
    category: QuestionCategory.FIRST_AID,
    answerA: "Natychmiast udzielić pierwszej pomocy",
    answerB: "Zabezpieczyć miejsce zdarzenia",
    answerC: "Zadzwonić na policję",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Pierwszym działaniem jest zabezpieczenie miejsca zdarzenia, aby uniknąć kolejnych wypadków.",
    points: 1,
  },
  {
    content:
      "Na jaką głębokość należy uciskać klatkę piersiową podczas resuscytacji dorosłej osoby?",
    category: QuestionCategory.FIRST_AID,
    answerA: "3-4 cm",
    answerB: "5-6 cm",
    answerC: "8-10 cm",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Prawidłowa głębokość uciskania klatki piersiowej u dorosłych to 5-6 cm.",
    points: 1,
  },
  {
    content: "Jak postępować z osobą w szoku pourazowym?",
    category: QuestionCategory.FIRST_AID,
    answerA: "Dać napić zimnej wody",
    answerB: "Ułożyć z uniesionymi nogami i okryć kocem",
    answerC: "Posadzić i wachlować",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Osobę w szoku należy ułożyć z uniesionymi nogami, okryć i monitorować.",
    points: 1,
  },
  {
    content: "Co to jest RKO?",
    category: QuestionCategory.FIRST_AID,
    answerA: "Ratownicze Kontrolowane Oddychanie",
    answerB: "Resuscytacja Krążeniowo-Oddechowa",
    answerC: "Ratunkowa Kontrola Organizmu",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "RKO to Resuscytacja Krążeniowo-Oddechowa, zespół czynności ratujących życie.",
    points: 1,
  },
  {
    content: "Jak należy postąpić z silnie krwawiącą raną?",
    category: QuestionCategory.FIRST_AID,
    answerA: "Nałożyć opaskę uciskową powyżej rany",
    answerB: "Uciskać ranę bezpośrednio przez czysty materiał",
    answerC: "Polać ranę wodą utlenioną",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Najskuteczniejszą metodą tamowania krwawienia jest bezpośredni ucisk na ranę.",
    points: 1,
  },

  // VEHICLE_TECH - Technika jazdy (10 pytań)
  {
    content: "Co oznacza kontrolka ABS na desce rozdzielczej?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Problem z układem klimatyzacji",
    answerB: "Problem z systemem zapobiegającym blokowaniu kół",
    answerC: "Niski poziom oleju silnikowego",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "ABS to system zapobiegający zablokowaniu kół podczas hamowania.",
    points: 1,
  },
  {
    content: "Jaki jest prawidłowy sposób hamowania na śliskiej nawierzchni?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Gwałtowne i mocne naciśnięcie pedału hamulca",
    answerB: "Stopniowe i delikatne hamowanie",
    answerC: "Używanie tylko hamulca ręcznego",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Na śliskiej nawierzchni należy hamować delikatnie i stopniowo, aby uniknąć poślizgu.",
    points: 1,
  },
  {
    content: "Kiedy należy sprawdzić ciśnienie w oponach?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Gdy opony są gorące po jeździe",
    answerB: "Gdy opony są zimne",
    answerC: "Nie ma to znaczenia",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Ciśnienie w oponach należy sprawdzać na zimnych oponach, przed jazdą.",
    points: 1,
  },
  {
    content: "Co oznacza ESP w samochodzie?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Elektroniczny system stabilizacji toru jazdy",
    answerB: "System wspomagania parkowania",
    answerC: "Elektroniczna pompa paliwa",
    correctAnswer: CorrectAnswer.A,
    explanation:
      "ESP to Electronic Stability Program - system stabilizacji toru jazdy.",
    points: 1,
  },
  {
    content: "Jaka jest minimalna głębokość bieżnika opony letniej?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "1,0 mm",
    answerB: "1,6 mm",
    answerC: "3,0 mm",
    correctAnswer: CorrectAnswer.B,
    explanation: "Minimalna głębokość bieżnika opony letniej to 1,6 mm.",
    points: 1,
  },
  {
    content: "Jak często należy wymieniać olej silnikowy?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Co 5 000 km",
    answerB: "Zgodnie z zaleceniami producenta pojazdu",
    answerC: "Co 50 000 km",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Olej należy wymieniać zgodnie z zaleceniami producenta, zazwyczaj co 10-30 tys. km.",
    points: 1,
  },
  {
    content:
      "Co należy zrobić, gdy podczas jazdy zapali się czerwona lampka oleju?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Kontynuować jazdę do najbliższego warsztatu",
    answerB: "Natychmiast zatrzymać pojazd i wyłączyć silnik",
    answerC: "Zwiększyć obroty silnika",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Czerwona lampka oleju oznacza awarię - należy natychmiast zatrzymać pojazd.",
    points: 1,
  },
  {
    content: "Jaki jest cel używania wyższych biegów podczas jazdy?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Zmniejszenie zużycia paliwa",
    answerB: "Zwiększenie przyspieszenia",
    answerC: "Łatwiejsze parkowanie",
    correctAnswer: CorrectAnswer.A,
    explanation:
      "Jazda na wyższych biegach przy niższych obrotach zmniejsza zużycie paliwa.",
    points: 1,
  },
  {
    content: "Co to jest martwy punkt?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Uszkodzony punkt na oponie",
    answerB: "Obszar niewidoczny w lusterkach",
    answerC: "Miejsce parkingowe",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Martwy punkt to obszar wokół pojazdu niewidoczny w lusterkach.",
    points: 1,
  },
  {
    content: "Kiedy należy używać świateł przeciwmgielnych?",
    category: QuestionCategory.VEHICLE_TECH,
    answerA: "Zawsze w nocy",
    answerB: "Tylko podczas mgły i znacznie ograniczonej widoczności",
    answerC: "W każdych warunkach atmosferycznych",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Światła przeciwmgielne używa się tylko podczas mgły, opadów śniegu lub deszczu znacznie ograniczających widoczność.",
    points: 1,
  },

  // SAFETY - Bezpieczeństwo (7 pytań)
  {
    content:
      "Czy dziecko poniżej 150 cm wzrostu może jechać na przednim siedzeniu?",
    category: QuestionCategory.SAFETY,
    answerA: "Nie, nigdy",
    answerB: "Tak, w odpowiednim foteliku dostosowanym do wzrostu",
    answerC: "Tak, bez żadnych ograniczeń",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Dziecko może jechać z przodu w odpowiednim foteliku, z wyłączonym poduszką powietrzną po stronie pasażera.",
    points: 1,
  },
  {
    content: "Od jakiego wieku można przewozić dziecko bez fotelika?",
    category: QuestionCategory.SAFETY,
    answerA: "Powyżej 10 lat",
    answerB: "Powyżej 135 cm wzrostu",
    answerC: "Powyżej 150 cm wzrostu lub ukończone 12 lat",
    correctAnswer: CorrectAnswer.C,
    explanation:
      "Fotelik jest obowiązkowy dla dzieci do 150 cm wzrostu lub do 12. roku życia.",
    points: 1,
  },
  {
    content: "Dlaczego pasy bezpieczeństwa są obowiązkowe?",
    category: QuestionCategory.SAFETY,
    answerA: "Ze względów prawnych",
    answerB: "Znacznie zwiększają szanse przeżycia wypadku",
    answerC: "Są wymagane tylko podczas egzaminu",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Pasy bezpieczeństwa zmniejszają ryzyko śmierci lub poważnych obrażeń o ponad 50%.",
    points: 1,
  },
  {
    content:
      "Jaka jest bezpieczna odległość podczas jazdy za innym pojazdem w warunkach normalnych?",
    category: QuestionCategory.SAFETY,
    answerA: "Dwie sekundy",
    answerB: "Pięć sekund",
    answerC: "Dziesięć sekund",
    correctAnswer: CorrectAnswer.A,
    explanation:
      'Zasada "dwóch sekund" pozwala na bezpieczne zatrzymanie pojazdu.',
    points: 1,
  },
  {
    content: "Co należy sprawdzić przed rozpoczęciem jazdy?",
    category: QuestionCategory.SAFETY,
    answerA: "Tylko poziom paliwa",
    answerB: "Lusterka, oświetlenie, ciśnienie w oponach",
    answerC: "Radio",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Przed jazdą należy sprawdzić wszystkie elementy wpływające na bezpieczeństwo.",
    points: 1,
  },
  {
    content:
      "Czy można używać telefonu komórkowego podczas prowadzenia pojazdu?",
    category: QuestionCategory.SAFETY,
    answerA: "Tak, jeśli rozmowa jest krótka",
    answerB: "Tak, tylko z zestawem głośnomówiącym",
    answerC: "Nie, jest to niebezpieczne i zabronione",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Można używać telefonu tylko z zestawem głośnomówiącym, bez trzymania w ręku.",
    points: 1,
  },
  {
    content: "Jakie są konsekwencje prowadzenia pojazdu pod wpływem alkoholu?",
    category: QuestionCategory.SAFETY,
    answerA: "Tylko mandat",
    answerB: "Kara grzywny, zakaz prowadzenia, odpowiedzialność karna",
    answerC: "Ostrzeżenie",
    correctAnswer: CorrectAnswer.B,
    explanation:
      "Jazda po alkoholu skutkuje surowymi karami: grzywną, zakazem, punktami karnymi i odpowiedzialnością karną.",
    points: 1,
  },
];

async function main() {
  console.log("🌱 Rozpoczynam seedowanie bazy danych...");

  for (const question of questions) {
    await prisma.examQuestion.create({
      data: question,
    });
  }
  console.log("✅ Seedowanie zakończone!");
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

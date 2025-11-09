import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // create course
  const course = await prisma.course.create({
    data: {
      title: "Kurs na prawo jazdy - Kategoria B",
      description:
        "Kompleksowy kurs przygotowujący do egzaminu teoretycznego na prawo jazdy kategorii B",
      slug: "kurs-prawo-jazdy-kat-b",
      isPublished: true,
    },
  });

  // create slides
  const slidesData = [
    {
      order: 1,
      title: "Witamy w kursie",
      content:
        "Witaj w kursie na prawo jazdy kategorii B. Ten kurs zawiera wszystkie najważniejsze informacje potrzebne do zdania egzaminu teoretycznego.",
      imageUrl: "/images/slides/welcome.jpg",
    },
    {
      order: 2,
      title: "Znaki drogowe - wprowadzenie",
      content:
        "Znaki drogowe dzielimy na kilka podstawowych kategorii: znaki ostrzegawcze, zakazu, nakazu, informacyjne oraz kierunku i miejscowości.",
      imageUrl: "/images/slides/road-signs-intro.jpg",
    },
    {
      order: 3,
      title: "Znaki ostrzegawcze",
      content:
        "Znaki ostrzegawcze mają kształt trójkąta z wierzchołkiem skierowanym ku górze. Ostrzegają one kierowcę o zbliżającym się niebezpieczeństwie.",
      imageUrl: "/images/slides/warning-signs.jpg",
    },
    {
      order: 4,
      title: "Znaki zakazu",
      content:
        "Znaki zakazu mają kształt koła z czerwoną obwódką. Wprowadzają zakazy i ograniczenia w ruchu drogowym.",
      imageUrl: "/images/slides/prohibition-signs.jpg",
    },
    {
      order: 5,
      title: "Pierwszeństwo przejazdu",
      content:
        "Zasada prawej ręki: na skrzyżowaniu równorzędnym pierwszeństwo ma pojazd nadjeżdżający z prawej strony.",
      imageUrl: "/images/slides/right-of-way.jpg",
    },
    {
      order: 6,
      title: "Prędkość w terenie zabudowanym",
      content:
        "W obszarze zabudowanym obowiązuje ograniczenie prędkości do 50 km/h w dzień oraz 60 km/h w nocy (23:00-5:00).",
      imageUrl: "/images/slides/speed-limits.jpg",
    },
    {
      order: 7,
      title: "Bezpieczna odległość",
      content:
        "Zachowuj bezpieczną odległość od poprzedzającego pojazdu. Pamiętaj o zasadzie 2 sekund.",
      imageUrl: "/images/slides/safe-distance.jpg",
    },
    {
      order: 8,
      title: "Wyprzedzanie",
      content:
        "Wyprzedzać można tylko wtedy, gdy jest to bezpieczne i nie koliduje z przepisami. Zabrania się wyprzedzania na przejściach dla pieszych.",
      imageUrl: "/images/slides/overtaking.jpg",
    },
    {
      order: 9,
      title: "Parkowanie",
      content:
        "Parkować można tylko w miejscach dozwolonych. Zabrania się parkowania na przejściach dla pieszych i w odległości mniejszej niż 10m przed nimi.",
      imageUrl: "/images/slides/parking.jpg",
    },
    {
      order: 10,
      title: "Gratulacje!",
      content:
        "Ukończyłeś kurs! Teraz możesz przystąpić do testu sprawdzającego Twoją wiedzę.",
      imageUrl: "/images/slides/congratulations.jpg",
    },
  ];

  for (const slideData of slidesData) {
    await prisma.slide.create({
      data: {
        ...slideData,
        courseId: course.id,
      },
    });
  }

  console.log("✅ Dane seed zostały dodane!");
  console.log(`📚 Utworzono kurs: ${course.title}`);
  console.log(`📄 Utworzono ${slidesData.length} slajdów`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: '3bfa8f82-766d-4a6a-bada-c45ab69dd796',
      title: "Sound Now",
      slug: "sound-now",
      details: "Um evento para ouvir musica boa! ",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});

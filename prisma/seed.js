const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.pattern.deleteMany({});
  await prisma.configuration.deleteMany({});

  await prisma.configuration.createMany({
    data: [
      {
        name: "Les natures mortes",
        description:
          "Les natures mortes sont des configurations statiques. Elles ne changent\n" +
          "pas au fil des tours.",
      },
      {
        name: "Les oscillateurs",
        description:
          "Les oscillateurs sont des configurations qui suivent un cycle. Elles\n" +
          "reviennent ainsi à leur état initial après un certain nombre de génération (on\n" +
          "parle de période).",
      },
      {
        name: "Les vaisseaux",
        description:
          "Les vaisseaux sont des configurations qui peuvent se déplacer. Ils\n" +
          "agissent comme des oscillateurs qui retrouvent leur état initial à une\n" +
          "position différente sur la grille.",
      },
      {
        name: "Les guns",
        description:
          "Les guns sont des configurations qui produisent, de manière répétitive, un\n" +
          "autre type de configuration (généralement des vaisseaux). On les\n" +
          "apparente à des usines de construction de vaisseaux.",
      },
    ],
  });

  // Retrieve the id of the created vessel configuration
  const vesselConfiguration = await prisma.configuration.findUnique({
    where: {
      name: "Les vaisseaux",
    },
  });

  if (vesselConfiguration) {
    await prisma.pattern.createMany({
      data: [
        {
          name: "Glider",
          configurationId: vesselConfiguration.id,
          boundingBox: "3x3",
          cells: 5,
          period: 5,
          speed: 4,
        },
      ],
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

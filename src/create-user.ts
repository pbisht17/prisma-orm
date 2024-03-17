import prisma from "./db-utils";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Hanumanji',
      email: 'hanumanji@prisma.io',
    },
  })
  console.log(user)
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
const db = require('../server/db');
const Placeholder = require('../server/db/models/placeholder');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const placeholders = await Promise.all([
    Placeholder.create({ email: 'cody@email.com' }),
    Placeholder.create({ email: 'calvin@email.com' }),
  ]);

  console.log(`seeded ${placeholders.length} placeholders`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;

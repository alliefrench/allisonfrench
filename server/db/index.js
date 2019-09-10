// const Sequelize = require('sequelize');
// const pkg = require('../../package.json');

// const databaseName =
//   pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

// const db = new Sequelize(
//   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
//   { logging: false }
// );

// module.exports = db;

// if (process.env.NODE_ENV === 'test') {
//   after('close database connection', () => db.close());
// }

const admin = require('firebase-admin');
console.log('COLORTERM', process.env.FIREBASE_CONFIG);
const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
console.log(serviceAccount.type);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://allisonfrench-17757.firebaseio.com',
});

const db = admin.firestore();

module.exports = db;

const dotenv = require('dotenv');
dotenv.config();

const admin = require('firebase-admin');
const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
console.log(serviceAccount.type);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://allisonfrench-17757.firebaseio.com',
});

const db = admin.firestore();

module.exports = db;

const router = require('express').Router();
const db = require('../db');

router.get('/', async function(req, res, next) {
  let postRef = db.collection('posts').doc('1');
  let getDoc = postRef
    .get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
});
module.exports = router;

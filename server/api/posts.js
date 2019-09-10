const router = require('express').Router();
const db = require('../db');

router.get('/', function(req, res, next) {
  let postRef = db.collection('posts');
  let response = [];
  let allPosts = postRef
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        response.push(doc.data());
      });
      res.send(response);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
});

router.get('/:postId', function(req, res, next) {
  let postRef = db.collection('posts').doc(req.params.postId);
  let post = postRef
    .get()
    .then(doc => {
      if (!doc.exists) {
        res.sendStatus(404);
      } else {
        res.send(doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
});

module.exports = router;

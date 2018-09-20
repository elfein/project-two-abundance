var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', function(req, res) {
  User.find()
  .then((users) => {
    res.render('users/index', { users })
  })
});

// NEW

// SHOW ONE
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then((user) => {
    res.render('users/show', { user })
  })
})

// CREATE

// EDIT

// UPDATE

// DELETE

module.exports = router;
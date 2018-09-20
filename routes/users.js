var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

// SHOW ALL
router.get('/', function(req, res) {
  User.find()
  .then((users) => {
    res.send(users)
  })
});

// NEW

// SHOW ONE

// CREATE

// EDIT

// UPDATE

// DELETE

module.exports = router;
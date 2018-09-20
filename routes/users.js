var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', function (req, res) {
  User.find()
    .then((users) => {
      res.render('users/index', { users })
    })
});

// NEW
router.get('/new', (req, res) => {
  res.render('users/new')
})

// SHOW ONE
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/show', { user })
    })
})

// CREATE
router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.redirect(`/users/${user._id}`)
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/edit', { user })
    })
})

// UPDATE
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then((user) => {
    res.redirect(`/users/${user._id}`)
  })
})

// DELETE

module.exports = router;
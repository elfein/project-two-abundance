var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', function (req, res) {
  User.find()
    .then((users) => {
      users.forEach ((user) => {
        if (user.collections[0] && user.collections[0].items[0]) {
        user.refAddressOne = user.collections[0].items[0].refAddress
        }  else {
          user.refAddressOne = '#'
        }
      })
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
      user.collections.forEach ((collection) => {
        if (collection.items[0]) {
          collection.firstRefAddress = collection.items[0].refAddress
        } else {
          collection.firstRefAddress = '#'
        }
        console.log(user.collections[0].firstRefAddress)
      })
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
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/users')
    })
})

module.exports = router;
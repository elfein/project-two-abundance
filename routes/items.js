const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', (req, res) => {
    res.redirect(`/users/${req.params.userId}/collections/${req.params.collectionId}`)
})

// NEW

// SHOW ONE
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.send('showing this item')
    })
})

// EDIT

// CREATE

// UPDATE

// DELETE

module.exports = router
const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', (req, res) => {
    res.redirect(`/users/${req.params.userId}/collections/${req.params.collectionId}`)
})

// NEW

// SHOW ONE

// EDIT

// CREATE

// UPDATE

// DELETE

module.exports = router
const express = require('express')
const router = express.Router({ mergeParams: true })
const { User, Collection } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.redirect(`/users/${user._id}`)
        })
})

// NEW

// SHOW ONE

// EDIT

// CREATE

// UPDATE

// DELETE

module.exports = router
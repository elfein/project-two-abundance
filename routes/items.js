const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', (req, res) => {
    res.send('time for items!')
})

// NEW

// SHOW ONE

// EDIT

// CREATE

// UPDATE

// DELETE

module.exports = router
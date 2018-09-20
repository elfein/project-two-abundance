const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', (req, res) => {
    res.redirect(`/users/${req.params.userId}/collections/${req.params.collectionId}`)
})

// NEW
router.get('/new', (req,res) => {
    res.render('items/new')
})

// SHOW ONE
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        console.log(user)
        res.render('items/show', { 
            // collection: req.params.collectionId,
            item: user.collections.id(req.params.collectionId).items.id(req.params.id)
         })
    })
})

// EDIT

// CREATE

// UPDATE

// DELETE

module.exports = router
const express = require('express')
const router = express.Router({ mergeParams: true })
const { User, Item } = require('../db/schema')

// INDEX - SHOW ALL
router.get('/', (req, res) => {
    res.redirect(`/users/${req.params.userId}/collections/${req.params.collectionId}`)
})

// NEW
router.get('/new', (req,res) => {
    res.render('items/new', {
        userId: req.params.userId,
        collectionId: req.params.collectionId
    })
})

// SHOW ONE
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.render('items/show', { 
            userId: req.params.userId,
            collectionId: req.params.collectionId,
            item: user.collections.id(req.params.collectionId).items.id(req.params.id)
         })
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {
    res.send('edit time!!')
})

// CREATE
router.post('/', (req, res) => {
    const newItem = new Item(req.body)
    User.findById(req.params.userId)
    .then((user) => {
        user.collections.id(req.params.collectionId).items.push(newItem)
        return user.save()
    })
    .then(() => {
        res.redirect(`/users/${req.params.userId}/collections/${req.params.collectionId}`)
    })
})

// UPDATE

// DELETE
router.delete('/:id', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        user.collections.id(req.params.collectionId).items.remove(req.params.id)
        return user.save()
    })
    .then(() => {
        res.redirect(`/users/${req.params.userId}/collections/${req.params.collectionId}`)
    })
})

module.exports = router
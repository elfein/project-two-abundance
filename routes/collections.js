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
router.get('/new', (req, res) => {
    res.render('collections/new', {
        userId: req.params.userId
    })
})

// SHOW ONE
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.render('collections/show', {
                userId: req.params.userId,
                collection: user.collections.id(req.params.id)
            })
        })
})

// EDIT
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.render('collections/edit', {
                user,
                collection: user.collections.id(req.params.id)
            })
        })
})

// CREATE
router.post('/', (req, res) => {
    const newCollection = new Collection(req.body)
    User.findById(req.params.userId)
        .then((user) => {
            user.collections.push(newCollection)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/collections/${newCollection._id}`)
        })
})

// UPDATE
router.put('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.collections.id(req.params.id).set(req.body)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/collections/${req.params.id}`)
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.collections.remove(req.params.id)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/`)
        })
})

module.exports = router
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { User, Collection, Item } = Schema

const howlBox = new Item({ name: 'Howl\'s Moving Castle', origin: 'Kyoto, Japan', getYear: 2018, note: 'A very wistful tune', isGift: false })
const memoryBox = new Item({ name: 'Memory', origin: 'Synagoge Summer Yard Sale', getYear: 2008, note: 'My first music box (I think)', isGift: false })

const musicBoxes = new Collection({ name: 'Music Boxes', items: [howlBox, memoryBox] })

const emmy = new User({ name: 'Emmy', collections: [musicBoxes] })

User.deleteMany()
    .then(() => {
        return User.insertMany([emmy])
    })
    .then(() => {
        console.log('seeded data!')
        mongoose.connection.close()
    })
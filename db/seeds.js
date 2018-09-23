require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { User, Collection, Item } = Schema

const howlBox = new Item({ name: 'Howl\'s Moving Castle', refAddress: 'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/08/22/goods-img/1503362942487970798.jpg', origin: 'Kyoto, Japan', getYear: 2018, note: 'A very wistful tune', isGift: false })
const memoryBox = new Item({ name: 'Memory', refAddress: '#', origin: 'Synagoge Summer Yard Sale', getYear: 2008, note: 'My first music box (I think)', isGift: false })

const powerParalegal = new Item({ name: 'Power Paralegal', refAddress: 'https://static.tvtropes.org/pmwiki/pub/images/ParrotTestimony_3277.png', origin: 'Game Place', getYear: 2000, note: 'The best', isGift: false })
const tatsploon = new Item({ name: "Tatsploon", refAddress: 'http://i2.kym-cdn.com/photos/images/original/001/006/323/4a9.jpg', origin: 'Gamer Kingdom', getYear: 3018, note: 'I always win', isGift: true })
const smashbois = new Item({ name: 'Supreme Smash Bois', refAddress: 'https://vignette.wikia.nocookie.net/ssb/images/7/77/OMG_LEEKED_ROSTER.png/revision/latest/scale-to-width-down/400?cb=20150701210658', origin: 'the pits of hell', getYear: 0, note: 'not meant for mortal eyes', isGift: true })

const musicBoxes = new Collection({ name: 'Music Boxes', items: [howlBox, memoryBox] })

const coolGames = new Collection({ name: 'Oui Games', items: [powerParalegal, tatsploon, smashbois] })

const emmy = new User({ name: 'Emmy', collections: [musicBoxes] })

const bre = new User({ name: 'Bre', collections: [coolGames] })

User.deleteMany()
    .then(() => {
        return User.insertMany([emmy, bre])
    })
    .then(() => {
        console.log('seeded data!')
        mongoose.connection.close()
    })
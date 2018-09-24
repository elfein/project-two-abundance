require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { User, Collection, Item } = Schema

const howlBox = new Item({ name: 'Howl\'s Moving Castle', refAddress: 'https://78.media.tumblr.com/f8e248a458d68fc679a56416acb00f91/tumblr_pfjn63H4n81uj0ljmo5_1280.jpg', origin: 'Kyoto, Japan', getYear: 2018, note: 'A very wistful tune', isGift: false })
const memoryBox = new Item({ name: 'Memory', refAddress: 'https://78.media.tumblr.com/c64413a4b615a110dcc9bebdd16b10e6/tumblr_pfjn63H4n81uj0ljmo6_1280.jpg', origin: 'Synagogue Summer Yard Sale', getYear: 2008, note: 'My first music box (I think)', isGift: false })
const georgiaBox = new Item({ name: 'Georgia on My Mind', refAddress: 'https://78.media.tumblr.com/33658db1ce2d0c567ed56fbc577cea17/tumblr_pfjn63H4n81uj0ljmo1_1280.jpg', origin: '?', getYear: 2018, note: 'Actually part of family collection', isGift: true })
const luteBox = new Item({ name: 'Unknown (Inlaid Wood)', refAddress: 'https://78.media.tumblr.com/05545c053595a7ea28d60fca3d9d63b6/tumblr_pfjn63H4n81uj0ljmo2_1280.jpg', origin: 'Italy', getYear: null, note: 'Unknown song, was probably a gift', isGift: true })
const globeBox = new Item({ name: 'Il Giro Del Mondo', refAddress: 'https://78.media.tumblr.com/abb085e5ac61f2295fa08cc2dd39230e/tumblr_pfjn63H4n81uj0ljmo3_1280.jpg', origin: 'Italy', getYear: 2018, note: 'part of the family collection', isGift: true })
const chatBox = new Item({ name: 'Chat Noir Box', refAddress: 'https://78.media.tumblr.com/7d23445513d90bb47c8648c615ff80ac/tumblr_pfjn63H4n81uj0ljmo4_1280.jpg', origin: 'Monaco?', getYear: 2015, note: 'unknown song', isGift: false })
const violinBox = new Item({ name: 'Menut Mozart: Menuet Boccherini', refAddress: 'https://78.media.tumblr.com/8edd3df90fb60545688e71b551a87464/tumblr_pfjn63H4n81uj0ljmo7_1280.jpg', origin: 'Italy', getYear: null, note: 'from a yard sale I think', isGift: true })
const ceramicBox = new Item({ name: '18th Variation on a Theme by Paginini', refAddress: 'https://78.media.tumblr.com/e230d6daf0a848336ceeffbb96314df9/tumblr_pfjn63H4n81uj0ljmo8_1280.png', origin: '?', getYear: null, note: 'says both made in Italy and San Francisco Music Box co.', isGift: true })

const courierAbcStamp = new Item({ name: 'Courier Alphabet Set', refAddress: 'https://78.media.tumblr.com/558d257b24c46d5cd599dbecd8dba008/tumblr_pfkgw1ewZr1uj0ljmo4_1280.jpg', origin: '?', getYear: null, note: '', isGift: false })
const tokyoStamp = new Item({ name: 'Tokyo Souvenirs', refAddress: 'https://78.media.tumblr.com/8c1b0b611c2e822e60faee21a8149360/tumblr_pfkgw1ewZr1uj0ljmo8_1280.png', origin: 'Tokyo Stationary Store', getYear: 2018, note: 'I need to use these!!', isGift: false})
const katakanaStamp = new Item({ name: 'Katakana Alphabet Set', refAddress: 'https://78.media.tumblr.com/d27d0db7cd3a56cd152b3972c7f4de11/tumblr_pfkgw1ewZr1uj0ljmo5_1280.jpg', origin: 'Somewhere in Tokyo', getYear: 2018, note: 'That weeb life', isGift: false })
const miscAbcStamp = new Item({ name: 'Cute Alphabet Sets', refAddress: 'https://78.media.tumblr.com/ddbce1a5a76fe89e2ac756e2c4260687/tumblr_pfkgw1ewZr1uj0ljmo3_1280.jpg', origin: 'maybe Papersource?', getYear: null, note: 'Nice to use on holiday cards', isGift: false })
const orangeStamp = new Item({ name: 'Orange Crate Design', refAddress: 'https://78.media.tumblr.com/04533a8efba33b26e3dffe28eae721b6/tumblr_pfkgw1ewZr1uj0ljmo7_1280.png', origin: 'Thrift shop in Madison, WI', getYear: 2016, note: 'big!!', isGift: false })
const yardSaleStamp = new Item({ name: 'Yard Sale Set', refAddress: 'https://78.media.tumblr.com/e595aa8345256173206c1164c4da999f/tumblr_pfkgw1ewZr1uj0ljmo2_1280.jpg', origin: 'yard sale', getYear: 2017, note: 'from my aunt', isGift: true })
const zeldaStamp = new Item({ name: 'Zelda Post Stamp', refAddress: 'https://78.media.tumblr.com/7082cfc8057af29597550ec942f88404/tumblr_pfkgw1ewZr1uj0ljmo1_1280.jpg', origin: 'Anime Convention', getYear: 2017, note: 'Like in Majora\'s Mask!', isGift: false })
const floralStamp = new Item({ name: 'Floral Favorites', refAddress: 'https://78.media.tumblr.com/e5731ad7cbd693d502a6f866e6a0c592/tumblr_pfkgw1ewZr1uj0ljmo6_1280.jpg', origin: '?', getYear: null, note: 'always pretty', isGift: false })

const galvanBottle = new Item({ name: 'Galvanina Bottle', refAddress: 'https://78.media.tumblr.com/cd67cbb78e1cd70afe9978aec50006ce/tumblr_pfjk690jEI1uj0ljmo1_1280.jpg', origin: 'some French train station', getYear: 2015, note: 'cute details', isGift: false })
const sanPelBottle = new Item({ name: 'Aranciata Bottle', refAddress: 'https://78.media.tumblr.com/33209b9ea8e41fdc181c3f4713a7d5fd/tumblr_pfjk690jEI1uj0ljmo2_1280.jpg', origin: 'Italy?', getYear: 2013, note: 'Might be from Cortona', isGift: false })
const sanFranBottle = new Item({ name: 'Hiking Trail Bottle', refAddress: 'https://78.media.tumblr.com/975af5c28cb7da4eee2fa0f77213c277/tumblr_pfjk690jEI1uj0ljmo3_1280.jpg', origin: 'The side of a trail in San Francisco', getYear: 2015, note: 'Liked the color', isGift: false })
const shellBottle = new Item({ name: 'Seashell Bottle', refAddress: 'https://78.media.tumblr.com/1de7dfa9bd2ae73e471eb52346761bd7/tumblr_pfjk690jEI1uj0ljmo4_1280.jpg', origin: '?', getYear: null, note: 'From mom!', isGift: true })
const yogurtBottle = new Item({ name: 'Yogurt Jar', refAddress: 'https://78.media.tumblr.com/d458c1a7d9d1696a39cd74502e1acf91/tumblr_pfjk690jEI1uj0ljmo5_1280.jpg', origin: 'my fridge', getYear: 2016, note: 'a good home for this rescue', isGift: false})

const powerParalegal = new Item({ name: 'Power Paralegal', refAddress: 'https://static.tvtropes.org/pmwiki/pub/images/ParrotTestimony_3277.png', origin: 'Game Place', getYear: 2000, note: 'The best', isGift: false })
const tatsploon = new Item({ name: "Tatsploon", refAddress: 'http://i2.kym-cdn.com/photos/images/original/001/006/323/4a9.jpg', origin: 'Gamer Kingdom', getYear: 3018, note: 'I always win', isGift: true })
const smashbois = new Item({ name: 'Supreme Smash Bois', refAddress: 'https://vignette.wikia.nocookie.net/ssb/images/7/77/OMG_LEEKED_ROSTER.png/revision/latest/scale-to-width-down/400?cb=20150701210658', origin: 'the pits of hell', getYear: 0, note: 'not meant for mortal eyes', isGift: true })

const kazooHistory = new Item({ name: 'A History of Kazoos', refAddress: 'https://78.media.tumblr.com/2b2eec7ad4f656718568131cd5463f25/tumblr_pfjjwwVCXO1uj0ljmo1_1280.png', origin: 'Youtube Bookstore', getYear: 2018, note: 'Masterful', isGift: true})
const tazGN = new Item({ name: 'TAZ Graphic Novel', refAddress: 'https://read.macmillan.com/wp-content/uploads/2017/07/TAZ_RGB-1.jpg', origin: 'The Boys', getYear: 2018, note: 'Hot stunts cool nights', isGift: false})

const musicBoxes = new Collection({ name: 'Music Boxes', items: [howlBox, memoryBox, georgiaBox, luteBox, chatBox, violinBox, globeBox, ceramicBox] })
const inkStamps = new Collection({ name: 'Ink Stamps', items: [courierAbcStamp, tokyoStamp, katakanaStamp, miscAbcStamp, orangeStamp, yardSaleStamp, zeldaStamp, floralStamp] })
const bottles = new Collection({ name: 'Bottles & Jars', items: [galvanBottle, sanPelBottle, sanFranBottle, shellBottle, yogurtBottle] })
const sweatshirts = new Collection({ name: 'Park Outerwear', items: []})

const coolGames = new Collection({ name: 'Oui Games', items: [powerParalegal, tatsploon, smashbois] })
const books = new Collection({ name: 'Books', items: [kazooHistory, tazGN] })

const emmy = new User({ name: 'Emmy', collections: [musicBoxes, inkStamps, bottles, sweatshirts] })

const bre = new User({ name: 'Bre', collections: [coolGames, books] })

User.deleteMany()
    .then(() => {
        return User.insertMany([emmy, bre])
    })
    .then(() => {
        console.log('seeded data!')
        mongoose.connection.close()
    })
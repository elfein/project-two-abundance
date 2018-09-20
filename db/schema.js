const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: String,
    refAddress: String,
    origin: String,
    getYear: Number,
    note: String,
    isGift: Boolean
})

const CollectionSchema = new Schema({
    name: String,
    startYear: Number,
    note: String,
    items: [ItemSchema]
})

const UserSchema = new Schema({
    name: String,
    collections: [CollectionSchema]
})

const ItemModel = mongoose.model('Item', ItemSchema)
const CollectionModel = mongoose.model('Collection', CollectionSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = { Item: ItemModel, Collection: CollectionModel, User: UserModel }
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavouriteSchema = new Schema({
    title:String,
    imgURL :String,
    description:String
})

const favourite = mongoose.model("favourite", FavouriteSchema)
module.exports = favourite
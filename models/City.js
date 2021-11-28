const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    title:{type:String, require:true},
    img: {type:String},
    description: {type:String},
})

const city = mongoose.model('city',citiesSchema)
module.exports = city;
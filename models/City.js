const mongoose = require('mongoose');

const citiesSchema = new mongoose.schema({
    title:{type:String, require:true},
    descripcion: {type:String},
    img: {type:String},
})

const cities = mongoose.model('city',citiesSchema)
module.exports = city;
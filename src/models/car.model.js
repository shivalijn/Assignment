const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Car =  new Schema({
    car_make: {type:String},
    car_model: {type:String},
    car_version: {type:String},
    car_year: {type:String},
    car_price: {type:Number},
    car_fuel: {type:Number},
    car_cost: {type:Number},
});

module.exports = mongoose.model('Car', Car);
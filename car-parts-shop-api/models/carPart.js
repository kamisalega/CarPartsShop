const mongoose = require('mongoose');

const { Schema } = mongoose;

const carPartModel = new Schema(
    {
        manufacturer: {type: String},
        category: {type: String}, 
        subcategory: {type: String}, 
        carBrand: {type: String},
        carModel: {type: String},
        series: {type: String},
        productCode: {type: String},
        unit: {type: String},
        EAN: {type: Number},
        price: {type: Number}    
    }   
);

module.exports = mongoose.model('CarPart', carPartModel, 'carParts');
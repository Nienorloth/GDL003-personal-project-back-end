const mongoose = require('mongoose');

exports.productsSchema = mongoose.Schema({
    id: {
        type: Number
    }, 
    title: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
});

exports.orderSchema = mongoose.Schema({
    products: [ ],
    total: Number,
    created_date: {
        type: Date,
        default: Date.now
    }
});


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductCode: String,
    ProductName: String,
    ProductDate: String,
    ProductOriginPrice: Number,
    Quantity: Number,
    ProductStoreCode: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

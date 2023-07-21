  //--------------Import-------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//---------------Define Schema----------
const productSchema = Schema({
    name: {
        type: String,
        require: [true, "Please add name of the product"]
    },
    category: {
        type: String,
        require: [true, "Please add category of the product"]
    },
    image: {
        type: String,
    },
    price: {
        type: String,
        require: [true, "Please add price of the product"]
    },
    description: {
        type: String,
    },

});


//----------Export--------------
module.exports = mongoose.model('Product', productSchema);
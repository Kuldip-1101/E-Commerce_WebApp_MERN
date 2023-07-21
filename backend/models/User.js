//--------------Import-------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//---------------Define Schema----------
const userSchema = Schema({
    firstName: {
        type: String,
        require: [true, "Please add first name of the user"]
    },
    lastName: {
        type: String,
        require: [true, "Please add last name of the user"]
    },
    email: {
        type: String,
        require: [true, "Please add email of the user"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Please add Password"]
    },
    confirmPassword: {
        type: String,
        require: [true, "Please add Confirm Password"]
    },
    image: {
        type: String,
        require: [true, "Please add image"]
    },

});


//----------Export--------------
module.exports = mongoose.model('User', userSchema);
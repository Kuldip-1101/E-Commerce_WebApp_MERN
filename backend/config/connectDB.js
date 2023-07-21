//--------------Import-------------------
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


//--------------Define connection to Database----------------
const connectDB = async () => {
    try{
        await mongoose.connect(
            process.env.MONGODB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Database connected');
    }catch(error){
        console.log('Unable to connect' + error.message);
    }
}

//--------------Export--------------------
module.exports = connectDB;
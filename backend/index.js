const express = require("express");
const cors = require("cors");
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/userRoutes');
const productRoute = require('./routes/productRoutes');
const paymentRoute = require('./routes/paymentRoutes');


//--------------Use Express Using App Constant----------------
const app = express();

//--------------Connect TO Database-----------------
connectDB();

//---------------parse the response--------------
app.use(express.json({ limit: "10mb" }))
app.use(cors())

//--------------Routes----------------
app.use('/', userRoute);
app.use('/product', productRoute);
app.use('/payment', paymentRoute);

//------------Listen server on port from environmental variable-----------------
const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
    console.log('Server Started');
})
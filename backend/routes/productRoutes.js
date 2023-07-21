//--------------Import-------------
const express = require('express');
require('dotenv').config();
let Product = require('../models/Product');


//--------------Use router function Using router Constant----------------
const router = express.Router();


//----------------Save Product In Database------------------
router.post("/uploadProduct",async(req,res) => {
    const data = await Product(req.body)
    const datasave = await data.save()
    res.send({message : "Product upload successfully"})
})


//---------------Get All the Product from Database--------------
router.get("/getProduct",async(req,res) => {
    const data = await Product.find({})
    res.send(JSON.stringify(data))
})


//-----------Export-------------
module.exports = router;
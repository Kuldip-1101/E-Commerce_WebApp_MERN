//--------------Import-------------
const express = require('express');
require('dotenv').config();
let User = require('../models/User');


//--------------Use router function Using router Constant----------------
const router = express.Router();


//-----------User Routes-------------

//---------------sign up--------------
router.post("/signup", async (req, res) => {
  const { email } = req.body;
  const result = await User.findOne({ email: email } )


    if (result) {
      res.send({ message: "Email id is already register", alert: false });
    } else {
      const data = User(req.body);
      const save = data.save();
      res.send({ message: "Successfully sign up", alert: true });
    }
});

//-------------Log in--------------------
router.post("/login", async (req, res) => {
  const { email } = req.body;
  const result = await User.findOne({ email: email } )

  if (result) {
    const dataSend = {
      _id: result._id,
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      image: result.image,
    };
    res.send({
      message: "Login is successfully",
      alert: true,
      data: dataSend,
    });
  } else {
    res.send({
      message: "Email is not available, please sign up",
      alert: false,
    });
  }
})

//-----------Export-------------
module.exports = router;
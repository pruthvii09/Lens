const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    full_name: req.body.full_name,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(400).json("Incorrect Email Id");
    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    const orignalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    const inputPassword = req.body.password;
    orignalPassword != inputPassword &&
      res.status(400).json("Incorrect Password");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;

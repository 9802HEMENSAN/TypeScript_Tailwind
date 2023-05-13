const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// CREATE USER
userRouter.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      gender,
      password,

      height,
      weight,
      age,
      goal,
      dob,
      country,
      issues,
      activity,

      avatar,
      userId,
    } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(200).send({ msg: "User Already Registered!!", ok: true });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          const user = UserModel({
            name,
            email,
            gender,
            password: hash,
            height,
            weight,
            age,
            goal,
            dob,
            country,
            issues,
            activity,
            avatar,
          });
          await user.save();
          res.status(200).send({ msg: "New User Registered!!", ok: true });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// LOGIN USER
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password).then((result) => {
        if (result) {
          const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
          res.status(200).send({
            msg: "Login Successful!",
            ok: true,
            userName: user.name,
            token: token,
          });
        } else {
          res.status(200).send({ msg: "Wrong Creadentials!", ok: false });
        }
      });
    } else {
      res.status(200).send({ msg: "Wrong Creadentials!", ok: false });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { userRouter };

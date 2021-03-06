const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/user-model");

//-------------------------- SIGN UP -------------------------------

router.post("/signup", (req, res, next) => {
  // console.log(req.body);
  const { fullName, email, originalPassword } = req.body;

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({ fullName, encryptedPassword, email })
    .then(userDoc => {
      userDoc.encryptedPassword = undefined;
      res.json({ userDoc });
    })
    .catch(err => next(err));
});

//-------------------------- LOGIN -------------------------------

router.post("/login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  User.findOne({ email: { $eq: email } })

    .then(userDoc => {
      if (!userDoc) {
        next(new Error("incorrect email"));
        return;
      }
      const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        next(new Error("Wrong password"));
        return;
      }
      req.logIn(userDoc, () => {
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      });
    })
    .catch(err => next(err));
});

//-------------------- LOGOUT ---------------------

router.delete("/logout", (req, res, next) => {
  req.logOut();
  res.json({ userDoc: null });
});

//---------------CHECK LOGIN -------------

router.get("/checklogin", (req, res, next) => {
  if (req.user) {
    console.log(req.user);
    req.user.encryptedPassword = undefined;
    res.json({ userDoc: req.user });
  } else {
    res.json({ userDoc: null });
  }
});

module.exports = router;

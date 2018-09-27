const express = require("express");
const bcyrpt = require("bcrypt");
const router = express.Router();

const User = require("../public/models/user-model");

//-------------------------- SIGN UP -------------------------------

router.post("/signup", (req, res, next) => {
  // console.log(req.body);
  const { fullName, email, originalPassword } = req.body;



  const encryptedPassword = bcyrpt.hashSync(originalPassword, 10);

  User.create({ fullName, encryptedPassword, email })
    .then(userDoc => {
      userDoc.encryptedPassword = undefined;
      res.json({ userDoc });
    })
    .catch(err => next(err));
});

module.exports = router;

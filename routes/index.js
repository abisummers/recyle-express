const express = require("express");
const router = express.Router();
const FunFacts = require("../models/funFact-model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ hello: "hello" });
});
const recycling = require("../models/product-model");

// --------------- FUN FACTS -----------------

router.get("/facts", (req, res, next) => {
  FunFacts.find()
    .then(facts => {
      console.log("BACKEND FUN FACTS", facts);
      res.json(facts);
    })

    .catch(err => next(err));
});

//--------------------- ADD A PRODUCT ----------------
router.post("/add", (req, res, next) => {
  const {
    produits,
    qu_est_ce_que_j_en_fais,
    comment_eviter_de_le_produire,
    que_va_t_il_devenir,
    images,
    typologie_des_dechets
  } = req.body.state.field;

  const urlId = req.body.url;

  recycling
    .create({
      fields: {
        produits,
        qu_est_ce_que_j_en_fais,
        comment_eviter_de_le_produire,
        que_va_t_il_devenir,
        images,
        typologie_des_dechets
      },
      urlId
    })
    .then(productDoc => res.json(productDoc))
    .catch(err => next(err));
});

module.exports = router;

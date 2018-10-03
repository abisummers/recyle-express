const express = require("express");
const router = express.Router();
const FunFacts = require("../models/funFact-model");
const recycling = require("../models/product-model");

// --------------- FUN FACTS -----------------

router.get("/facts", (req, res, next) => {
  FunFacts.find()
    .then(facts => {
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
  } = req.body;

  recycling
    .create({
      produits,
      qu_est_ce_que_j_en_fais,
      comment_eviter_de_le_produire,
      que_va_t_il_devenir,
      images,
      typologie_des_dechets
    })
    .then(productDoc => res.json(productDoc))
    .catch(err => next(err));
});

module.exports = router;

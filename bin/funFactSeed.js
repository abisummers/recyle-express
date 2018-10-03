const mongoose = require("mongoose");
const FunFact = require("../models/funFact-model");


mongoose.Promise = Promise;
mongoose //make sure the name is the same as in app.js
  .connect(
      "mongodb://localhost/Project3",
      { useNewUrlParser: true }
    )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });


  const facts =
  [
    "Les Américains consomment plus de 2,5 millions de bouteiles en plastique toutes les 30 minutes",
    "Les sacs en plastiques jetés dans l'océan tuent plus d'1 millions d'animaux marins par an",
    "Plus de 60% des déchets jetés dans les ordures ménagères pourraient être recyclés",
    "Le papier recyclé produit 70% de pollution de l'air en moins que le papier non recyclé.",
    "Le verre est recyclé selon sa couleur car la couleur reste, même après recyclage",
    "Un robinet qui fuit goute à goute toutes les secondes gaspille 540 gallons d'eau par an",
    "Pour de nombreux matériaux, tels que les boîtes de conserve, le recyclage conserve jusqu'à 95% de l'eau utilisée dans les processus d'extraction et de fabrication.",
    "27 000 arbres sont coupés chaque jour pour la fabrication de papier de toilette.",
    "3. 95% de toutes les données dans le monde sont toujours stockées sur du papier. La majeure partie ne sont jamais relues.",
    "Le recyclage d’une bouteille en plastique unique peut conserver assez d’énergie pour allumer une ampoule de 60W pendant 6 heures.",
    "Le recyclage d’une tonne de papier permet d’économiser 682,5 litres de pétrole, 7.000 litres d’eau",
    "Des milliers de créatures marines meurent en avalant par erreur des sacs en plastique qui ressemblent à des méduses.",
    "Chaque année, les Américains jettent suffisamment de canettes de soda et de bouteilles pour atteindre la lune 20 fois et revenir.",
    "Le recyclage d’une canette en aluminium permet d’économiser assez d’énergie pour écouter un album complet sur votre Ipod.",
    "Recycler une tonne de plastique permet d’économiser jusqu’à 2.000 litres d’essence.",
    "Le recyclage d’une canette en aluminium permet d’économiser assez d’énergie pour faire fonctionner une télévision pendant 2 heures."
    
  ]

  facts.forEach(oneFact => {
    FunFact.create({description : oneFact})
    .then(newFact => console.log(newFact))
    .catch(err => console.log(err))
  });

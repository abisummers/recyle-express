const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
const productSchema = new Schema({
    datasetid: {type: String},
    recordid:{type:String},
    fields:{
   
            qu_est_ce_que_j_en_fais: { type: String, enum: ["associations", "bois de chauffage", "composteur", "déchèterie", "garagiste", "magasins de la grande distribution", "opticien", "ordures ménagères", "pharmacie", "tri(conteneur de verre)", "tri (sac - bac - point d'apport volontaire)"], required: true },
            comment_eviter_de_le_produire: { type: String },
            produits: { type: String, required: true },
            que_va_t_il_devenir: { type: String, required: true },
            images: { type: String, required: true, default:"http://www.roger-jean-bedarieux.fr/sx-content/uploads/bloc_cms/arrachage-souche-pezenas_1503302516.png" },
            typologie_des_dechets: { type: String, enum: ["Bois", "Déchets du Bâtiment", "Déchets de cuisine", "Déchets Dangereux", "Déchets Electriques et électroniques", "Divers", "Métaux", "Mobilier", "Papiers-Cartons", "Plastiques", "Textiles et cuir", "Verre"], required: true },
            },   
    record_timestamp:{type:String} 
},
{
    collection:"recycling"
}
);
=======
const productSchema = new Schema(
  {
    datasetid: { type: String },
    recordid: { type: String },
    fields: {
      qu_est_ce_que_j_en_fais: {
        type: String,
>>>>>>> c38b02ebbf2db14cec01adfff943bab7869453c4

        required: true
      },
      comment_eviter_de_le_produire: { type: String },
      produits: { type: String, required: true },
      que_va_t_il_devenir: { type: String, required: true },
      images: { type: String, required: true },
      typologie_des_dechets: {
        type: String,
        enum: [
          "Bois",
          "Déchets du Bâtiment",
          "Déchets de cuisine",
          "Déchets Dangereux",
          "Déchets de jardin",
          "Déchets Electriques et électroniques",
          "Divers",
          "Métaux",
          "Mobilier",
          "Papiers-Cartons",
          "Plastiques",
          "Textiles et cuir",
          "Verre"
        ],
        required: true
      }
    },
    record_timestamp: { type: String },
    urlId: { type: String, required: true }
  },
  {
    collection: "recycling"
  }
);

const recycling = mongoose.model("recycling", productSchema);

module.exports = recycling;

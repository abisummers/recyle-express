const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    datasetid: { type: String },
    recordid: { type: String },
    fields: {
      qu_est_ce_que_j_en_fais: {
        type: String,

        required: true
      },
      comment_eviter_de_le_produire: { type: String },
      produits: { type: String, required: true },
      que_va_t_il_devenir: { type: String, required: true },
      images: {
        type: String,
        required: true,
        default:
          "http://www.roger-jean-bedarieux.fr/sx-content/uploads/bloc_cms/arrachage-souche-pezenas_1503302516.png"
      },
      typologie_des_dechets: {
        type: String,
        enum: [
          "Bois",
          "Déchets du Bâtiment",
          "Déchets de cuisine",
          "Déchets Dangereux",
          "Déchets Electriques et électroniques",
          "Divers",
          "Métaux",
          "Mobilier",
          "Papiers-Cartons",
          "Plastiques",
          "Textiles et cuir",
          "Verre",
          "Déchets de jardin"
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

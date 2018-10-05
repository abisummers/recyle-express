const mongoose = require("mongoose");
const Quizz = require("../models/quizz-model");

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



const quizQuestions = [

    {
        question: "Que signifie ce symbole ?",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Green_dot_logo.svg/1200px-Green_dot_logo.svg.png",
        answers: [
            {
                content: "Le fabricant de l'emballage a participé à sa valorisation",
                comment: "Il signifie que l'entreprise qui vend ce produit participe financièrement à la collecte, au tri et au recyclage des emballages",
                point: 1,
            },
            {
                content: "C'est un produit recyclable",
                comment: "Mauvaise réponse !",
                point: 0,
            }
        ]
    },
    {
        question: "Dois-je laisser les bouchons sur les bouteilles en plastique?",
        img: "https://www.google.fr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiBqtCp0ezdAhVMUhoKHeP0DJ4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.femmeactuelle.fr%2Fdeco%2Fmaison-pratique%2Frecyclage-du-plastique-comment-bouchons-bouteilles-sont-separes-a-l-usine-2051773&psig=AOvVaw2OXXG6G0ykZCPF4IlyDrKT&ust=1538737289636387",
        answers: [
            {
                content: "Oui",
                comment: "Les bouchons seront recyclés, à condition qu’ils soient vissés sur les bouteilles.",
                point: 1,
            },
            {
                content: "Non",
                comment: "Mauvaise réponses!",
                point: 0,
            }
        ]
    },
    {
        question: "Si je casse un verre d’eau, je peux le jeter dans bac pour le verre ?",
        img: "",
        answers: [
            {
                content: "Oui, pas de soucis",
                comment: "Mauvaise réponse",
                point: 0,
            },
            {
                content: "Non",
                comment: "Tous les objets en verre n’ont pas la même composition chimique, même si on ne peut pas le voir à l’œil nu.Seul le verre d’emballage doit être placé dans les colonnes à verre: bouteilles, bocaux, pots.Ne mettez ni vaisselle en verre, ni ampoules, ni vitre, ni céramique, ni porcelaine…",
                point: 1,
            }
        ]
    },
    {
        question: "Boîtes de conserve, cartons à pizza...Parfois, les déchets recyclables sont sales. Dois-je les laver au préalable ?",
        answers: [
            {
                content: "Oui",
                comment: "Mauvaise réponse",
                point: 0,
            },
            {
                content: "Non",
                comment: "Cela gaspille l'eau potable ! Les emballages triés seront lavés lors du processus de recyclage. Il suffit simplement que l’emballage soit bien vide.",
                point: 1,
            }
        ]
    },
    {
        question: "Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres.",
        answers: [
            {
                content: "Vrai",
                comment: "Mauvaise réponse",
                point: 0,
            },
            {
                content: "Faux",
                comment: "Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage.",
                point: 1,
            }
        ]
    },
    {
        question: "Les pots de yaourt, recyclage ou poubelle normale ?",
        answers: [
            {
                content: "Poubelle Normale",
                comment: "Aujourd'hui, seuls les bouteilles et flacons en plastique se trient : bouteilles d'eau, d'huile, de lait, de soupe, de sauce, flacons d'adoucissant, de lessive, de liquide - vaisselle, les flacons de shampoing, bain moussant, gel douche...et leurs bouchons! Certaines communes expérimentent en ce moment le tri d'autres plastiques.",
                point: 1,
            },
            {
                content: "Recyclage",
                comment: "Mauvaise réponse",
                point: 0,
            }
        ]
    },
    {
        question: "J'ai tenté ma chance à un jeu de grattage, mais j'ai perdu. Où jeter le ticket ?",
        answers: [
            {
                content: "Dans la poubelle jaune, ça se recycle avec le papier",
                comment: "Bonne réponse !",
                point: 1,
            },
            {
                content: "Dans la poubelle normale",
                comment: "Mauvaise réponse",
                point: 0,
            }
        ]
    },
    {
        question: "J'ai tenté ma chance à un jeu de grattage, mais j'ai perdu. Où jeter le ticket ?",
        answers: [
            {
                content: "Dans la poubelle jaune, ça se recycle avec le papier",
                comment: "Bonne réponse !",
                point: 1,
            },
            {
                content: "Dans la poubelle normale",
                comment: "Mauvaise réponse",
                point: 0,
            }
        ]
    },
    {
        question: "Je vais déménager, est-ce que changer de commune peut modifier la façon dont je dois trier mes déchets ?",
        answers: [
            {
                content: "C'est possible, car la façon de collecter et de trier les déchets peut varier d'une commune à l'autre",
                comment: "Bonne réponse !",
                point: 1,
            },
            {
                content: "Non, toutes les communes doivent observer les mêmes règles de tri",
                comment: "Mauvaise réponse",
                point: 0,
            }
        ]
    },
    {
        question: "Les paquets de cigarettes, ça se recycle ?",
        answers: [
            {
                content: "Oui",
                comment: "Le carton du paquet peut aller dans le bac papier / cartons / emballages, mais pas le plastique ni la feuille d'aluminium",
                point: 1,
            },
            {
                content: "Non",
                comment: "Mauvaise réponse",
                point: 0,
            }
        ]
    },
    {
        question: "Et si après tout ça j'ai encore un doute ?",
        answers: [
            {
                content: "Dans le doute, il vaut mieux mettre au tri un déchet qui n'est en fait pas recyclable, ça ne coûte rien",
                comment: "Mauvaise réponse",
                point: 0,
            },
            {
                content: "Dans le doute, il vaut mieux mettre à la poubelle normale un objet recyclable, plutôt que de 'souiller' un container de tri",
                comment: "Bonne réponse",
                point: 1,
            }
        ]
    }
];


Quizz.create(quizQuestions)
    .then(quizzResult => {
        console.log(`inserted ${quizzResult.length} questions`);
    })
    .catch(err => {
        console.log(`failureeeee`, err);
    });
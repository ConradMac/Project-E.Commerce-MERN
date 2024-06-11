const { Schema, model } = require("mongoose");

const sellerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, // Assurez-vous que les adresses e-mail sont uniques
        },
        password: {
            type: String,
            required: true,
            select: false, // Assurez-vous que le mot de passe n'est pas renvoyé dans les réponses
        },

        role: {
            type: String,
            default: "seller",
        },
        status: {
            type: String,
            default: "pending",
        },
        payment: {
            type: String,
            default: "inactive",
        },
        // la méthode method va permetttre de savoir s'il se connecte avec son EMAIL ou par exemple avec GOOGLE ou FACEBOOK
        method: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            default: "",
        },
        shopInfo: {
            type: Object,
            default: {},
        },
    },
    {
        // Ajout de la propriété timestamps pour enregistrer la date de création et de mise à jour de chaque document
        timestamps: true,
    }
);

module.exports = model("sellers", sellerSchema); // "admins" correspond au nom de votre collection MongoDB

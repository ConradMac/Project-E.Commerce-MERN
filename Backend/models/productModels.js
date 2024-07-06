const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        // for multiple vendors Id
        sellerId: {
            type: Schema.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },

        brand: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            require: true,
        },
        stock: {
            type: Number,
            require: true,
        },
        discount: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        shopName: {
            type: String,
            require: true,
        },
        images: {
            type: Array,
            require: true,
        },
        rating: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

productSchema.index(
    {
        // Ici, nous pourrons cherche le name, category, brand, description dans la base de données via une bar de recherche.
        name: "text",
        category: "text",
        brand: "text",
        description: "text",
    },
    {
        weights: {
            name: 5,
            category: 4,
            brand: 3,
            description: 2,
        },
    }
);

module.exports = model("products", productSchema); // "admins" correspond au nom de votre collection MongoDB

/*
Indexation du schéma pour la recherche
javascript
Copier le code
productSchema.index(
    {
        // Ici, nous pourrons cherche le name, category, brand, description dans la base de données via une barre de recherche.
        name: "text",
        category: "text",
        brand: "text",
        description: "text",
    },
    {
        weights: {
            name: 5,
            category: 4,
            brand: 3,
            description: 2,
        },
    }
);
productSchema.index: Cette méthode permet de définir un index texte sur plusieurs champs du schéma. Les index sont essentiels pour améliorer la performance des recherches dans la base de données.
Index texte: Permet de rechercher du texte dans plusieurs champs. Ici, les champs name, category, brand et description sont indexés pour permettre la recherche textuelle.
weights: Les poids définissent l'importance relative de chaque champ dans les résultats de recherche. Par exemple, ici, les recherches privilégieront davantage le name (avec un poids de 5) par rapport à category (4), brand (3), et description (2). Cela signifie que les correspondances dans le champ name seront jugées plus importantes que celles dans les autres champs.

*/

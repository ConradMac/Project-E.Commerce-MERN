const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

module.exports = model("categories", categorySchema); // "admins" correspond au nom de votre collection MongoDB

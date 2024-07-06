const formidable = require("formidable");
const { responseReturn } = require("./../../utiles/response");
const cloudinary = require("cloudinary").v2;
const productModel = require("../../models/productModels");

class productController {
    add_product = async (req, res) => {
        const { id } = req;

        // Création d'une instance de formidable pour analyser les formulaires multipart
        const form = formidable({ multiples: true });

        // Analyse la requête entrante (req)
        form.parse(req, async (err, field, files) => {
            // console.log(files[0]);
            // console.log(files.images[0]);
            // console.log(files);
            // console.log(field);

            // Extraction des champs non fichiers depuis field
            let { name, category, brand, price, stock, discount, description, shopName } = field;

            // Extraction des fichiers depuis files
            const { images } = files;

            // Traitement du champ name pour créer un slug
            name = name.trim();
            const slug = name.split(" ").join("-");

            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true,
            });

            // On veut load notre multiple images
            try {
                let allImageUrl = [];
                for (let index = 0; index < images.length; index++) {
                    const result = await cloudinary.uploader.upload(images[index].filepath, { folder: "products" });
                    // Le folder se cré dans le cloudinary.

                    // Cette ligne de code permet de push les images dans le tableau allImageUrl
                    allImageUrl = [...allImageUrl, result.url];
                }

                await productModel.create({
                    sellerId: id,
                    name,
                    slug,
                    shopName,
                    category: category.trim(),
                    description: description.trim(),
                    stock: parseInt(stock),
                    price: parseInt(price),
                    discount: parseInt(discount),
                    brand: brand.trim(),
                    images: allImageUrl,
                });
                responseReturn(res, 201, { message: "Product Added Successfully" });
            } catch (error) {
                responseReturn(res, 500, { error: "Internal Server Error" });
            }
        });
    };
}

// End method

module.exports = new productController();

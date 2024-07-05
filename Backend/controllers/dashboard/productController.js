const formidable = require("formidable");
const { responseReturn } = require("./../../utiles/response");
const cloudinary = require("cloudinary").v2;

class productController {
    add_product = async (req, res) => {
        console.log("product ok");
        const form = formidable({ multiples: true });

        form.parse(req, async (err, field, files) => {
            console.log(files[0]);
            console.log(field);
        });
    };
}

module.exports = new productController();

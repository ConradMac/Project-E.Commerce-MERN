const mongoose = require("mongoose");

// Connect to the database avec la méthode connect de mongoose pour mongoDB
module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.db_URL, { useNewURLParser: true });
        console.log("DATABSE CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.log(error.message);
    }
};

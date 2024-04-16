const mongoose = require("mongoose");

// Connect to the database
module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.db_URL, { useNewURLParser: true });
        console.log("DATABSE CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.log(error.message);
    }
};

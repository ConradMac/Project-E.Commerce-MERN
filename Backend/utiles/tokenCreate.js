const jtw = require("jsonwebtoken");
module.exports.createToken = async (data) => {
    // pour créer un token, il exsite une méthode sign dans le module jsonwebtoken
    const token = await jtw.sign(data, process.env.SECRET_KEY, {
        expiresIn: "7d",
    });
    return token;
};

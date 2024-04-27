const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
    const { accessToken } = req.cookies;

    if (!accessToken) {
        return res.status(409).json({ error: "Please Login First" });
    }
};
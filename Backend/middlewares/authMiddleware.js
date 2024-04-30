const jwt = require("jsonwebtoken");
// Importation de la dépendance jsonwebtoken depuis le fichier package.json

module.exports.authMiddleware = async (req, res, next) => {
    // Récupération du token de l'utilisateur depuis les cookies, stocké précédemment dans authControllers.js
    const { accessToken } = req.cookies; // Extraction du cookie accessToken de la requête

    // Si le token n'est pas présent, renvoi d'une erreur et arrêt de l'exécution du code
    if (!accessToken) {
        return res.status(409).json({ error: "Please Login First" });
    } else {
        try {
            // Vérification et décodage du token à l'aide de la clé secrète stockée dans les variables d'environnement
            const deCodeToken = await jwt.verify(accessToken, process.env.SECRET_KEY);
            // Stockage du rôle et de l'ID de l'utilisateur dans la requête pour une utilisation ultérieure
            req.role = deCodeToken.role;
            req.id = deCodeToken.id;
            // Appel de la fonction next() pour passer au middleware suivant dans la pile
            next();
        } catch (error) {
            // En cas d'erreur lors de la vérification du token, renvoi d'une erreur et arrêt de l'exécution du code
            return res.status(409).json({ error: "Please Login First" });
        }
    }
};

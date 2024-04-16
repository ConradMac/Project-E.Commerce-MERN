const adminModel = require("./../models/adminModel");
const { responseReturn } = require("./../utiles/response");

// créer nos fonctions de contrôle (controller methode) pour l'authentification
//  pour l'authentification, on a besoin de email du password. On use le try and catch pour gérer les erreurs.
// on utilise la méthode findOne pour trouver un seul utilisateur avec l'email donné.
// on utilise la méthode select pour inclure le mot de passe dans la recherche.
// Le fichier response.js est un fichier de réponse personnalisé que nous avons créé pour gérer les réponses de l'API.
class authControllers {
    admin_login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const admin = await adminModel.findOne({ email }).select("+password");
            console.log(admin);
            if (admin) {
            } else {
                responseReturn(res, 404, { error: "Email Not Found" });
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
    };
}

module.exports = new authControllers();

const adminModel = require("./../models/adminModel");
const { responseReturn } = require("./../utiles/response");
const bcrypt = require("bcrypt");
const { createToken } = require("./../utiles/tokenCreate");

// créer nos fonctions de contrôle (controller methode) pour l'authentification
//  pour l'authentification, on a besoin de email du password. On use le try and catch pour gérer les erreurs.
// on utilise la méthode findOne pour trouver un seul utilisateur avec l'email donné.
// on utilise la méthode select pour inclure le mot de passe dans la recherche.
// Le fichier response.js est un fichier de réponse personnalisé que nous avons créé pour gérer les réponses de l'API.
class authControllers {
    admin_login = async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        try {
            const admin = await adminModel.findOne({ email }).select("+password");
            console.log(admin);

            if (admin) {
                // ici on vérifie si le mot de passe est correct
                const match = await bcrypt.compare(password, admin.password);
                console.log(match);
                if (match) {
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role,
                    });
                    res.cookie("accessToken", token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    });
                    // on retourne le token et un message de succès
                    responseReturn(res, 200, { token, message: "Login SUCCESS" });
                } else {
                    responseReturn(res, 404, { error: "Password Not Found" });
                }
            } else {
                responseReturn(res, 404, { error: "Email Not Found" });
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
    };
}

module.exports = new authControllers();

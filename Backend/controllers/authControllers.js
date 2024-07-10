const adminModel = require("./../models/adminModel");
const sellerModel = require("./../models/sellerModel");
const sellerCustomerModel = require("./../models/chat/sellerCustomerModel");
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
        // console.log(req.body);
        try {
            // Recherche de l'administrateur dans la base de données en fonction de l'e-mail fourni lors de la tentative de connexion
            const admin = await adminModel.findOne({ email }).select("+password");
            // console.log(admin);

            if (admin) {
                // Vérification du mot de passe
                const match = await bcrypt.compare(password, admin.password);
                // console.log(match);

                if (match) {
                    // Si les mots de passe correspondent, un token d'authentification est généré
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role,
                    });

                    // Ajout du token à un cookie nommé "accessToken" avec une date d'expiration de 7 jours
                    res.cookie("accessToken", token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    });

                    // Renvoi d'une réponse avec le token et un message de succès
                    responseReturn(res, 200, { token, message: "Login SUCCESS" });
                } else {
                    // Si les mots de passe ne correspondent pas, renvoi d'une réponse avec un code d'erreur 404
                    responseReturn(res, 404, { error: "Password Wrong !" });
                }
            } else {
                // Si aucun administrateur n'est trouvé avec l'e-mail spécifié, renvoi d'une réponse avec un code d'erreur 404
                responseReturn(res, 404, { error: "Email Not Found" });
            }
        } catch (error) {
            // Gestion des erreurs : renvoi d'une réponse avec un code d'erreur 500 et le message d'erreur correspondant
            responseReturn(res, 500, { error: error.message });
        }
    };
    // End Method

    seller_login = async (req, res) => {
        const { email, password } = req.body;

        try {
            const seller = await sellerModel.findOne({ email }).select("+password");
            // console.log(seller);
            if (seller) {
                const match = await bcrypt.compare(password, seller.password);
                // console.log(match)
                if (match) {
                    const token = await createToken({
                        id: seller.id,
                        role: seller.role,
                    });
                    res.cookie("accessToken", token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    });
                    responseReturn(res, 200, { token, message: "Login Success" });
                } else {
                    responseReturn(res, 404, { error: "Password Wrong" });
                }
            } else {
                responseReturn(res, 404, { error: "Email not Found" });
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
    };
    // End Method

    // Définition de la méthode seller_register. cours 188.
    seller_register = async (req, res) => {
        const { email, name, password } = req.body;
        try {
            const getUser = await sellerModel.findOne({ email });
            if (getUser) {
                responseReturn(res, 404, { error: "Email Already Exit" });
            } else {
                const seller = await sellerModel.create({
                    name,
                    email,
                    password: await bcrypt.hash(password, 10),
                    method: "manualy",
                    shopInfo: {},
                });
                // cette ligne de code est utilisée pour créer un utilisateur dans la collection seller_customers
                await sellerCustomerModel.create({
                    myId: seller.id,
                });
                // Création du token par l'iD et le role du seller.
                const token = await createToken({
                    id: seller.id,
                    role: seller.role,
                });
                res.cookie("accessToken", token, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                console.log(token);
                responseReturn(res, 201, { token, message: "Seller Register Success" });
            }
        } catch (error) {
            responseReturn(res, 500, { error: "Internal Server Error" });
        }
    };
    // End Method

    // Définition de la méthode getUser
    getUser = async (req, res) => {
        // Extraction des propriétés id et role de l'objet req
        const { id, role } = req;

        try {
            // Vérification du rôle de l'utilisateur
            if (role === "admin") {
                // Si l'utilisateur est un administrateur, recherche des informations de l'utilisateur dans la base de données
                const user = await adminModel.findById(id);
                // Envoi des informations de l'utilisateur en tant que réponse avec le code de statut 200
                responseReturn(res, 200, { userInfo: user });
            } else {
                const seller = await sellerModel.findById(id);
                // Envoi des informations de l'utilisateur en tant que réponse avec le code de statut 200
                responseReturn(res, 200, { userInfo: seller });
            }
        } catch (error) {
            // Gestion des erreurs : affichage du message d'erreur dans la console
            responseReturn(res, 500, { error: "Internal Server Error" });
            // Possibilité de renvoyer une réponse d'erreur à l'utilisateur, mais cette ligne est actuellement commentée
        }
    }; // Fin de la méthode getUser
}

module.exports = new authControllers();

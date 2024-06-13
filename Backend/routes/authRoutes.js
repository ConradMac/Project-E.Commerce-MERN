const { authMiddleware } = require("../middlewares/authMiddleware");
const authControllers = require("./../controllers/authControllers");

// nous créerons une route pour la fonction admin_login
const router = require("express").Router();

// nous créerons une route pour la fonction admin_login qui apres le authControllers.admin_login sera use dans le authControllers.js
router.post("/admin-login", authControllers.admin_login);

router.get("get-user", authMiddleware, authControllers.getUser);

router.post("/seller-register", authControllers.seller_register);

router.post("/seller-login", authControllers.seller_login);

module.exports = router;

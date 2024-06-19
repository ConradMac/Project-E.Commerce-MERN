const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utiles/db");

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);
app.use(bodyParser.json());
app.use(cookieParser());

// Définit le port sur lequel le serveur écoutera les requêtes entrantes
const PORT = process.env.PORT || 5000;
// Lance le serveur et écoute les requêtes entrantes sur le port spécifié
app.listen(PORT, () => console.log(`Le serveur fonctionne sur le port ${PORT}`));
// Connecte l'application à la base de données
dbConnect();

app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));
app.get("/", (req, res) => res.send("my Server (backend) is running"));

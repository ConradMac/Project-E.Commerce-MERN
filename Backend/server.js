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

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
dbConnect();

app.use("/api", require("./routes/authRoutes"));
app.get("/", (req, res) => res.send("my Server (backend) is running"));

import "./App.css";
import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";

function App() {
    // This state will be used to store all the routes de la page publicRoutes que l'on  a crée dans le dossier publicroutes
    const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
    console.log(allRoutes);
    return <Router allRoutes={allRoutes} />;
}

export default App;

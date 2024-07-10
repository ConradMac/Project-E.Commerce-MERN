import "./App.css";
import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "./store/Reducers/authReducer";

function App() {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    // This state will be used to store all the routes de la page publicRoutes que l'on  a crée dans le dossier publicroutes
    const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
    // console.log(allRoutes);

    useEffect(() => {
        const routes = getRoutes();

        // On ajoute les routes de la page adminRoutes que l'on a crée dans le dossier adminRoutes
        setAllRoutes([...allRoutes, routes]);
        // console.log(routes);
    }, []);

    useEffect(() => {
        if (token) {
            dispatch(get_user_info());
        }
    }, [token]);

    // le return de la fonction App() retourne le composant Router en lui passant en paramètre le tableau allRoutes pour qu'il puisse afficher les routes.
    return <Router allRoutes={allRoutes} />;
}

export default App;

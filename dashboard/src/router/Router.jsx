import React from "react";
import { useRoutes } from "react-router-dom";

function Router({ allRoutes }) {
    const routes = useRoutes([...allRoutes]);
    return routes;
}

export default Router;

//  ce fichier est un composant qui prend en paramètre un tableau de routes et les affiche en utilisant la fonction useRoutes de react-router-dom.
//

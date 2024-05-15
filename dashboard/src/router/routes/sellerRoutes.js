// Importation de la fonction lazy depuis React pour charger le composant de manière paresseuse
import { lazy } from "react";

// Définition du composant Home comme un composant chargé de manière paresseuse
const Home = lazy(() => import("../../views/pages/Home"));

// Définition des routes réservées aux vendeurs
export const sellerRoutes = [
    // Définition d'un objet représentant une route
    {
        // Chemin de la route
        path: "/",
        // Composant à afficher pour cette route (le composant Home)
        element: <Home />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        ability: ["admin", "seller"],
    },
];

// Importation de la fonction lazy depuis React pour charger le composant de manière paresseuse
import { lazy } from "react";

const Products = lazy(() => import("../../views/seller/Products"));
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));

const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));

// Définition du composant Home comme un composant chargé de manière paresseuse
const Home = lazy(() => import("./../../views/Home"));

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
    // Définition d'un objet représentant une route
    {
        // Chemin de la route du tableau de bord du vendeur
        path: "/seller/dashboard",
        // Composant à afficher pour cette route (le composant Home)
        element: <SellerDashboard />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        ability: ["seller"],
    },
    {
        // Chemin de la route du tableau de bord du vendeur
        path: "/seller/dashboard/add-product",
        // Composant à afficher pour cette route (le composant Home)
        element: <AddProduct />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        ability: ["seller"],
    },
    {
        // Chemin de la route du tableau de bord du vendeur
        path: "/seller/dashboard/products",
        // Composant à afficher pour cette route (le composant Home)
        element: <Products />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        ability: ["seller"],
    },
];

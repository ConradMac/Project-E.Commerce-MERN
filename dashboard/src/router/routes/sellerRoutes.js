// Importation de la fonction lazy depuis React pour charger le composant de manière paresseuse
import { lazy } from "react";
const Payments = lazy(() => import("../../views/seller/Payments"));

const Orders = lazy(() => import("../../views/seller/Orders"));

const DiscountProducts = lazy(() => import("../../views/seller/DiscountProducts"));

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
        role: "seller",
        status: "active",
    },
    {
        // Chemin de la route du tableau de bord du vendeur
        path: "/seller/dashboard/add-product",
        // Composant à afficher pour cette route (le composant Home)
        element: <AddProduct />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        role: "seller",
        status: "active",
    },
    {
        // Chemin de la route du tableau de bord du vendeur
        path: "/seller/dashboard/products",
        // Composant à afficher pour cette route (le composant Home)
        element: <Products />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        role: "seller",
        status: "active",
    },
    {
        // Chemin de la route du tableau de bord du vendeur
        path: "/seller/dashboard/discount-product",
        // Composant à afficher pour cette route (le composant Home)
        element: <DiscountProducts />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        role: "seller",
        status: "active",
    },
    {
        // Chemin de la route du tableau de bord du vendeur
        path: "/seller/dashboard/orders",
        // Composant à afficher pour cette route (le composant Home)
        element: <Orders />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        ability: ["active", "deactive"],
        role: "seller",
    },
    {
        // Chemin de la route du tableau de bord du vendeur
        path: "/seller/dashboard/payments",
        // Composant à afficher pour cette route (le composant Home)
        element: <Payments />,
        // Rôles autorisés à accéder à cette route (admin ou seller)
        role: "seller",
        status: "active",
    },
];

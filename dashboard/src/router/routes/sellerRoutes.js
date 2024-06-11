// Importation de la fonction lazy depuis React pour charger le composant de manière paresseuse
import { lazy } from "react";

const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"));

const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const Profile = lazy(() => import("../../views/seller/Profile"));
const SellerToCustomer = lazy(() => import("../../views/seller/SellerToCustomer"));
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"));
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
        path: "/",

        element: <Home />,

        ability: ["admin", "seller"],
    },

    {
        path: "/seller/dashboard",

        element: <SellerDashboard />,

        role: "seller",
        status: "active",
    },
    {
        path: "/seller/dashboard/add-product",

        element: <AddProduct />,

        role: "seller",
        status: "active",
    },
    {
        path: "/seller/dashboard/edit-product/:productId",

        element: <EditProduct />,

        role: "seller",
        status: "active",
    },
    {
        path: "/seller/dashboard/products",

        element: <Products />,

        role: "seller",
        status: "active",
    },
    {
        path: "/seller/dashboard/discount-product",

        element: <DiscountProducts />,

        role: "seller",
        status: "active",
    },
    {
        path: "/seller/dashboard/orders",

        element: <Orders />,

        ability: ["active", "deactive"],
        role: "seller",
    },
    {
        path: "/seller/dashboard/order/details/:orderId",

        element: <OrderDetails />,

        ability: ["active", "deactive"],
        role: "seller",
    },
    {
        path: "/seller/dashboard/payments",

        element: <Payments />,

        role: "seller",
        status: "active",
    },
    {
        path: "/seller/dashboard/chat-support",
        element: <SellerToAdmin />,
        ability: ["active", "deactive", "pending"],
    },
    {
        path: "/seller/dashboard/chat-customer/:customerId",
        element: <SellerToCustomer />,
        role: "seller",
        status: "active",
    },
    {
        path: "/seller/dashboard/chat-customer",
        element: <SellerToCustomer />,
        role: "seller",
        status: "active",
    },
    {
        path: "/seller/dashboard/profile",
        element: <Profile />,
        role: "seller",
        status: "active",
    },
];

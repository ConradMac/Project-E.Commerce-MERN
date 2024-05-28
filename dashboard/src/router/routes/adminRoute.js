import { lazy } from "react";

const Category = lazy(() => import("../../views/admin/Category"));

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));

export const adminRoutes = [
    {
        // Chemin de la route
        path: "admin/dashboard",

        element: <AdminDashboard />,

        role: "admin",
    },
    {
        // Chemin de la route order
        path: "admin/dashboard/orders",

        element: <Orders />,

        role: "admin",
    },
    {
        // Chemin de la route catgory
        path: "admin/dashboard/category",

        element: <Category />,

        role: "admin",
    },
    {
        // Chemin de la route sellers
        path: "admin/dashboard/sellers",

        element: <Sellers />,

        role: "admin",
    },
    {
        // Chemin de la route sellers
        path: "admin/dashboard/sellers",

        element: <Sellers />,

        role: "admin",
    },
];

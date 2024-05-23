import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));

export const adminRoutes = [
    {
        // Chemin de la route
        path: "admin/dashboard",

        element: <AdminDashboard />,

        role: "admin",
    },
    {
        // Chemin de la route
        path: "admin/dashboard/orders",

        element: <Orders />,

        role: "admin",
    },
];

import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

export const adminRoutes = [
    {
        // Chemin de la route
        path: "admin/dashboard",

        element: <AdminDashboard />,

        role: "admin",
    },
];

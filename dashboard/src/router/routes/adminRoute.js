import { lazy } from "react";
const Category = lazy(() => import("../../views/admin/Category"));
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactiveSellers = lazy(() => import("../../views/admin/DeactiveSellers"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));

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
        path: "admin/dashboard/payment-request",

        element: <PaymentRequest />,

        role: "admin",
    },
    {
        // Chemin de la route sellers
        path: "admin/dashboard/deactive-sellers",

        element: <DeactiveSellers />,

        role: "admin",
    },
    {
        // Chemin de la route sellers
        path: "admin/dashboard/sellers-request",

        element: <SellerRequest />,

        role: "admin",
    },
    {
        // Chemin de la route sellers
        path: "admin/dashboard/seller/details/:sellerId",

        element: <SellerDetails />,

        role: "admin",
    },
];

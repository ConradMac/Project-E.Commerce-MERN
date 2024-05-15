import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./privateRoutes";

export const getRoutes = () => {
    return {
        path: "/",
        element: <MainLayout />,
        // les childrens de la route principale
        children: privateRoutes,
    };
};

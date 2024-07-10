import MainLayout from "../../layout/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import { privateRoutes } from "./privateRoutes";

export const getRoutes = () => {
    privateRoutes.map((routes) => {
        // console.log(routes);
        routes.element = <ProtectedRoutes route={routes}>{routes.element}</ProtectedRoutes>;
    });

    return {
        path: "/",
        element: <MainLayout />,
        // les childrens de la route principale
        children: privateRoutes,
    };
};

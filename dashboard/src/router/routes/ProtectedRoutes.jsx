import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes({ route, children }) {
    const { role, userInfo } = useSelector((state) => state.auth);

    if (role) {
        if (route.role) {
            if (userInfo) {
                if (userInfo.role === route.role) {
                    if (route.status) {
                        if (route.status === userInfo.status) {
                            return <Suspense fallback={null}>{children}</Suspense>;
                        } else {
                            if (userInfo.status === "pending") {
                                return <Navigate to="/seller/account-pending" replace />;
                            } else {
                                return <Navigate to="/seller/account-deactive" replace />;
                            }
                        }
                    } else {
                        // si non status
                        if (route.visibility) {
                            if (route.visibility.some((route) => route === userInfo.status)) {
                                return <Suspense fallback={null}>{children}</Suspense>;
                            } else {
                                return <Navigate to="/seller/account-pending" replace />;
                            }
                        } else {
                            return <Suspense fallback={null}>{children}</Suspense>;
                        }
                    }
                } else {
                    return <Navigate to="/unauthorized" replace />;
                }
            }
        } else {
            if (route.ability === "seller") {
                return <Suspense fallback={null}>{children}</Suspense>;
            }
        }
    } else {
        return <Navigate to="/login" replace />;
    }
}

// Exportation du composant pour qu'il puisse être utilisé dans d'autres parties de l'application

export default ProtectedRoutes;

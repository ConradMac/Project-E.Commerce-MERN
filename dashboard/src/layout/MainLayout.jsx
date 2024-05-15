import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <h1>
                MAIN LAYOUT <Outlet />
            </h1>
        </div>
    );
}

export default MainLayout;

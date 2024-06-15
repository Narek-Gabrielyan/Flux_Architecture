// Libraries
import { Outlet } from "react-router-dom";
// JSX
import { Header } from "../Header/Header";

export const Layout = function () {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
        </div>
    )
}
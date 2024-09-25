import { FC } from "react";
import cs from "./Layout.module.scss"
import { Navbar } from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
    return <div className={cs.layout}>
        <Navbar />
        <Outlet />
    </div>
}
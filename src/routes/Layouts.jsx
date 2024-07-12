import React from "react";
import Header from "../components/hedernavfooter/Header.jsx";
import NavBar from "../components/hedernavfooter/NavBar.jsx";
import FooterII from "../components/hedernavfooter/FooterII.jsx";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <Header />
            <Outlet />
            <FooterII />
        </>
    );
};

export default Layout;

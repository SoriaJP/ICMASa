import React from "react";
import Header from '../components/hedernavfooter/Header.jsx'
import NavBar from '../components/hedernavfooter/NavBar.jsx';
import FooterII from '../components/hedernavfooter/FooterII.jsx';

const Layout = ({ children }) => {
    return (
      <>
        <NavBar />
        <Header />
        {children}
        <FooterII />
      </>
    );
  };
  
export default Layout;
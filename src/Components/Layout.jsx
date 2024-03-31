import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'
import Navbar2 from './Navbar2'
const Layout = () => {
    return (
      <>
        <Navbar2 />
        <Outlet /> 
        <Footer />
      </>
    );
  };
  
  export default Layout;
import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;

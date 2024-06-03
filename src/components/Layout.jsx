import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <div className="flex flex-col min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

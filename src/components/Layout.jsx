// import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SideContact from "./SideContact";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <SideContact />
      <Outlet />
    </div>
  );
};

export default Layout;

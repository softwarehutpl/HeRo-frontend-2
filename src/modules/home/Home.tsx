import React from "react";
import Navbar from "../common/components/navbar/Navbar";
import Sidebar from "../common/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Home;

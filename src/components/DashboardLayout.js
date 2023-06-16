import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
export default function DashboardLayout() {
  return (
    <div>
        <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

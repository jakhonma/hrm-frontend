// Layout.jsx
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Helper from "../components/Helper";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar butun yuqori qismni egallaydi */}
      <Navbar />

      {/* Qolgan qismi */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
          <Helper/>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;

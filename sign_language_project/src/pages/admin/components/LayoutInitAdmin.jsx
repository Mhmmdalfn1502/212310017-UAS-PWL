// LayoutInitAdmin.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import AuthProvider from "../../auth/AuthContext"; // perhatikan path ini
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";

export default function LayoutInitAdmin() {
  return (
    <AuthProvider>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1">
          <AdminNavbar />
          <section className="p-4 bg-LightPurple">
            <Outlet />
          </section>
        </div>
      </div>
    </AuthProvider>
  );
}

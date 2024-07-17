import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AuthProvider from "../pages/auth/AuthContext";

export default function LayoutInit() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <section>
          <div>
            <Outlet />
          </div>
        </section>
        <Footer />
      </AuthProvider>
    </div>
  );
}

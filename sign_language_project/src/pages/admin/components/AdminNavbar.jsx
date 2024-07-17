import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { FiSidebar } from "react-icons/fi";
import { useAuth } from "../../auth/AuthContext";
import { IoLogOutOutline } from "react-icons/io5";
import Logo from "../../../assets/Logo_white.png";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && !user) {
      // Set user dari localStorage ke context jika belum ada user di context
    }
  }, [user]);

  return (
    <>
      <nav className={`px-4 py-5 bg-Primary transition-all duration-300 ${sidebarVisible ? "lg:ml-64 ml-44" : "ml-0"}`}>
        <div className="flex justify-between items-center">
          <div className={`flex gap-2 items-center ${sidebarVisible ? "" : "ml-0"}`}>
            <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <button onClick={toggleSidebar} className={` ${sidebarVisible ? "hidden" : "ml-0"}`}>
              <FiSidebar size={20} color="White" />
            </button>
            <span className="text-white">Dashboard</span>
          </div>
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`lg:flex ${isOpen ? "" : "hidden"}`}>
            {user ? (
              <div className={`flex gap-2 items-center ${isOpen ? " " : ""} `}>
                <span className={`text-white ${sidebarVisible ? "" : ""}`}>Hello, {user.username}</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;

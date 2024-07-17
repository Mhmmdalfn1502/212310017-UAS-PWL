// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../pages/auth/AuthContext";
import Logo from "../assets/asdasd.png";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, logout } = useAuth();
  const {isOpenDd, setIsOpenDd } = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  useEffect(() => {
    // Cek jika ada user di localStorage dan set ke context
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && !user) {
      // Set user dari localStorage ke context jika belum ada user di context
      // SetUser dari context harus diimplementasikan
    }
  }, [user]);

  return (
    <>
      <nav className={`px-4 py-4 lg:px-32 lg:py-10 bg-white shadow-md ${isOpen ? "" : ""}`}>
        <div className="lg:flex lg:justify-between lg:items-center flex justify-between items-start">
          <div>
          <a href="/">
            <img src={Logo} alt="Logo" className="w-28 h-6" />
          </a>
          </div>
          <div className={`lg:flex lg:flex-row flex flex-col items-center lg:gap-10 font-medium text-gray-500 ${isOpen ? "block" : "hidden"}`}>
            <a className="text-Black font-semibold" href="/">
              Home
            </a>
            <a className="hover:text-Black" href="/Learn">
              Learn
            </a>
            <a className="hover:text-Black" href="/machine">
              FAQ
            </a>
            <a className="hover:text-Black" href="/Contact Us">
              Contact Us
            </a>
          </div>


    <div className={`${isOpen ? "flex flex-col justify-between items-end bg-red-100":""}`}>
          <div className={`lg:flex gap-3 ${isOpen ? "block" : "hidden"} lg:block lg:mt-0`}>
            {user ? (
              <div className={`flex items-center ${isOpen ? "flex flex-col justify-between items-end ":""}`}>
                <span className="font-medium text-Black px-4">Hello, {user.username}</span>
                <button onClick={handleLogout} className="">
                  <IoLogOutOutline size={30} color="Purple" />
                </button>
              </div>
            ) : (
              <div>
                <a className="font-medium hover:bg-LightPrimary hover:text-white text-Black py-2 px-4 rounded-lg border border-LightPrimary items-center mr-3" href="/SignIn">
                  Sign In
                </a>
                <a className="font-medium bg-Primary hover:bg-LightPrimary text-white py-2 px-4 rounded-lg" href="/SignUp">
                  Sign Up
                </a>
              </div>
            )}
          </div>

          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-Black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          </div>

        </div>
      </nav>

      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <span className="text-lg font-medium mb-4">Are you sure you want to logout?</span>
            <div className="flex justify-around mt-4">
              <button onClick={confirmLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg">
                Yes
              </button>
              <button onClick={cancelLogout} className="px-4 py-2 bg-gray-300 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

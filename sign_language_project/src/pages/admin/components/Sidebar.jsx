import React, { useState, useEffect } from 'react';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { RiAlignItemBottomFill } from 'react-icons/ri';
import { IoLogOutOutline } from 'react-icons/io5';
import Logo from "../../../assets/asdasd.png";
import { FiSidebar } from "react-icons/fi";
import { PiLineVerticalBold } from "react-icons/pi";
import { useAuth } from '../../auth/AuthContext';

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, logout } = useAuth();

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
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && !user) {
      // Set user dari localStorage ke context jika belum ada user di context
      // SetUser dari context harus diimplementasikan
    }
  }, [user]);

  return (

    <>
    <div className={`fixed shadow-md top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="sidebar h-screen lg:w-64 w-42 bg-LightPurple flex flex-col">
        <div className="py-6 px-4 text-2xl font-bold border-b border-gray-300 flex justify-between items-center">
          <img src={Logo} alt="" className="w-28 h-6" />
          <button onClick={toggleSidebar} className="">
            <PiLineVerticalBold size={20} color='Purple' />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <div>
            <div className="mb-4">
              <a href="/admin" className="lg:flex lg:flex-row lg:gap-4 flex flex-row gap-4 items-center bg-transparent text-Black font-small py-2 px-4 rounded-md hover:bg-purple-100">
                <AiFillHome size={20} />
                Home
              </a>
            </div>
            <div className="mb-4">
              <a href="/admin/crud" className="lg:flex lg:flex-row lg:gap-4 flex flex-row gap-4 items-center bg-transparent text-Black font-small py-2 px-4 rounded-md hover:bg-purple-100">
                <RiAlignItemBottomFill size={20} />
                Content
              </a>
            </div>
            <div className="mb-4">
              <a href="#" className="lg:flex lg:flex-row lg:gap-4 flex flex-row gap-4 items-center bg-transparent text-Black font-small py-2 px-4 rounded-md hover:bg-purple-100">
                <AiFillMessage size={20} />
                Messages
              </a>
            </div>
            <div className="mb-4">
              <button className="lg:flex lg:flex-row lg:gap-4 flex flex-row gap-4 items-center bg-transparent text-Black font-medium py-2 px-4 rounded-md hover:bg-purple-100">
                <span onClick={handleLogout} className="text-red-600">Logout</span>
                <IoLogOutOutline size={30} color='Red' />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
    {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <span className="text-lg font-medium mb-4">Are you sure you want to logout?</span>
            <div className="flex justify-around mt-4">
              <button onClick={confirmLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg">Yes</button>
              <button onClick={cancelLogout} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>

  );
}

export default Sidebar;

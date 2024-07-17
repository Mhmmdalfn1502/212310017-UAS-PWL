// import React, { useState } from "react";
// import Logo from "../../assets/Logo_white.png";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { AiFillHome } from "react-icons/ai";
// import { RiAlignItemBottomFill } from "react-icons/ri";
// import { IoLogOut } from "react-icons/io5";
// import { AiFillMessage } from "react-icons/ai";

// const AdminContent = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <div className="flex">
//       {sidebarVisible && (
//         <div className="sidebar h-screen lg:w-64 w-42 bg-gray-900 text-white flex flex-col">
//           <div className="py-6 px-4 text-2xl font-bold border-b border-gray-700">
//             <img src={Logo} alt="" className="w-28 h-6" />
//           </div>
//           <nav className="flex-1 p-4">
//             <div className="">
//               <div className="mb-4">
//                 <a href="#" className="lg:flex lg:flex-row lg:gap-4 flex flex-row gap-4 items-center bg-transparent text-white font-small py-2 px-4 rounded-md hover:bg-gray-500">
//                   <AiFillHome size={20} />
//                   Home
//                 </a>
//               </div>
//               <div className="mb-4">
//                 <a href="#" className="lg:flex lg:flex-row lg:gap-4 flex flex-row gap-4 items-center bg-transparent text-white font-small py-2 px-4 rounded-md hover:bg-gray-500">
//                   <RiAlignItemBottomFill size={20} />
//                   Content
//                 </a>
//               </div>
//               <div className="mb-4">
//                 <a href="#" className="lg:flex lg:flex-row lg:gap-4 flex flex-row gap-4 items-center bg-transparent text-white font-small py-2 px-4 rounded-md hover:bg-gray-500">
//                   <AiFillMessage size={20} />
//                   Messages
//                 </a>
//               </div>
//               <div className="mb-4">
//                 <a href="#" className="lg:flex lg:flex-row lg:gap-4 flex flex-row gap-4 items-center bg-transparent text-white font-medium py-2 px-4 rounded-md hover:bg-gray-500">
//                   <span className="text-LightPrimary">Logout</span>
//                   <IoLogOut size={20} />
//                 </a>
//               </div>
//             </div>
//           </nav>
//         </div>
//       )}
//       <div className="">
//         <button className="p-2 bg-gray-900" onClick={toggleSidebar}>
//           {sidebarVisible ? <FaTimes color="white" /> : <FaBars color="white" />}
//         </button>
//         <h1>This is the main page</h1>
//       </div>
//     </div>
//   );
// };

// export default AdminContent;

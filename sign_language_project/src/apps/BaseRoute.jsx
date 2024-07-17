import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import MainPage from "../pages/admin/MainPage";
import LayoutInit from "../components/LayoutInit";
import LayoutInitAdmin from "../pages/admin/components/LayoutInitAdmin";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Crud from "../pages/admin/Crud";
import HandGesture from "../components/HandRecognation";
import Object from "../components/HandR/Object";
// import Machine from ".././components/HandRecognation/teachablemachine";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<LayoutInit />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="Webcam" element={<HandGesture />} />
          <Route path="HandRecognition" element={<Object />} />
          {/* <Route path="machine" element={<Machine />} /> */}
        </Route>
        <Route path="admin" element={<LayoutInitAdmin />}>
          <Route index element={<MainPage />} />
          <Route path="crud" element={<Crud />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

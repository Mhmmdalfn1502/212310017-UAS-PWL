import React from "react";
import Logo from "../assets/Logo_white.png";

const Footer = () => {
  return (
    <footer className=" flex flex-row px-32 py-8 bg-gradient-to-r from-Primary to-orange-300 h-80">
      <div className="flex flex-row">
        <div className="flex flex-col lg:w-1/3 gap-8">
          <img className="w-80" src={Logo} alt="" />
          <span className="text-White font-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse qui sapiente? Reprehenderit, aliquam mollitia autem ut quisquam quia atque tenetur minus non nobis placeat dolores ad adipisci porro nulla?
          </span>
        </div>
        <ul className="lg:w-1/3 text-White">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Learn</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <ul className="lg:w-1/3 text-White">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Learn</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

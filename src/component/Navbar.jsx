import React from "react";
import Logo from "../assets/appclick.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="App Logo" className="w-28 object-contain" />
      </div>

      <div className="hidden lg:flex gap-6 font-medium text-gray-700">
        <Link to="/" className="hover:text-emerald-600 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-emerald-600 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-emerald-600 transition">
          Contact
        </Link>
      </div>

      <Link to="/login">
        <Button body="Login" />
      </Link>
    </nav>
  );
};

export default Navbar;

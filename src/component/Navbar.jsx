import React from "react";
import Logo from "../assets/appclick.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  let login = false;
  return (
    <div>
      {" "}
      <nav className="flex justify-between py-4 px-6 bg-slate-300">
        <img className="w-28" src={Logo} />
        <div className="lg:flex lg:gap-3  hidden">
          <p>Home</p>
          <Link to="/about">
            <p>About</p>
          </Link>

          <p>Contact</p>
        </div>

        {login ? (
          <div>
            <p>Hello User!</p>
          </div>
        ) : (
          <Link to="/login">
            <Button body="Login" />
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

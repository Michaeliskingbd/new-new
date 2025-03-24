import React from "react";
import Logo from "../assets/appclick.png";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="flex justify-between p-4 bg-slate-300">
        <img className="w-28" src={Logo} />
        <div className="flex gap-3">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

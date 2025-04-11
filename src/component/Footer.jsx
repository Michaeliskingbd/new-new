import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="h-48 bg-[#151515] flex justify-center items-center text-white mt-5">
      <div className="m-auto flex flex-col gap-5 lg:w-[70%] w-[90%] items-center ">
        <div className="flex text-2xl gap-3">
          <SiFacebook />
          <FaXTwitter />
          <FaGithub />
          <CiGlobe />
        </div>
        <div className="text-center">
          <p className="text-[#929292] leading-8">
            Copyright &copy; 2017-2015 MIT by{" "}
            <span className="text-[#929292]">Kamil Mysliweic</span> | design by{" "}
            <span className="text-[#FF0023]">Jakub Staron</span> <br />
            Official NestJS Consulting{" "}
            <span className="text-[#FF0023]">
              Trilon.io | hosted by{" "}
              <span className="text-[#FF0023]">Netlify</span>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

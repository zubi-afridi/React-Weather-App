import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001b36] py-4">
      <div className="flex flex-col md:flex-row justify-between items-center px-4">
        <span className="text-sm text-white">
          © 2024 Zubair Khan | React Weather App. All Rights Reserved.
        </span>
        <div className="flex mt-4 md:mt-0 space-x-5">
          <a
            href="https://www.linkedin.com/in/zubair-khan-web-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/zubi-afridi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

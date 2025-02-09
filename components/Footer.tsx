import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-5 flex items-center justify-center text-sm">
      Made By Enes Yağmur <FaRegHeart className="text-red-500 pl-2 text-2xl" />
    </footer>
  );
};

export default Footer;

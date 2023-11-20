import React from "react";
import { RiInstagramFill, RiPinterestFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary-pressed text-center text-neutral-10 lg:text-left font-productSans px-4 lg:px-24">
        <div className="flex p-6 justify-between">
          <div className="flex flex-row">
            <a className="text-base font-bold block text-neutral-10 py-4 px-6">
              Tentang Kami
            </a>
            <a className="text-base font-bold block text-neutral-10 py-4 px-6">
              Kontak
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#">
              <RiInstagramFill className="w-10 h-10 text-[#D0EBE3]" />
            </a>
            <a href="#">
              <FaTwitter className="w-10 h-10 text-[#D0EBE3]" />
            </a>
            <a href="#">
              <RiPinterestFill className="w-10 h-10 text-[#D0EBE3]" />
            </a>
          </div>
        </div>
        <div className="border-b border-primary-surface w-11/12 mx-auto"></div>
        <p className="flex py-5 text-sm justify-center  text-white">
          kuningantour.com @2023 All rights reserved
        </p>

        <div className="mx-6 py-10 text-center md:text-left"></div>
      </footer>
    </>
  );
};

export default Footer;

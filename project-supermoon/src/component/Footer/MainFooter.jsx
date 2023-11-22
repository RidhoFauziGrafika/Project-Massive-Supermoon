import React from "react";
import { Link } from "react-router-dom";
import { RiInstagramFill, RiPinterestFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const MainFooter = () => {
  return (
    <>
      <footer className="mt-10 bg-primary-pressed text-center text-neutral-10 lg:text-left font-productSans">
        <div className="flex p-8 justify-between">
          <div className="flex flex-row">
            <Link
              className="text-base font-bold block text-neutral-10 py-4 px-6"
              to="/tentangkami"
            >
              Tentang Kami
            </Link>
            <Link
              className="text-base font-bold block text-neutral-10 py-4 px-6"
              to="/kontak"
            >
              Kontak
            </Link>
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
        <p className="flex py-10 text-sm justify-center  text-white">
          kuningantour.com @2023 All rights reserved
        </p>

      </footer>
    </>
  );
};

export default MainFooter;

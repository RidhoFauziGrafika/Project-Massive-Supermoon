import React, { useState } from "react";
import Logo from "../../assets/logo/logo.png";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="relative bg-primary-main w-full flex flex-col lg:flex-row lg:items-center lg:justify-between px-9 lg:px-24 py-4 font-productSans z-50">
        <div className="px-6">
          <div className="flex justify-between">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <button
              className="text-white focus:outline-none lg:hidden"
              onClick={() => setClick(!click)}
            >
              {click ? (
                <FaTimes className="md:block w-10 h-10" />
              ) : (
                <CiMenuBurger className="md:block w-10 h-10" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex flex-col lg:flex-row lg:item-center px-6 py-2 lg:flex ${
            click ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="text-sm lg:text-base font-bold block text-white py-4 px-6 relative cursor-pointer before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:bg-secondary-main hover:before:w-full hover:before:opacity-100"
          >
            Beranda
          </Link>
          <Link
            to="/wisata"
            className="text-sm lg:text-base font-bold block text-white py-4 px-6 relative cursor-pointer before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:bg-secondary-main hover:before:w-full hover:before:opacity-100"
          >
            Wisata
          </Link>
          <Link
            to="/blog"
            className="text-sm lg:text-base font-bold block text-white py-4 px-6 relative cursor-pointer before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:bg-secondary-main hover:before:w-full hover:before:opacity-100"
          >
            Blog
          </Link>
          <Link
            to="/kontak"
            className="text-sm lg:text-base font-bold block text-white py-4 px-6 relative cursor-pointer before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:bg-secondary-main hover:before:w-full hover:before:opacity-100"
          >
            Kontak
          </Link>
          <Link
            to="/tentangkami"
            className="text-sm lg:text-base font-bold block text-white py-4 px-6 relative cursor-pointer before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:bg-secondary-main hover:before:w-full hover:before:opacity-100"
          >
            Tentang Kami
          </Link>
        </div>

        <div
          className={`flex flex-col lg:flex-row lg:item-center lg:flex gap-4 lg:gap-2 ${
            click ? "flex" : "hidden"
          }`}
        >
          <form>
            <div className="relative flex items-center">
              <CiSearch className="w-5 h-5 absolute ml-3" />
              <input
                type="text"
                name="search"
                placeholder="Pencarian"
                className="w-full pr-3 pl-10 px-6 py-2 font-semibold placeholder-neutral-70 rounded-2xl border-2 bg-primary-surface"
              />
            </div>
          </form>
          <Link
            to="/login"
            className="block bg-primary-surface text-primary-main font-bold px-4 py-2 rounded-2xl text-center"
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className=" block bg-primary-surface outline outline-1 text-primary-main font-bold px-6 py-2 rounded-2xl text-center "
          >
            Daftar
          </Link>
        </div>
      </div>
    </>
  );
};

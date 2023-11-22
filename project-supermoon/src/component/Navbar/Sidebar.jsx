import React from "react";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="p-2 row-span-3">
        <div className="w-[320px] h-[700px] bg-neutral-card rounded-lg drop-shadow-xl">
          <div className="flex flex-col p-3">
          <img src={Logo} className="w-[200px] self-center" alt="image" />
            <hr className="text-gray-900 mt-4"/>
            <Link to="/profile" className="px-4 py-2 my-6 text-[16px] text-white bg-primary-main rounded-lg">
              Dashboard
            </Link>
            <Link to="/riwayat" className="px-4 py-2 my-6 text-[16px] rounded-lg">
              Riwayat Pesanan
            </Link>
            <Link to="/setting" className="px-4 py-2 my-6 text-[16px] rounded-lg">
              Setting Akun
            </Link>
            <Link to="/" className="px-4 py-2 my-6 text-[16px] rounded-lg">
              Keluar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

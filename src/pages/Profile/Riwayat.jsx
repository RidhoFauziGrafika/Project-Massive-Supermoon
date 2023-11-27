import React from "react";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import SecondNavbar from "../../component/Navbar/SecondNavbar";
import MainFooter from "../../component/Footer/MainFooter";
import ProfileCard from "../../component/Card/ProfileCard";
import { HiHome } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { RxPinLeft } from "react-icons/rx";

const Riwayat = () => {
  return (
    <>
      <SecondNavbar />
        <div className="flex flex-row">

          <div className="p-2 row-span-3">
            <div className="w-[320px] h-[400px] bg-neutral-card rounded-lg drop-shadow-xl">
              <div className="flex flex-col p-3">
              <img src={Logo} className="w-[200px] self-center" alt="image" />
                <hr className="text-gray-900 mt-4"/>
                <Link to="/profile" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
                <HiHome className="self-center mr-2"/>Dashboard
                </Link>
                <Link to="/riwayat" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg text-white bg-primary-main">
                <FaCartShopping className="self-center mr-2"/>Riwayat Pesanan
                </Link>
                <Link to="/setting" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
                <FaGear className="self-center mr-2"/>Pengaturan Akun
                </Link>
                <Link to="/" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
                <RxPinLeft className="self-center mr-2"/>Keluar
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">

            <div className="my-4">
              <h6 className="ml-4 text-3xl font-bold tracking-tight text-gray-900">
                Riwayat Pesanan
              </h6>
              <h6 className="ml-4 text-lg tracking-tight text-gray-900">
                Cek kembali destinasi tersimpan untuk perjalanan berikutnya.
              </h6>
              <button className="px-4 py-1 m-4 text-lg rounded-lg text-white bg-primary-main">Semua</button>
              <button className="px-4 py-1 m-4 text-lg rounded-lg text-primary-main border-solid border-2 border-primary-main bg-primary-surface">Paket Wisata</button>
              <button className="px-4 py-1 m-4 text-lg rounded-lg text-primary-main border-solid border-2 border-primary-main bg-primary-surface">Wisata</button>
            </div>

            <div className="flex flex-row justify-evenly items-center">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
            <div className="flex justify-center mt-7">
              <Link to="/detail" className="px-4 py-2 text-[16px] rounded-lg text-center text-white bg-primary-main">
                Lihat Semua
              </Link>
            </div>
          </div>

        </div>
      <MainFooter />
    </>
  );
};

export default Riwayat;

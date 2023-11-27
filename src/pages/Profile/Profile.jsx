import React from "react";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import SecondNavbar from "../../component/Navbar/SecondNavbar";
import MainFooter from "../../component/Footer/MainFooter";
import MainCard from "../../component/Card/MainCard";
import { HiHome } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { RxPinLeft } from "react-icons/rx";

const TentangKami = () => {
  return (
    <>
      <SecondNavbar />
        <div className="flex flex-row">

          <div className="p-2 row-span-3">
            <div className="w-[320px] h-[400px] bg-neutral-card rounded-lg drop-shadow-xl">
              <div className="flex flex-col p-3">
              <img src={Logo} className="w-[200px] self-center" alt="image" />
                <hr className="text-gray-900 mt-4"/>
                <Link to="/profile" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg text-white bg-primary-main">
                <HiHome className="self-center mr-2"/>Dashboard
                </Link>
                <Link to="/riwayat" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
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
                Hallo, Arin!
              </h6>
              <h6 className="ml-4 text-lg tracking-tight text-gray-900">
                Selamat datang dan jelajahi lebih banyak tempat di Kabapten Kuningan.
              </h6>

              <form>
                <div className="m-4 relative flex items-center gap-2">
                  <input
                    type="text"
                    name="search"
                    placeholder="Cari Destinasi..."
                    autoComplete="off"
                    className="w-[600px] p-2 pl-3 placeholder-neutral-70 rounded-xl border-2"
                  />
                  <button className="px-4 py-2 my-3 mx-3 text-lg rounded-lg text-white bg-primary-main">Cari</button>
                </div>
              </form>

              <div className="mx-4 flex flex-row justify-between">
                <h5 className="text-lg font-bold tracking-tight text-gray-900">
                  Cek destinasi sebelum bepergian, kuy!
                </h5>
                <button className="text-lg tracking-tight text-gray-900">
                  Lihat Semua
                </button>
              </div>              
            </div>

            <div className="flex flex-row justify-evenly items-center">
              <MainCard />
              <MainCard />
              <MainCard />
            </div>

            <div className="m-4">
              <h5 className="text-lg font-bold tracking-tight text-gray-900">
                Kumpulan Paket Wisata di Kuningan Untukmu 😍
              </h5>
              <div className="flex flex-row justify-between">
                <h6 className="text-lg tracking-tight text-gray-900">
                  Yuk, temukan berbagai macam paket wisata menarik.
                </h6>
                <button className="text-lg tracking-tight text-gray-900">
                  Lihat Semua
                </button>
              </div>              
            </div>

            <div className="flex flex-row justify-evenly items-center">
              <MainCard />
              <MainCard />
              <MainCard />
            </div>
          </div>

        </div>
      <MainFooter />
    </>
  );
};

export default TentangKami;

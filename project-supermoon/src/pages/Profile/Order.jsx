import React from "react";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import SecondNavbar from "../../component/Navbar/SecondNavbar";
import MainFooter from "../../component/Footer/MainFooter";
import { HiHome } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { RxPinLeft } from "react-icons/rx";

const Order = () => {
  return (
    <>
      <SecondNavbar />
        <div className="flex flex-row">

          <div className="p-2 row-span-3">
            <div className="w-[320px] h-[700px] bg-neutral-card rounded-lg drop-shadow-xl">
              <div className="flex flex-col p-3">
              <img src={Logo} className="w-[200px] self-center" alt="image" />
                <hr className="text-gray-900 mt-4"/>
                <Link to="/profile" className="flex flex-row px-4 py-2 my-6 text-lg rounded-lg">
                <HiHome className="self-center mr-2"/>Dashboard
                </Link>
                <Link to="/riwayat" className="flex flex-row px-4 py-2 my-6 text-lg rounded-lg">
                <FaCartShopping className="self-center mr-2"/>Riwayat Pesanan
                </Link>
                <Link to="/setting" className="flex flex-row px-4 py-2 my-6 text-lg rounded-lg text-white bg-primary-main">
                <FaGear className="self-center mr-2"/>Setting Akun
                </Link>
                <Link to="/" className="flex flex-row px-4 py-2 my-6 text-lg rounded-lg">
                <RxPinLeft className="self-center mr-2"/>Keluar
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">

            <div className="m-4">
              <h6 className="text-3xl font-bold tracking-tight text-gray-900">
                Detail Order
              </h6>
            </div>

            <div className="m-4 p-7 bg-neutral-card rounded-lg drop-shadow-xl">
              <h5 className="mb-2 tracking-tight text-gray-900">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.com
              </h5>
            </div>

            <div className="m-4 p-7 bg-neutral-card rounded-lg drop-shadow-xl">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Rincian Harga
              </h5>
              <h5 className="mb-2 tracking-tight text-gray-900">
                Paket Wisata 1 (1x)
              </h5>
              <h5 className="mb-2 tracking-tight text-gray-900">
                Service Fee
              </h5>
              <h5 className="mb-2 font-bold tracking-tight text-gray-900">
                Total Pembayaran
              </h5>
            </div>

            <div className="m-4 p-7 bg-neutral-card rounded-lg drop-shadow-xl">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Rincian Kontak
              </h5>
              <h5 className="mb-2 tracking-tight text-gray-900">
                Nama Lengkap
              </h5>
              <h5 className="mb-2 tracking-tight text-gray-900">
                Email
              </h5>
              <h5 className="mb-2 tracking-tight text-gray-900">
                Nomor Telepon
              </h5>
            </div>

            <div className="flex justify-start m-4">
              <Link to="/riwayat" className="px-4 py-2 text-[16px] rounded-lg text-center text-white bg-primary-main">
                Lihat Riwayat Pesanan
              </Link>
            </div>
          </div>

        </div>
      <MainFooter />
    </>
  );
};

export default Order;

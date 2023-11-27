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

            <div className="m-4">
              <h6 className="text-3xl font-bold tracking-tight text-gray-900">
                Detail Pesanan
              </h6>
            </div>

            <div className="m-4 w-[1050px] bg-neutral-card rounded-lg drop-shadow-xl">
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  Waktu Pemesanan
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  13 November 2023, 11:45
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  ID Pemesanan
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  KT-0001
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  Ref Pemesanan
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  -
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  ID Transaksi
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  KT-0001
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  Metode Pembayaran
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  QRIS
                </h5>
              </div>
            </div>

            <div className="m-4 bg-neutral-card rounded-lg drop-shadow-xl">
              <h5 className="m-4 text-xl font-bold tracking-tight text-gray-900">
                Rincian Harga
              </h5>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  Paket Wisata 1 (1x)
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  Rp. 1.000.000
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  Biaya Layanan
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  Rp. 100.000
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 font-bold tracking-tight text-gray-900">
                  Total Pembayaran
                </h5>
                <h5 className="m-4 font-bold tracking-tight text-gray-900">
                  Rp. 1.100.000
                </h5>
              </div>
            </div>

            <div className="m-4 bg-neutral-card rounded-lg drop-shadow-xl">
              <h5 className="m-4 text-xl font-bold tracking-tight text-gray-900">
                Rincian Kontak
              </h5>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  Nama Lengkap
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  Arin
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  Email
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  arin@gmail.com
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="m-4 tracking-tight text-gray-900">
                  Nomor Telepon
                </h5>
                <h5 className="m-4 tracking-tight text-gray-900">
                  0852 7124 7124
                </h5>
              </div>
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

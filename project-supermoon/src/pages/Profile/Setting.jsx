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

const Setting = () => {
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
            <div className="flex flex-col">

              <div className="my-4">
                <h6 className="ml-4 text-3xl font-bold tracking-tight text-gray-900">
                  Detail Profil
                </h6>
                <h6 className="ml-4 text-lg tracking-tight text-gray-900">
                  Pastikan seluruh data anda sesuai.
                </h6>
              </div>

              <div className="ml-4">
                <form className="bg-neutral-card rounded-lg drop-shadow-xl p-7 flex flex-row">

                <div className="flex flex-col  justify-between">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Nama Lengkap
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Tanggal Lahir
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
                  </div>
                </div>

                <div className="flex flex-col  justify-between">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Nomor Telepon
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Tanggal Lahir
                    </label>
                    <select name="" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="select">
                      <option>Pilih...</option>
                      <option value="Laki-Laki">Laki-Laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                </form>
              </div>

            </div>


            <div className="my-4">
              <h6 className="ml-4 text-3xl font-bold tracking-tight text-gray-900">
                Kontak Detail
              </h6>
              <h6 className="ml-4 text-lg tracking-tight text-gray-900">
                Informasi ini memerlukan verifikasi ulang jika diubah.
              </h6>
            </div>

            <div className="ml-4">
              <form className="bg-neutral-card rounded-lg drop-shadow-xl p-7">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="select" type="select" placeholder="Pilih Tanggal Lahir" />
                </div>
              </form>
            </div>
            <div className="flex justify-start m-4">
              <Link to="/detail" className="px-4 py-2 text-[16px] rounded-lg text-center text-white bg-primary-main">
                Simpan
              </Link>
            </div>
          </div>

        </div>
      <MainFooter />
    </>
  );
};

export default Setting;

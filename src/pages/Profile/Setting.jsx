import React from "react";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import SecondNavbar from "../../component/Navbar/SecondNavbar";
import MainFooter from "../../component/Footer/MainFooter";
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
            <div className="w-[320px] h-[400px] bg-neutral-card rounded-lg drop-shadow-xl">
              <div className="flex flex-col p-3">
              <img src={Logo} className="w-[200px] self-center" alt="image" />
                <hr className="text-gray-900 mt-4"/>
                <Link to="/profile" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
                <HiHome className="self-center mr-2"/>Dashboard
                </Link>
                <Link to="/riwayat" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
                <FaCartShopping className="self-center mr-2"/>Riwayat Pesanan
                </Link>
                <Link to="/setting" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg text-white bg-primary-main">
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
                Detail Profil
              </h6>
              <h6 className="ml-4 text-lg tracking-tight text-gray-900">
                Pastikan seluruh data anda sesuai.
              </h6>
            </div>

            <div className="ml-4">
              <form className="w-[1050px] bg-neutral-card rounded-lg drop-shadow-xl p-7 flex flex-row justify-between">

                <div className="w-[450px] flex flex-col">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Nama Lengkap
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Tanggal Lahir
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
                  </div>
                </div>

                <div className="w-[450px] flex flex-col">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Nomor Telepon
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Masukkan nomor telepon" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Jenis Kelamin
                    </label>
                    <select name="" id="" className="shadow appearance border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <option>Pilih...</option>
                      <option value="Laki-Laki">Laki-Laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

              </form>
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
              <form className="w-[1050px] bg-neutral-card rounded-lg drop-shadow-xl p-7 flex flex-row justify-between">

                <div className="w-[450px] flex flex-col">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Masukkan Email" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Kata Sandi
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Masukkan kata sandi" />
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="w-[450px] mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Kata Sandi Baru
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Masukkan kata sandi baru" />
                  </div>
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

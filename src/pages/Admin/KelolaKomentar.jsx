import React from "react";
import SecondNavbar from "../../component/Navbar/SecondNavbar";
import MainFooter from "../../component/Footer/MainFooter";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { MdArticle } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { PiCompassFill } from "react-icons/pi";
import { FaBed } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
import { MdInsertComment } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";

const KelolaKomentar = () => {
  return (
    <>
      <SecondNavbar />
      <div className="flex flex-row">
        <div className="p-2 row-span-3">
          <div className="w-[320px] h-[750px] bg-neutral-card rounded-lg drop-shadow-xl">
            <div className="flex flex-col p-3">
            <img src={Logo} className="w-[200px] self-center" alt="image" />
              <hr className="text-gray-900 mt-4"/>
              <Link to="/kelolaartikel" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg text-white bg-primary-main">
              <MdArticle className="self-center mr-2"/>Kelola Artikel
              </Link>
              <Link to="/kelolapengguna" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
              <HiUser className="self-center mr-2"/>Kelola Pengguna
              </Link>
              <Link to="/kelolawisata" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
              <PiCompassFill className="self-center mr-2"/>Kelola Wisata
              </Link>
              <Link to="/kelolapaketwisata" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
              <FaBoxArchive className="self-center mr-2"/>Kelola Paket Wisata
              </Link>
              <Link to="/kelolapenginapan" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
              <FaBed className="self-center mr-2"/>Kelola Penginapan
              </Link>
              <Link to="/kelolakuliner" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
              <MdRestaurant className="self-center mr-2"/>Kelola Kuliner
              </Link>
              <Link to="/kelolakomentar" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
              <MdInsertComment className="self-center mr-2"/>Kelola Komentar
              </Link>
              <Link to="/kelolapembayaran" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
              <MdPayment className="self-center mr-2"/>Kelola Pembayaran
              </Link>
              <Link to="/" className="flex flex-row px-4 py-2 my-3 text-lg rounded-lg">
              <RiLogoutBoxFill className="self-center mr-2"/>Keluar
              </Link>
            </div>
          </div>
        </div>

        <div className="m-4 w-[1050px] bg-neutral-card rounded-lg drop-shadow-xl">
          <div className="m-8">
            <h6 className="text-3xl font-bold tracking-tight text-gray-900">
              Form Tambah Artikel
            </h6>
          </div>
          <hr className="text-gray-900 mx-8"/>

          <div className="m-8">
            <div className="my-5">
              <h6 className="text-lg tracking-tight text-gray-900">
                Judul Artikel
              </h6>
              <div className="relative flex items-center gap-2">
                <input type="text" name="search" placeholder="Judul Artikel" autoComplete="off" 
                  className="w-full p-2 pl-3 placeholder-neutral-70 rounded-xl border-2" />
              </div>
            </div>
            <div className="my-5">
              <h6 className="text-lg tracking-tight text-gray-900">
                Slug
              </h6>
              <div className="relative flex items-center gap-2">
                <input type="text" name="search" placeholder="Untuk URL (Otomatis berubah url dari judul)" autoComplete="off" 
                  className="w-full p-2 pl-3 placeholder-neutral-70 rounded-xl border-2" />
              </div>
              <h6 className="text-slate-500">Slug digunakan untuk akses artikel lewat url atau alamat web, slug diatas tidak boleh sama dengan slug dari artikel yang lain.</h6>
            </div>
            <div className="my-5">
            <input type="text" name="search" placeholder="Isi Artikel Wisata" autoComplete="off" 
              className="w-full h-[500px] p-2 pl-3 placeholder-neutral-70 rounded-xl border-2" />
            </div>
            <input type="file" className="block text-sm text-slate-500 file:mr-4 file:py-2
              file:px-4 rounded-xl file:border-0 file:text-sm file:font-semibold hover:file:bg-green-200"/>
            <div className=" my-5 flex flex-row">
              <h6 className="text-lg tracking-tight text-gray-900">
                Publikasikan Artikel:
              </h6>
              <div className="mx-8 text-lg">
                <input type="checkbox" name="" id="" /> Simpan <br />
                <input type="checkbox" name="" id="" /> Publish
              </div>
            </div>
          </div>
          
          <div className="flex justify-start m-8">
            <Link to="/" className="px-4 py-2 text-[16px] rounded-lg text-center border-solid border-2 text-white bg-primary-main border-primary-main">
              Publish
            </Link>
            <Link to="/" className="px-4 py-2 mx-4 text-[16px] rounded-lg text-center text-primary-main border-solid border-2 border-primary-main bg-primary-surface">
              Batal
            </Link>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default KelolaKomentar;

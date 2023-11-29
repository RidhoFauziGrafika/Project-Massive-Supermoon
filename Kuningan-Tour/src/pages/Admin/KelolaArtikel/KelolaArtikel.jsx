import React from "react";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import { Navbar } from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const KelolaArtikel = () => {
  return (
    <>
      <Navbar />
      <div className="font-productSans bg-[#F7F7FF] flex flex-row">
        <SidebarAdmin />
        <div className="w-full px-6 py-10">
          <div className="w-full bg-neutral-10 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex lg:flex-row flex-col lg:justify-between px-6 py-10">
                <h1 className="lg:text-2xl text-base font-bold mb-3">
                  Kelola Artikel
                </h1>
                <Link className="px-4 py-2 bg-primary-main rounded-lg text-white lg:text-base text-sm flex gap-3">
                  <FaPlus className="w-5 h-5" />
                  Tambah Artikel
                </Link>
              </div>
              <div className="border border-neutral-30 px-4"></div>
              <div className="flex lg:flex-row flex-col lg:justify-between px-6 py-10">
                <div className="flex flex-row gap-3 items-center mb-3">
                  <p className="lg:text-base text-sm font-semibold">
                    Tampilkan
                  </p>
                  <form>
                    <select className="rounded-lg border block w-full bg-white border-neutral-50 py-2 px-4">
                      <option>5</option>
                      <option>10</option>
                      <option>20</option>
                    </select>
                  </form>
                  <p className="lg:text-base text-sm">Entri</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <p className="lg:text-base text-sm">Cari</p>
                  <form>
                    <input
                      type="text"
                      placeholder="Cari Pengguna"
                      className="w-full px-4 py-2 rounded-lg border border-neutral-60 "
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  overflow-x-auto">
            <table className="min-w-full border divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    John Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    Developer
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    Designer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KelolaArtikel;

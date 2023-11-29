import React from "react";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import { Navbar } from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const KelolaKomentar = () => {
  return (
    <>
      <Navbar />
      <div className="font-productSans bg-[#F7F7FF] flex flex-row">
        <SidebarAdmin />
        <div className="w-full px-4 py-10">
          <div className="w-full bg-neutral-10 rounded-lg mb-10 px-4 py-8">
            <div className="px-4 py-6">
              <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                <h4 className="lg:text-4xl text-xl font-bold">
                  Kelola Komentar
                </h4>
              </div>
              <div className="border border-neutral-30 w-full mt-5"></div>
              <div className="mt-5">
                <div className="flex flex-col lg:flex-row gap-3 justify-between">
                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                    <p className="lg:text-base text-sm">Tampilkan</p>
                    <form>
                      <select className="rounded-lg border block w-full bg-white border-neutral-50 py-2 px-4">
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                      </select>
                    </form>
                    <p className="lg:text-base text-sm">Entri</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="lg:text-base text-sm">Cari :</p>
                    <form>
                      <input
                        type="text"
                        className="w-full border rounded-lg border-neutral-50 px-4 py-2"
                        placeholder="Cari Artikel"
                      />
                    </form>
                  </div>
                </div>
                <div className="overflow-x-auto mt-5">
                  <table className="min-w-full border  text-sm font-light border-neutral-50">
                    <thead className="border-b font-medium bg-primary-main text-white">
                      <tr>
                        <th
                          scope="col"
                          className="border-r px-6 py-4 border-neutral-50"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="border-r px-6 py-4 border-neutral-50"
                        >
                          Judul
                        </th>
                        <th
                          scope="col"
                          className="border-r px-6 py-4 border-neutral-50"
                        >
                          Deskripsi
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-50">
                        <td className="border-r px-6 py-4 font-medium border-neutral-50">
                          1
                        </td>
                        <td className="border-r px-6 py-4 border-neutral-50">
                          Salsabila Abadi
                        </td>
                        <td className="border-r px-6 py-4 border-neutral-50">
                          Paket Wisatanya sangat terjangkau
                        </td>
                        <td className="flex justify-center items-center gap-3 mt-3 px-3">
                          <button className="px-4 py-2 bg-[#FD3550] text-white rounded-lg">
                            <FaTrashCan />
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-50">
                        <td className="border-r px-6 py-4 font-medium border-neutral-50">
                          2
                        </td>
                        <td className="border-r px-6 py-4 border-neutral-50">
                          Farah Nabila
                        </td>
                        <td className="border-r px-6 py-4 border-neutral-50">
                          Paket Wisatanya sangat terjangkau
                        </td>
                        <td className="flex justify-center items-center gap-3 mt-3 px-3">
                          <button className="px-4 py-2 bg-[#FD3550] text-white rounded-lg">
                            <FaTrashCan />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-5 flex justify-end">
                    <nav aria-label="Page navigation example">
                      <ul className="inline-flex -space-x-px text-base h-10 gap-3">
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-neutral-50 rounded-lg"
                          >
                            <IoIosArrowBack />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight border border-neutral-50 rounded-lg"
                          >
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight border border-neutral-50 rounded-lg"
                          >
                            2
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight border border-neutral-50 rounded-lg"
                          >
                            3
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-neutral-50 rounded-lg"
                          >
                            <IoIosArrowForward />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KelolaKomentar;

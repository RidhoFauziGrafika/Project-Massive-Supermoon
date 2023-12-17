import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";

const FormKuliner = () => {
  return (
    <>
      <Navbar />
      <div className="font-productSans bg-[#F7F7FF] flex flex-row">
        <SidebarAdmin />
        <div className="w-full px-4 py-10 overflow-x-auto">
          <div className="w-full bg-neutral-10 rounded-lg mb-10 px-4 py-8">
            <div className="px-4 py-6">
              <div className="w-full">
                <div className="m-8">
                  <h6 className="lg:text-3xl text-xl font-bold tracking-tight text-gray-900">
                    Form Tambah Kuliner
                  </h6>
                </div>

                <div className="m-8">
                  <div className="my-5">
                    <h6 className="lg:text-lg text-sm tracking-tight text-gray-900">
                      Nama Kuliner
                    </h6>
                    <div className="relative flex items-center gap-2">
                      <input
                        type="text"
                        name="search"
                        placeholder="Nama Penginapan"
                        className="w-full border border-neutral-50 rounded-lg py-2 px-3"
                      />
                    </div>
                  </div>
                  <div className="my-5">
                    <h6 className="lg:text-lg text-sm tracking-tight text-gray-900">
                      Slug
                    </h6>
                    <div className="relative flex items-center gap-2">
                      <input
                        type="text"
                        name="search"
                        className="w-full border border-neutral-50 rounded-lg py-2 px-3"
                      />
                    </div>
                    <p className="lg:text-base text-sm text-neutral-60 mt-3">
                      Slug digunakan untuk akses artikel lewat url atau alamat
                      web, slug diatas tidak boleh sama dengan slug dari artikel
                      yang lain.
                    </p>
                  </div>
                  <div className="my-5">
                    <h6 className="lg:text-lg text-sm tracking-tight text-gray-900">
                      Tag (Perkemahan, Curug)
                    </h6>
                    <div className="relative flex items-center gap-2">
                      <input
                        type="text"
                        name="search"
                        className="w-full border border-neutral-50 rounded-lg py-2 px-3"
                      />
                    </div>
                  </div>
                  <div className="my-5">
                    <h6 className="lg:text-lg text-sm tracking-tight text-gray-900">
                      Link Google Maps
                    </h6>
                    <div className="relative flex items-center gap-2">
                      <input
                        type="text"
                        name="search"
                        className="w-full border border-neutral-50 rounded-lg py-2 px-3"
                      />
                    </div>
                  </div>
                  <div className="my-5">
                    <h6 className="lg:text-lg text-sm tracking-tight text-gray-900">
                      Harga
                    </h6>
                    <div className="relative flex items-center gap-2">
                      <input
                        type="text"
                        name="search"
                        className="w-full border border-neutral-50 rounded-lg py-2 px-3"
                      />
                    </div>
                  </div>
                  <div className="my-5">
                    <textarea
                      type="text"
                      name="search"
                      placeholder="Isi Artikel Paket Wisata"
                      autoComplete="off"
                      className="w-full border border-neutral-50 rounded-lg py-2 px-3"
                    />
                  </div>
                  <input
                    type="file"
                    className="block text-sm text-slate-500 file:mr-4 file:py-2
              file:px-4 rounded-xl file:border-0 file:text-sm file:font-semibold"
                  />
                </div>
                <div className="flex lg:flex-row flex-col justify-start m-8 gap-3">
                  <Link
                    to="/"
                    className="lg:px-4 px-2 py-2 lg:text-base text-sm rounded-lg text-center border-solid border-2 text-white bg-primary-main border-primary-main"
                  >
                    Publish
                  </Link>
                  <Link
                    to="/"
                    className="lg:px-4 px-2 py-2 lg:text-base text-sm rounded-lg text-center border-solid border-2 text-primary-main bg-primary-surface border-primary-main"
                  >
                    Batal
                  </Link>
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

export default FormKuliner;

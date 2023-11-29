import React, { useState } from "react";
import logo from "../../../assets/logo/KUNINGANTOUR_1.png";
import { BiSolidHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  return (
    <>
      <div>
        <div className="h-screen font-productSans">
          <div className="flex justify-center mt-10">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly">
            <div className="px-6 py-4">
              <div className="flex flex-col justify-center text-center lg:mt-5">
                <h2 className="text-5xl font-bold mb-3">Daftar Akun</h2>
                <p className="text-base mb-5">
                  Buat akun untuk mengakses semua fitur kami
                </p>
              </div>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="nama">Nama Lengkap</label>
                  <input
                    type="text"
                    className="block border border-neutral-60 rounded-lg w-full lg:w-[634px] px-2 py-2 mt-2"
                    placeholder="Masukkan Nama Anda"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="block border border-neutral-60 rounded-lg w-full lg:w-[634px] px-2 py-2 mt-2"
                    placeholder="Masukkan Email Anda"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Nomor Telepon">Nomor Telepon</label>
                  <input
                    type="text"
                    className="block border border-neutral-60 rounded-lg w-full lg:w-[634px] px-2 py-2 mt-2"
                    placeholder="Masukkan Nomor Anda"
                  />
                </div>
                <div className="relative mb-2">
                  <div className="flex flex-col mb-4">
                    <label htmlFor="password">Kata Sandi</label>
                    <div className="absolute py-10 end-2">
                      <label onClick={handleShowPassword}>
                        {showPassword ? (
                          <BiShow className="w-6 h-6 cursor-pointer" />
                        ) : (
                          <BiSolidHide className="w-6 h-6 cursor-pointer" />
                        )}
                      </label>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="block border border-neutral-60 rounded-lg w-full lg:w-[634px] px-2 py-2 mt-2"
                      placeholder="Masukkan Kata Sandi"
                    />
                    <a class="text-xs text-neutral-100 mt-2" href="#">
                      Kata sandi harus berisi huruf kapital & angka
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password">Konfirmasi Kata Sandi</label>
                    <div className="absolute py-10 end-2">
                      <label onClick={handleShowPasswordConfirm}>
                        {showPasswordConfirm ? (
                          <BiShow className="w-6 h-6 cursor-pointer" />
                        ) : (
                          <BiSolidHide className="w-6 h-6 cursor-pointer" />
                        )}
                      </label>
                    </div>
                    <input
                      type={showPasswordConfirm ? "text" : "password"}
                      className="block border border-neutral-60 rounded-lg w-full lg:w-[634px] px-2 py-2 mt-2"
                      placeholder="Masukkan Kata Sandi"
                    />
                  </div>
                  <div className="absolute flex start-0 mt-2 mb-4">
                    <div class="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="terms"
                        class="font-light text-gray-500 dark:text-gray-300"
                      >
                        <a class="text-sm text-neutral-100" href="#">
                          Dengan mendaftar, saya menyatakan telah membaca dan
                          menyetujui Syarat & Ketentuan serta Kebijakan Privasi
                          yang berlaku
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="py-10">
                  <button className="bg-primary-main rounded-lg w-full px-2 py-2 mt-5 text-neutral-10">
                    Daftar
                  </button>
                  <div>
                    <p className="text-center text-base">Atau</p>
                  </div>
                  <div className="relative">
                    <div className="absolute py-4 start-2">
                      <FcGoogle className="w-6 h-6" />
                    </div>
                    <button className="border border-primary-main rounded-lg w-full px-2 py-2 mt-2 text-primary-main">
                      Masuk Dengan Google
                    </button>
                  </div>
                  <a href="#" className="text-base flex justify-center mt-2">
                    Sudah punya akun?
                    <span className="text-primary-main font-bold">Masuk</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

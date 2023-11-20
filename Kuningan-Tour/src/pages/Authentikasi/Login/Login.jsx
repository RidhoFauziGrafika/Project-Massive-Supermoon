import React from "react";
import logo from "../../../assets/logo/KUNINGANTOUR_1.png";
import imgKuningan from "../../../assets/images/Login/kuningan.png";
import { BiSolidHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <div>
        <div className="h-screen font-productSans">
          <div className="flex justify-center mt-10">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly">
            <img
              src={imgKuningan}
              alt="Kuningan"
              className="w-[568px] h-[569px] mt-10 px-6 py-4"
            />
            <div className="px-6 py-4">
              <div className="flex flex-col justify-center lg:mt-20">
                <h3 className="text-5xl font-bold mb-5">Selamat Datang</h3>
                <p className="text-base mb-10">
                  Masukkan identitas anda untuk mengakses fitur{" "}
                </p>
              </div>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="block border border-neutral-60 rounded-lg w-full px-2 py-2 mt-2"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div className="relative mb-2">
                  <div className="flex flex-col">
                    <label htmlFor="password">Kata Sandi</label>
                    <div className="absolute py-10 end-2">
                      <BiSolidHide className="w-6 h-6" fill="#9E9E9E" />
                    </div>
                    <input
                      type="password"
                      className="block border border-neutral-60 rounded-lg w-full px-2 py-2 mt-2"
                      placeholder="Masukkan Kata Sandi"
                    />
                  </div>
                  <div className="absolute end-0">
                    <a href="#" className="text-base block">
                      Lupa Kata Sandi?
                    </a>
                  </div>
                </div>
                <div className="py-5">
                  <button className="bg-primary-main rounded-lg w-full px-2 py-2 mt-2 text-neutral-10">
                    Masuk
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
                    Belum punya akun?{" "}
                    <span className="text-primary-main font-bold">Daftar</span>
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

export default Login;

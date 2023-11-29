import React, { useState } from "react";
import logo from "../../../assets/logo/KUNINGANTOUR_1.png";
import imgKuningan from "../../../assets/images/Login/kuningan.png";
import { BiSolidHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="font-productSans flex h-screen justify-center">
        <div className="py-10">
          <img src={logo} alt="Logo" className="mx-auto py-10" />
          <div className="flex lg:flex-row flex-col gap-6">
            <div className="w-full">
              <img
                src={imgKuningan}
                alt="Kuningan"
                className="lg:block hidden"
              />
            </div>
            <div className="w-full px-6 py-6 gap-6">
              <div className="flex flex-col justify-center">
                <h3 className="lg:text-5xl text-2xl font-bold mb-3">
                  Selamat Datang
                </h3>
                <p className="lg:text-base text-sm mb-3">
                  Masukkan identitas anda untuk mengakses fitur
                </p>
              </div>
              <form>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="block border border-neutral-60 rounded-lg w-full px-2 py-2 mb-2"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div className="relative mb-2">
                  <div className="flex flex-col">
                    <label htmlFor="password">Kata Sandi</label>
                    <input
                      type={show ? "text" : "password"}
                      className="block border border-neutral-60 rounded-lg w-full px-2 py-2 mt-2"
                      placeholder="Masukkan Kata Sandi"
                    />
                    <div className="absolute py-10 end-2">
                      <label onClick={handleShow}>
                        {show ? (
                          <BiShow className="w-6 h-6 cursor-pointer" />
                        ) : (
                          <BiSolidHide className="w-6 h-6 cursor-pointer" />
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="absolute end-0">
                    <a href="#" className="text-base block">
                      Lupa Kata Sandi?
                    </a>
                  </div>
                </div>
                <div className="py-2">
                  <button className="bg-primary-main rounded-lg  w-full px-2 py-2 mt-4 text-neutral-10">
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
                  <Link
                    to="/register"
                    className="text-base flex justify-center mt-2"
                  >
                    Belum punya akun?{" "}
                    <span className="text-primary-main font-bold">Daftar</span>
                  </Link>
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

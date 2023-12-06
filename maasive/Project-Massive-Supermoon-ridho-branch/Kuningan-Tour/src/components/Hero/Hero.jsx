import React from "react";
import imgHero from "../../assets/images/Beranda/hero.png";

const Hero = () => {
  return (
    <>
      <section className="mt-10 font-productSans">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-15 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="text-5xl font-bold mb-4">
              Berwisata ke Kabupaten Kuningan Tanpa Ribet
            </h2>
            <p className="text-base mb-4">
              Beragam destinasi wisata memanjakan mata dengan pesona alam yang
              asri dan tanpa perlu khawatir untuk mencari penginapan yang sesuai
              budget anda.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center w-[165px] h-[40px] mr-3 text-base text-neutral-10 rounded-lg bg-primary-main"
            >
              Jelajahi Sekarang
            </a>
          </div>
          <div className="flex-col mt-10 lg:mt-0 lg:col-span-5 lg:flex">
            <img src={imgHero} alt="Kabupaten Kuningan" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

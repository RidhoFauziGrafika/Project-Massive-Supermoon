import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import bgAbout from "../../assets/images/TentangKami/bgtentangkami.png";
import data from "../../utils/constants/Carousel";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import tentangKami from "../../assets/images/TentangKami/tentangkami.png";
import logovisimisi from "../../assets/images/TentangKami/visimisilogo.png";
import imgmember1 from "../../assets/images/TentangKami/member/1.png";
import imgmember2 from "../../assets/images/TentangKami/member/2.png";
import imgmember3 from "../../assets/images/TentangKami/member/3.png";
import imgmember4 from "../../assets/images/TentangKami/member/4.png";
import imgmember5 from "../../assets/images/TentangKami/member/5.png";
import imgmember6 from "../../assets/images/TentangKami/member/6.png";
import imgmember7 from "../../assets/images/TentangKami/member/7.png";

const TentangKami = () => {
  const [carouselsImg, setCarouselsImg] = useState(data);
  return (
    <>
      <Navbar />
      <div className="font-productSans">
        <div className="w-full mb-10">
          <img
            className="top-0 left-0 w-full h-[640px] object-cover z-[999px]"
            src={bgAbout}
            alt="kuningan"
          />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-primary-surface">
            <div className="flex flex-col items-center gap-3 lg:px-32">
              <h1 className="text-5xl lg:text-[56px] text-center font-bold">
                Kabupaten Kuningan
              </h1>
              <p className="text-xl text-center">
                Kabupaten Kuningan menawarkan lanskap indah perbukitan dan sawah{" "}
                <br />
                hijau, didukung oleh situs sejarah dan kebudayaan, menjadikannya
                <br />
                destinasi unik wisata alam dan budaya di Jawa Barat.
              </p>
              <a
                href="#"
                className="px-6 py-2 bg-primary-main text-white rounded-full"
              >
                Pilih Paket
              </a>
            </div>
          </div>
        </div>
        <div className="w-full inline-flex flex-nowrap ]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-xl animate-infinite-scroll">
            {carouselsImg.map((carouselImg) => {
              return (
                <CardCarousel key={carouselImg.id} carouselImg={carouselImg} />
              );
            })}
          </ul>
        </div>
        <div className="py-14">
          <div className="flex flex-col lg:flex-row justify-around px-[72px]">
            <div>
              <h2 className="text-5xl font-bold mt-8 text-primary-main">
                Tentang Kami
              </h2>
              <p className="text-2xl mt-8 mb-8">
                Tim Supermoon, kreatif dan penuh semangat, merancang situs web
                destinasi wisata Kabupaten Kuningan. Fokus pada keindahan alam
                dan budaya, platform ini menyajikan informasi lengkap tentang
                perbukitan, sawah, dan situs sejarah. Dengan desain ramah
                pengguna, kami mengundang pengunjung untuk menjelajahi pesona
                unik Jawa Barat melalui pengalaman pariwisata yang menarik.
              </p>
            </div>
            <img src={tentangKami} alt="tentang kami" className="w-full" />
          </div>
        </div>
        <div className="px-24 py-12">
          <div className="flex flex-col lg:flex-row justify-around">
            <img
              src={logovisimisi}
              alt="visi misi logo"
              className="w-[400px] h-[400px]"
            />
            <div className="py-16">
              <div className="py-4">
                <h3 className="text-[40px] text-primary-main font-bold">
                  Visi
                </h3>
                <p className="text-2xl">
                  Menjadi sumber utama inspirasi bagi pengunjung yang ingin
                  mengeksplor keindahan alam, budaya, dan potensi pariwisata
                  Kabupaten Kuningan.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-[40px] text-primary-main font-bold">
                  Misi
                </h3>
                <ol className="list-decimal ml-3 text-2xl">
                  <li>
                    Memajukan pariwisata Kabupaten Kuningan dengan promosi yang
                    menarik perhatian.
                  </li>
                  <li>
                    Menyediakan informasi terpercaya untuk pengalaman wisata
                    luar biasa.
                  </li>
                  <li>
                    Menyediakan platform ramah pengguna untuk berbagi
                    pengalaman, rekomendasi, dan interaksi komunitas.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="px-24 py-[48px, 72px]">
          <div className="text-center">
            <h3 className="text-[40px] font-bold text-primary-main">
              Anggota Tim Supermoon
            </h3>
            <p className="text-2xl">
              Kami adalah tim berdedikasi yang terdiri dari individu-individu
              berbakat <br /> dan bersemangat. Mari kita kenali lebih dekat para
              anggota kami:
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex  py-8  justify-around">
              <div className="px-3 flex flex-col justify-center text-center">
                <img src={imgmember1} alt="Dini Fariha Profile" />
                <p>DINI FARIHA</p>
                <p>PROJECT MANAGER</p>
              </div>
              <div className="px-3 flex flex-col justify-center text-center">
                <img src={imgmember2} alt="Muharim Awaluddin Profile" />
                <p>MUHARIM AWALUDDIN</p>
                <p>HIPSTER</p>
              </div>
              <div className="px-3 flex flex-col justify-center text-center">
                <img src={imgmember3} alt="Ridho Fauzi Grafika Profile" />
                <p>RIDHO FAUZI GRAFIKA</p>
                <p>HACKER SCRUM MASTER</p>
              </div>
              <div className="px-3 flex flex-col justify-center text-center">
                <img src={imgmember4} alt="AHMAD THOMTHOMI Profile" />
                <p>AHMAD THOMTHOMI B</p>
                <p>HACKER</p>
              </div>
            </div>
            <div className="flex py-8 justify-around">
              <div className="px-3 flex flex-col justify-center text-center">
                <img src={imgmember5} alt="AHMAD FEBRIAN Profile" />
                <p>AHMAD FEBRIAN</p>
                <p>HIPSTER</p>
              </div>
              <div className="px-3 flex flex-col justify-center text-center">
                <img src={imgmember6} alt="AGUS ANANDA PUTRA Profile" />
                <p>AGUS ANANDA PUTRA</p>
                <p>HIPSTER</p>
              </div>
              <div className="px-3 flex flex-col justify-center text-center">
                <img src={imgmember7} alt="m.johan arifin Profile" />
                <p>M. JOHAN ARIFIN</p>
                <p>HACKER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TentangKami;

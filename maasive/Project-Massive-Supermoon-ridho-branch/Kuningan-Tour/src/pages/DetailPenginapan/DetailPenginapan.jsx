import React from "react";
import { FaStar } from "react-icons/fa6";
import { Navbar } from "../../components/Navbar/Navbar";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdOutlineRestaurant } from "react-icons/md";
import { TbMassage } from "react-icons/tb";
import Footer from "../../components/Footer/Footer";
import pictDetailp from "../../assets/images/DetailPenginapan/Hotel Grage sangkan.png";
import pictMapsp from "../../assets/images/DetailPenginapan/maps_hotel grage.png";
import iconStrangerp from "../../assets/images/DetailPenginapan/avatar_Stranger.png";
import iconPersonap from "../../assets/images/DetailPenginapan/avatar_Persona.png";

const DetailPenginapan = () => {
    return (
        <>
        <Navbar/>
                <div className="mx-[96px] my-[72px]">
                <img 
                    className="w-full max-h-[560px]" 
                    src={pictDetailp} 
                    alt="Grage Lanai Resto"/>
                <div className="flex gap-[40px] justify-between items-start border-b-[1px] border-neutral-40">
                    <div>
                        <div className="flex justify-between py-6 border-b-[1px] border-neutral-40">
                            <h2 className="text-[48px] font-bold text-primary-main">GRAGE SANGKAN HOTEL</h2>
                            <div className="flex flex-row gap-4 items-center">
                                <FaStar size={64} fill="#EE9C22"/>
                                <div className="flex flex-col items-center">
                                    <h4 className="font-bold text-[32px]">4.6</h4>
                                    <p className="text-[14px] text-neutral-70">1k reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-start gap-[48px] justify-start py-6 border-b-[1px] border-neutral-40">
                            <div className="flex gap-2 items-center">
                                <FaWifi size={56} fill="#404040" />
                                <p className="text-4">Wifi</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdOutlinePool size={56} fill="#404040"/>
                                <p className="text-4">Kolam Renang</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaParking size={56} fill="#404040" />
                                <p className="text-4">Parkiran</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <TbMassage size={56} fill="#404040"/>
                                <p className="text-4">Spa</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdOutlineRestaurant size={56} fill="#404040" />
                                <p className="text-4">Restoran</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <HiOfficeBuilding size={56} fill="#404040" />
                                <p className="text-4">Aula</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 py-6 border-b-[1px] border-neutral-40">
                            <h3 className="text-[40px] font-bold text-primary-main">Deskripsi</h3>
                            <p>Hotel Grage Sangkan, yang berlokasi di Kota Kuningan, merupakan akomodasi berbintang tiga yang menonjol dengan fasilitas yang luar biasa dan layanan yang ramah dan baik. Tidak hanya menyediakan kemudahan untuk menjelajahi destinasi petualangan, tetapi menginap di Hotel Grage Sangkan juga memberikan kenyamanan istirahat yang optimal.</p>
                        </div>
                        <div className="flex flex-col gap-2 py-6">
                            <h3 className="text-[40px] font-bold text-primary-main">Harga & Jam Operasional</h3>
                            <ul className="list-disc">
                                <li>Rp. 725.000 / Malam</li>
                                <li>Resepsionis siap 24 jam untuk melayani proses check-in, check-out.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col min-w-[400px] gap-4 py-6">
                        <img className="" src={pictMapsp} alt="maps resto grage lanai" />
                        <p>Jl. Raya Sangkanhurip No. 1 Kuningan , Cilimus, Kuningan, Jawa Barat, Indonesia, 45556</p>
                        <a className="text-neutral-80" href="#">Lihat Maps</a>
                    </div>
                </div>
                <div className="flex flex-col gap-[24px] pt-6">
                    <h3 className="text-[40px] font-bold text-primary-main">Komentar</h3>
                    <div className="flex gap-[24px] justify-between items-start">
                        <div className="flex flex-col gap-4 p-4 rounded-[8px] max-w-[608px] shadow-md">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img className="" src={iconStrangerp} alt="icon" />
                                    <div className="flex flex-col">
                                        <p className="font-bold">Salsabila Abadi</p>
                                        <p className="text-[14px]">Agustus 2023</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 px-4 py-2 bg-primary-border justify-center items-center rounded-[8px] w-fit h-fit outline outline-primary-main">
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                    <FaStar size={16} fill="#ffffff"/>
                                </div>
                            </div>
                            <p>Kamar yang saya tempati sangat bersih dan nyaman. Desain interior modern dan perabotan yang elegan menciptakan atmosfer yang menyenangkan. Kasur yang empuk memberikan kualitas tidur yang baik, dan kamar mandi dilengkapi dengan perlengkapan yang lengkap.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-4 rounded-[8px] max-w-[608px] shadow-md">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img className="" src={iconStrangerp} alt="icon" />
                                    <div className="flex flex-col">
                                        <p className="font-bold">Farah Nabila</p>
                                        <p className="text-[14px]">Oktober 2023</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 px-4 py-2 bg-primary-border justify-center items-center rounded-[8px] w-fit h-fit outline outline-primary-main">
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                    <FaStar size={16} fill="rgb(20,155,118)"/>
                                </div>
                            </div>
                            <p>Secara keseluruhan, saya merekomendasikan Hotel ini untuk para wisatawan yang mencari pengalaman menginap yang menyenangkan dan layanan yang berkualitas. Saya pasti akan kembali menginap di sini pada kunjungan berikutnya.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4 rounded-[8px] shadow-md">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img className="" src={iconPersonap} alt="icon" />
                                    <p className="font-bold text-[18px]">Arin</p>
                                </div>
                            </div>
                            <input 
                            type="text"
                            className="block border border-neutral-60 rounded-lg w-full px-2 py-2 mt-2"
                            placeholder="Masukan Ulasan" />
                            <div className="flex justify-between items-end">
                                <div className="flex flex-col gap-2 items-start">
                                    <p className="font-bold">Beri Bintang</p>
                                    <div className="flex gap-1 px-4 py-2 bg-primary-border justify-center items-center rounded-[8px] w-fit h-fit outline outline-primary-main">
                                        <FaStar className="cursor-pointer" size={24} fill="#ffffff"/>
                                        <FaStar className="cursor-pointer" size={24} fill="#ffffff"/>
                                        <FaStar className="cursor-pointer" size={24} fill="#ffffff"/>
                                        <FaStar className="cursor-pointer" size={24} fill="#ffffff"/>
                                        <FaStar className="cursor-pointer" size={24} fill="#ffffff"/>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <a className="px-4 py-2 text-[20px] font-bold text-primary-main border-[1px] border-primary-main rounded-[8px] bg-primary-surface hover:bg-primary-main hover:text-neutral-10" href="#">Batal</a>
                                    <a className="px-4 py-2 text-[20px] font-bold text-neutral-10 rounded-[8px] bg-primary-main hover:bg-primary-hover" href="#">Kirim</a>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
    );
};

export default DetailPenginapan;
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Navbar } from "../../components/Navbar/Navbar";
import { FaWifi } from "react-icons/fa";
import { MdMosque } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import pictDetail from "../../assets/images/DetailKuliner/Grage lanai Resto.png";
import pictMaps from "../../assets/images/DetailKuliner/maps_grage lanai.png";
import iconStranger from "../../assets/images/DetailKuliner/avatar_Stanger.png";
import iconPersona from "../../assets/images/DetailKuliner/avatar_Persona.png";

const DetailKuliner = () => {
    return (
        <>
        <Navbar/>
        <div className="mx-[96px] my-[72px]">
                <img 
                    className="w-full max-h-[560px]" 
                    src={pictDetail} 
                    alt="Grage Lanai Resto"/>
                <div className="flex gap-[40px] justify-between items-start border-b-[1px] border-neutral-40">
                    <div>
                        <div className="flex justify-between py-6 border-b-[1px] border-neutral-40">
                            <h2 className="text-[48px] font-bold text-primary-main">GRAGE LANAI RESTO</h2>
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
                                <MdMosque size={56} fill="#404040" />
                                <p className="text-4">Musala</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaParking size={56} fill="#404040" />
                                <p className="text-4">Parkiran</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 py-6 border-b-[1px] border-neutral-40">
                            <h3 className="text-[40px] font-bold text-primary-main">Deskripsi</h3>
                            <p>Grage Lanai Resto merupakan restoran sunda yang berada di kabupaten kuningan dengan menghidangkan berbagai masakan sunda. Dengan menyediakan menu paket serta tempat tersebut dapat disewa untuk acara ulang tahun serta pernikahan.</p>
                        </div>
                        <div className="flex flex-col gap-2 py-6">
                            <h3 className="text-[40px] font-bold text-primary-main">Harga & Jam Operasional</h3>
                            <ul className="list-disc">
                                <li>Jam Operasional 10.00 WIB - 22.00 WIB</li>
                                <li>Harga Menu Sop <br />Untuk bisa menikmati menu sop yang disajikan di grage lanai resto, dimulai dengan harga Rp. 10.000- Rp.72.000.</li>
                                <li>Harga Menu Seafood <br />Untuk harga menu seafood yang disajikan oleh grage lanai resto di bandrol sekitar Rp. 68.750 - an.</li>
                                <li>Harga Menu Nasi <br />Untuk menu nasi di grage lanai resto cukup dengan menyiapkan uang sekitar Rp. 10.000 -an saja.</li>
                                <li>Harga untuk Gurame <br />Harga untuk menu ini juga cukup ekonomis, karena berkisar dari Rp.19.000 - Rp. 25.000 saja kita bisa menikmati menu gurame yang ada di Grage Lanai Resto,Sangkanhurip.</li>
                                <li>Harga Menu Karuhun <br />Untuk menu karuhun ini juga ekonomis, karena kita cukup menyiapkan sekitar Rp.28.000 - an saja sudah bisa menyantap menu ini di Grage Lanai Resto,Sangkanhurip.</li>
                                <li>Harga Menu Light Food <br />Kita dapat menyantap menu yang tersedia di light food dengan harga Rp. 24.00 - an saja.</li>
                                <li>Harga Aneka Iga <br />Untuk harga aneka iga ini sendiri berkisar Rp.90.000-an saja.</li>
                                <li>Harga Minuman <br />Harga minuman yang ada di Grage Lanai Resto dimulai dari Rp.19.000 - Rp.39.000.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex min-w-[400px] flex-col gap-4 py-6">
                        <img className="" src={pictMaps} alt="maps resto grage lanai" />
                        <p>Jl. Raya Sangkanurip No.1, Panawuan, Kec. Cilimus, Kabupaten Kuningan, Jawa Barat 45556</p>
                        <a className="text-neutral-80" href="#">Lihat Maps</a>
                    </div>
                </div>
                <div className="flex flex-col gap-[24px] pt-6">
                    <h3 className="text-[40px] font-bold text-primary-main">Komentar</h3>
                    <div className="flex gap-[24px] justify-between items-start">
                        <div className="flex flex-col gap-4 p-4 rounded-[8px] max-w-[608px] shadow-md">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img className="" src={iconStranger} alt="icon" />
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
                            <p>Restoran ini menyuguhkan pengalaman kuliner yang luar biasa. Dari dekorasi yang menawan hingga menu yang beragam, semuanya menciptakan atmosfer yang menyenangkan. Pelayanan sangat ramah dan profesional, membuat pengunjung merasa dihargai.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-4 rounded-[8px] max-w-[608px] shadow-md">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img className="" src={iconStranger} alt="icon" />
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
                            <p>Hidangan yang kami pesan memiliki cita rasa yang lezat dan segar. Chef restoran ini benar-benar menghadirkan keunikan dalam setiap sajian. Harga sesuai dengan kualitas dan pengalaman yang diberikan. Suasana tenang dan bersih membuat makan malam kami menjadi sempurna. Sangat direkomendasikan untuk mereka yang mencari kombinasi sempurna antara rasa, suasana, dan pelayanan.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4 rounded-[8px] shadow-md">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img className="" src={iconPersona} alt="icon" />
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

export default DetailKuliner;
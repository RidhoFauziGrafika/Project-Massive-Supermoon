import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import axios from "axios";
import FacilityList from "../../../../components/Facility/FacilityList";
import data from "../../../../utils/constants/PackageTours";
import AllPaketWisata from "../../../../components/AllPaketWisata/AllPaketWisata";
import { ROLES } from "../../../../constants";
import useAuth from "../../../../hooks/useAuth";
// FROM OLD
// import data from "../../../../utils/constants/Data";
import imgLokasi from "../../../../assets/images/DetailWisata/DetailWisata-1/lokasi.png";
import imgAvatar from "../../../../assets/images/DetailWisata/DetailWisata-1/avatar.png";
import imgProfile from "../../../../assets/images/DetailWisata/DetailWisata-1/profile.png";
import {
  FaToilet,
  FaParking,
  FaBuilding,
  FaSwimmingPool,
  FaCampground,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdMosque } from "react-icons/md";
import { GiFlyingFox } from "react-icons/gi";
import CardKuliner from "../../../../components//CardKuliner/CardKuliner";
import dataFood from "../../../../utils/constants/Kuliner";
import dataLodge from "../../../../utils/constants/Penginapan";
import CardPenginapan from "../../../../components/CardPenginapan/CardPenginapan";

const DetilPenginapan = () => {
  // FROM OLD
  const [culinars, setCulinars] = useState(dataFood);
  const [lodges, setLodges] = useState(dataLodge);
  const [TOURS, SETTOURS] = useState(data);
  // const [packageTours, setPackageTours] = useState(data);
  const { auth, setAuth } = useAuth();
  const ADMIN = auth.roles.includes(ROLES.ADMIN);
  const CLIENT = auth.roles.includes(ROLES.CLIENT);
  const [tour, setTour] = useState({});
  const [facilities, setFacilities] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [images, setImages] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/tours/slug/${slug}`
        );

        const data = response.data.data;
        console.log("data", data);

        // Update state with the fetched data
        setTour(data);
        setImages(data.images ?? []);
        setFacilities(data.facilities ?? []);
        setReviews(data.reviews ?? []);
      } catch (error) {
        console.error(error);
      }
    };

    // Immediately invoke the fetchData function
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="font-productSans">
        <div className="lg:px-16 px-4 flex flex-col gap-8 py-6 lg:py-24">
          <div className="grid grid-flow-col grid-rows-2 gap-3">
            <img
              src={`http://localhost:8000${images[0]?.img_path}`}
              alt={""}
              className="w-full rounded-lg object-cover row-span-2 h-full"
            />
            <img
              src={`http://localhost:8000${images[1]?.img_path}`}
              alt={""}
              className="w-full rounded-lg object-cover"
            />
            <img
              src={`http://localhost:8000${images[2]?.img_path}`}
              className="w-full rounded-lg object-cover"
            />
            <img
              src={`http://localhost:8000${images[3]?.img_path}`}
              className="w-full rounded-lg object-cover row-span-2 h-full"
            />
          </div>
          <div className="flex lg:flex-row gap-8 flex-col">
            <div className="flex flex-col gap-8 flex-[2_2_0%] ">
              <div className="flex flex-col gap-6 col-span-2 ">
                <div className="flex lg:flex-row flex-col justify-between gap-8">
                  <h2 className="text-primary-main uppercase font-bold lg:text-[48px] text-2xl">
                    {tour.title ?? "JUDUL"}
                  </h2>
                  <div className="flex gap-3 justify-start items-center">
                    <FaStar fill="#EE9C22" className="w-[50px] h-[53px]" />
                    <div>
                      <h4 className="lg:text-[32px] text-[16px]  font-bold">
                        {/* {tour.average_rating ?? 0} reviews */}
                      </h4>
                      <p className="text-neutral-60 lg:text-base text-sm">
                        {tour.reviews.length ?? 0} reviews
                      </p>
                    </div>
                  </div>
                </div>
                {/* FACILITY */}
                <div className="grid lg:grid-cols-4 grid-cols-2"></div>
                {/* END FACILITY */}
              </div>
              <div className="flex flex-col gap-8 col-span-2">
                <h3 className="lg:text-[40px] font-bold text-primary-main text-[20px]">
                  Deskripsi
                </h3>
                {/* DESCRP */}
                <p className="lg:text-base text-sm">{tour.description}</p>
              </div>
              <div className="flex flex-col gap-8 col-span-2">
                <h3 className="lg:text-[40px] font-bold text-primary-main text-[20px]">
                  Tiket & Jam Operasional
                </h3>
                <ul className="list-disc px-5 lg:text-base text-sm">
                  {/* TICKET OPERASIONAL */}
                  <li>
                    {tour.ticket_operasional ?? "HARGA DAN JAM OPERASIONAL"}
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col gap-[20px] flex-1">
              <img src={imgLokasi} alt="" />
              {/* LOCATION DETAIL */}
              <p className="lg:text-base text-sm">{tour.address ?? "ALAMAT"}</p>
              {/* LOCATION LINK */}
              <a
                href={`${tour.address_link}`}
                target="_blank"
                className="text-neutral-60 lg:text-base text-sm"
              >
                Lihat Maps
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {/* COMMENT */}
            <h3 className="lg:text-[40px] font-bold text-primary-main text[20px]">
              Komentar
            </h3>
            <div className="py-1 grid lg:grid-cols-2 grid-cols-1 gap-3">
              <div className="flex flex-col w-full shadow-md rounded-lg p-3 gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={imgAvatar} alt="profile" />
                    <div>
                      <p className="lg:text-base text-sm font-bold">
                        {TOURS[0].komentar[0].nama}
                      </p>
                      <p className="lg:text-sm text-xs">
                        {TOURS[0].komentar[0].waktu}
                      </p>
                    </div>
                  </div>
                  <div className="h-fit px-4 py-2 bg-primary-surface rounded-lg flex justify-center items-center gap-1">
                    <FaStar fill="#149B76" />
                    <FaStar fill="#149B76" />
                    <FaStar fill="#149B76" />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="lg:text-base text-sm px-[10px] line-clamp-3">
                  {TOURS[0].komentar[0].description}
                </p>
              </div>
              <div className="flex flex-col w-full shadow-md rounded-lg p-3 gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={imgAvatar} alt="profile" />
                    <div>
                      <p className="lg:text-base text-sm font-bold">
                        {TOURS[0].komentar[0].nama}
                      </p>
                      <p className="lg:text-sm text-xs">
                        {TOURS[0].komentar[0].waktu}
                      </p>
                    </div>
                  </div>
                  <div className="h-fit px-4 py-2 bg-primary-surface rounded-lg flex justify-center items-center gap-1">
                    <FaStar fill="#149B76" />
                    <FaStar fill="#149B76" />
                    <FaStar fill="#149B76" />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="lg:text-base text-sm px-[10px] line-clamp-3">
                  {TOURS[0].komentar[0].description}
                </p>
              </div>
            </div>
            <div className="py-1 grid lg:grid-cols-1 gap-3">
              <div className="w-full shadow-md rounded-lg p-3 gap-3">
                <div className="flex items-center gap-3 py-3">
                  <img src={imgProfile} alt="" />
                  <p className="font-bold">Arin</p>
                </div>
                <input
                  type="text"
                  className="w-full border border-neutral-50 rounded-md px-2 py-3"
                />
                <div className="py-3">
                  <div className="w-36 px-4 py-2 bg-primary-surface rounded-lg flex justify-start items-center gap-3">
                    <FaStar className="hover:fill-primary-main" />
                    <FaStar className="hover:fill-primary-main" />
                    <FaStar className="hover:fill-primary-main" />
                    <FaStar className="hover:fill-primary-main" />
                    <FaStar className="hover:fill-primary-main" />
                  </div>
                </div>
                <div className="py-3">
                  <div className="flex gap-3 justify-end">
                    <button className="px-4 py-2 border bg-primary-surface text-primary-main rounded-lg">
                      Batal
                    </button>
                    <button className="px-4 py-2 bg-primary-main text-white rounded-lg">
                      Kirim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[40px] font-bold text-primary-main">
              Rekomendasi Penginapan
            </h3>
            <div className="flex flex-col lg:flex-row justify-between mt-10 items-center">
              {lodges.map((lodge) => (
                <CardPenginapan key={lodge.id} lodge={lodge} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[40px] font-bold text-primary-main">
              Rekomendasi Kuliner
            </h3>
            <div className="flex flex-col lg:flex-row justify-between mt-10 items-center">
              {culinars.map((culinar) => (
                <CardKuliner key={culinar.id} culinar={culinar} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetilPenginapan;

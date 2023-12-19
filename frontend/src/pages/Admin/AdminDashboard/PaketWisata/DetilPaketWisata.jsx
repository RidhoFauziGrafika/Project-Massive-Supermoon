import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa";
import { MdMuseum } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { FaLandmarkFlag } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { GiChickenOven } from "react-icons/gi";
import { GiSadCrab } from "react-icons/gi";
import { FaGlassWater } from "react-icons/fa6";
import { MdHotel } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { GiHotSurface } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import axios from "axios";
import FacilityList from "../../../../components/Facility/FacilityList";
import data from "../../../../utils/constants/PackageTours";
import AllPaketWisata from "../../../../components/AllPaketWisata/AllPaketWisata";

const DetailPaketWisata = () => {
  // const [packageTours, setPackageTours] = useState(data);
  const [tourPacket, setTourPacket] = useState({});
  const [tourFacilities, setTourFacilities] = useState([]);
  const [culinaryFacilities, setCulinaryFacilities] = useState([]);
  const [lodgingFacilities, setLodgingFacilities] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [images, setImages] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/tour-packets/slug/${slug}`
        );

        const data = response.data.data;
        console.log("data", data);

        // Update state with the fetched data
        setTourPacket(data.tour_packet);
        setImages(data.tour_images);
        setTourFacilities(data.tour_facilities);
        setCulinaryFacilities(data.culinary_facilities);
        setLodgingFacilities(data.lodging_facilities);
        setReviews(data.reviews);

        console.log("Paket", tourPacket);
        console.log("gambar", images);
        console.log("wisata fasilitas", tourFacilities);
        console.log("kuliner fasilitas", culinaryFacilities);
        console.log("penginapan fasilitas", lodgingFacilities);
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
              alt="Image-1"
              className="w-full rounded-lg object-cover row-span-2 h-full"
            />
            <img
              src={`http://localhost:8000${images[1]?.img_path}`}
              alt="Image-2"
              className="w-full rounded-lg object-cover"
            />
            <img
              src={`http://localhost:8000${images[2]?.img_path}`}
              alt="Image-3"
              className="w-full rounded-lg object-cover"
            />
            <img
              src={`http://localhost:8000${images[3]?.img_path}`}
              alt="Image-4"
              className="w-full rounded-lg object-cover row-span-2 h-full"
            />
          </div>
          <div className="flex lg:flex-row gap-8 flex-col">
            <div className="flex flex-col gap-8 flex-[2_2_0%]">
              <div className="flex flex-col gap-6 col-span-2">
                <div className="flex lg:flex-row flex-col justify-between gap-8">
                  <h2 className="text-primary-main uppercase font-bold lg:text-[48px] text-2xl">
                    {tourPacket.title ?? ""}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-8 col-span-2">
                <p className="lg:text-base text-sm">{"Deskripsi"}</p>
              </div>
              <div className="flex flex-col gap-8 col-span-2">
                <h3 className="lg:text-[40px] font-bold text-primary-main text-[20px]">
                  Wisata
                </h3>
                <p>{tourPacket.tour_description ?? ""}</p>
                <a
                  href={tourPacket.tour_link ?? ""}
                  target="_blank"
                  className="text-neutral-60"
                >
                  Lihat Maps
                </a>
                <div className="flex flex-col lg:flex-row gap-32">
                  <FacilityList facilities={tourFacilities ?? ""} />
                </div>
              </div>
              <div className="flex flex-col gap-8 col-span-2">
                <h3 className="lg:text-[40px] font-bold text-primary-main text-[20px]">
                  Kuliner
                </h3>
                <p>{tourPacket.culinary_description ?? null}</p>
                <a
                  href={tourPacket.culinary_link ?? ""}
                  target="_blank"
                  className="text-neutral-60"
                >
                  Lihat Maps
                </a>
                <div className="flex flex-col lg:flex-row gap-32">
                  {/* GANTI DENGAN KOMPONEN FASILITAS */}
                  <FacilityList facilities={culinaryFacilities ?? null} />
                </div>
              </div>
              <div className="flex flex-col gap-8 col-span-2">
                <h3 className="lg:text-[40px] font-bold text-primary-main text-[20px]">
                  Penginapan
                </h3>
                <p>{tourPacket.lodging_description ?? null}</p>
                <a
                  href={tourPacket.lodging_description ?? ""}
                  target="_blank"
                  className="text-neutral-60"
                >
                  Lihat Maps
                </a>
                <div className="flex flex-col lg:flex-row gap-32">
                  {/* GANTI DENGAN KOMPONEN FASILITAS */}
                  <FacilityList facilities={lodgingFacilities ?? null} />
                </div>
              </div>
            </div>
            {/* rating and checkout */}
            <div className=" flex flex-col gap-6  flex-1">
              <div className="flex gap-3">
                <FaStar fill="#EE9C22" className="w-[50px] h-[53px]" />
                <div>
                  <h4 className="lg:text-[32px] text-[16px]  font-bold">
                    {Number(tourPacket.average_rating) ?? 0}
                  </h4>
                  <p className="text-neutral-60 lg:text-base text-sm">
                    {reviews.length ?? 0} reviews
                  </p>
                  {/* <p className="text-neutral-60">{}</p> */}
                  <h5 className="font-bold lg:text-2xl text-xl">
                    Rp. {Number(tourPacket.price) ?? 0}
                  </h5>
                </div>
              </div>
              <Link
                to={`/paket-wisata/beli/${tourPacket.id}`}
                className="w-full text-center py-2 bg-primary-surface border-2 rounded-lg border-primary-main"
              >
                Beli
              </Link>
            </div>
            {/* komentar */}
            {/* <div className="text-center py-6">
              <h3 className="lg:text-[40px] text-2xl mb-3 font-bold">
                Paket Wisata
              </h3>
              <p className="text-neutral-100 lg:text-base text-sm">
                "Jadikan setiap momen tak terlupakan dengan paket wisata kami
                yang dirancang khusus untuk memberikan pengalaman <br /> wisata
                yang istimewa dan memenuhi semua harapan Anda."
              </p>
            </div>
            <div>
              <div className="flex flex-wrap justify-evenly gap-7">
                {packageTours.map((packageTour) => (
                  <AllPaketWisata
                    key={packageTour.id}
                    packageTour={packageTour}
                  />
                ))}
              </div>
            </div> */}

            {/* <h3 className="lg:text-[40px] font-bold text-primary-main text[20px]">
              Komentar
            </h3>
            <div className="py-1 grid lg:grid-cols-2 grid-cols-1 gap-3">
              <div className="flex flex-col w-full shadow-md rounded-lg p-3 gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={``} alt="profile" />
                    <div>
                      <p className="lg:text-base text-sm font-bold">{`NAMA`}</p>
                      <p className="lg:text-sm text-xs">{`NAMA`}</p>
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
                  {`NULL`}
                </p>
              </div>
              <div className="flex flex-col w-full shadow-md rounded-lg p-3 gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={``} alt="profile" />
                    <div>
                      <p className="lg:text-base text-sm font-bold">{`NULL`}</p>
                      <p className="lg:text-sm text-xs">{`NULL`}</p>
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
                  {`NULL`}
                </p>
              </div>
            </div>
            <div className="py-1 grid lg:grid-cols-1 gap-3">
              <div className="w-full shadow-md rounded-lg p-3 gap-3">
                <div className="flex items-center gap-3 py-3">
                  <img src={`NULL`} alt="" />
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
            </div> */}
            {/* end komentar */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPaketWisata;

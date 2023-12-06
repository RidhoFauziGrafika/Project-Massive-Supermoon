import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import data from "../../utils/constants/PackageTours";
import AllPaketWisata from "../../components/AllPaketWisata/AllPaketWisata";

const PaketWisata = () => {
  const [packageTours, setPackageTours] = useState(data);
  return (
    <>
      <Navbar />
      <div className="font-productSans py-6">
        <div className=" flex justify-center mt-10">
          <div className="flex rounded-full bg-primary-surface w-[544px] h-[60px]">
            <div className="text-center bg-primary-surface text-primary-main w-full rounded-full flex justify-center">
              <a href="#" className="flex items-center">
                Wisata
              </a>
            </div>
            <div className="bg-primary-main text-white w-full rounded-full flex justify-center">
              <a href="#" className="flex items-center">
                Paket Wisata
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-6">
            <h3 className="text-[40px] font-bold">Paket Wisata</h3>
            <p className="text-neutral-100">
              "Jadikan setiap momen tak terlupakan dengan paket wisata kami yang
              dirancang khusus untuk memberikan pengalaman <br /> wisata yang
              istimewa dan memenuhi semua harapan Anda."
            </p>
          </div>
          <div>
            <div className="flex flex-wrap justify-evenly gap-10">
              {packageTours.map((packageTour) => (
                <AllPaketWisata
                  key={packageTour.id}
                  packageTour={packageTour}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaketWisata;

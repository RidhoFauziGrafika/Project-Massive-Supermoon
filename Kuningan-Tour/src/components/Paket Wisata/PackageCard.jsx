import React, { useState } from "react";
import data from "../../utils/constants/PackageTours";
import CardPackage from "../CardPackage/CardPackage";
import { Link } from "react-router-dom";

const PackageCard = () => {
  const [packageTours, setPackageTours] = useState(data);
  return (
    <>
      <div className="py-6 font-productSans">
        <h3 className="lg:text-[40px] text-2xl font-bold flex items-center justify-center">
          Paket Wisata
        </h3>
        <div className="flex flex-col lg:flex-row justify-evenly mt-10 items-center">
          {packageTours
            .filter((packageTour) => packageTour.rating >= 4.5)
            .map((filteredPackegeTour) => (
              <CardPackage
                key={filteredPackegeTour.id}
                filteredPackegeTour={filteredPackegeTour}
              />
            ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <Link
            to="/paketWisata"
            className="px-4 py-2 gap-1 bg-primary-main rounded-lg text-xl text-neutral-10  flex items-center justify-center"
          >
            Tampilkan Lebih Banyak
          </Link>
        </div>
      </div>
    </>
  );
};

export default PackageCard;

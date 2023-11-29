import React, { useState } from "react";
import Card from "../Card/Card";
import data from "../../utils/constants/Data";
import { Link } from "react-router-dom";

const WisataCard = () => {
  const [tours, setTours] = useState(data);
  return (
    <>
      <div className="py-6 font-productSans">
        <h3 className="lg:text-[40px] text-2xl font-bold flex items-center justify-center">
          Wisata Yang Tersedia
        </h3>
        <div className="flex flex-col lg:flex-row justify-evenly mt-10 items-center">
          {tours
            .filter((tour) => tour.rating > 4.5)
            .map((filteredtour) => (
              <Card key={filteredtour.id} filteredtour={filteredtour} />
            ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <Link
            to="/wisata"
            className="px-4 py-2 gap-1 bg-primary-main rounded-lg text-xl text-neutral-10  flex items-center justify-center"
          >
            Tampilkan Lebih Banyak
          </Link>
        </div>
      </div>
    </>
  );
};

export default WisataCard;

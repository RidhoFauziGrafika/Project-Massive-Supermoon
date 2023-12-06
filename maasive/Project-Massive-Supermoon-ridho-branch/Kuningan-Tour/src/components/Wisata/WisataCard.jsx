import React, { useState } from "react";
import Card from "../Card/Card";
import data from "../../utils/constants/Data";

const WisataCard = () => {
  const [tours, setTours] = useState(data);
  return (
    <>
      <div className="mb-10">
        <h3 className="text-[40px] font-bold flex items-center justify-center">
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
          <a
            href="#"
            className="w-[260px] h-[44px] bg-primary-main rounded-lg text-xl text-neutral-10  flex items-center justify-center"
          >
            Tampilkan Lebih Banyak
          </a>
        </div>
      </div>
    </>
  );
};

export default WisataCard;

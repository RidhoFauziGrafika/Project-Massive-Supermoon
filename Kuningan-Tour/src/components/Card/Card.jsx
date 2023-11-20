import React from "react";
import { BsStarFill } from "react-icons/bs";

const Card = ({ filteredtour }) => {
  return (
    <>
      <div className="p-4 font-productSans">
        <div className="w-[328px] bg-neutral-card rounded-lg drop-shadow-xl">
          <img
            className="rounded-t-lg"
            src={filteredtour.image_card}
            alt="image"
          />
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {filteredtour.title}
            </h5>
            <div className="flex flex-row gap-2">
              <a className="text-primary-pressed">
                {filteredtour.category[0].category1}
              </a>
              <a className="text-primary-pressed">
                {filteredtour.category[1].category2}
              </a>
              <a className="text-primary-pressed">
                {filteredtour.category[2].category3}
              </a>
            </div>
            <div className="flex flex-row justify-between p-3">
              <div className="flex flex-row">
                <BsStarFill className="w-10 h-10" fill="#EE9C22" />
                <div className="ml-4">
                  <p className="text-sm font-bold">{filteredtour.rating}</p>
                  <p className="text-sm">{filteredtour.review}</p>
                </div>
              </div>
              <a className="inline-flex items-center px-4 py-2 text-[16px]  text-center text-primary-main border-solid border-2 border-primary-main bg-primary-surface rounded-lg">
                Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

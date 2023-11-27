import React from "react";
import Wisata from "../../assets/cibulan.jpg";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <>
      <div className="px-4">
        <div className="w-[328px] bg-neutral-card rounded-lg drop-shadow-xl">
          <a href="#">
            <img className="rounded-t-lg h-48 w-96" src={Wisata} alt="image" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Lorem ipsum dolor sit amet.
            </h5>
            <h5 className="mb-2 tracking-tight text-gray-900">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.com
            </h5>
            <div className="flex justify-end p-3">
              <Link to="/order" className="px-4 py-2 text-[16px]  text-center text-primary-main border-solid border-2 border-primary-main bg-primary-surface rounded-lg">
                Detail Order
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProfileCard;

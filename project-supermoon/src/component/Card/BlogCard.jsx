import React from "react";
import Wisata from "../../assets/cibulan.jpg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const BlogCard = () => {
  return (
    <>
      <div className="p-2">
        <div className="w-[328px] bg-neutral-card rounded-lg drop-shadow-xl">
          <a href="#">
            <img className="rounded-lg h-44 w-96" src={Wisata} alt="image" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Lorem ipsum dolor sit amet.
            </h5>
            <div className="flex justify-end p-3">
              <Link to="/detail" className="px-4 py-2 text-[16px]  text-center text-primary-main border-solid border-2 border-primary-main bg-primary-surface rounded-lg">
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

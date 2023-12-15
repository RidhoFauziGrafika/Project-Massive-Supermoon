import React, { useState } from "react";
import AuthNavbar from "../../components/Navbar/AuthNavbar";
import Footer from "../../components/Footer/Footer";
import Wisata from "../../assets/images/Blog/img-1.png";
import CardBlog from "../../components/CardBlog/CardBlog";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import data from "../../utils/constants/Blog";

const Blog = () => {
  const [blogs, setBlogs] = useState(data);
  return (
    <>
      <Navbar />
      <div className="px-24 font-productSans">
        <h3 className="py-9 lg:text-5xl text-xl font-bold">
          Gunung Ciremai: Keindahan Alam dan Peninggalan Sejarah yang
          Mengagumkan
        </h3>
        <img
          className="w-full h-full rounded-lg items-center"
          src={Wisata}
          alt="image"
        />
        <p className="py-5 lg:text-xl text-base tracking-tight text-gray-900">
          Kuningan, 10 November 2023 - Gunung Ciremai, dengan ketinggian 3.078
          meter di atas permukaan laut, terletak megah di perbatasan Provinsi
          Jawa Barat dan Jawa Tengah. Dikenal sebagai titik tertinggi di Jawa
          Barat, gunung ini menawarkan keindahan alam yang memesona dan
          merupakan daya tarik utama bagi para pendaki dan penggemar alam.
          Dengan puncaknya yang menghadap ke Samudera Hindia, Gunung Ciremai
          menyajikan pemandangan matahari terbit yang spektakuler.
        </p>
        <div className="flex justify-center p-3">
          <Link
            to="/blog/detailBlog"
            className="px-4 py-2 text-[16px] font-bold text-center text-primary-main border-solid border-2 border-primary-main bg-primary-surface rounded-lg"
          >
            Detail
          </Link>
        </div>
        <h2 className="py-5 text-4xl font-bold text-primary-main">
          Blog Terkini
        </h2>
        <div className="py-6">
          <div className="grid gap-8 lg:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <CardBlog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;

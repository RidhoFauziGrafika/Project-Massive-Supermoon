import React from "react";
import { Link } from "react-router-dom";
import Wisata from "../../assets/cibulan.jpg";
import MainFooter from "../../component/Footer/MainFooter";
import SecondNavbar from "../../component/Navbar/SecondNavbar";
import { FaArrowLeftLong } from "react-icons/fa6"

const Detail = () => {
  return (
    <>
      <SecondNavbar />
      <div className="px-28 py-9 font-productSans">
        <Link to="/blog" className="text-3xl">
          <FaArrowLeftLong />
        </Link>
        <h2 className="py-5 text-4xl font-bold">Gunung Ciremai: Keindahan Alam dan Peninggalan Sejarah yang Mengagumkan</h2>
        <img className="rounded-lg items-center" src={Wisata} alt="image" />
        <p className="py-5 text-xl tracking-tight text-gray-900">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, lorem et eleifend lacinia, felis tortor aliquam dolor, eu vestibulum quam lectus ornare tellus. Quisque euismod cursus dignissim. Mauris id varius sem. Quisque dignissim posuere libero non feugiat. Curabitur sit amet ornare ante. Phasellus vel luctus est, quis pulvinar sapien. Pellentesque dignissim, nibh at convallis molestie, eros nisi tempor ligula, ac egestas nisi justo sit amet turpis. Pellentesque tincidunt lacus tortor, placerat commodo nulla cursus ac. Nullam volutpat diam eu magna iaculis efficitur. Nullam at libero vel ligula pharetra varius vehicula nec libero. Ut sit amet neque in arcu luctus efficitur at nec libero. Aenean tellus arcu, commodo venenatis facilisis eu, hendrerit vel nisl. <br /><br />
        Aenean vestibulum nibh eu nisl interdum, et egestas dolor sagittis. Sed aliquet bibendum tortor, ac mollis odio convallis eget. Nullam ullamcorper sapien mi, ut auctor velit venenatis vel. Morbi ultricies bibendum leo, ut rhoncus dui pellentesque vitae. Nam fermentum velit sit amet pellentesque laoreet. Ut dignissim efficitur vulputate. Proin eu accumsan libero. Nulla pretium, magna lacinia bibendum posuere, lectus purus venenatis quam, vel aliquam lorem libero nec quam. Vivamus pharetra, nibh id vehicula malesuada, dolor lectus finibus velit, non lacinia risus felis ut purus. In nec rutrum est. <br /><br />
        Quisque purus ex, tincidunt id fringilla vel, porttitor nec ante. Ut in porttitor dolor, ut laoreet erat. Morbi magna neque, condimentum et nibh eget, scelerisque tempus nisl. Integer volutpat nulla id turpis pulvinar ultrices. Nulla fringilla, mauris ut consectetur ultricies, tortor tortor porttitor lacus, ac semper arcu ligula in lectus. Phasellus commodo cursus dolor a luctus. Nulla luctus mauris non tortor iaculis, non vestibulum dolor iaculis. Sed ut arcu eu leo scelerisque porttitor. Vivamus non urna eget mi placerat lobortis nec sit amet arcu. Cras dignissim mattis metus in congue.
        </p>
      </div>
      <MainFooter />
    </>
  );
};

export default Detail;

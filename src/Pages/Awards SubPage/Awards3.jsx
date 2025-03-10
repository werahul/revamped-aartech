import React, { useEffect } from "react";
import { Navbar, Footer } from "../../Components";
import { BigThumb3 } from "../../assets/mediaAwards";
import { Helmet } from "react-helmet";

const Awards3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="ISO 9001:2015 Certified"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Commitment to quality with globally recognized certification."
        />
        <link
          rel="canonical"
          href="https://aartechsolonics.com/media/iso-9001-2015-certification"
        />
      </Helmet>
      <Navbar />
      <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
        <h1 className="  lg:mt-20 text-black lg:text-[40px] text-[20px] font-Barlow font-bold lg:leading-[52px] leading-6">
          Aartech Solonics proudly holds the ISO 9001:2015 certification.
        </h1>
        <div className="w-full h-auto bg-gray-300 mt-6">
          <img src={BigThumb3} alt="" className="w-full" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Awards3;

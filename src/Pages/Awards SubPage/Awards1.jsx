import React, { useEffect } from "react";
import { Navbar, Footer } from "../../Components";
import { BigThumb1 } from "../../assets/mediaAwards";
import { Helmet } from "react-helmet";

const Awards1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Honoured by the Defence Minister"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Prestigious award recognition for industry excellence."
        />
        <link
          rel="canonical"
          href="https://aartechsolonics.com/media/award-presented-by-the-defense-minister"
        />
      </Helmet>
      <Navbar />
      <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
        <h1 className="  lg:mt-20 text-black lg:text-[40px] text-[20px] font-Barlow font-bold lg:leading-[52px] leading-6">
          Aartech secured a significant IDEX Grant worth up to 1.5 Crore INR as
          one of the five winners during DEFCONNECT 2.0 in April 2022, with the
          award presented by the Defense Minister.
        </h1>
        <div className="w-full h-auto bg-gray-300 mt-6">
          <img src={BigThumb1} alt="" className="w-full" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Awards1;

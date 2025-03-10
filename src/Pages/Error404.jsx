import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center flex-col font-antonio py-20">
      <h1 className="lg:text-[330px] text-[100px] lg:leading-[440px] text-[#B80001] font-bold">404</h1>
      <p className="lg:text-[32px] text-[18px] lg:leading-[43px] text-[#B80001] text-center mt-0">We apologize for the inconvenience. <br />
      The page you are seeking is not available.</p>
      
          <Link to="/"> <button className="lg:w-[189px] w-[145px] sm:w-[120px] whitespace-nowrap lg:h-[49px] h-[44px] border-[1px] border-black lg:text-[18px] sm:text-[12px] font-bold lg:px-[39px] px-[20px] lg:mb-0 mb-4 lg:mt-[48px] mt-10 font-Barlow text-base hover:text-box-red hover:border-box-red tracking-wider"  >Back To Home</button></Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;

import React, { useEffect } from "react";
import { Navbar, BreadCrumbs, Footer, SlideInBar } from "../Components";
import { solution } from "../constants";
import { Link } from "react-router-dom";
// import { breadHome } from "../assets/images";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const Solution = ({ title, image, desc, path }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div>
      <Link to={path}>
        <h3 className="text-[#B80001] font-Barlow font-bold whitespace-nowrap text-[20px] lg:text-[23px] lg:tracking-widest tracking-wide">
          {title}
        </h3>
        <img
          src={image}
          alt="Solution Images"
          className="my-2 w-[100%] h-auto "
        />
        <p className="font-Barlow text-[16px] lg:leading-[24px] leading-snug  lg:font-normal font-medium lg:text-[18px]">
          {desc}
        </p>
      </Link>
    </div>
  );
};

const Solutions = () => {
  {
    /*const breadcrumbs = [
    {
      url: "/",
      image: breadHome,
    },
    { displayName: "ALL SOLUTIONS", url: "/solutions" },
  ];*/
  }
  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="Tailored Solutions, Trusted Expertise"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Cutting-edge solutions for power, automation, and seamless industry transformation."
        />
        <link rel="canonical" href="https://aartechsolonics.com/solutions" />
      </Helmet>

      <Navbar />
      <SlideInBar />
      <div className="max-container px-5 pt-[20px] lg:pt-[88px] lg:px-20  sm:px-10">
        {/* <div className="font-Barlow font-[500] mt-[24px] mb-[24px] lg:mt-[28px] lg:mb-[18px] text-[#0C013D]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
  </div>*/}
        <h1 className="text-[28px] lg:text-[36px] mt-[80px] lg:mt-[80px] mb-[22px] lg:mb-[14px] font-antonio">
          All Solutions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-y-[40px] gap-y-8 mb-[48px]">
          {solution.map((sol, index) => {
            return <Solution key={index} {...sol} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;

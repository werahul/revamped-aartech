import React from "react";
import { MapHome, mMap } from "../assets/images";

const MapImage = () => {
  return (
    <div className="lg:py-20    px-0 py-10  lg:mt-0 mt-0  bg-[#F0F0F0]">
      <div className="lg:px-20 sm:px-10 max-container ">
        <div className="title lg:text-4xl text-[28px] text-foot-blue leading-9  font-semibold lg:mt-0 lg:ml-0 ml-5  font-antonio ">
          Our Global Presence
        </div>
        <img src={MapHome} alt="Map " className="lg:-mt-0 lg:block hidden" />
        <img src={mMap} alt="Map Mobile" className="mt-1 lg:hidden block" />
      </div>
    </div>
  );
};

export default MapImage;

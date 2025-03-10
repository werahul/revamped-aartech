import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to check current route
import { df } from "../../assets/subImg";

const ImageSelect = ({ images, bgImg }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const location = useLocation(); // Get the current route

  // List of industries pages where bgImg should be shown
  const industriesPages = [
    "/industries/defence-and-exploration",
    "/industries/renewable-energy",
    "/industries/non-renewable-energy",
    "/industries/power-transmission-and-distribution",
    "/industries/heavy-engineering-industries",
    "/industries/health-care",
    "/industries/it-and-telecom",
    "/industries/transportation",
    "/industries/waste-management",
  ];

  // Check if the current route is an Industries page
  const isIndustriesPage = industriesPages.includes(location.pathname);

  const handleSmallImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-col space-x-4">
      <div className="flex flex-col sm:flex-row">
        <div className="lg:w-[100%]">
          {/* Large image */}
          <div className="w-auto group relative">
            <img
              src={images[selectedImageIndex]}
              alt="Large Image"
              className="w-[full] h-[auto]"
            />
            
            {/* Show bgImg only on industries pages */}
            {isIndustriesPage && bgImg && (
              <img src={bgImg} className="absolute bottom-0" />
            )}
          </div>
        </div>

        <div className="mt-4 sm:mt-0 lg:mt-0 grid grid-cols-4 lg:grid-cols-1 sm:grid-cols-2 gap-x-3 sm:ml-5 lg:ml-2 2xl:ml-0 sm:gap-0 gap-y-4 lg:gap-y-3 xxl:gap-y-6 2xl:gap-y-2">
          {/* Small images */}
          {images.map(
            (image, index) =>
              index !== selectedImageIndex && (
                <div
                  key={index}
                  className="flex justify-between items-start sm:w-[200px] sm:h-[190px] lg:w-auto lg:h-auto"
                  onClick={() => handleSmallImageClick(index)}
                >
                  <img
                    src={image}
                    alt={`Small Image ${index + 1}`}
                    className="aspect-square lg:h-[5.6rem] w-28 lg:w-28 cursor-pointer sm:w-[10.5rem] sm:h-[10.5rem]"
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSelect;

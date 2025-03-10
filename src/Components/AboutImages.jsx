import React, { useState } from 'react';
import { abGallary1992, abGallary2005, abGallary2009, abGallary2010, abGallary2017, abGallary2019, abGallary2022, abGallary1982, abGallary1988, leftArw, rightArw, abGallary2023 } from '../assets/images';

const AboutImages = () => {
  const images = [
    // Provide URLs to your images here
    
      abGallary1982, abGallary1988, abGallary1992, abGallary2005, abGallary2009, abGallary2010, abGallary2017, abGallary2019, abGallary2022, abGallary2023
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLine, setShowLine] = useState(false);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="my-8">
      <div className="flex justify-between h-[20rem] mt-12 lg:mb-12 mb-0">
        <div className=" flex justify-between lg:space-x-12 3xl:space-x-32 w-full">
          <div className="relative w-[20%] mt-6 lg:flex items-center justify-center hidden">
            <img src={images[(currentImageIndex - 1 + images.length) % images.length]} alt="Previous" className=" -translate-x-10 grayscale cursor-pointer h-[180px] w-auto" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white cursor-pointer " onClick={handlePrev}></div>
          </div>
          <div className="relative  lg:w-[60%] lg:h-auto sm:mx-auto  h-[300px] flex  justify-center">
            <img src={images[currentImageIndex]} alt="Current" className={` customImg lg:mx-0 mx-[46px] lg:w-auto sm:w-auto 2xl:w-auto w-[280px] lg:h-[330px] h-[180px] shadow-lg cursor-pointer `} />
            <div className="absolute top-0 left-0 w-full h-px bg-white" />
            <div className="absolute lg:top-[50%] top-[30%] lg:left-[0rem] left-[2px]  transform -translate-y-1/2 text-black font-extrabold  cursor-pointer text-3xl select-none hover:text-4xl lg:border-2 border-black px-4 py-3 " onClick={handlePrev}>
              <img src={leftArw} alt="left arrow" className='lg:w-full lg:h-full w-3 h-4' />
            </div>
            <div className="absolute lg:top-[50%] top-[30%] lg:right-[0px] right-[2px]  transform -translate-y-1/2 text-black cursor-pointer font-bold text-3xl select-none hover:text-4xl lg:border-2 border-black px-4 py-3" onClick={handleNext}>
              <img src={rightArw} alt="right arrow" className='lg:w-full lg:h-full w-3 h-4' />
            </div>
          </div>
          <div className="relative w-[20%] mt-6 lg:flex items-center justify-center hidden overflow-hidden ">
            <img src={images[(currentImageIndex + 1) % images.length]} alt="Next" className="h-[180px] translate-x-9 grayscale w-auto cursor-pointer" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer" onClick={handleNext}></div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center items-center hidden">
        <div className="h-[0px] w-[15%] border border-slate-900 lg:flex items-center justify-evenly mt-6  ">
          <div className="w-8 h-8 bg-white rounded-full border border-red-700 cursor-pointer right-[84%] absolute"  onClick={handlePrev}></div>
        </div>

        { currentImageIndex != 0 && (<div className="h-[0px] w-[33.5%] 3xl:w-[35%] border border-slate-900 lg:flex items-center justify-evenly mt-6 extraline -z-10"/>)}


        <div className="h-[0px] w-[14%] border border-slate-900 lg:flex items-center justify-evenly mt-6 hidden ml-auto ">
          <div className="w-[52px] h-[52px] bg-white rounded-full border  border-red-700 absolute right-[48%] cursor-pointer" />
          <div className="w-8 h-8 bg-white rounded-full border absolute right-[14%] 2xl:right-[13%] border-red-700 cursor-pointer" onClick={handleNext}/>
        </div>
        { currentImageIndex != 9 && (<div className="h-[0px] w-[35%] 3xl:w-[35%] border border-slate-900 lg:flex items-center justify-evenly mt-6 extraline -z-10"/>)}
      </div>
      <div className={`yearSection1 flex items-center justify-around  lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 0 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2023</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold  mt-[15px] customImg-margin  lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>1982</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>1988</div>
      </div>
      <div className={`yearSection2 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 1 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold uppercase leading-tight tracking-tight lg:block hidden`}>1982</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>1988</div>
        <div className={`text-center text-slate-900 text-xl font-semibold uppercase leading-tight tracking-tight lg:block hidden`}>1992</div>
      </div>

      <div className={`yearSection3 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 2 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>1988</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>1992</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2005</div>
      </div>
      <div className={`yearSection4 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 3 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>1992</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>2005</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2009</div>
      </div>
      <div className={`yearSection4 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 4 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2005</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>2009</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2010</div>
      </div>
      <div className={`yearSection4 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 5 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2009</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>2010</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2017</div>
      </div>
      <div className={`yearSection4 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 6 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2010</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>2017</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2019</div>
      </div>
      <div className={`yearSection4 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 7 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2017</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>2019</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2022  </div>
      </div>
      <div className={`yearSection4 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 8 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2019</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>2022</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2023</div>
      </div>
      <div className={`yearSection4 flex items-center justify-around lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 9 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>2022</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide lg:mx-10 2xl:mx-20`}>2023</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight lg:block hidden`}>1982</div>
      </div>


      <div className="">
        <div className={`section1 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-5 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 0 ? '' : 'hidden'}`}>Established as a corporation</div>
        <div className={`section2 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 1 ? '' : 'hidden'}`}>Initiated Mandideep Unit Operations</div>
        <div className={`section3 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 2 ? '' : 'hidden'}`}>Attained Public Limited Company status</div>
        <div className={`section4 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 3 ? '' : 'hidden'}`}>Expanded to Parwanoo Unit Operations</div>
        <div className={`section5 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 4 ? '' : 'hidden'}`}>Executed a 1:6 Bonus Issue</div>
        <div className={`section6 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-8 ${currentImageIndex === 5 ? '' : 'hidden'}`}>Established AAR Centre for Techno-entrepreneurship, an DSIR approved R&D lab</div>
        <div className={`section7 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 6 ? '' : 'hidden'}`}>Founded AIC - Aartech Solonics Pvt Ltd and Faradigm Ultracapacitors Pvt Ltd</div>
        <div className={`section8 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 7 ? '' : 'hidden'}`}>Successfully went public through an IPO
        </div>
        <div className={`section9 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 8 ? '' : 'hidden'}`}>Winner of IDEX
        </div>
        <div className={`section10 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium lg:leading-7 leading-5 lg:mt-2 mt-4 lg:mb-0 -mb-14 ${currentImageIndex === 9 ? '' : 'hidden'}`}>Main Board Listing: Flag bearers of Aartech
        </div>
      </div>
    </div>
  );
};

export default AboutImages;

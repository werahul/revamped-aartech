import React from "react";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="w-full sm:w-[110%]  xl:w-[120%] lg:w-[150%] 2xl:w-[120%]   3xl:w-[110%] px-5 lg:px-20 2xl:px-[120px]">
      <div className="bg-transparent border-white   2xl:w-[115%] border  flex flex-col lg:flex-row shadow">
        <img
          src={testimonial.image}
          alt="testimonialImage"
          className="w-32 lg:h-auto hidden lg:block lg:w-36 object-cover h-32 mr-4"
        />
        <div className="flex flex-row lg:flex-col ">
          <img
            src={testimonial.image}
            alt="testimonialImage"
            className="w-32 lg:h-auto block lg:hidden lg:w-auto h-32 mr-4"
          />
          <div className="w-[80%]">
            <p className="text-white font-Barlow font-bold text-[18px] lg:text-[28px] pt-6  block lg:hidden">
              {testimonial.author}
            </p>
            <p className="font-bold text-[14px] tracking-wider block lg:hidden text-white lg:pb-[16px] 2xl:pb-[32px] font-Barlow">
              {testimonial.company}
            </p>
          </div>
        </div>
        <div className=" lg:px-6 ">
          <p className="text-white font-Barlow font-bold text-[28px] lg:pt-[12px]  hidden lg:block">
            {testimonial.author}
          </p>
          <p className="font-bold text-[16px] text-white hidden lg:block lg:pb-[16px] 2xl:pb-[32px] font-Barlow">
            {testimonial.company}
          </p>
          <p className="font-Barlow text-[16px] lg:text-[15px] 2xl:text-[13px] px-2 lg:px-0 py-4 lg:py-0 3xl:text-[18px] text-[#ffffff] italic ">
            {testimonial.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
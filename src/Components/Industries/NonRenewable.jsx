import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
import { nonRew } from "../../assets/subImg";
import {
  bestCase,
  relayPannels,
  kra,
  incinerator,
  wtc,
  bts,
  clip,
  load,
  fuel,
} from "../../assets/ProductImages";

import { CustomerLogos2 } from "../../Components";

import { ImageSelect } from "../ImageSelector";
import { non1, non2, non3, non4, non5 } from "../../assets/IndImages";
import { Helmet } from "react-helmet";

const NonRenewable = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
  const [selectedProTag, setSelectedProTag] = useState("PTag1");
  const images = [non1, non2, non3, non4, non5];

  const tagContents = {
    tag1: "Control and Automation are key solutions in Non-Renewable Energy. Aartech, with a wide range of technology options, caters to diverse needs, providing both cost-effective utility solutions and premium-quality offerings. Their expertise and commitment to innovation create custom solutions. Aartech excels in blending components for tailored solutions, enhancing non-renewable energy system efficiency. They stand out with meticulously designed solid-state and microprocessor-based control products, distinct from conventional approaches, boosting system performance and reliability.",

    tag2: "Process continuity is crucial in the non-renewable energy sector, preventing disruptions caused by electrical outages. These interruptions have a lasting impact, prompting the need for reevaluation and innovative solutions in revenue, efficiency, and productivity. At Aartech, we're dedicated to addressing process continuity challenges by collaborating with experts and end-users to provide holistic solutions. This approach ensures non-renewable energy systems stay resilient, with uninterrupted operations, safeguarding key benchmarks in this critical sector.",

    tag3: "Reliable Engine Starting/Pulse Power offers a vital solution in the non-renewable energy sector. Battery failures during engine starts are caused by issues like low State-Of-Charge, ageing batteries and cold temperatures, which are common concerns. While emphasis is placed on proper sizing, maintenance, and regular checks, real-world scenarios often demand short bursts of power with variable duty cycles. In these situations, a pulse power source/sink comes to the forefront. Whether operating independently or in tandem with a base-level power source, it becomes essential to ensure a consistent power supply. This technology effectively handles load fluctuations, outperforming standalone sources and ensuring uninterrupted non-renewable energy operations.",

    tag4: "Electrical engineering solutions must often adapt to evolving demands and operational considerations. Aartech is a trusted partner, collaborating with M/s G&W Elec. Co. USA as a value-added system integrator for their CLiP® Fault Current Limiter solutions. We offer comprehensive, end-to-end solutions in this domain, serving customers across Asia, particularly in power generation (especially captive power addition) and industries like cement and oil & gas. CLiP® (Current Limiting Protector) boasts a 25-year track record as a globally trusted system protector. It delivers current limitation benefits for systems up to 38kV, with high continuous current ratings of up to 5000A. Remarkably, it has achieved fault interruption beyond 300kA rms symmetrical at 15.5kV.",

    tag5: "A Power Backup Unit (PBU) solution for non-renewable energy is a system designed to provide uninterrupted power supply during outages or periods of high demand. It typically relies on conventional energy sources such as fossil fuels or nuclear power to generate electricity. The PBU includes backup generators, energy storage systems, or redundant power sources to ensure continuity in critical applications like hospitals, data centres, and industries. While not based on renewable energy sources, PBUs are essential for maintaining essential services and minimising disruptions in power supply when primary energy sources fail or fluctuate. ",

    tag6: "Customised Plastic Cases play a pivotal role in the non-renewable energy sector by safeguarding critical equipment and delicate instrumentation. They ensure that sensitive components and tools used in non-renewable energy production are protected during transportation and storage. Aartech Solonics' solutions offer durability, precision, and customisation to meet the unique requirements of this industry. Whether it's for showcasing equipment at trade shows or safely transporting vital machinery to remote energy sites, these cases maintain the integrity of valuable non-renewable energy assets while presenting a professional image.",

    tag7: "The Solid Waste Treatment plays a crucial role in non-renewable energy sectors. By minimising landfill usage and promoting recycling, it conserves valuable resources and reduces the environmental impact of waste. This contributes to the sustainable use of non-renewable energy sources, as recycling and resource recovery can decrease the need for virgin materials and energy-intensive production processes, ultimately conserving non-renewable resources and lessening the carbon footprint associated with their extraction and utilisation. Moreover, it can generate energy from waste, further supporting non-renewable energy production.",

    tag8: "Load Limiting Solutions are paramount in Non-Renewable Energy sectors, bridging the demand-supply gap and ensuring equitable energy distribution. By enforcing controlled usage and encouraging responsible energy consumption, these solutions address challenges faced by power utilities. They play a pivotal role in demand-side management, ensuring fair allocation of electricity for various needs. Moreover, in distributed generation operations, especially those relying on limited sources like Hydro, Solar, Wind, Biomass, or Diesel, load limiting becomes essential for technical, operational, and commercial viability. These solutions provide automated overload management, promoting efficient energy utilisation and reducing operational complexities.",
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Set the selected tag
    // Set the selected tag
  };

  const handleProClick = (tag) => {
    setSelectedProTag(tag);
  };
  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="Powering Non-Renewable Energy"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Advanced solutions for efficiency and sustainability in non-renewable energy sectors."
        />
        <link
          rel="canonical"
          href="https://aartechsolonics.com/industries/non-renewable-energy"
        />
      </Helmet>
      <Navbar />
      <SlideInBar />
      <div className="max-container  lg:pt-28 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 sm:px-10 ">
        <div className="flex lg:flex-row flex-col lg:mt-20">
          <h1 className="lg:hidden text-black text-[28px] font-normal font-antonio">
            Non-Renewable Energy
          </h1>
          <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wide mb-2 mt-1">
            INDUSTRIES
          </div>

          <ImageSelect images={images} bgImg={nonRew} />

          <div className="lg:w-[55%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              Non-Renewable Energy
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              INDUSTRIES
            </div>
            <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
              Today, most of society's energy requirements still rely on
              non-renewable sources. AAs awareness of non-renewable energy's
              environmental impact grows, the gap between energy demand and the
              level of resources shrinks. This has spurred a concurrent push for
              improved operational practices, energy efficiency measures, and
              adopting safe and intelligent solutions. Aartech boasts a
              comprehensive portfolio in the non-renewable energy sector,
              encompassing Thermal Power, Nuclear Power, Diesel Power, Oil and
              Gas, and Captive Power, to address these evolving challenges.
            </div>
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          SOLUTIONS
        </div>
        <div className="lg:flex hidden space-x-3 mt-8">
          <button
            className={`tag ${
              selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            CONTROL & AUTOMATION
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Process Continuity
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Pulse power
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Fault Current Limiter
          </button>
        </div>
        <div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Power Backup Unit
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Customised PLASTIC Case
          </button>

          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Solid Waste Treatment
          </button>
          <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            Load Limiting
          </button>
        </div>

        {/*     mobile-------------------------------------------------------------*/}

        <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
          <button
            className={`tag ${
              selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border uppercase text-base font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            CONTROL & AUTOMATION
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Process Continuity
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-[200px] h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Pulse Power
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Fault Current Limiter
          </button>
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Power Backup Unit
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Customised PLASTIC Case
          </button>

          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Solid Waste Treatment
          </button>
          <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            Load Limiting
          </button>
        </div>

        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-3 lg:leading-tight leading-snug ">
          {" "}
          {selectedTag && tagContents[selectedTag]}
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          PRODUCTS
        </div>

        <div className="lg:flex hidden space-x-3 mt-8">
          <button
            className={`tag ${
              selectedProTag === "PTag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag1")}
          >
            CONTROL & RELAY PANELS
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag2")}
          >
            BTS 2000
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag3")}
          >
            Kranking Ultracapacitors
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag4")}
          >
            Clip Fault current limiters
          </button>
        </div>

        <div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${
              selectedProTag === "PTag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag5")}
          >
            Fuel Cell
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag6")}
          >
            Best Case
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag7")}
          >
            Solid Waste Treatment Products
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag8")}
          >
            Load Checker
          </button>
        </div>

        {/*Product mobile-------------------------------------------------------------*/}

        <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
          <button
            className={`tag ${
              selectedProTag === "PTag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-base font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag1")}
          >
            CONTROL & RELAY PANELS
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag2")}
          >
            BTS 2000
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag3")}
          >
            Kranking Ultracapacitors
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag4")}
          >
            Clip Fault current limiters
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag5")}
          >
            Fuel Cell
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag6")}
          >
            Best Case
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag7")}
          >
            Solid Waste Treatment Products
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold    font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag8")}
          >
            Load Checker
          </button>
        </div>

        <div className="proContainer">
          <div
            className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag1" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={relayPannels}
                alt="Images"
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
              Aartech's Control & Relay Panels (CRP) are invaluable in
              non-renewable energy. Designed for 11KV and 33KV substations with
              outdoor switchgear, they incorporate a comprehensive range of
              components, including relays, fuses, switches, and wiring. These
              panels effectively monitor and control critical equipment like
              transformers, generators, and circuit breakers. Moreover, they
              offer customisation options, allowing adaptation for single or
              multi-circuit use to meet customer requirements precisely.
            </div>
          </div>

          <div
            className={`Pro2 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag2" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[160%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={bts}
                alt="Images"
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              The BTS 2000 Fast Bus Transfer System significantly bolsters
              non-renewable energy systems. This advanced microprocessor-based
              system, tailored for Power Generation Utilities and Process
              Industries, swiftly executes motor bus transfers between
              independent power sources, ensuring safety compliance. By
              maintaining the power supply to crucial plant motors, it prevents
              process interruptions, even during power source contingencies.
              This outstanding capability fortifies non-renewable energy system
              reliability and performance.
            </div>
          </div>

          <div
            className={`Pro3 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag3" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[160%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={kra}
                alt="Images"
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              KranKing® Ultracapacitors offer substantial benefits in
              non-renewable energy applications. Designed specifically for
              engine-cranking tasks, they reduce the strain on lead-acid
              batteries during starts, enabling significant reductions in
              battery size and prolonged lifespan. Unlike traditional batteries
              with around 1000 cycles, KranKing® devices deliver consistent
              performance for over 300,000 cycles, even in extreme temperatures.
              This exceptional durability enhances the overall reliability of
              non-renewable energy systems, ensuring dependable operation in
              critical scenarios.
            </div>
          </div>

          <div
            className={`Pro4 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag4" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[70%] lg:w-[60%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={clip}
                alt="Images"
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              The CLiP operates as an electronically sensed and triggered
              current limiter, featuring a continuous copper bus bar for regular
              current flow. Under overcurrent conditions, this path opens to
              introduce a parallel-mounted current limiting fuse, effectively
              interrupting the fault.
            </div>
          </div>

          <div
            className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag5" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={fuel}
                alt="Images"
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              Fuel cells have become a crucial technology in non-renewable
              energy applications, especially in defence. Their higher
              efficiency, longer endurance, compact size, portability, silent
              operation, and rugged durability make them superior to
              conventional internal combustion engines. They offer reliable
              power solutions for communication, surveillance, and unmanned
              systems, both onboard and stationary, providing a more
              environmentally friendly alternative within the non-renewable
              energy sector.
            </div>
          </div>

          <div
            className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag6" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[160%] lg:w-[110%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={bestCase}
                alt="Images"
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              Best Case aids in the field of Non-Renewable Energy by providing
              entrepreneurs and innovators timely access to quality enclosures
              for their products. We understand the challenges of prototyping
              and the importance of cost-effective solutions. Whether showcasing
              prototypes or carrying fragile equipment, we ensure your
              presentation matches the highest standards. With 24x7 online
              access to our products, we are committed to delivering quality,
              affordability, and availability, supporting your endeavours for
              business success in the non-renewable energy sector.
            </div>
          </div>

          <div
            className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag7" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={wtc}
                alt="Images"
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              The Waste to Compost machine (WTC) swiftly converts organic waste
              into compost, promoting sustainability in non-renewable energy
              systems. Plastic Shredders aid renewable energy by recycling
              plastic waste for biofuel. Incinerators reduce non-recyclable
              waste to ash, generating heat and electricity in non-renewable
              energy contexts, minimizing waste disposal problems. These
              technologies contribute to eco-friendly waste management and
              energy generation.{" "}
            </div>
          </div>

          <div
            className={`Pro8 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag8" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={load}
                alt="Images"
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              The Load Checker plays a pivotal role in Non-Renewable Energy by
              preventing excessive current draw. This device automatically
              blocks the mains supply if the load exceeds limits, ensuring
              safety. Its patented self-reset feature restores supply after load
              disconnection, eliminating manual intervention. With soft blocking
              technology, it offers an extended lifespan. Permitting temporary
              overloads, like during motor startup, guarantees efficient
              non-renewable energy usage, enhancing safety and device longevity.{" "}
            </div>
          </div>
        </div>

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">
          Customers
        </div>

        <CustomerLogos2 />
      </div>

      <Footer />
    </div>
  );
};

export default NonRenewable;

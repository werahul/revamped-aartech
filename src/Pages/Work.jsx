import React from "react";
// import Industries from './Industries'
import { Navbar, SlideInBar } from "../Components/index";
import { Helmet } from "react-helmet";

const Work = () => {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Driving Success Through Innovation"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Explore our success stories in power, automation, and cutting-edge technology solutions."
        />
        <link rel="canonical" href="https://aartechsolonics.com/work" />
      </Helmet>
      <Navbar />
      <SlideInBar />
    </>
  );
};

export default Work;

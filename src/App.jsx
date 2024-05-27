import React from "react";
import Contact from "./Components/Contact";
import ReqService from "./Components/ReqService";
import Faq from "./Components/Faq";
import Help from "./Components/Help";
import CustomerReview from "./Components/CustomerReview";
import FaqAccordion from "./Components/Accordion";
import CrCarousel from "./CrCarousel";

const App = () => {
  return (
    <>
      <Contact />
      <ReqService />
      <Faq></Faq>
      <Help />
      <CustomerReview />
      {/* <CrCarousel></CrCarousel> */}
    </>
  );
};

export default App;

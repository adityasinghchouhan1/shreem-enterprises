import React from "react";
import Accordion from "./Accordion";
import faq_image from "./assets/Image/img_01.jpg";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="main row">
      <div className="col-lg-6 faq_img m-0 p-0">
        <img src={faq_image} alt="" className="faq_img img-fluid" />
      </div>

      <div className="accordion_section col-lg-6 m-0 pt-3">
        {/* Starting of Heading */}
        <div className="text-center">
          <h4 className="small-title">Faq</h4>
          <h2 className="faq-heading">Frequently asked Questions</h2>
        </div>
        {/* Ending of Heading */}

        {/* Starting of Accordions */}
        <div className="border m-5">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;

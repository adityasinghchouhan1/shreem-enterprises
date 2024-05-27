import React from "react";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      imgs: "./public/images/img_02.jpg",
      context: "Any Type Of Printing",
      name: "Design & Branding",
    },
    {
      imgs: "./public/images/img_03.jpg",
      context: "Any Type Of Printing",
      name: "3d & Logo Printing",
    },
    {
      imgs: "./public/images/img_04.jpg",
      context: "Any Type Of Printing",
      name: "T - Shirt Printing",
    },
  ];
  return (
    <div className="container bg-white pb-5 pt-5 mt-3">
      <div className=" text-center ">
        <p className="heading">Our Core Features</p>
        <h1 className="services-title">Experience Allows Us To</h1>
        <h1 className="services-title">Printing Things</h1>
      </div>
      <div className="col-12 d-flex flex-wrap justify-content-center  mt-5">
        {servicesData.map((items) => (
          <div className="m-3">
            <div className="images">
              <img src={items.imgs} alt="" className="img" />
            </div>
            <div className="context">{items.context}</div>
            <div className="service-varity">{items.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

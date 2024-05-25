import React from "react";
import "./ServicesType.css";

let typeOfservices = [
  {
    images: "./public/images/img_06.jpg",
    servic_name: "Banner Printing",
    discription:
      "Sed ut perspiciatis unde omnis iste natus site voluptatem accusantium doloremqu",
  },
  {
    images: "./public/images/img_09.jpg",
    servic_name: "Business Cart Printing",
    discription:
      "Sed ut perspiciatis unde omnis iste natus site voluptatem accusantium doloremqu",
  },
  {
    images: "./public/images/img_07.jpg",
    servic_name: "T - Shirt Printing",
    discription:
      "Sed ut perspiciatis unde omnis iste natus site voluptatem accusantium doloremqu",
  },
  {
    images: "./public/images/img_10.jpg",
    servic_name: "Logo Design & Printing",
    discription:
      "Sed ut perspiciatis unde omnis iste natus site voluptatem accusantium doloremqu",
  },
  {
    images: "./public/images/img_08.jpg",
    servic_name: "Book Cover Printing",
    discription:
      "Sed ut perspiciatis unde omnis iste natus site voluptatem accusantium doloremqu",
  },
  {
    images: "./public/images/img_11.jpg",
    servic_name: "Flayer Design & Printing",
    discription:
      "Sed ut perspiciatis unde omnis iste natus site voluptatem accusantium doloremqu",
  },
];

const ServicesType = () => {
  return (
    <div className="containers">
      <p className="heading">What We Offers</p>
      <p className="services-title">
        We Provide Lot’s Of Printing &<br></br> Branding Service
      </p>

      <div className="service-cards-section">
        {typeOfservices.map((items) => (
          <div className="service-card shadow">
            <img src={items.images} alt="" className="service-cards-img" />
            <div className="d-flex flex-column">
              <div className="service-name">{items.servic_name}</div>
              <div className="discription mt-2">{items.discription}</div>
              <button className="read-btn">READ MORE ➔</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesType;

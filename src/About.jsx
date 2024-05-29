import React from "react";
import "./About.css";
import Group_img from "./assets/About-img/img_05.jpg";
import play_icon from "./assets/About-img/play-icon.png";

const about_icon = [
  {
    imgs: "./public/About/icon_01.png",
    servicename: "Printing & Press",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
  {
    imgs: "./public/About/online.png",
    servicename: "Web Design",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
  {
    imgs: "./public/About/3dprinting.png",
    servicename: "UI/UX Design",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
  {
    imgs: "./public/About/setting-icon.png",
    servicename: "Packaging Design",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
];

const About = () => {
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap text-center background-icon pb-5" id="about">
        <div className="">
          <p className="small-title">About Our Company</p>
          <p className="big-title">
            Printing Your Dream Works<br></br> With Printem
          </p>
        </div>
        <div className="d-flex justify-content-around flex-wrap mt-5 gap-5">
          <div className="d-flex m-2">
            <div className="d-flex justify-content-center flex-wrap mt-5 gap-5 bg-white">
              <div className="d-flex">
                <img src={Group_img} className="Group-img z-0"></img>
                <img src={play_icon} className="play-btn"></img>
                <div className="ring"></div>
                <div className="ring2"></div>
              </div>
              <div className="about-content">
                <div className="d-flex overflow-scroll h-25 overflow-x-hidden">
                  <p className="ms-4 ps-3 opacity-75 fs-6 about-content-p">
                    Our team at Shreem Enterprises is dedicated to providing
                    top-notch digital services to cater to all your needs.
                    Located in the vibrant city of Bhopal, we pride ourselves on
                    being a one-stop destination for a wide range of services.
                    Whether one require assistance with basic tasks such as
                    photocopying or data entry or seek expertise in more
                    intricate projects like software development, we are here to
                    support you every step of the way. With our dedication to
                    excellence and customer delight, we guarantee a smooth and
                    successful experience with us. Count on Shreem Enterprises
                    to realize your digital vision with accuracy and
                    professionalism. Following the motto "Tech for all," we
                    spare no effort in delivering top-notch services to
                    students, professionals, and business owners alike.
                  </p>
                </div>
                <div className="about-cards">
                  {about_icon.map((items) => (
                    <div className=" about-card mt-4 ms-3 p-2">
                      <div className="about-icons-div ms-3">
                        <img src={items.imgs} alt="" className="about-icons" />
                      </div>
                      <div className="about-card-titel">
                        {items.servicename}
                      </div>
                      <div className="about-card-description">
                        {items.description}
                      </div>
                      <button className="readmore-btn">READ MORE ➔</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

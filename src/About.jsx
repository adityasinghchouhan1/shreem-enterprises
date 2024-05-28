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
    servicename: "Digital Printing",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
  {
    imgs: "./public/About/3dprinting.png",
    servicename: "3D Printing",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
  {
    imgs: "./public/About/setting-icon.png",
    servicename: "Offest Printing",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
];

const About = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="d-flex justify-content-center flex-wrap background-icon">
=======
      <div className="d-flex justify-content-center flex-wrap text-center background-icon pb-5" id="about">
>>>>>>> 1330081a77043604ee727284366f61d4b24c7a6b
        <div className="">
          <p className="small-title">About Our Company</p>
          <p className="big-title">
            Printing Your Dream Works<br></br> With Printem
          </p>
        </div>
<<<<<<< HEAD
        <div className="d-flex justify-content-around flex-wrap mt-5 gap-5">
          <div className="d-flex m-2">
=======
        <div className="d-flex justify-content-center flex-wrap mt-5 gap-5 bg-white pb-5">
          <div className="d-flex">
>>>>>>> 1330081a77043604ee727284366f61d4b24c7a6b
            <img src={Group_img} className="Group-img z-0"></img>
            <img src={play_icon} className="play-btn"></img>
            <div className="ring"></div>
            <div className="ring2"></div>
          </div>
          <div className="about-content">
            <p className="ms-4 ps-3 opacity-75 fs-6 about-content-p">
              Sed ut perspiciatis unde omnis iste natus error volupta accusantiu
              dolorem laudantium totam rem aperam eaque quae ab illo inventore
              veritatis et quasi architec
            </p>
            <div className="about-cards">
              {about_icon.map((items) => (
                <div className=" about-card mt-4 ms-3 p-2">
                  <div className="about-icons-div ms-3">
                    <img src={items.imgs} alt="" className="about-icons" />
                  </div>
                  <div className="about-card-titel">{items.servicename}</div>
                  <div className="about-card-description">
                    {items.description}
                  </div>
                  <button className="readmore-btn">READ MORE ➔</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default About;

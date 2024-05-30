import React from "react";
import './ReqService.css'

const OrderServiceForm = () => {
  return (
    <>
      <div className="container-fluid">
          {/* heading */}
          <div className="">
            <h1 className="Order_Service_heading text-center">Send us a message</h1>
          </div>
          <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <div className="wrapper">
              {/* starting of form */}
              <form action="">
                <div className="d-flex gap-3">
                  {/* Name input box */}
                  <div class="input-box mt-5 ">
                    <label htmlFor="" className="contact-form-label">
                      User Name *
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Username"
                      className="contact-form-input"
                    />
                    <i class="fa-solid fa-user"></i>
                  </div>
                  {/* Contact input box */}

                  <div class="input-box mt-5">
                    <label htmlFor="" className="contact-form-label">
                      Contact Number *
                    </label>
                    <br />
                    <input
                      type="Number"
                      name="Contact Number"
                      id=""
                      placeholder="Contact Number"
                      required
                      className="contact-form-input"
                    />
                    <i class="fa-solid fa-phone"></i>
                  </div>
                </div>

        
              {/* Email input box */}

              <div class="input-box">
                <label htmlFor="" className="contact-form-label">
                  Your E-Mail *
                </label>
                <br />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  required
                  className="contact-form-input"
                />
                <i class="fa-solid fa-envelope"></i>
              </div>

              {/* Dropdown */}
              <div class="">
                <label for="dropdown" className="contact-form-label">
                  Service interested in
                </label>
                <br />
                <select
                  name="service"
                  className="contact-form-dropdown"
                  id="dropdown"
                >
                  <option value={"Bussiness Card Printing"} selected>
                  Bussiness Card Printing
                  </option>
                  <option value="Pre Investment Feasibility Studies">
                    Pre Investment Feasibility Studies
                  </option>
                  <option value="Bussiness Card Printing">
                    Bussiness Card Printing
                  </option>
                  <option value="T-shirt Printing">T-shirt Printing</option>
                  <option value="Logo Design & Printing">
                    Logo Design & Printing
                  </option>
                  <option value="Book Cover Printing">
                    Book Cover Printing
                  </option>
                  <option value="Flyers Design & Printing">
                    Flyers Design & Printing
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>

{/* Texbox */}

<div class="input-box">
                <label htmlFor="" className="contact-form-label">
                  Type Your Message
                </label>
                <br />
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={5}
                  className="contact-form-dropdown"
                  placeholder="Enter your message"
                ></textarea>
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              {/* Buttons */}
              <div>
                <button className="send-me-btn">Send Message</button>
              </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderServiceForm;

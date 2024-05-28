
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer text-dark pt-4 h-100 w-100 ">
    <div className="child">
    <div className="container "> 
        <div className="row ">
          <div className="col-md-3 mb-4 ">
            <h5 className="lblack ">Shreem Enterprises</h5>
            <p className="m-10 p-50">
              Shreem Enterprises is dedicated to providing top-notch services to
              our clients. Our commitment to excellence has established us as a
              trusted name in the industry.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="lblack">Services</h5>
            <ul className="list-footer">
              <li className="mt-2">Design & Branding</li>
              <li className="mt-2">3D Design & Printing</li>
              <li className="mt-2">Offset Printing</li>
              <li className="mt-2">Business Printing </li>
              <li className="mt-2">Corporate Printing </li>

            </ul> 
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="lblack">Quick Links</h5>
            <ul className="list-unstyled ">
              <li className="mt-2">
                <a href="#" className="text-dark text-decoration-none">Home</a>
              </li>
              <li className="mt-2" >
                <a href="#" className="text-dark text-decoration-none">About</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-dark text-decoration-none">Services</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-dark text-decoration-none">Order Request</a>
              </li>
              <li className="mt-2 tbalck">
                <a href="#" className="text-dark text-decoration-none ">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="lblack">Contact Us</h5>
            <p></p>
            <ul className="list-unstyled">
              <li className="mt-2">
                <i className="fas fa-map-marker-alt "></i> Zone-2, MP nagur, Bhopal
              </li>
              <li className="mt-2">
                <i className="fas fa-phone"></i> (123) 456-7890
              </li>
              <li className="mt-2">
                <i className="fas fa-envelope"></i> info@shreementerprises.com
              </li>
            </ul>
         <div className=" md-4 m-1 d-flex social-media">
         <ul className="list-unstyled flex-row d-flex gap-3 .footer-social-icons">
         <li>
          <i class="fa-brands fa-whatsapp fs-3 whatshop  "></i></li>
          <li>
          <i class="fa-brands fa-instagram text-danger fs-3 instra"></i></li>
          <li>
          <i class="fa-brands fa-facebook text-primary fs-3"></i></li>
          <li>
          <i class="fa-brands fa-linkedin text-primary fs-3"></i></li>
          </ul>
          </div>
          </div>
        </div>
        
     <div className="row  align-items-center justify-content-lg-between bbox ">
          <div className="col-md-12 footer-bottom-boxed  ">
            <p className="copyright_text mb-0 text-center  ">&copy; 2024 Shreem Enterprises. All rights reserved.</p>
          </div>
        </div>
      </div>
      </div>

    </footer>
  );
}

export default Footer;


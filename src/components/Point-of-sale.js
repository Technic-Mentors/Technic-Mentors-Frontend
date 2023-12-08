import React, { useEffect } from 'react'
import Calltoaction from './Calltoaction'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pointofsale() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
       <div
          className="background-image1"
          style={{ backgroundImage: `url(${"assets/img/bg-header.webp"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
                // style={{ fontSize: 60 }}
              >
                 Point Of Sale
              </h1>
            </div>
          </div>
        </div>
        
        <div className="container mt-5">
              <div className="section-title">
                <h2>EMPOWERING SEAMLESS BUSINESS TRANSACTIONS</h2>
                <h3>
                Elevate Transactions With Our <span>Point Of Sale Software</span>
                </h3>
              </div>
              <p style={{textAlign: "justify" }}>
              In the fast-paced world of modern commerce, the efficiency and effectiveness of your Point of Sale (POS) system can make all the difference. Our cutting-edge POS solution is engineered to empower businesses of all sizes, from bustling retail stores to bustling restaurants. At the heart of our POS system lies a commitment to streamlining your operations and enhancing customer experiences. With intuitive, user-friendly interfaces and seamless integration capabilities, our POS system ensures that your staff can process transactions swiftly, minimizing wait times and enhancing customer satisfaction.
                <br /> <br />
                Our POS solution goes beyond traditional transaction processing. It provides you with valuable insights into your business operations. You can access real-time sales data, inventory management, and in-depth analytics to make informed decisions. Additionally, our POS system is highly customizable, adapting to your specific business needs. Whether you need table management for a restaurant or robust inventory tracking for a retail store, our POS system can be tailored to meet your unique requirements. Say goodbye to cumbersome manual processes and embrace the future of point-of-sale technology with our cutting-edge solution.
              </p>
            </div>


            <div className="container mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-id-card me-3 edu-icnos"></i>
                      <p className="card-title"><strong>
                      Unlimited account openings
                      </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-product-hunt edu-icons me-3 "></i>
                      <p className="card-title"><strong>Customized Product Defining System</strong> </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-boxes-stacked me-3 edu-icnos"></i>
                      <p className="card-title"><strong> Minimum Stock Management</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-person-walking-arrow-loop-left me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Purchase Return Option</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0" >
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-right-left me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Requirements And Sale Return Option</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-boxes-stacked me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Auto Stock Updating </strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-file-invoice me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Faster Retail / Wholesale Billing</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <Calltoaction />

    </div>
  )
}

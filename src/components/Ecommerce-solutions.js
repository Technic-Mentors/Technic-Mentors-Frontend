import React, { useEffect } from 'react'
import Calltoaction from './Calltoaction'
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

export default function Educationmanagementsystem() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://technicmentors.com/ecommerce-solutions" />
      </Helmet>
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
                 Ecommerce Solutions
              </h1>
            </div>
          </div>
        </div>


        <div className="container mt-5">
              <div className="section-title">
                <h2>Online Selling Made Easy</h2>
                <h1>
                  Explore Our <span>Ecommerce Solutions</span>
                </h1>
              </div>
              <p style={{textAlign: "justify"}}>
              a robust online presence is essential for businesses of all sizes. Our Ecommerce Solutions are designed to help your business thrive in the competitive online landscape. We offer a user-friendly platform with seamless navigation, ensuring that your customers enjoy a smooth shopping experience. What sets our Ecommerce Solutions apart is the focus on customization. We understand that your brand is unique, and we provide you with the tools to reflect your identity in every aspect of your online store, from the color scheme to product presentation.


                <br /> <br />
                 We understand that businesses evolve, and our Ecommerce Solutions are designed to evolve with you. Our platform is highly scalable, allowing you to add new features, expand your product offerings, and adapt to the changing needs of your business. We offer competitive pricing that fits your budget while delivering exceptional value. With our Ecommerce Solutions, you don't need to compromise between affordability and quality. Looking for the best <a href="https://urdustem.com/empowering-online-businesses-with-a-professional-ecommerce-service-provider/" target='blank' rel='noopener' style={{textDecoration:"none"}}> ecommerce service provider</a>? Look no further, Technic Mentors will help you sell online seamlessly. 
              </p>
            </div>

            <div className="container mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-chart-line me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Seamless User Experience</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-users edu-icons me-3"></i>
                      <p className="card-title"><strong>Mobile Optimized</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-graduation-cap me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Customization</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-warehouse me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Robust Inventory Management</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3  edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-money-bill me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Payment Security</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0" >
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-id-card me-3 edu-icnos"></i>
                      <p className="card-title"><strong>SEO Friendly</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-square-poll-horizontal me-3  edu-icnos"></i>
                      <p className="card-title"><strong>Analytics And Reporting</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-book me-3 edu-icnos"></i>
                      <p className="card-title"><strong>24/7 Support</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-book-open-reader me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Scalability</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-money-check-dollar me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Competitive Pricing</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<Calltoaction />

    </div>
  )
}

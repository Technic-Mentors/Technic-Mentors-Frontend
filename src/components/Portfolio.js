import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
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
              Our Portfolio
            </h1>
          </div>
        </div>
      </div>

      <section id="services-section">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="col-md-6">
              <div className="section-title text-start" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h2> Our past Work Speaks Of Our Quality</h2>
                <h3>
                  Explore Our <span>Portfolio</span>
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
                Technic Mentors is more than a software company; we're your
                technology partners, bringing innovative ideas to life. Our
                portfolio showcases a spectrum of software services, from web
                and mobile app development to custom solutions, AI, blockchain,
                and cloud technologies. We're driven by your success and
                collaborate closely to create digital solutions that surpass
                expectations.
                <br />
                <br />
                Our portfolio represents our passion for creativity and client
                success. Projects like the groundbreaking mobile app in
                different industries and the game-changing e-commerce platform
                for several local and international companies stand as
                testaments to our dedication to excellence. With a commitment to
                quality, security, and peak performance, we aim to set new
                industry standards. Reach out to us, and together, we can turn
                your vision into a remarkable digital reality.
              </p>
            </div>

            <div className="col-md-6">
              <img
                src="assets/img/portfolio-img.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="row">
            <div className="col-md-4 port-column mt-4">
              <div className="portfolio-cards">
                <div className="card-body">
                  <div className="icon-box fa-2x ">
                    <i
                      className="fa-regular fa-lightbulb mb-4"
                      style={{ color: "#106ec6" }}
                    ></i>
                    <h5 style={{ color: "#106ec6" }}>
                      <strong>Innovative Solutions</strong>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 port-column mt-4">
              <div className="portfolio-cards">
                <div className="card-body">
                  <div className="icon-box fa-2x">
                    <i
                      className="fa-regular fa-handshake mb-4"
                      style={{ color: "#106ec6" }}
                    ></i>
                    <h5 style={{ color: "#106ec6" }}>
                      <strong>Collaborative Partnerships</strong>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 port-column mt-4">
              <div className="portfolio-cards ">
                <div className="card-body">
                  <div className="icon-box fa-2x">
                    <i
                      className="fa-solid fa-fingerprint mb-4"
                      style={{ color: "#106ec6" }}
                    ></i>
                    <h5 style={{ color: "#106ec6" }}>
                      <strong>Quality And Security</strong>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="clients-portfolio-section "
        style={{ backgroundColor: "#f1f3fe" }}
      >
        <div className="container mt-4">
          <div className="section-title mb-3 text-center">
            <h2> Web Development Projects </h2>
            <h3>
              Our Portfolio Of <span>Web Development Projects</span>{" "}
            </h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <a
                  href="https://totaldentallab.com/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\total-dental-portfolio.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    TOTAL DENTAL LAB
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                <a
                  href="https://capobrain.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\capobrain-portfolio.png"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    CAPOBRAIN
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                <a
                  href="https://www.lettechnologies.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\lettech-portfolio.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    LET TECHNOLOGIES
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                <a
                  href="https://alahadmarketing.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\alahad-portfolio.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    AL-AHAD
                  </h2>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-3 ">
                <a
                  href="https://mobilfiksern.no/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\mobilfiksern-portfolio.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    MOBIL FIKSERN
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                <a href="https://pinar.pk/" target="_blank" rel="noreferrer">
                  <img
                    src="assets\img\portfolio\pinar-portfolio.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    PINAR
                  </h2>
                </div>
              </div>

              <div className="col-md-3  ">
                <a href="https://k2land.pk/" target="_blank" rel="noreferrer">
                  <img
                    src="assets\img\portfolio\k2land-portfolio.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    k2 LAND
                  </h2>
                </div>
              </div>

              <div className="col-md-3  ">
                <a
                  href="https://danishgroupco.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\danish-group-portfolio.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    DANISH GROUP OF COMPANIES
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3  ">
                <a
                  href="https://firstclicksolutions.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\first-click-portfolio.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    FIRST CLICK SOLUTIONS
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                <a
                  href="https://farooqgraphics.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\farooq-portfolio.png"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    FAROOQ GRAPHICS
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                <a
                  href="https://legalexglobal.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\legalexglobal-portfolio.png"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    LEGALEX GLOBAL
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                <a href="https://getwell.pk/" target="_blank" rel="noreferrer">
                  <img
                    src="assets\img\portfolio\getwell-portfolio.png"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                </a>
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    GET WELL
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/Website-portfolio">
            <button className="btn btn-outline-primary">Explore More</button>
          </Link>
        </div>
      </section>
      {/* wen portfolio */}

      <section
        className="clients-portfolio-section"
        style={{ backgroundColor: "#f1f3fe" }}
      >
        <div className="container">
          <div className="section-title mb-3 text-center">
            <h2> Web Software Projects </h2>
            <h3>
              Our Portfolio Of <span>Web Softwares</span>{" "}
            </h3>
          </div>
          <div className="container">
            <div className="row">
              
              <div className="col-md-3 ">
                  <img
                  
                    src="assets\img\software portfolio\desktop-pos.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    Desktop pos
                  </h2>
                </div>
              </div>

              <div className="col-md-3  ">
                  <img
                  
                    src="assets\img\software portfolio\web pos.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    web pos
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                  <img
                  
                    src="assets\img\software portfolio\restaurant-management-system.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    Resturant Management system
                  </h2>
                </div>
              </div>

              <div className="col-md-3  ">
                  <img
                  
                    src="assets\img\software portfolio\tailoring-software.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    Tailoring software
                  </h2>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-3 ">
                  <img
                  
                    src="assets\img\software portfolio\real-estate-management-system.png"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    real estate management system
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                  <img
                  
                    src="assets\img\software portfolio\election-management-system.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    Election Management System
                  </h2>
                </div>
              </div>
       
              <div className="col-md-3  ">
                  <img
                  
                    src="assets\img\software portfolio\trading-software.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    trading software
                  </h2>
                </div>
              </div>

              <div className="col-md-3 ">
                  <img
                  
                    src="assets\img\software portfolio\precasting-manufacturing-software.jpg"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    Precasting-manufacturing Software
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-3 mb-3">
                  <img
                  
                    src="assets\img\software portfolio\billing software.webp"
                    className="img-fluid portfolio-images"
                    alt=""
                  />
                <div className="section-title text-center">
                  <h2 className="mt-2" style={{ backgroundColor: "white" }}>
                    Billing Software
                  </h2>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </section>
      {/* wen portfolio */}
    </div>
  );
}

import React, { useEffect } from "react";
import CountUp from "react-countup";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

export default function About() {
  useEffect(() => {
    console.log('useEffect in About component called');
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://technicmentors.com/about" />
        <meta name="description" content="This is the meta description for my page." />
      </Helmet>
      <div
        className="background-image1"
        style={{ backgroundImage: `url(${"assets/img/bg-header.webp"})` }}
      >
        <div className="color-overlay1 d-flex align-items-center justify-content-center">
          <div>
            <h1
              className="head text-center text-white animate__animated animate__zoomIn"
            >
              About Company
            </h1>
          </div>
        </div>
      </div>

      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <div className="section-title">
            <h2>About Us</h2>
            <h3>
              Choose The Best <span>IT Services Company</span>
            </h3>
            <p>
              Enhance your business operations and technological capabilities by
              partnering with the ideal IT services company to provide tailored
              solutions and support.
            </p>
          </div>

          <div className="row d-flex justify-content-between">
            <div
              className="col-md-6 mt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="about-bg-img">
                <img
                  src="assets/img/technologies.webp"
                  className="img-fluid"
                  alt="technic"
                />
              </div>
            </div>

            <div
              className="col-lg-6 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1>
                Committed to Delivering Excellence: Our IT Services Promise
              </h1>
              <p className="fst-italic" style={{ textAlign: "justify" }}>
                Technic mentors is the best <a href="https://urdustem.com/it-consulting-services-unveiled-navigating-success-with-expert-guidance/" target="blank" rel="noopener" style={{textDecoration:"none"}}> IT consulting company</a> to look at
                when searching for extraordinary software and technology
                solutions. We provide value-added and quality products and
                services. Our team is specialized and experienced and provides
                our clients with the finest experience ever.
              </p>

              <p style={{ textAlign: "justify" }}>
                We provide IT solutions for commercial clients, government,
                institutions, and schools. Our solutions are all aimed to
                improve the learning and development ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mission">
              <div className="card mission-vision">
                <i className="bi bi-bullseye"></i>
                <div>
                  <h5>Our Mission</h5>
                  <p style={{ textAlign: "justify" }}>
                    Technic Mentors is dedicated to revolutionizing the software
                    landscape through innovative solutions and mentorship. Our
                    mission is to synergize technology and expertise, promoting
                    growth for individuals and businesses alike.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 vision">
              <div className="card mission-vision">
                <i className="bi bi-binoculars"></i>
                <div>
                  <h5>Our Vision</h5>
                  <p style={{ textAlign: "justify" }}>
                    Technic Mentors envisions a world where cutting-edge
                    technology converges with expert mentorship, creating an
                    ecosystem of continuous innovation, empowering individuals
                    and organizations to thrive in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <CountUp end={2013} duration={2} />
                <p className="m-top-8">Year Of Establishment</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <CountUp end={150} duration={2} />
                <p className="m-top-8">Clients Worldwide</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <CountUp end={8} duration={5} />
                <p className="m-top-8">Countries With Active Client</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people"></i>
                <CountUp end={500} duration={2} />
                <p className="m-top-8">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}

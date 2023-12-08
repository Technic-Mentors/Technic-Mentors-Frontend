import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Team() {
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
            <h1 className="head text-center text-white animate__animated animate__zoomIn">
              Our Team
            </h1>
          </div>
        </div>
      </div>
      
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="section-title">
            <h2>Team</h2>
            <h3>
              Our Executives' <span>Team</span>
            </h3>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\nadeem-pic.webp"
                    className="img-fluid executive"
                    
                    alt="ceo-img"
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Nadeem Munir</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Akhzar-Nazir.webp"
                    className="img-fluid executive"
                    
                    alt="akhzar-img"
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Akhzar Nazir</h4>
                  <span>Head Mobile Development</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Waseem.webp"
                    className="img-fluid executive"
                    
                    alt="waseem-img"
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Waseem Munir</h4>
                  <span>Head Sales & Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team section-bg dev-team">
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="section-title">
            <h2>Our Team Of Developers</h2>
            <h3>
              Our Skilled <span>Developers' Team</span>
            </h3>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Danish.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Danish Mirza</h4>
                  <span>Full Stack Laravel Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Hadeed img.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Hadeed Ul Hassan</h4>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Haram ashraf.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Haram Ashraf</h4>
                  <span>Software Quality Assurance Analyst</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Maham naeem.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Darakhshan Naeem</h4>
                  <span>Laravel Developer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Usama Munir.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Usama Munir</h4>
                  <span>Laravel Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Bilal.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Bilal Yousuf</h4>
                  <span>React.Js | Node.Js Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\iqra-1.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Iqra Maqsood</h4>
                  <span>React.Js Devevloper</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Makhshaf.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Makhshaf Sharif</h4>
                  <span>Software Quality Assurance Analyst</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Wajiha.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Wajiha Zainab</h4>
                  <span>Software Quality Assurance Analylst</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\ANAS.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Muhammad Anas Faizan</h4>
                  <span>Flutter Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\faizan.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Zeshan Murtaza</h4>
                  <span>Jr. Laravel Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\ata.webp"
                    className="img-fluid team-member"  
                    alt=""
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Ata Ur Rehman</h4>
                  <span>React.Js | Node.Js Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

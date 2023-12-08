import React from 'react'

export default function General() {
  return (
    <div>
      <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a
            href="mailto:info@technicmentors.com">info@technicmentors.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+923 111 122 144</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="https://www.facebook.com/TechnicMentors" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="https://twitter.com/TechnicMentors" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="https://www.instagram.com/technicmentorsofficial" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="https://www.youtube.com/c/TechnicMentors" className="youtube"><i className="bx bxl-youtube"></i></a>
        <a href="https://www.linkedin.com/in/TechnicMentors/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        <a href="https://www.pinterest.com/technicmentors/" className="pinterest"><i className="bx bxl-pinterest"></i></a>
      </div>
    </div>
  </section>

  {/* <!-- ======= Header ======= --> */}
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html"><img
            src="D:\\BizLand\BizLand\assets\img\technicblue.png" alt="technic"/></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
       <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="technic" /></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="file:///D:/BizLand/BizLand/about-us.html">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
           <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li className="dropdown"><a href="#/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#/">Drop Down 1</a></li>
              <li className="dropdown"><a href="#/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#/">Deep Drop Down 1</a></li>
                  <li><a href="#/">Deep Drop Down 2</a></li>
                  <li><a href="#/">Deep Drop Down 3</a></li>
                  <li><a href="#/">Deep Drop Down 4</a></li>
                  <li><a href="#/">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#/">Drop Down 2</a></li>
              <li><a href="#/">Drop Down 3</a></li>
              <li><a href="#/">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <h1>Be The <span>Game Changer</span></h1>
      <h2>Helping you grow your business by enabling technology <br />for your business</h2>
      <div className="d-flex">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=ZX3JdYyJlds" className="glightbox btn-watch-video"><i
            className="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>
  {/* <!-- End Hero --> */}

  <main id="main">

    {/* <!-- ======= Featured Services Section ======= --> */}
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="#/">Education Management System</a></h4>
              <p className="description">An all-in-one solution for your school mangement activites</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="#/">Enterprise Resource Planning</a></h4>
              <p className="description">Seamlessly manage all resources of your large enterprise</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="#/">Ecommerce Solutions</a></h4>
              <p className="description">Leverage the online selling with our Ecommerce solutions</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="#/">Point of Sale</a></h4>
              <p className="description">Mange your daily transactions and inventory with our POS system</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Featured Services Section --> */}

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
          <h3>Choose The Best <span>IT Services Company</span></h3>
          <p>Enhance your business operations and technological capabilities by partnering 
            with the ideal IT services company to provide tailored solutions and support.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <img src="assets/img/about.jpg" className="img-fluid" alt="technic" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <h3>Committed to Delivering Excellence: Our IT Services Promise</h3>
            <p className="fst-italic">
              Technic mentors is the best IT consulting company to look at when searching for 
              extraordinary software and technology solutions. We provide value-added and quality products and services. 
              Our team is specialized and experienced and provides our clients with the finest experience ever.
            </p>
            <ul>
              <li>
                <i className="bx bx-store-alt"></i>
                <div>
                  <h5>Our Mission</h5>
                  <p>Technic Mentors is dedicated to revolutionizing the software landscape 
                    through innovative solutions and mentorship. 
                    Our mission is to synergize technology and expertise, 
                    promoting growth for individuals and businesses alike.</p>
                </div>
              </li>
              <li>
                <i className="bx bx-images"></i>
                <div>
                  <h5>Our Vision</h5>
                  <p>Technic Mentors envisions a world where cutting-edge technology
                     converges with expert mentorship, creating an ecosystem of continuous innovation.</p>
                </div>
              </li>
            </ul>
            <p>
              We provide IT solutions for commercial clients, government, institutions, and schools. 
              Our solutions are all aimed to improve the learning and development ecosystem.
            </p>
          </div>
        </div>

      </div> 
      </section>
      {/* <!--End of About Section--> */}

    {/* <!-- ======= Skills Section ======= --> */}
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">Laravel <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">React Native <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">ReactJs <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">VueJs <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">PHP <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/ CMS <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Skills Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="2013" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Year Of Establishment</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Clients Worldwide</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="8" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Countries With Active Client</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Counts Section --> */}

    {/* <!-- ======= Clients Section ======= --> */}
    <section id="clients" className="clients section-bg">
      <div className="container" data-aos="zoom-in">

        <div className="row">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\clients\client-alahadmarketing-logo.png"
               alt="client-logo-alahad-marketing" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\clients\client-first-click-solutions-logo.png"
               alt="client-logo-first-click-solutions" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\clients\client-getwell-logo.png"
               alt="client-getwell-logo" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\clients\client-lettechnologies-logo.png"
               alt="client-lettechnologies-logo" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\clients\client-sheikhlaw-logo.png"
               alt="client-sheikhlawcompany-logo" />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\clients\client-danish-groupco-logo.png"
               alt="client-danishgrouco-logo" />
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Clients Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <h3>We Are Dedicated To <span>Serve You All Time</span></h3>
          <p>Explore a comprehensive range of IT solutions designed to empower your business and drive success.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="#/">Web Design & Development</a></h4>
              <p>Elevate your online presence with captivating web designs and seamless development expertise.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="#/">Software Development</a></h4>
              <p>From concept to code, we craft tailored software solutions that drive efficiency and innovation.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in"
            data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="#/">Mobile Apps Development</a></h4>
              <p>Innovative mobile development for seamless experiences, enhancing engagement and digital footprint.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4><a href="#/">Digital Marketing</a></h4>
              <p>Strategic digital marketing amplifying your brand, driving growth, and captivating your target
                audience.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4><a href="#/">SEO Services</a></h4>
              <p>Optimize visibility and drive traffic with our result-oriented SEO strategies and expert
                implementation.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-arch"></i></div>
              <h4><a href="#/">Graphics Designing</a></h4>
              <p>Impactful graphics translating ideas into stunning designs, leaving lasting impressions for your visual
                needs.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\client-img1.jpeg" className="testimonial-img"
                  alt="technic" />
                <h3>Muhammad Khan</h3>
                <h4>CEO Mobilfiksern</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  The team at Technic Mentors offers excellent and on-schedule services.
                  When I first discussed what I needed, they were quick to respond with perfect solution.
                  Excellent domain knowledge and professionalism. Would love to work with them again.
                  Highly Recommended!!
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\client-img2.jpeg" className="testimonial-img"
                  alt="technic" />
                <h3>Arish Virk</h3>
                <h4>CEO Baroha Farms, Islamabad</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Technic Mentors is offering really very good services for web development.
                  Our website developed by Technic Mentors is very attractive and user
                  friendly for the use of our company employees and field users.
                  We highly recommend Technic Mentors for Web Development Services.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\client-img3.jpg" className="testimonial-img"
                  alt="technic" />
                <h3>Uju Fidel</h3>
                <h4>Manager Crox Media, London</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  “Their expertise in software development is truly exceptional. 
                  They exceeded our expectations and delivered outstanding results. 
                  A reliable partner for all your software needs.”
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
     <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <h3>Check our <span>Portfolio</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae
            autem.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-4.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-5.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-6.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-7.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-8.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-9.jpg"  alt="technic" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* End Portfolio Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
     <section id="team" className="team section-bg">
       <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <h3>Our Hardworking <span>Team</span></h3>
          <p>Meet the team that converts your ideas into reality.</p>
        </div>
        <div className="slider-container">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="row">
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                  <div className="member">
                  <div className="member-img">
                  <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\nadeem-pic.jpg"  alt="technic" />
                  <div className="social">
                    <a href="#/"><i className="bi bi-twitter"></i></a>
                    <a href="#/"><i className="bi bi-facebook"></i></a>
                    <a href="#/"><i className="bi bi-instagram"></i></a>
                    <a href="#/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Nadeem Munir</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="member">
                <div className="member-img">
                  <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Akhzar-Nazir.jpg"  alt="technic" />
                  <div className="social">
                    <a href="#/"><i className="bi bi-twitter"></i></a>
                    <a href="#/"><i className="bi bi-facebook"></i></a>
                    <a href="#/"><i className="bi bi-instagram"></i></a>
                    <a href="#/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Akhzar Nazir</h4>
                  <span>Head Mobile Development</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="member">
                <div className="member-img">
                  <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Waseem.jpg"  alt="technic" />
                  <div className="social">
                    <a href="#/"><i className="bi bi-twitter"></i></a>
                    <a href="#/"><i className="bi bi-facebook"></i></a>
                    <a href="#/"><i className="bi bi-instagram"></i></a>
                    <a href="#/"><i className="bi bi-linkedin"></i></a>
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
        </div>
        </div>
      </div>  
      <div className="section-title">
        <h2>Team</h2>
        <h3>Our Hardworking <span>Team</span></h3>
        <p>Meet the team that converts your ideas into reality.</p>
      </div>
      <div className="owl-carousel owl-theme">
        <div className="item">
          <div className="member">
            <div className="member-img">
              <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\nadeem-pic.jpg"  alt="technic" className="nadeem-img" />
              <div className="social">
                <a href="#/"><i className="bi bi-twitter"></i></a>
                <a href="#/"><i className="bi bi-facebook"></i></a>
                <a href="#/"><i className="bi bi-instagram"></i></a>
                <a href="#/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Nadeem Munir</h4>
              <span>CEO & Founder</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="member">
            <div className="member-img">
              <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Akhzar-Nazir.jpg"  alt="technic" className="akhzar-img" />
              <div className="social">
                <a href="#/"><i className="bi bi-twitter"></i></a>
                <a href="#/"><i className="bi bi-facebook"></i></a>
                <a href="#/"><i className="bi bi-instagram"></i></a>
                <a href="#/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Akhzar Nazir</h4>
              <span>Head Mobile Development</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="member">
            <div className="member-img">
              <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Waseem.jpg"  alt="technic" className="waseem-img" />
              <div className="social">
                <a href="#/"><i className="bi bi-twitter"></i></a>
                <a href="#/"><i className="bi bi-facebook"></i></a>
                <a href="#/"><i className="bi bi-instagram"></i></a>
                <a href="#/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Waseem Munir</h4>
              <span>Head Mobile Development</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="member">
            <div className="member-img">
              <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Danish.jpg"  alt="technic" className="danish-img" />
              <div className="social">
                <a href="#/"><i className="bi bi-twitter"></i></a>
                <a href="#/"><i className="bi bi-facebook"></i></a>
                <a href="#/"><i className="bi bi-instagram"></i></a>
                <a href="#/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Danish Mirza</h4>
              <span>Senior Full Stack Developer</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="member">
            <div className="member-img">
              <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Hadeed img.jpg"  alt="technic" className="hadeed-img" />
              <div className="social">
                <a href="#/"><i className="bi bi-twitter"></i></a>
                <a href="#/"><i className="bi bi-facebook"></i></a>
                <a href="#/"><i className="bi bi-instagram"></i></a>
                <a href="#/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Hadeed Ul Hassan</h4>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="member">
            <div className="member-img">
              <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Haram ashraf.jpg"  alt="technic" className="haram-img" />
              <div className="social">
                <a href="#/"><i className="bi bi-twitter"></i></a>
                <a href="#/"><i className="bi bi-facebook"></i></a>
                <a href="#/"><i className="bi bi-instagram"></i></a>
                <a href="#/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Haram Ashraf</h4>
              <span>Software Quality Assurance Analyst</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="member">
            <div className="member-img">
              <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Maham naeem.jpg"  alt="technic" className="maham-img" />
              <div className="social">
                <a href="#/"><i className="bi bi-twitter"></i></a>
                <a href="#/"><i className="bi bi-facebook"></i></a>
                <a href="#/"><i className="bi bi-instagram"></i></a>
                <a href="#/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Darakhshan Naeem</h4>
              <span>Laravel Developer</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="member">
            <div className="member-img">
              <img src="C:\Users\Hadeed\Downloads\BizLand\BizLand\assets\img\team\Usama Munir.jpeg"  alt="technic" className="usama-img" />
              <div className="social">
                <a href="#/"><i className="bi bi-twitter"></i></a>
                <a href="#/"><i className="bi bi-facebook"></i></a>
                <a href="#/"><i className="bi bi-instagram"></i></a>
                <a href="#/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Usama Munir</h4>
              <span>Laravel Developer</span>
            </div>
          </div>
        </div>
      
        </div>
        
    {/* </div> */}

    </section>  
    {/* <!-- End Team Section --> */}

      
    {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>F.A.Q</h2>
          <h3>Frequently Asked <span>Questions</span></h3>
          <p>Our curated list of the most frequently asked questions about us.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <ul className="faq-list">

              <li>
                <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">What services does your company 
                  provide? <i className="bi bi-chevron-down icon-show"></i><i
                    className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Our company offers a wide range of IT services, including software development, 
                    web development, mobile app development, IT consulting, cloud solutions, 
                    cybersecurity, and more. We specialize in tailoring solutions to meet your specific business needs.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">How much will it cost to develop a custom software solution 
                  for my business? <i className="bi bi-chevron-down icon-show"></i><i
                    className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    The cost of developing custom software depends on various factors, such as project complexity, features, and technology stack. We provide personalized quotes after a detailed project assessment. 
                    Our goal is to offer cost-effective solutions that align with your budget and requirements.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">What is your approach to ensuring data security and privacy? <i className="bi bi-chevron-down icon-show"></i><i
                    className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    We take data security and privacy seriously. Our team follows industry 
                    best practices and adheres to stringent security measures to safeguard your data. 
                    We implement encryption, access controls, and regular security audits to protect your information.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">How long will it take to complete a software development project? <i className="bi bi-chevron-down icon-show"></i><i
                    className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Project timelines vary based on project scope and complexity. During the project planning phase, we provide you with a detailed timeline. We work diligently to meet deadlines and keep 
                    you updated on the project's progress throughout its lifecycle.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Do you provide ongoing support and maintenance after the project is completed? <i className="bi bi-chevron-down icon-show"></i><i
                    className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Yes, we offer post-development support and maintenance services. Our team is available to address any issues, 
                    implement updates, and provide technical assistance to ensure your software continues to perform optimally.
                  </p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Can you provide references or examples of past projects you've completed? <i
                    className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Absolutely! We can share case studies and provide references from previous clients. 
                    You can also browse our portfolio on our website to see examples of projects 
                    we've successfully delivered.
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Frequently Asked Questions Section --> */}

    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <h3><span>Contact Us</span></h3>
          <p>Have any query? Our support team is always there to respond you. Just drop a message here and we will get back to you.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>United Kingdom | Norway | Pakistan</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>info@technicmentors.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+923 111 122 144</p>
            </div>
          </div>

        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6 ">
            <iframe className="mb-4 mb-lg-0"
            src="https://www.google.com/maps/d/u/0/embed?mid=1DGgSINjLUssm-lD0CO8LjBztg3FiAZE&ehbc=2E312F" title='map' frameborder="0" style={{border:0, width: "100%", height: "384px"}} allowfullscreen></iframe>
          </div>

          <div className="col-lg-6">
            <form id="contactForm" className="contactform">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" id="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}

  </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Technic Mentors<span>.</span></h3>
            <p>
              United Kingdom |
              Norway | <br />Pakistan <br /><br />
              <strong>Phone:</strong> +923 111 122 144<br />
              <strong>Email:</strong> info@technicmentors.com<br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Web Design & Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Software Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Mobile Apps Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">SEO Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Digital Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#/">Graphics Designing</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Follow us on all social channels to get the latest upates regarding our services.</p>
            <div className="social-links mt-3">
              <a href="https://www.facebook.com/TechnicMentors" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="https://twitter.com/TechnicMentors" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="https://www.instagram.com/technicmentorsofficial" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="https://www.youtube.com/c/TechnicMentors" className="youtube"><i className="bx bxl-youtube"></i></a>
              <a href="https://www.linkedin.com/in/TechnicMentors/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              <a href="https://www.pinterest.com/technicmentors/" className="pinterest"><i className="bx bxl-pinterest"></i></a>
              

            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container py-4">
      <div className="copyright">
        &copy; Copyright <strong><span>Technic Mentors</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. --> */}
        {/* <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ --> */}
        Designed by <a href="#/">Technic Mentors</a>
      </div>
    </div>
    </footer>
  {/* <!-- End Footer --> */}

  <div id="preloader"></div>
  <a href="#/" className="back-to-top d-flex align-items-center justify-content-center"><i
      className="bi bi-arrow-up-short"></i></a>

















    </div>
    
  );
}

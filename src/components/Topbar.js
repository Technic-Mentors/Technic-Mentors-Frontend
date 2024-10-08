import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Topbar() {
  const location = useLocation()
  if (location.pathname === "/adminPanel/addblog" || location.pathname === "/adminPanel/board" || location.pathname === "/adminPanel/allposts" || location.pathname === "/adminPanel/allcategory" || location.pathname === "/adminPanel/addcategory" || location.pathname === "/adminPanel/alltickets") {
    return null;
  }
  return (
    <div>
      <div
        className="container-fluid ps-4 pe-0 d-none d-lg-block"
        style={{ backgroundColor: "#684df4" }}
      >
        <div className="row gx-0 d-flex align-items-center">
          <div className="col-md-8 d-flex text-lg-start mb-2 mb-lg-0">
            <p className="m-0 mx-1 text-white">
              <i className="fa fa-envelope-open me-1"></i>
              info@technicmentors.com
            </p>&nbsp;&nbsp;&nbsp;
            <p className="m-0 text-white">
              <i className="fa-brands fa-whatsapp"></i><a style={{ textDecoration: "none", color: "white" }} href='tel:+923 111 122 144'> +923 111 122 144</a>
            </p>

          </div>
          <div className="col-md-4 text-center text-lg-end py-1">
            <div className="position-relative d-inline-flex align-items-center top-shape px-5 py-1">
              <a
                href="https://www.facebook.com/TechnicMentors"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-facebook-f text-white"></i>
                <span className="d-none">face</span>
              </a>
              <a
                href="https://twitter.com/TechnicMentors"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-twitter text-white"></i>
                <span className="d-none">twi </span>
              </a>
              <a
                href="https://www.youtube.com/c/TechnicMentors"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-youtube text-white"></i>
                <span className="d-none">you </span>
              </a>
              <a
                href="https://www.linkedin.com/in/TechnicMentors/"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle "
              >
                <i className="fab fa-linkedin-in text-white"></i>
                <span className="d-none">linked </span>
              </a>
              <a
                href="https://www.instagram.com/technicmentorsofficial"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
              >
                <i className="fa-brands fa-instagram text-white"></i>
                <span className="d-none">insta </span>
              </a>
              <a
                href="https://wa.me/923111122144"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
              >
                <i className="fa-brands fa-whatsapp text-white"></i>
                <span className="d-none">what </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

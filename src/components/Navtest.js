import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Navbar() {

const menuitem = [
{path:"/", text: 'Home'},
{path: "/about", text: 'About',
submenu:[
  {path: "/team", text: 'Team'},
{path: "/our-portfolio", text: 'Our Portfolio'},
]
},
{ text: "Services",
  submenu: [
    { path: "/web-development-services", text: "Web Design & Development" },
    { path: "/software-development-services", text: "Software Development" },
    { path: "/mobile-app-development-services", text: "Mobile App Development" },
    { path: "/seo-services", text: "SEO Services" },
    { path: "/digital-marketing-services", text: "Digital Marketing" },
    { path: "/graphics-designing-services", text: "Graphics Designing" },
  ],
},
{path: "/products", text: 'Products', 
submenu:[
  {path: "/education-management-system", text: "Education Management System"},
  {path: "/erp-solutions", text: "Enterprise Resource Planning"},
  {path: "/ecommerce-solutions", text: "Ecommerce Solutions"},
  {path: "/point-of-sale", text: "Point Of Sale"},
]
},
{path: "/contact", text: 'Contact'}
]
const location = useLocation();
const isLinkActive = (linkpath) => {return linkpath === location.pathname ? "active" : ""}



return (
    <div>
      <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      
      
       <Link to="/" className="logo"><img src="assets\img\technicblue.png" alt="technic" /></Link>

      <nav id="navbar" className="navbar">
        {/* <ul>
          {menuitem.map ((link) => (
            <li><Link className={`nav-link scrollto ${isLinkActive(link.path)}`} to={link.path}>{link.text}</Link></li>
          )) }            
        </ul> */}

<ul>
  {menuitem.map((link) => (
    <li key={link.path}>
      {link.submenu ? (
        // If there's a submenu, render a dropdown
        <div className={`dropdown ${isLinkActive(link.path)}`}>
          
          <Link className="dropdown-text d-flex" >{link.text}<i className="bi bi-chevron-down"></i></Link>
          
          
          
          <ul className="dropdown-menu dropdown">
            {link.submenu.map((submenuLink) => (
              <li className="dropdown-item" key={submenuLink.path}>
                <Link
                  className={`nav-link dropdown scrollto ${isLinkActive(submenuLink.path)}`}
                  to={submenuLink.path}
                >
                  {submenuLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // If there's no submenu, render a simple link
        <Link className={`nav-link scrollto ${isLinkActive(link.path)}`} to={link.path}>
          {link.text}
        </Link>
      )}
    </li>
  ))}
</ul>






        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>
  )
}






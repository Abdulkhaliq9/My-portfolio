import React from "react";
import { Link , useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";


export default function SidePanel() {


  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <header className="header">
        {" "}
        <div className="profile">
          <div className="title">Abdul Khaliq</div>
          <div className="subtitle subtitle-typed">
            <div className="typing-title" style={{ display: "none" }}>
              <p>Web Developer</p>
              <p>Front-End Developer</p>
              {/* <p>Illustrator</p> */}
            </div>{" "}
            <span className="r-typed">Front-End Developer</span>
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            >
              |
            </span>
          </div>
        </div>{" "}
        <div className="top-menu top-menu-onepage menu-minimal">
          <div className="menu-main-menu-container">
            <ul id="menu-main-menu" className="menu">
              <li
                data-id="menu-item-107"
                className={`menu-item menu-item-type-post_type menu-item-object-page ${
                  isActive("/") ? "current-menu-item" : ""
                }`}              >
                <Link to="/" className="one-page-menu-item">
                  {/* <span className="icon bx bx-user"></span> */}
                  <Icon icon="bx:user" className="icon" />
                  <span className="name">About</span>
                </Link>
              </li>
              <li
                data-id="menu-item-108"
                className={`menu-item menu-item-type-post_type menu-item-object-page ${
                  isActive("/resume") ? "current-menu-item" : ""
                }`}              >
                <Link to="/resume" className="one-page-menu-item">
                  <Icon icon="bx:list-ul" className="icon" />
                  <span className="name">Resume</span>
                </Link>
              </li>
              <li
                data-id="menu-item-109"
                className={`menu-item menu-item-type-post_type menu-item-object-page ${
                  isActive("/works") ? "current-menu-item" : ""
                }`}
              >
                <Link to="/works" className="one-page-menu-item">
                  <Icon icon="bx:network-chart" className="icon" />
                  <span className="name">Works</span>
                </Link>
              </li>
           
              <li
                data-id="menu-item-111"
                className={`menu-item menu-item-type-post_type menu-item-object-page ${
                  isActive("/contactus") ? "current-menu-item" : ""
                }`}
              >
                <Link to="/contactus" className="one-page-menu-item">
                  <Icon icon="bx:envelope" className="icon" />{" "}
                  <span className="name">Contact</span>
                </Link>
              </li>
              <li
                data-id="menu-item-333"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <Link to="https://github.com/Abdulkhaliq9" className="one-page-menu-item">
                <Icon icon="la:github" className="icon" />{" "}
                  <span className="name">GitHub</span>
                </Link>
              </li>  
              {/* <li
                data-id="menu-item-333"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <a href="#lessons" className="one-page-menu-item">
                <Icon icon="la:instagram" className="icon" />{" "}

                  <span className="name">Instagram</span>
                </a>
              </li>
               */}
              
              {/* <Link to= "www.linkedin.com/in/abdul-khaliq-subhani"> */}
               <li
                data-id="menu-item-333"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <Link to="https://www.linkedin.com/in/abdul-khaliq-subhani" className="one-page-menu-item">
                <Icon icon="la:linkedin" className="icon" />{" "}

                  <span className="name">Linked-In</span>
                </Link>
              </li> 
              
              {/* </Link> */}
              
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

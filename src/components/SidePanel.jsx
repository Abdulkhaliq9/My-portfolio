import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function SidePanel() {
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
                className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-142 current_page_item"
              >
                <Link to="/" className="one-page-menu-item">
                  {/* <span className="icon bx bx-user"></span> */}
                  <Icon icon="bx:user" className="icon" />
                  <span className="name">About</span>
                </Link>
              </li>
              <li
                data-id="menu-item-108"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <Link to="/resume" className="one-page-menu-item">
                  <Icon icon="bx:list-ul" className="icon" />
                  <span className="name">Resume</span>
                </Link>
              </li>
              <li
                data-id="menu-item-109"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <Link to="/works" className="one-page-menu-item">
                  <Icon icon="bx:network-chart" className="icon" />
                  <span className="name">Works</span>
                </Link>
              </li>
              {/* <li
                data-id="menu-item-110"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <a href="#blog" className="one-page-menu-item">
                  <span className="icon far fa-comment-dots"></span>
                  <span className="name">Blog</span>
                </a>
              </li> */}
              <li
                data-id="menu-item-111"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
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
                <a href="#lessons" className="one-page-menu-item">
                <Icon icon="la:facebook" className="icon" />{" "}
                  <span className="name">Lessons</span>
                </a>
              </li>  
              <li
                data-id="menu-item-333"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <a href="#lessons" className="one-page-menu-item">
                <Icon icon="la:instagram" className="icon" />{" "}

                  <span className="name">Lessons</span>
                </a>
              </li> <li
                data-id="menu-item-333"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <a href="#lessons" className="one-page-menu-item">
                <Icon icon="la:twitter" className="icon" />{" "}

                  <span className="name">Lessons</span>
                </a>
              </li> <li
                data-id="menu-item-333"
                className=" menu-item menu-item-type-post_type menu-item-object-page"
              >
                <a href="#lessons" className="one-page-menu-item">
                <Icon icon="la:linkdin" className="icon" />{" "}

                  <span className="name">Lessons</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

import { useState } from "react";
// import back from "./assets/background.svg";
// import viteLogo from "/vite.svg";
// import "boxicons"
import "./App.css";
import BackGround from "./components/BackGround";
import SidePanel from "./components/SidePanel"; 
import Profile from "./components/Profile"; 
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import ContactUs from "./pages/ContactUs";
import {Route,Routes} from 'react-router-dom';


function App() {

 
  return (
    <>
      <div className="home page-template page-template-template-elementor-builder page-template-template-elementor-builder-php page page-id-142 body-style-dark body-style-textured theme-ryancv woocommerce-no-js elementor-default elementor-kit-4 elementor-page elementor-page-142">
        <div className="page page_wrap theme-style-textured theme-style-blured theme-style-dark">
          <BackGround />

          <div className="container opened solid-icons-style textured-icons-style layout-futurism-style">


          <SidePanel />
          <Profile/>
          <div className="s_overlay"></div>


          <Routes>

          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contactus" element={<ContactUs />} />
          
          </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

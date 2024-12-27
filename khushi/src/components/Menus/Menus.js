import React from 'react'
import './Menu.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-scroll';
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";

const Menus = ({toggle}) => {
  return (
    <>
     {toggle ? (
      <>
      <Zoom>
      <div className='navbar-profile-pic'>
      <img src = "khushi-pic.jpg" alt = "profile pic" />
      </div>
      </Zoom>
      <Fade left>
      <div className = "nav-items">
        <div className='nav-item'>
          <div className='nav-link'>
            <Link to="home" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcHome />
            Home
            </Link>
            </div>
            <div className='nav-link'>
              <Link to="about" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcAbout />
            About
            </Link>
            </div>
            <div className='nav-link'>
              <Link to="education" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcReadingEbook />
            Education
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="tech" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcBiotech />
            Tech Stack
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="project" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcList />
            Projects
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="work" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcPortraitMode />
            Work experience
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="contact" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcBusinessContact />
            Contact
              </Link>
            </div>
        </div>
      </div>
      </Fade>
      </>
     ) : (
      <>
      <div className = "nav-items">
        <div className='nav-item'>
          <div className='nav-link'>
          <Link to="home" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcHome />
            </Link>
            </div>
            <div className='nav-link'>
            <Link to="about" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcAbout />
            </Link>
            </div>
            <div className='nav-link'>
            <Link to="education" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcReadingEbook />
              </Link>
            </div>
            <div className='nav-link'>
            <Link to="tech" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcBiotech />
              </Link>
            </div>
            <div className='nav-link'>
            <Link to="project" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcList />
              </Link>
            </div>
            <div className='nav-link'>
            <Link to="work" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcPortraitMode />
              </Link>
            </div>
            <div className='nav-link'>
            <Link to="contact" 
            spy={true} 
            smooth={true} 
            offset={-100}
            duration={100}>
            <FcBusinessContact />
              </Link>
            </div>
        </div>
      </div></>
     )}
    </>
  )
}

export default Menus

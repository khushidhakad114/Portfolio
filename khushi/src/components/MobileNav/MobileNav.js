import React , {useState} from 'react'
import './MobileNav.css'
import { MdMenu } from "react-icons/md";
import { Link } from 'react-scroll';
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { AiOutlineMenuFold } from "react-icons/ai";

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuClick = () => {
        setOpen(false);
    };
    return (
        <>
        <div className='mobile-nav'>
            <div className='mobile-nav-header'>
                {open ? (
                    <AiOutlineMenuFold size={30} 
                    className='mobile-nav-icon' 
                    onClick={handleOpen} />
            ) : (
            <MdMenu size={30} 
            className='mobile-nav-icon' 
            onClick={handleOpen} />
            )}
            <span className='mobile-nav-title'>
                My Portfolio App
            </span>
            </div>
             {open && (
                <div className='mobile-nav-menu'>
                <div className = "nav-items">
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to="home" 
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={100}
                onClick={handleMenuClick}>
                <FcHome />
                Home
                </Link>
                </div>
                <div className='nav-link'>
                  <Link to="about" 
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={100}
                onClick={handleMenuClick}>
                <FcAbout />
                About
                </Link>
                </div>
                <div className='nav-link'>
                  <Link to="education" 
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={100}
                onClick={handleMenuClick}>
                <FcReadingEbook />
                Education
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="tech" 
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={100}
                onClick={handleMenuClick}>
                <FcBiotech />
                Tech Stack
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="project" 
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={100}
                onClick={handleMenuClick}>
                <FcList />
                Projects
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="work" 
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={100}
                onClick={handleMenuClick}>
                <FcPortraitMode />
                Work experience
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="contact" 
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={100}
                onClick={handleMenuClick}>
                <FcBusinessContact />
                Contact
                  </Link>
                </div>
            </div>
          </div>
                </div>
            )}
        </div>
        </>
    )
}

export default MobileNav;
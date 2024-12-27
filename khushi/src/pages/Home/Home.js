import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import Fade from 'react-reveal/Fade';
import './home.css'
import Typewriter from 'typewriter-effect'
import Resume from '../../assests/docs/resume.pdf'
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Home = () => {
  const [theme,setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  };
  return (
    <div className='container-fluid home-container' id="home">
      <div className='theme-btn' onClick={handleTheme}>
        {theme === 'light' ? (
          <FaMoon size={20} /> 
        ) : (
        <MdSunny size={20}/>
      )}
      </div>
      <div className='container home-content'>
        <Fade right>
        <h2>Hi 👋 I'm a</h2>
        <h1><Typewriter options={{
             strings: ['Full Stack Developer ,', 
                      'MERN Stack Developer ,',
                       'React Native Developer !'],
             autoStart: true,
             loop: true,
  }}/>
  </h1>
  </Fade>
  <Fade bottom>
  <div className='home-buttons'>
    <a className='btn btn-hire' 
      href='https://api.whatsapp.com/send?phone=6264487893'
      rel='noreferrer'
      target='_blank'>
      Hire Me
      </a>
    <a className='btn btn-cv' href={Resume} download='Khushi.pdf'>
      My Resume
       </a>
  </div>
  </Fade>
      </div>
    </div>
  )
}

export default Home

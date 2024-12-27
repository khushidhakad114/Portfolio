import React from 'react'
import './About.css'
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <>
    <Jump>
    <div className='about' id="about">
      <div className='row'>
        <div className='col-md-6 about-img'>
        <img src='khushi-pic.jpg' alt=''/>
        </div>
        <div className='col-md-6 about-content'>
            <h1>About me</h1>
            <p>
            I am currently pursuing a Bachelor of 
            Technology (B.Tech) in Computer Science 
            Engineering at Madhav Institute of Technology
            and Science, Gwalior. I have a strong passion 
            for technology and software development, with 
            hands-on experience in building applications 
            using modern web technologies. I am eager to 
            continue learning and applying my skills in 
            software development, problem-solving, and 
            coding. Through my projects and coursework, 
            I strive to explore innovative solutions and contribute to the tech world.
            </p>
        </div>
      </div>
    </div>
    </Jump>
    </>
  )
}

export default About

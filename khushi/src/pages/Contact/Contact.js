import React from 'react';
import "./Contact.css";
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact' id="contact">
      <div className='card card0 border-0'>
        <div className='row'>
          <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
            <div className='card1'>
              <div className='row border-line'>
                <LightSpeed>
                <img src="./images.jpeg" alt="contact" className='image' />
                </LightSpeed>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
          <Rotate>
            <div className='card2 d-flex card border-0 px-4 py-5'>
              <div className='row'>
                <h6 className='d-flex align-items-center '> {/* Added flex for alignment */}
                  Contact With
                  <FaLinkedin color='blue' size={30} className='ms-2' />
                  <FaGithub size={30} className='ms-2' />
                  <span style={{
                    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                    borderRadius: '15%', 
                    padding: '5px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '30px',  
                    height: '30px',  
                    marginLeft: '8px' 
                  }}>
                    <FaInstagram size={24} color='white' />
                  </span>
                </h6>
                <div className='row px-3 mb-4'>
                  <div className='line' />
                  <small className='or text-center'>OR</small>
                  <div className='line' />
                </div>
                <div className='row px-3'>
                  <input type='text' name='name' placeholder='Name' className='mb-3' />
                </div>
                <div className='row px-3'>
                  <input type='email' name='email' placeholder='Email Address' className='mb-3' />
                </div>
                <div className='row px-3'>
                  <textarea name='msg' placeholder='Write your message' className='mb-3' />
                </div>
                <div className='row px-3'>
                  <button className='btn' type='submit'>
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

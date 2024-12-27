import React from 'react'
import './Projects.css'
import Spin from 'react-reveal/Spin';

const Projects = () => {
    return (
        <>
        <div className='container project' id="project">
        <h2 className='col-12 mt-3 mb-1 text-center'>
          Top Recent Project
          </h2>
        <hr />
        <p className='pb-3 text-center'>
            👇 Here, are my top recent project with live links and source code.
        </p>
        <div className='row' id='ads'>
            <Spin>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>
                            Full Stack
                        </span>
                        <img src='https://cdn.dribbble.com/users/2181377/screenshots/14084662/prancheta___1_4x.png' alt='project1' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>
                            Node
                        </span>
                        <span className='card-detail-badge'>
                            Express
                        </span>
                        <span className='card-detail-badge'>
                            React
                        </span>
                        <span className='card-detail-badge'>
                            Mongodb
                        </span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                Portfolio Website
                            </h5>
                        </div>
                        <a className='ad-btn' href='#'>
                            View
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>
                            Full Stack
                        </span>
                        <img src='https://cdn.slidesharecdn.com/ss_thumbnails/onlinestudentattendance-231023185708-150591da-thumbnail.jpg?width=640&height=640&fit=bounds' alt='project1' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>
                            Node
                        </span>
                        <span className='card-detail-badge'>
                            Express
                        </span>
                        <span className='card-detail-badge'>
                            React
                        </span>
                        <span className='card-detail-badge'>
                            Mongodb
                        </span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                Attendance Website
                            </h5>
                        </div>
                        <a className='ad-btn' href='view'>
                            View
                        </a>
                    </div>
                </div>
            </div>
  </Spin>
        </div>
    </div>
</>
    );
};

export default Projects;
import React from 'react'
import { FaReact } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }
from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "./WorkExp.css"

const WorkExp = () => {
  return (
    <>
      <div className='work' id="work">
        <div className='container work-exp'>
            <h2 className='col-12 mt-3 mb-1 text-center'>
                Work Experience
            </h2>
            <hr />
            <VerticalTimeline lineColor="rgb(52, 84, 74)">
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - Present"
    iconStyle={{ background: 'rgb(52, 84, 74)', color: '#fff' }}
    icon={<FaReact />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">MITs Gwalior, IN</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(52, 84, 74)', color: '#fff' }}
    icon={<FaReact />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
    <h4 className="vertical-timeline-element-subtitle">Model Convent High School, Gwalior, IN</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp

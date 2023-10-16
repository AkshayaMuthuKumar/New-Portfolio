import React from 'react';
import {Element} from 'react-scroll';
import "./Skill.css";
import skillimg from "../assets/skillimg.webp";
import {LinearProgress} from '@material-ui/core';


const Skill = () => {
  return (
    <Element className='skillcont' id="skills">
      <div className='skillcont-img'>
        <img src={skillimg} alt =""></img>
      </div>
      <div className='skillcont-text'>
        <h2>SKILL SET</h2>
        <div className='skillcont-skillset'>
          <h5>React</h5>
          <div className='skillcont-slider skillcont-slider1'>
            <LinearProgress variant="determinate" value={50}></LinearProgress>
          </div>
        </div>

        <div className='skillcont-skillset'>
          <h5>Express JS</h5>
          <div className='skillcont-slider skillcont-slider2'>
            <LinearProgress variant="determinate" value={50}></LinearProgress>
          </div>
        </div>

        <div className='skillcont-skillset'>
          <h5>HTML</h5>
          <div className='skillcont-slider skillcont-slider3'>
            <LinearProgress variant="determinate" value={80}></LinearProgress>
          </div>
        </div>

        <div className='skillcont-skillset'>
          <h5>CSS</h5>
          <div className='skillcont-slider skillcont-slider4'>
            <LinearProgress variant="determinate" value={80}></LinearProgress>
          </div>
        </div>

        <div className='skillcont-skillset'>
          <h5>JAVA SCRIPT</h5>
          <div className='skillcont-slider skillcont-slider5'>
            <LinearProgress variant="determinate" value={50}></LinearProgress>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Skill

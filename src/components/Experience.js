import React from 'react';
import "./Experience.css";
import {Element} from 'react-scroll';
import Exp from './Exp';


const Experience = () => {
  return (
      <Element className='expercont' id = "exp">
        <h1>Experience</h1>
        <div className="expinfo">
            <Exp number="+10" title="Clients"/>
            <Exp number="60+" title="Projects" style ={{backgroundColor : "#f64c08"}}/>
            <Exp number="6+" title="Years Teaching"/>
            <Exp number="6000+" title="Students got trained"/>
        </div>
      </Element>
  )
}

export default Experience

import React from 'react';
import './Projects.css';
import {Element} from 'react-scroll';
import Pro from './Pro';


const Projects = () => {
  const cliprojects = [
    {
      img : "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      title : "Facebook",
      desc : "My project contains abcdefr dfdsfionsi sdnweriwer sdfrmioejreiw sdmfeiwfrwi szdfinesuin",
      link : "www.google.com",
    },
    {
      img : "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      title : "Facebook",
      desc : "My project contains abcdefr dfdsfionsi sdnweriwer sdfrmioejreiw sdmfeiwfrwi szdfinesuin",
      link : "www.google.com",
    },
    {
      img : "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      title : "Facebook",
      desc : "My project contains abcdefr dfdsfionsi sdnweriwer sdfrmioejreiw sdmfeiwfrwi szdfinesuin",
      link : "www.google.com",
    },
    {
      img : "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      title : "Facebook",
      desc : "My project contains abcdefr dfdsfionsi sdnweriwer sdfrmioejreiw sdmfeiwfrwi szdfinesuin",
      link : "www.google.com",
    },
    {
      img : "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      title : "Facebook",
      desc : "My project contains abcdefr dfdsfionsi sdnweriwer sdfrmioejreiw sdmfeiwfrwi szdfinesuin",
      link : "www.google.com",
    },
    {
      img : "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      title : "Facebook",
      desc : "My project contains abcdefr dfdsfionsi sdnweriwer sdfrmioejreiw sdmfeiwfrwi szdfinesuin",
      link : "www.google.com",
    },
    {
      img : "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      title : "Facebook",
      desc : "My project contains abcdefr dfdsfionsi sdnweriwer sdfrmioejreiw sdmfeiwfrwi szdfinesuin",
      link : "www.google.com",
    },
  ]
  return (
    <Element className="projectcont" id="projects">
      <h1>Projects</h1>
      <p>Here are some projects which I done for making lives of people easy</p>
      <div className='projectcont-pro'>
        {
          cliprojects.map((project,index)=>{
            return (
              <Pro key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
            )
          })
        }

      </div>
    </Element>
  )
}

export default Projects;

import React from 'react';
import { Link } from 'react-scroll';
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className='top-content'>
        <div className='topcontent-container'>
            <h1>Ms.Akshaya Muthukumar</h1>
            <p>Web and App Developer</p>
            <a >
                <button className='topcontent-downbtn'>Download CV</button>
            </a>
            <Link to= "projects" smooth={true} duration={500}>
                <button className='topcontent-wrkbtn'>My Work</button>
            </Link>

        </div>
      
    </div>
  )
}

export default TopContent

import React from 'react';
import { Element } from 'react-scroll';
import TopContent from './TopContent';
import "./TopContainer.css"

const TopContainer = () => {
  return (
    <div>
      <Element className='topcontainer' name='about'>
        <TopContent/>

      </Element>
    </div>
  )
}

export default TopContainer

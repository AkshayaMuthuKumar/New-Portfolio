import React from 'react';
import "./Contact.css";
import {Element} from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';


const Contact = () => {
  return (
    <Element className='contact' id= 'contact'>
      <h1>Contact</h1>
      <div className='contcon'>
        <p>Email : <span>akshaya1907@gmail.com</span></p>
        <p>Github UserName: <span>https://github.com/AkshayaMuthuKumar</span></p>
        <div className='contact_icons'>
            <a href="google.com">
                <IconButton>
                    <LinkedIn/>
                </IconButton>
            </a>
            <a href="google.com">
                <IconButton>
                    <Facebook/>
                </IconButton>
            </a>
            <a href="google.com">
                <IconButton>
                    <Instagram/>
                </IconButton>
            </a>
        </div>
      </div>
    </Element>
  )
}

export default Contact

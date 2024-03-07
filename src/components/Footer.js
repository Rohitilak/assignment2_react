import React from 'react'
import './Footer.css';
import { FaFacebook,FaInstagram, FaTwitter,FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div id="footer-main">
             <img src='./images/logo.png' id="logo"></img>
             <p className='footer-para' style={{textAlign : "center"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt<br/> consequuntur amet culpa cum itaque neque.</p>
             <ul id="menu">
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
             </ul>
             <ul id="social-links">
                <li className='icons'><FaFacebook /></li>
                <li className='icons'><FaInstagram /></li>
                <li className='icons'><FaTwitter /></li>
                <li className='icons'><FaGithub /></li>
                <li className='icons'><FaLinkedin /></li>
             </ul>
        </div>
    </footer>
  )
}

export default Footer;

import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Dhruv Shah</h4>
      <h4>Copyright &copy; 2025 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/dhruvshah464" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/shah-dhruv-" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:dhruvurmilshah@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a>  */}
      </div>
    </footer>
  )
}

export default Footer
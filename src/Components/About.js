import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import CodingBoy from '../LottieFiles/Coding boy.json';
const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, I'm <b>Dhruv Shah</b> from Ahmedabad, Gujarat. I’m a <b>MERN stack web developer</b> and final-year BTech student in <b>Electrical Engineering</b>, specializing in <b>Cyber Physical Systems</b>.
             I enjoy building creative, functional projects—check out a few in the projects section!

Beyond tech, I’ve played <b>professional-level cricket and tennis</b>, represented Gujarat in major leagues, and I’m passionate about photography. You can find my visual work on <a href="https://www.instagram.com/visualsbydhruv" target="_blank">@visualsbydhruv</a>.

I’m <b>open</b> to collaborations and exciting roles where I can learn and contribute—connect with me through the links in the footer!
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={CodingBoy} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
         <Skills skill='Machine Learning'/>
         <Skills skill='Artificial Intelligence'/>


        
      </div>
    </>
  )
}

export default About
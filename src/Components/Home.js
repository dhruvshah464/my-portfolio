import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>DHRUV SHAH</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love transforming ideas into functional digital products that make a difference.
I enjoy solving problems that push my limits and spark creativity.
<br /><br />
I'm fluent in <b>C++</b> and <b>Python</b>, and actively building projects using the <b>MERN</b> stack.
My current focus is integrating <b>AI/ML</b> into real-world use cases with <b>TensorFlow</b>, <b>SQL</b>, and more.
<br />
I also work with <b>Embedded Systems</b> like <b>Arduino</b> and <b>Raspberry Pi</b>, connecting hardware and software.
<br /><br />
I’m exploring <b>Next.js</b>, <b>Three.js</b>, <b>TypeScript</b>, <b>IoT</b>, and <b>Edge AI</b>
to build intelligent, connected solutions.
<br /><br />
From sleek web apps to smart systems, I love crafting tech that matters.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
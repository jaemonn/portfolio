import React from 'react'

// icons
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

// image
import profileImage from '../assets/images/profile_image.jpg'

function Hero() {
  return (
    <div id="home" className="flex items-center justify-center h-screen bg-base">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={profileImage} className="max-w-sm rounded-full shadow-2xl" alt="Profile" />
        <div>
          <p className="pb-14 text-xl">Hey there!</p>
          <h1 className="text-5xl font-bold">I'm <span className="">Mond</span> <br />A React developer</h1>
          <p className="py-7 text-xl">a developer, gamer, reader</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
          <div className="flex">
            <a href="https://github.com/jaemonn" target="_blank" rel="noreferrer" className="pr-4 transition duration-300 hover:text-secondary"><SiGithub size={50} /></a>
            <a href="https://github.com/jaemonn" target="_blank" rel="noreferrer" className="pr-4 transition duration-300 hover:text-secondary"><SiLinkedin size={50} /></a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
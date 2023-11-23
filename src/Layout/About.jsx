import React from 'react'

function About() {
  return (
    <section id="about" className="h-fit flex items-center justify-center bg-gray-50 px-80 py-40">
      <div className="container">
        <div className="grid">
          <div className="about-me-content">
            <h1 className="uppercase text-4xl font-semibold leading-10 text-secondary text-center pb-20">About me</h1>
            <p className="text-lg">
              I am a crafty developer based in London with proficiency in HTML, CSS, JavaScript, React, Tailwind, Boostrap, Python, and DevOps.
              My expertise focuses on crafting dynamic design and seamless user interfaces, with a knowledge of building databases that suits the needs of my clients.
              I am keen on honing my craft—programming—to its finest. I am also a team player.
              <br /> <br />
              In my spare time, I play video games, and read fiction and nonfiction books.
            </p>
          </div>
        </div>
        <div className="carousel flex justify-center items-center rounded-box p-10 space-x-4 w-full">
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=html" alt="HTML dev skill"/>
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=css" alt="CSS dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=js" alt="JavaScript dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=react" alt="ReactJS dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=python" alt="Python dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=github" alt="Github dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=docker" alt="Docker dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL dev skill" />
          </div>
          <div className="carousel-item">
            <img src="https://skillicons.dev/icons?i=flask" alt="Flask API dev skill" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
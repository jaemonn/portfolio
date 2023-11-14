import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'
import Hero from './Hero'

function index() {
  return (
    <>
      <Header />
      <div className="mx-auto justify-center scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </>
  )
}

export default index
import React from 'react'
import Projects from './Projects'
import About from './About'
import Experience from './Experience'
import Footer from './Footer'

export default function MainPage() {
  return (
    <>
      <section id='home' className='main-container'>
        <div className='main-about'>
          <h2>Hello! I am</h2>
          <h1 className='welcome'>abdallah_harun</h1>
          <br />
          <h2>Junior Software Engineer</h2>
          <br />
          <p>Software Development Tools · HTML5 · Cascading Style Sheets (CSS) · JavaScript · React.js · Node.js · Express.js · MongoDB · Mongoose ODM · Django · Python (Programming Language) · PostgreSQL · Git · GitHub</p>
        </div>
        {/* <div
          className='main-graphic'
        >
          <img alt='homepage background' src={require('../Projects-Files/Portfolio/walkator-background.jpeg')} />
        </div> */}
      </section>

    <About />

    <Experience />

    <Projects />

    <Footer />

    </>
  )
}
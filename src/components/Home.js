import React from 'react'
import Projects from './Projects'
import About from './About'
import Experience from './Experience'
import Footer from './Footer'

import { DiReact, DiHtml5, DiJavascript, DiCss3, DiNodejsSmall, DiMongodb, DiDjango, DiPython, DiPostgresql, DiGit, DiGithubBadge, DiBootstrap, DiSass, DiNpm } from "react-icons/di"
import { SiInsomnia, SiMaterialui, SiYarn } from "react-icons/si"

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
          <ul className='welcome-icon-container'>
            <li><DiReact size={45} className='welcome-icons' /><span className='list-text'>React.js</span></li>
            <li><DiHtml5 size={45} className='welcome-icons' /><span className='list-text'>HTML5</span></li>
            <li><DiJavascript size={45} className='welcome-icons' /><span className='list-text'>JavaScript</span></li>
            <li><DiCss3 size={45} className='welcome-icons' /><span className='list-text'>CSS3</span></li>
            <li><DiNodejsSmall size={45} className='welcome-icons' /><span className='list-text'>Node.js</span></li>
            <li><DiMongodb size={45} className='welcome-icons' /><span className='list-text'>MongoDB</span></li>
            <li><DiDjango size={45} className='welcome-icons' /><span className='list-text'>Django</span></li>
            <li><DiPython size={45} className='welcome-icons' /><span className='list-text'>Python</span></li>
            <li><DiPostgresql size={45} className='welcome-icons' /><span className='list-text'>PostgreSQL</span></li>
            <li><DiGit size={45} className='welcome-icons' /><span className='list-text'>Git</span></li>
            <li><DiGithubBadge size={45} className='welcome-icons' /><span className='list-text'>GitHub</span></li>
            <li><SiInsomnia size={45} className='welcome-icons' /><span className='list-text'>Insomnia</span></li>
            <li><DiBootstrap size={45} className='welcome-icons' /><span className='list-text'>React<br/>Bootstrap</span></li>
            <li><SiMaterialui size={45} className='welcome-icons' /><span className='list-text'>Material UI</span></li>
            <li><DiSass size={45} className='welcome-icons' /><span className='list-text'>Sass</span></li>
            <li><DiNpm size={45} className='welcome-icons' /><span className='list-text'>NPM</span></li>
            <li><SiYarn size={45} className='welcome-icons' /><span className='list-text'>Yarn</span></li>
          </ul>
        </div>
        {/* <div
          className='main-graphic'
        >
          <img alt='homepage background' src={require('../Projects-Files/Portfolio/walkator-background.jpeg')} />
        </div> */}
      </section>

      <About />

      <Projects />

      <Experience />

      <Footer />

    </>
  )
}
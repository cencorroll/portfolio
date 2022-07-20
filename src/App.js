import './App.css'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNavBar from './components/PageNavBar'
import { HashLink as Link } from 'react-router-hash-link'
import Home from './components/Home'
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import About from './components/About';

function App() {

  // so I can have a black background across everything
  document.body.style = 'background: black;'
  return (
    <BrowserRouter>

      {/* PageNavBar is above routes so that it can be displayed on each page */}
      <PageNavBar />

      <Routes>
        <Route path='/portfolio' element={<Home />} />
        {/* <Route path='/portfolio/about' element={<About />} />
        <Route path='/portfolio/experience' element={<Experience />} />
        <Route path='/portfolio/projects' element={<Projects />} /> */}
      </Routes>

      <Link to='#about' smooth></Link>
      <Link to='#experience' smooth></Link>
      <Link to='#projects' smooth></Link>
      <Link to='#footer' smooth></Link>

    </BrowserRouter>
  );
}

export default App;

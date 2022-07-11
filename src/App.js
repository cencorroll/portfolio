import './App.css'
import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNavBar from './PageNavBar'
import MainPage from './components/MainPage'
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {

  // so I can have a black background across everything
  document.body.style = 'background: black;'
  return (
    <BrowserRouter>
    {/* PageNavBar is above routes so that it can be displayed on each page */}
      <PageNavBar />
      <Routes>
        <Route path='/' element={<MainPage /> } />
        <Route path='/experience' element={<Experience /> } />
        <Route path='/projects' element={<Projects /> } />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;

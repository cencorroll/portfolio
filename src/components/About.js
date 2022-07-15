import React from 'react'
import { Button } from '@mui/material'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'

export default function About() {
  return (
    <section id='about' className='about-page'>
      <div>
        <h2>About Me</h2>
        <p>Experienced Site Engineer with a demonstrated history of working in the civil engineering industry. Looking to introduce myself to the tech industry as a Junior Software Developer. <br />
          Enrolled in a Software Engineering Immersive course with General Assembly in order to learn new skills in an ever expanding industry and to also delve deeper within my interests. I have gained an insight into what it takes to navigate problems as a web developer and the hard skills it takes to build almost anything. <br />
          The next step in my journey is to start working within tech and gain an opportunity to realise my goals. I am looking to make use of the skills and knowledge I have learnt in a professional capacity and to apply all of this at an exciting and relevant workplace.</p>
      </div>

      <div className='interests'>
        <div className='interest-item'>
          <div className='music-stuff'>
            <Button
              variant='Link'
              color='#26d93d'
              startIcon={<LibraryMusicIcon />}
              href='https://open.spotify.com/user/cencorolll?si=c79e9c75179e47bb'
            />
            <a href='https://open.spotify.com/album/3Ul8Nyuzr2AEwE8iSrQepC?si=1s_rxa_tR5CsQ6LZOHF8Zw'>
              <img className='music-img' alt='maxwell now album' src='https://i.scdn.co/image/ab67616d0000b273d539670968d6772577efa2b7' />
            </a>
          </div>
          <div className='music-text'></div>
        </div>

        <div className='interest-item'>
          <div className='theatre-text'></div>
          <div className='theatre-stuff'></div>
        </div>

        <div className='interest-item'>
          <div className='exercise-stuff'></div>
          <div className='exercise-text'></div>
        </div>

        <div className='interest-item'>
          <div className='gaming-text'></div>
          <div className='gaming-stuff'></div>
        </div>

      </div>
    </section>
  )
}

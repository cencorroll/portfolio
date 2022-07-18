import React from 'react'


export default function About() {
  return (
    <section id='about' className='about-page'>
      <div>
        <h1>About Me</h1>
        <p>Experienced Site Engineer with a demonstrated history of working in the civil engineering industry. Looking to introduce myself to the tech industry as a Junior Software Developer. <br />
          Enrolled in a Software Engineering Immersive course with General Assembly in order to learn new skills in an ever expanding industry and to also delve deeper within my interests. I have gained an insight into what it takes to navigate problems as a web developer and the hard skills it takes to build almost anything. <br />
          The next step in my journey is to start working within tech and gain an opportunity to realise my goals. I am looking to make use of the skills and knowledge I have learnt in a professional capacity and to apply all of this at an exciting and relevant workplace.</p>
      </div>

      <div className='interests'>
        <h1>Interests</h1>
        <div className='interest-item'>
          <div className='music-stuff'>
            <div className='music-info'>
              <h1>MUSIC</h1>
              <p>I listen to music almost all the time, especially while I'm working. I am a big of fan genres like R&B, Neosoul and Rap</p>
              <p>Click on the images</p>
            </div>
            <a href='https://open.spotify.com/album/3Ul8Nyuzr2AEwE8iSrQepC?si=1s_rxa_tR5CsQ6LZOHF8Zw'>
              <img className='music-img' alt='maxwell now album' src='https://i.scdn.co/image/ab67616d0000b273d539670968d6772577efa2b7' />
            </a>
            <a href='https://open.spotify.com/album/5zUDvKAyEKkrhYLWJJWGPQ?si=lDv7DoJ5TQySCNesFrRV4w'>
              <img className='music-img' alt='sir chasing summer album' src='https://i.scdn.co/image/ab67616d0000b273bbee5481e94a03f4fd26fac4' />
            </a>
            <a href='https://open.spotify.com/album/6WtGNBLv5568Clwzd8u4vj?si=PEcJYMpzRoSvUAOXUFSgMA'>
              <img className='music-img' alt='laya umm hello album' src='https://i.scdn.co/image/ab67616d0000b273071b9cb9ee887dbd7fbb888b' />
            </a>
            <a href='https://open.spotify.com/album/4qaziVzAiu9lJnXbm7Bqs4?si=mVf2TzK0Q9unD3jU3NkDgA'>
              <img className='music-img' alt='zhane saturday night album' src='https://i.scdn.co/image/ab67616d0000b2739466124880f48a5530cbdf50' />
            </a>
            <a href='https://open.spotify.com/album/6jjX8mGrsWtrpYpFhGMrg1?si=Hs1hwMxhRESnFPWt_jtu_Q'>
              <img className='music-img' alt='isaiah rashad the suns tirade album' src='https://i.scdn.co/image/ab67616d00001e02fbdec8696ff05ae19265dfa0' />
            </a>
            <a href='https://open.spotify.com/album/19ZTsKOmz5p78zwWuu4UBv?si=HFcE28oTQ6i0WoJ6wfKFIQ'>
              <img className='music-img' alt='la blue astronne blue phases album' src='https://i.scdn.co/image/ab67616d0000b2739dbd58edeeb02d855c38d6be' />
            </a>
          </div>
          <div className='music-text'></div>
        </div>

        <div className='interest-item'>
          <div className='theatre-text'>Theatre to go here</div>
          <div className='theatre-stuff'></div>
        </div>

        <div className='interest-item'>
          <div className='exercise-stuff'>Exercise to go here</div>
          <div className='exercise-text'></div>
        </div>

        <div className='interest-item'>
          <div className='gaming-text'>Art and Exhibitions to go here</div>
          <div className='gaming-stuff'></div>
        </div>

        <h3 style={{ textAlign: 'center', margin: '20px' }}>borders to be removed</h3>

      </div>
    </section>
  )
}

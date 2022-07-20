import React from 'react'


export default function About() {
  return (
    <section id='about' className='about-page'>
      <div>
        <h1 style={{ marginBottom: '50px' }}>About Me</h1>
        <p style={{ marginBottom: '50px' }}>Experienced Site Engineer with a demonstrated history of working in the civil engineering industry. Looking to introduce myself to the tech industry as a Junior Software Developer. <br />
          Enrolled in a Software Engineering Immersive course with General Assembly in order to learn new skills in an ever expanding industry and to also delve deeper within my interests. I have gained an insight into what it takes to navigate problems as a web developer and the hard skills it takes to build almost anything. <br />
          The next step in my journey is to start working within tech and gain an opportunity to realise my goals. I am looking to make use of the skills and knowledge I have learnt in a professional capacity and to apply all of this at an exciting and relevant workplace.</p>
      </div>

      <hr style={{ color: 'darkgrey' }} />

      <div className='interests'>
        <h1>Interests</h1>
        <div className='interest-item'>
          <div className='music-stuff'>
            <div className='music-info'>
              <p style={{ fontSize: '1em' }}>Music is definitely an important hobby of mine. I listen to it while working because of how much it helps me concentrate. I also love attending concerts and live performances</p>
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
            <a href='https://open.spotify.com/album/19ZTsKOmz5p78zwWuu4UBv?si=HFcE28oTQ6i0WoJ6wfKFIQ'>
              <img className='music-img' alt='la blue astronne blue phases album' src='https://i.scdn.co/image/ab67616d0000b2739dbd58edeeb02d855c38d6be' />
            </a>
          </div>
          <div className='music-text'></div>
        </div>

        <hr style={{ color: 'darkgrey' }} />

        <div className='interest-item'>
        <p style={{ fontSize: '1em' }}>I love attending plays. It's how visual stage actors can be that is a big thing for me. Really good plays can also be very creative with the space they work in. My favorite theatre at the moment is Bush Theatre in Shepherds Bush, West London</p>
          <ul className='theatre-stuff'>
            <li className='theatre-img'>
              <img alt='favour play' src='http://www.cleanbreak.org.uk/media/images/Favour_Homepage_Slide.png' />
              <span className='list-text'>Favour</span>
            </li>
            <li className='theatre-img'>
              <img className='theatre-img' alt='misty play' src='https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2018/09/Misty-still.jpg' />
              <span className='list-text'>Misty</span>
            </li>
            <li className='theatre-img'>
              <img className='theatre-img' alt='favour play' src='https://i.guim.co.uk/img/media/2f1f46f8a829784d18aab26a92e0a361599f1500/0_242_4527_2717/master/4527.jpg?width=620&quality=85&fit=max&s=0e9154187d8b0c83bb97345d47ca9447' />
              <span className='list-text'>Barbershop Chronicles</span>
            </li>
            <li className='theatre-img'>
              <img className='theatre-img' alt='favour play' src='https://media.timeout.com/images/105887807/image.jpg' />
              <span className='list-text'>House of Ife</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

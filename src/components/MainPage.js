import React from 'react'
import { Stack, Button, ImageListItem, ImageList, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'

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
        <div
          className='main-graphic'
        >
          {/* <img alt='homepage background' src={require('../Projects-Files/Portfolio/walkator-background.jpeg')} /> */}
        </div>
      </section>

      <section id='about' className='about-page'>
        <div>
          <h2>About Me</h2>
          <p>Experienced Site Engineer with a demonstrated history of working in the civil engineering industry. Looking to introduce myself to the tech industry as a Junior Software Developer. <br />
            Enrolled in a Software Engineering Immersive course with General Assembly in order to learn new skills in an ever expanding industry and to also delve deeper within my interests. I have gained an insight into what it takes to navigate problems as a web developer and the hard skills it takes to build almost anything. <br />
            The next step in my journey is to start working within tech and gain an opportunity to realise my goals. I am looking to make use of the skills and knowledge I have learnt in a professional capacity and to apply all of this at an exciting and relevant workplace.</p>
        </div>

        <div className='interests'>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
          >
            <div className='interest-item'>
              <div className='music-stuff'>
                <Button
                  variant='Link'
                  color='#26d93d'
                  className='link-icons'
                  startIcon={<LibraryMusicIcon />}
                  href='https://open.spotify.com/user/cencorolll?si=c79e9c75179e47bb'
                />
                <ImageList sx={{ width: 500, height: 170 }} cols={3} rowHeight={164}>
                  <ImageListItem >
                    <a href='https://open.spotify.com/album/3Ul8Nyuzr2AEwE8iSrQepC?si=1s_rxa_tR5CsQ6LZOHF8Zw'>
                      <img className='music-img' alt='maxwell now album' src='https://i.scdn.co/image/ab67616d0000b273d539670968d6772577efa2b7' />
                    </a>
                  </ImageListItem>
                </ImageList>
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

          </Stack>
        </div>
      </section>

      <section id='experience' className='experience'>
        <h4 className='maintext'>General Assembly - Software Engineer | London, UK <br />
          March 2022 - June 2022</h4>
        <p>
          Taken online over Zoom and Slack<br />
          Daily standups, labs, lectures, daily homework and four projects. <br />
          Learnt the fundamentals of full-stack web development</p>

        <h4 className='maintext'>Technical Skills</h4>
        <p>
          <p>
            Frontend: <p className='skills'>HTML, CSS, JavaScript, React.js, Sass, Bootstrap</p>
            Backend: <p className='skills'>Express.js, Node.js, MongoDB, Mongoose, Insomnia, Python, PostgreSQL</p>
            Package: <p className='skills'>Yarn, NPM</p>
            Other: <p className='skills'>Git, GitHub, version control, authentication, pair-programming, RESTful APIs, debugging</p><br /></p>
          <h5>Soft Skills:</h5>
          <p>
            Communication/Leadership - Delegating and reviewing tasks with group members.<br />
            Collaboration - Multiple app projects and pair coding. <br />
            Timekeeping - Reviewing and setting deadlines. Prioritising work to achieve set deadlines.<br /><br />
          </p>
          <h4>Previous experience</h4>
          <h6>Site Engineer<br />
            September 2018 - March 2022<br />
            Contractors: Kier Group PLC, Balfour Beatty, Laing O’Rourke, SCS Railways, EKFB (£200m to 2bn)</h6>
          <p>Used setting out techniques to instruct the site team.<br />
            Managed supply chain to enable smooth delivery of project milestones.<br />
            Prepared all technical and safety documents including permits, work package plans, risk assessment methods and environmental documents.<br />
            Raised technical queries and worked closely with designers in producing construction solutions to relevant technical problems.<br />
            Developed apprentice and graduate engineers to learn and enhance their skills and roles as engineers in the construction industry.<br /></p>
        </p>
      </section>

      <section id='projects' className='projects-container'>
        <h1>Projects</h1>
        <Accordion style={{ backgroundColor: 'black', color: 'grey', border: '1px solid', margin: '5px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'grey' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='heading'>Connect 4 Game</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={12} sm={6}>
              <div className='projects'>
                <Typography>
                  Connect 4 using HTML, CSS and JavaScript. This projected enabled me to gain an in depth and practical understanding of ternary operators and using tools such as querySelect and array methods. The styling was done with CSS.
                </Typography>
                <Button
                  variant='outlined'
                  href='https://cencorroll.github.io/Project1/'
                  style={{ margin: '20px' }}
                >
                  Project 1 - Connect 4 Game
                </Button>
                <Button
                  variant='contained'
                  href='https://github.com/cencorroll/Project1'
                >
                  GitHub Link
                </Button>
                <div className='project1gif'>
                  <img className='imgp1' alt='project 1 gif' src={require('../Projects-Files/Project1/Project1-GIF.gif')} />
                </div>
              </div>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: 'black', color: 'grey', border: '1px solid', margin: '5px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'grey' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='heading'>SpaceX Website</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={12} sm={6}>
              <div className='projects'>
                <Typography style={{ marginBottom: '30px' }}>
                  Created a web app using front-end tools only. The website was one based on a public space-x api. This was done via paircoding with React.js and included heavy use of insomnia.
                  My responsibilities were to create the main index pages for both launches and crews and to test all routes.
                </Typography>
                <Button
                  variant='outlined'
                  href='https://spacex-cencorroll.netlify.app/'
                  style={{ marginBottom: '30px' }}
                >
                  Project 2 - Space X Website
                </Button>
                <Button
                  variant='contained'
                  href='https://github.com/cencorroll/project2'
                  style={{ marginBottom: '30px' }}
                >
                  GitHub Link
                </Button>
                <div className='image-list'>
                  <img className='imgp2' alt='launch index' src={require('../Projects-Files/Project2/LaunchIndex.png')} />
                  <img className='imgp2' alt='launch index' src={require('../Projects-Files/Project2/LaunchShow1.png')} />
                  <img className='imgp2' alt='launch index' src={require('../Projects-Files/Project2/LaunchShow2.png')} />
                  <img className='imgp2' alt='launch index' src={require('../Projects-Files/Project2/CrewIndex.png')} />
                  <img className='imgp2' alt='launch index' src={require('../Projects-Files/Project2/CrewShow.png')} />
                </div>
              </div>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: 'black', color: 'grey', border: '1px solid', margin: '5px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'grey' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='heading'>Europe Travel Guide</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={12} sm={6}>
              <div className='projects'>
                <Typography>
                  Created a full stack web application with an Express API and using MongoDB paired with a React.js front-end. This was done as a group of three and included using schemas and secure routes. The project was a European holiday information website.
                  My deliverables included backend authorization and secure routes, frontend authorization and creating the homepage with a working search bar.
                </Typography>
                <Button
                  variant='outlined'
                  href='https://europetravelguide.herokuapp.com/'
                  style={{ margin: '20px' }}
                >
                  Project 3 - Europe Travel App
                </Button>
                <Button
                  variant='contained'
                  href='https://github.com/cencorroll/project3'
                >
                  GitHub Link
                </Button>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UIBnOm6ddnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
              </div>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: 'black', color: 'grey', border: '1px solid', margin: '5px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'grey' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='heading'>Workout App</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={12} sm={6}>
              <div className='projects'>
                <Typography>
                  Created a full stack application using Python and Django with the front-end being done in react. I did this solo and also used PostgreSQL.
                  This project was a workout and physical health app that involved creating my own API and also incorporating a second one.
                </Typography>
                <Button
                  variant='outlined'
                  href=''
                  style={{ margin: '20px' }}
                >
                  Project 4 - WorkoutOut App
                </Button>
                <Button
                  variant='contained'
                  href='https://github.com/cencorroll/project4'
                >
                  GitHub Link
                </Button>
              </div>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </section>

    </>
  )
}
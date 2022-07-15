import React from 'react'
import { Button, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Projects() {

  return (
    <>
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

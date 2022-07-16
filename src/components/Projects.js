import React from 'react'
import { Button, Typography, Stack, Box } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Projects() {
  return (
    <section id='projects' className='projects-container'>
      <h1 style={{ color: 'black'}} className='hide'>h</h1>
      <h1>Projects</h1>
      <Box sx={{ width: '100%' }}>
        <Stack className='projects-stack' spacing={2}>

          <div className='project1'>
            <div className='project-text'>
              <Typography className='heading'>Connect 4 Game</Typography>
              <Button
                variant='contained'
                startIcon={<GitHubIcon />}
                href='https://github.com/cencorroll/Project1'
              >
              </Button>
              <Button
                variant='contained'
                color='primary'
                startIcon={<LinkIcon />}
                href='https://cencorroll.github.io/project1/'
                style={{ margin: '20px' }}
              ></Button>
              <Typography className='project-description'>
                Connect 4 using HTML, CSS and JavaScript. This projected enabled me to gain an in depth and practical understanding of ternary operators and using tools such as querySelect and array methods. The styling was done with CSS.
              </Typography>
            </div>
            <div className='project1-stuff'>
              <img className='imgp1' alt='project 1 gif' src={require('../Projects-Files/Project1/Project1-GIF.gif')} />
            </div>
          </div>

          <div className='project2'>
            <div className='project-text'>
              <Typography className='heading'>SpaceX Website</Typography>
              <Button
                variant='contained'
                startIcon={<GitHubIcon />}
                href='https://github.com/cencorroll/project2'
              >
              </Button>
              <Button
                variant='contained'
                color='primary'
                startIcon={<LinkIcon />}
                href='https://spacex-cencorroll.netlify.app/'
                style={{ margin: '20px' }}
              ></Button>
              <Typography className='project-description'>
                Created a web app using front-end tools only. The website was one based on a public space-x api. This was done via paircoding with React.js and included heavy use of insomnia.
                My responsibilities were to create the main index pages for both launches and crews and to test all routes.
              </Typography>
            </div>

                <img className='imgp2' alt='launch index' src={require('../Projects-Files/Project2/LaunchIndex.png')} />

          </div>

          <div className='project3'>
            <div className='project-text'>
              <Typography className='heading'>Europe Travel Guide</Typography>
              <Button
                variant='contained'
                startIcon={<GitHubIcon />}
                href='https://github.com/cencorroll/project3'
              >
              </Button>
              <Button
                variant='contained'
                color='primary'
                startIcon={<LinkIcon />}
                href='https://europetravelguide.herokuapp.com/'
                style={{ margin: '20px' }}
              ></Button>
              <Typography>
                Created a full stack web application with an Express API and using MongoDB paired with a React.js front-end. This was done as a group of three and included using schemas and secure routes. The project was a European holiday information website.
                My deliverables included backend authorization and secure routes, frontend authorization and creating the homepage with a working search bar.
              </Typography>
            </div>
            <div className='project3-stuff'>
              <img className='imgp3' alt='project 3 screenshot' src={require('../Projects-Files/Project3/project3screenshot.png')} />
            </div>
          </div>

          <div className='project4'>
            <div className='project-text'>
              <Typography className='heading'>Workout App</Typography>
              <Button
                variant='contained'
                startIcon={<GitHubIcon />}
                href='https://github.com/cencorroll/project4'
              >
              </Button>
              <Button
                variant='contained'
                color='primary'
                startIcon={<LinkIcon />}
                href=''
                style={{ margin: '20px' }}
              ></Button>
              <Typography className='project-description'>
                To be added... To be added...To be added...To be added...To be added...To be added...To be added...To be added...To be added...To be added...To be added...To be added...
              </Typography>
            </div>

              <img className='imgp2' alt='launch index' src={require('../Projects-Files/Project2/LaunchIndex.png')} />
              
          </div>

        </Stack>
      </Box>
    </section>
  )
}

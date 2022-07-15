import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Box, Divider, Drawer, IconButton, List, Toolbar, Typography, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { HashLink } from 'react-router-hash-link'
import { NavHashLink as NavLink } from 'react-router-hash-link'

const drawerWidth = 240

function PageNavBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div className='collapse-bar'>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography 
        style={{ color: 'white' }}
        variant="h6" 
        sx={{ my: 2 }}
        >
          PORTFOLIO
        </Typography>
        <Divider />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <HashLink className='collapse-link' smooth to='/portfolio'>Home</HashLink>
          <HashLink className='collapse-link' smooth to='/portfolio/about'>About Me</HashLink>
          <HashLink className='collapse-link' smooth to='/portfolio/experience'><Button>Experience</Button></HashLink>
          <HashLink className='collapse-link' smooth to='/portfolio/projects'><Button>Projects</Button></HashLink>
        </Stack>
      </Box>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar style={{ backgroundColor: 'black' }} className='navbar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

            <HashLink smooth to='#home'
              style={{
                textDecoration: 'none'
              }}
            >
              <Button
                style={{
                  color: 'white',
                }}>
                Home
              </Button>
            </HashLink>

            <HashLink smooth to='#about'
              style={{
                textDecoration: 'none'
              }}
            >
              <Button
                style={{
                  color: 'white',
                }}>
                About Me
              </Button>
            </HashLink>

            <HashLink smooth to='#experience'
              style={{
                textDecoration: 'none'
              }}
            >
              <Button
                style={{
                  color: 'white'
                }}>
                Experience
              </Button>
            </HashLink>

            <HashLink smooth to='#projects'
              style={{
                textDecoration: 'none'
              }}
            >
              <Button
                style={{
                  color: 'white'
                }}>
                Projects
              </Button>
            </HashLink>

          </Typography>
          <div className='icons-navbar'>
            <Button
              variant='link'
              color='default'
              className='link-icons'
              startIcon={<GitHubIcon />}
              href='https://github.com/cencorroll'
            />
            <Button
              variant='link'
              color='default'
              className='link-icons'
              startIcon={<LinkedInIcon />}
              href='https://www.linkedin.com/in/abdallahharun/'
            />
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

PageNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default PageNavBar




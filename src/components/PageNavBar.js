import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, Button, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email';
import { HashLink } from 'react-router-hash-link'


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

          {/* I left the mui button tag even though I don't need it because I just like the styling more. */}

          <HashLink className='collapse-link' smooth to='#home'><Button>Home</Button></HashLink>
          <HashLink className='collapse-link' smooth to='#about'><Button>About Me</Button></HashLink>
          <HashLink className='collapse-link' smooth to='#experience'><Button>Experience</Button></HashLink>
          <HashLink className='collapse-link' smooth to='#projects'><Button>Projects</Button></HashLink>
          <Button><a href="mailto:aharunddad@gmail.com" style={{ color: 'white' }}><EmailIcon /></a></Button>
        </Stack>
      </Box>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box className='navbar-container' sx={{ display: 'flex' }}>
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
              startIcon={<EmailIcon />}
              href='mailto:aharundd@gmail.com'
            />
            
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




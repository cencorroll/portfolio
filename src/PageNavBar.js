import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ToggleColorMode from './helpers/DarkModeToggle'

const drawerWidth = 240

function PageNavBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Portfolio
      </Typography>
      <Divider />
      <List>
        <Link to='/'><Button>Home</Button></Link>
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
        <ToggleColorMode />
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar style={{ backgroundColor: 'black'}} className='navbar'>
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
            <Link to='/'
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
            </Link>
            <Link to='/experience'
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
            </Link>
            <Link to='/projects'
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
            </Link>
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




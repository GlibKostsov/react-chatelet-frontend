import React, { useState } from 'react'
import {
  Grid,
  Container,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@material-ui/core'
import { logout } from '../actions/physicianActions'
import { MenuIcon, AccountCircle } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

function Header() {
  //variables and functions to manage user icon menu
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  //redux dispatch
  const dispatch = useDispatch()

  //login physician info
  const physicianLogin = useSelector((state) => state.physicianLogin)
  const { physicianInfo } = physicianLogin

  //routes navigator
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/', { replace: true })
  }

  const styleHeader = {
    backgroundColor: '#F2F2F2',
    color: '##2F2E41',
    zIndex: '1000',
    position: 'relative',
  }
  const styleNav = {
    width: '100%',
    height: '5vh',
    display: 'flex',
    alignItems: 'center',
  }

  const styleLogo = {
    color: 'rgb(47, 46, 65)',
    fontWeight: 'bold',
    fontSize: '36px',
  }

  return (
    <header style={styleHeader}>
      <Container>
        <nav style={styleNav}>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '50%' }}>
              <Typography style={styleLogo} sx={{ flexGrow: 1 }}>
                <NavLink
                  to='/'
                  style={(isActive) => ({
                    textDecoration: 'none',
                    color: '#257ABD',
                  })}
                >
                  {' '}
                  Le Chatelet
                </NavLink>
              </Typography>{' '}
              {physicianInfo && (
                <NavLink
                  to='/patients'
                  style={(isActive) => ({
                    textDecoration: 'none',
                    color: '#257ABD',
                    fontSize: '24px',
                    marginLeft: '100px',
                  })}
                >
                  Patients
                </NavLink>
              )}
            </Box>

            <div>
              {physicianInfo ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    style={{
                      color: '#2F2E41',
                      marginRight: '20px',
                      fontSize: '24px',
                    }}
                  >
                    {'Dr. '}

                    {physicianInfo.name}
                  </Typography>
                  <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleMenu}
                    color='#2F2E41'
                  >
                    <AccountCircle
                      style={{ color: '#2F2E41', fontSize: '40px' }}
                    />
                  </IconButton>
                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Mon Profil</MenuItem>
                    <MenuItem onClick={logoutHandler}>Déconnection</MenuItem>
                  </Menu>
                </Box>
              ) : (
                <NavLink
                  style={(isActive) => ({
                    textDecoration: 'none',
                    color: '#2F2E41',
                    fontSize: '22px',
                  })}
                  to='/login'
                >
                  Se connecter
                </NavLink>
              )}
            </div>
          </Grid>
        </nav>
      </Container>
    </header>
  )
}

export default Header

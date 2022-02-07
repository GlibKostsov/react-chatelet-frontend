import React from 'react'
import { Grid, Container, Button, Typography } from '@material-ui/core'

function Header() {
  const styleHeader = {
    backgroundColor: '#F2F2F2',
    color: '#ffffff',
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
    fontWeight: 'medium',
  }

  return (
    <header style={styleHeader}>
      <Container>
        <nav style={styleNav}>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Typography
              style={styleLogo}
              variant='h5'
              component='div'
              sx={{ flexGrow: 1, fontWeight: 'bold' }}
            >
              Clinique Le Chatelet
            </Typography>
            <div>
              <Button>Se connecter</Button>
              <Button>Déconnection</Button>
            </div>
          </Grid>
        </nav>
      </Container>
    </header>
  )
}

export default Header

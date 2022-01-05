import React from 'react'
import { Container, Grid } from '@material-ui/core'
function HomeScreen() {
  const imgStyle = {
    position: 'relative',
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: '-60%',
    marginLeft: '-50%',
  }
  const containerStyle = {
    position: 'absolute',
    maxWidth: '45%',
    maxHeight: '45%',
    top: '50%',
    left: '50%',
    overflow: 'visible',
  }
  const h2Style = {
    position: 'relative',
    maxWidth: '100%',
    maxHeight: '100%',
    fontSize: '2vw',
    marginLeft: '-50%',
    textAlign: 'center',
    color: '#2F2E41',
  }

  return (
    <Container>
      <Grid style={containerStyle}>
        <img
          src='/undraw_winners.png'
          alt='meditating person'
          style={imgStyle}
        />
        <h2 style={h2Style}>Bienvenue sur la page d'accueil ! </h2>
      </Grid>
    </Container>
  )
}

export default HomeScreen

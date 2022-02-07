import React from 'react'
import { Grid, Container, TypeMap, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { flexbox } from '@mui/system'

const Footer = () => {
  const styleFooter = {
    bottom: '0',
    position: 'absolute',
    height: '5%',
    width: '100%',
    color: '#2F2E41',
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    display: 'flex',
  }

  return (
    <footer style={styleFooter}>
      <Container>
        <Grid container justifyContent='center'>
          <Box> &copy; 2021 - 2022 </Box>
          <Box pl={8}> Clinique Le Chatetelet </Box>
          <Box pl={8}>Nous contacter</Box>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer

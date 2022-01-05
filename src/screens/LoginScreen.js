import React from 'react'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Typography,
  Link,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
  const paperStyle = {
    padding: '20px',
    maxWidth: '400px',
    position: 'relative',
  }
  const avatarStyle = {
    backgroundColor: '#257abd',
    position: 'absolute',
    top: '0px',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.5)',
  }

  const btnStyle = { margin: '36px 0 24px  0' }

  return (
    <FormContainer>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Grid align='center'>
            <h2 style={{ marginTop: '32px' }}>Connexion</h2>
          </Grid>
          <TextField
            label='Adresse e-mail'
            placeholder='Adresse e-mail'
            fullWidth
          />
          <TextField
            label='Mot de passe'
            placeholder='Mot de passe'
            type='password'
            fullWidth
          />

          <Button
            style={btnStyle}
            type='submit'
            color='primary'
            variant='contained'
            fullWidth
          >
            Se connecter
          </Button>
          <Typography>
            <Link href='#'>Mot de passe oublié ?</Link>
          </Typography>
          <Typography>
            Pas de compte ?<Link href='#'> Créer un nouveau compte</Link>
          </Typography>
        </Paper>
      </Grid>
    </FormContainer>
  )
}

export default LoginScreen

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
import SecurityIcon from '@material-ui/icons/Security'
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
            <SecurityIcon />
          </Avatar>
          <Grid align='center'>
            <h2 style={{ marginTop: '32px' }}>Validation</h2>
          </Grid>
          <TextField
            label='Code de validation'
            placeholder='Code de validation'
            fullWidth
          />

          <Button
            style={btnStyle}
            type='submit'
            color='primary'
            variant='contained'
            fullWidth
          >
            Valider la connexion
          </Button>
        </Paper>
      </Grid>
    </FormContainer>
  )
}

export default LoginScreen

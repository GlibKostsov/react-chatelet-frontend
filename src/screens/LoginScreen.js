import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as LinkReact, useLocation, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControl,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/physicianActions'

const LoginScreen = () => {
  //state variables and setters
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //redux actions dispatch hook
  const dispatch = useDispatch()
  //redux state selector, physician login information hook
  const physicianLogin = useSelector((state) => state.physicianLogin)
  const { loading, error, physicianInfo } = physicianLogin
  //react router hooks
  const location = useLocation()
  const navigate = useNavigate()
  //redirection link
  const redirect = location.search ? location.search.split('=')[1] : '/'

  //inline styles
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

  //executes before every render / if physician logged in redirects
  useEffect(() => {
    if (physicianInfo) {
      navigate(redirect)
    }
  }, [navigate, physicianInfo, redirect])

  //on form submit
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <form onSubmit={submitHandler}>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <Grid align='center'>
              <h2 style={{ marginTop: '32px' }}>Connexion</h2>
              {error && (
                <Message severity='error' title='Error'>
                  {' '}
                  {error}
                </Message>
              )}
              {loading && <Loader />}
            </Grid>
            <TextField
              label='Adresse e-mail'
              placeholder='Adresse e-mail'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label='Mot de passe'
              placeholder='Mot de passe'
              type='password'
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          </form>
        </Paper>
      </Grid>
    </FormContainer>
  )
}

export default LoginScreen

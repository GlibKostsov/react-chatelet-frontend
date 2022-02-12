import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  ListItemAvatar,
  CardMedia,
  theme,
  PlayArrowIcon,
  SkipNextIcon,
  SkipPreviousIcon,
  Avatar,
  Divider,
  Button,
} from '@mui/material'

//action to get patient details by id
import { patientDetailsAction } from '../actions/patientActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

function PatientDetailsScreen() {
  //redux dispatcher
  const dispatch = useDispatch()
  const theme = useTheme()
  //route navigator
  const navigate = useNavigate()

  //gets physician info from state
  const physicianLogin = useSelector((state) => state.physicianLogin)
  //contains: _id,name,email,isAdmin,token
  const { physicianInfo } = physicianLogin

  //gets data from state
  const patientDetails = useSelector((state) => state.patientDetails)
  //loading: if request is loading data
  //error: request failed
  //patients: request successful and returned data
  const { loading, error, patient } = patientDetails

  //browser router params
  const params = useParams()

  //gets patient id from url with react-router-dom
  const patientId = params.id

  //runs after the render of component is complete
  useEffect(() => {
    if (!physicianInfo) {
      navigate('/login', { replace: true })
    } else {
      dispatch(patientDetailsAction(patientId))
    }
  }, [dispatch, navigate, patientId, physicianInfo])

  return (
    <Box mt={12}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity='error'>{error}</Message>
      ) : (
        patient && (
          <>
            <Grid mb={4}>
              <Typography variant='h5' component='div'>
                Details de patient:{' '}
              </Typography>
            </Grid>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',

                maxWidth: '800px',
              }}
            >
              <Grid sx={{ backgroundColor: 'rgb(37, 122, 189)' }}>
                <Avatar
                  variant='square'
                  alt='Remy Sharp'
                  src={patient.picture.medium}
                  sx={{ width: 100, height: 100, padding: '20px' }}
                />
              </Grid>
              <Divider />

              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      minWidth: 200,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <ListItem>
                      <ListItemText secondary='Nom:' />
                      <ListItemText
                        primary={patient.name.first}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary='Prénom:' />
                      <ListItemText
                        primary={patient.name.last}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary='Âge:' />
                      <ListItemText
                        primary={patient.registered.age}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary='Sex:' />
                      <ListItemText
                        primary={patient.gender}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                  </List>
                </Grid>

                <Grid item xs={4}>
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      minWidth: 200,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <ListItem>
                      <ListItemText secondary='Ville:' />
                      <ListItemText
                        primary={patient.location.city}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary='CP:' />
                      <ListItemText
                        primary={patient.location.postcode}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary='Pays:' />
                      <ListItemText
                        primary={patient.location.country}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                  </List>
                </Grid>

                <Grid item xs={4}>
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      minWidth: 200,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <ListItem>
                      <ListItemText secondary='Rue #:' />
                      <ListItemText
                        primary={patient.location.street.number}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText secondary='Rue nom:' />
                      <ListItemText
                        primary={patient.location.street.name}
                        sx={{ textAlign: 'end' }}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Card>
            <Grid mt={2}>
              <Button onClick={() => navigate(-1)}>Retour</Button>
            </Grid>
          </>
        )
      )}
    </Box>
  )
}

export default PatientDetailsScreen

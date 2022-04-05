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

  const styleInfo = {
    color: 'white',
    fontWeight: 'medium',
    fontSize: '24px',
  }

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
              <Grid
                sx={{
                  backgroundColor: 'rgb(37, 122, 189)',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Avatar
                  variant='square'
                  alt='Remy Sharp'
                  src={patient.picture.medium}
                  sx={{ width: 100, height: 100, p: 3 }}
                />
                <Box sx={{ display: 'flex', px: 6, pt: 3 }}>
                  <Typography style={styleInfo}>
                    {patient.name.first}
                  </Typography>
                  <Typography style={styleInfo} sx={{ ml: 2 }}>
                    {patient.name.last}
                  </Typography>
                </Box>
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
                      <ListItemText
                        secondary={patient.registered.age}
                        primary='Âge:'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Sex:' secondary={patient.gender} />
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
                      <ListItemText
                        primary='Ville:'
                        secondary={patient.location.city}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary='CP:'
                        secondary={patient.location.postcode}
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
                      <ListItemText
                        primary='Rue #:'
                        secondary={patient.location.street.number}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary='Rue nom:'
                        secondary={patient.location.street.name}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary='Pays:'
                        secondary={patient.location.country}
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

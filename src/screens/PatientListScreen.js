import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate, useLocation } from 'react-router-dom'
//material ui components
import {
  tableCellClasses,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table,
  Paper,
  Box,
  Grid,
  Typography,
  Button,
} from '@mui/material'

//material ui styling
import { styled } from '@mui/material/styles'

//date formatting library
import moment from 'moment'

//action to get patient list
import { patientListAction } from '../actions/patientActions'
//custom message component
import Message from '../components/Message'
//custom loader component
import Loader from '../components/Loader'

//table styles
//styles table cell
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(37, 122, 189)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))
//styled table row
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#fafafa',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: '#CCE2F4 !important',
  },
}))

function PatientsScreen() {
  //actions dispatcher
  const dispatch = useDispatch()

  //pages react-router navigator
  const navigate = useNavigate()

  //pages react-router locator
  const location = useLocation()

  //gets physician info from state
  const physicianLogin = useSelector((state) => state.physicianLogin)
  //contains: _id,name,email,isAdmin,token
  const { physicianInfo } = physicianLogin

  //gets patient list from the state
  const patientList = useSelector((state) => state.patientList)
  //loading: if request is loading data
  //error: request failed
  //patients: request successful and returned data
  const { loading, error, patients } = patientList

  //dispatches action before component renders
  useEffect(() => {
    if (physicianInfo && physicianInfo.isAdmin) {
      dispatch(patientListAction())
    } else {
      navigate('/login', { replace: true })
    }
  }, [dispatch, navigate, physicianInfo])

  //handlink user click on table row
  const handleRowClick = (patientId) => {
    navigate(`${location.pathname}/${patientId}`)
  }

  return (
    <Box mt={12}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity='error' title='Error'>
          {error}
        </Message>
      ) : (
        <>
          <Grid mb={4}>
            <Typography variant='h5' component='div'>
              Liste des patients:{' '}
            </Typography>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow key={'table-patients'}>
                  <StyledTableCell align='center'>Identifiant</StyledTableCell>
                  <StyledTableCell align='center'>Nom</StyledTableCell>
                  <StyledTableCell align='center'>Prenom</StyledTableCell>
                  <StyledTableCell align='center'>Ville</StyledTableCell>
                  <StyledTableCell align='center'>
                    Date enregistrement
                  </StyledTableCell>
                  <StyledTableCell align='center'>Âge</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.map((patient) => (
                  <StyledTableRow
                    hover
                    key={patient.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={() => handleRowClick(patient._id)}
                  >
                    <StyledTableCell align='center'>
                      {patient._id}
                    </StyledTableCell>
                    <StyledTableCell align='center' component='th' scope='row'>
                      {patient.name.first}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {patient.name.last}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {patient.location.city}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {moment(patient.registered.date).format('DD-MM-YYYY')}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {patient.registered.age}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid mt={2}>
            <Button onClick={() => navigate(-1)}>Retour</Button>
          </Grid>
        </>
      )}
    </Box>
  )
}

export default PatientsScreen

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

//action to get patient details by id
import { patientDetailsAction } from '../actions/patientActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

function PatientDetailsScreen() {
  //redux dispatcher
  const dispatch = useDispatch()

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
    dispatch(patientDetailsAction(patientId))
  }, [dispatch, patientId])

  return (
    <div>
      <p>Detailles de patient: </p>

      {loading || Object.keys(patient).length === 0 ? (
        <Loader /> //on screen when loading
      ) : error ? (
        <Message severity='error' title='Error'>
          {error}
        </Message> //on screen when error
      ) : (
        <div>{patient.name.first + patient.name.last}</div>
      )}
    </div>
  )
}

export default PatientDetailsScreen

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//action to get patient list
import { listPatients } from '../actions/patientActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

function PatientsScreen() {
  //actions dispatcher
  const dispatch = useDispatch()

  //gets patient list from the state
  const patientList = useSelector((state) => state.patientList)
  //loading: if request is loading data
  //error: request failed
  //patients: request successful and returned data
  const { loading, error, patients } = patientList

  //dispatches action before component renders
  useEffect(() => {
    dispatch(listPatients())
  }, [dispatch])

  return (
    <div>
      <p>Liste des patients: </p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity='error' title='Error'>
          {error}
        </Message>
      ) : (
        <>
          {patients.map((patient) => (
            <li key={patient._id}>{patient.name.first + patient.name.first}</li>
          ))}
        </>
      )}
    </div>
  )
}

export default PatientsScreen

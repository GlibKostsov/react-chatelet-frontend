import axios from 'axios'
import {
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_SUCCESS,
  PATIENT_LIST_FAIL,
  PATIENT_DETAILS_REQUEST,
  PATIENT_DETAILS_SUCCESS,
  PATIENT_DETAILS_FAIL,
} from '../constants/patientConstants'

//action for a list of patients
export const listPatients = () => async (dispatch) => {
  try {
    dispatch({ type: PATIENT_LIST_REQUEST })

    const { data } = await axios.get('/api/patients')

    dispatch({
      type: PATIENT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PATIENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//action for an individual patient
export const patientDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PATIENT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/patients/${id}`)

    dispatch({
      type: PATIENT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PATIENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

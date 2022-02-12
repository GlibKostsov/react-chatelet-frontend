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
export const patientListAction = () => async (dispatch, getState) => {
  try {
    //sets loading global State var to true
    dispatch({ type: PATIENT_LIST_REQUEST })

    //gets login info from current physician global State
    const {
      physicianLogin: { physicianInfo },
    } = getState()
    //adds token to header
    const config = {
      headers: {
        Authorization: `Bearer ${physicianInfo.token}`,
      },
    }
    //gets patients list from backend endpoint
    const { data } = await axios.get('/api/patients', config)
    dispatch({
      //if success sends patients data to global State
      type: PATIENT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      //if failure sends error info data to global State
      type: PATIENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//action for an individual patient
export const patientDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PATIENT_DETAILS_REQUEST })

    const {
      physicianLogin: { physicianInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${physicianInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/patients/${id}`, config)

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

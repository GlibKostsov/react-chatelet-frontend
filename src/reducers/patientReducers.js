import {
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_SUCCESS,
  PATIENT_LIST_FAIL,
  PATIENT_LIST_RESET,
  PATIENT_DETAILS_REQUEST,
  PATIENT_DETAILS_SUCCESS,
  PATIENT_DETAILS_FAIL,
  PETIENT_DETAILS_RESET,
  PATIENT_DETAILS_RESET,
} from '../constants/patientConstants'

//reducer for a list of patients
export const patientListReducer = (state = { patients: [] }, action) => {
  switch (action.type) {
    case PATIENT_LIST_REQUEST:
      return { loading: true, ...state }
    case PATIENT_LIST_SUCCESS:
      return { loading: false, patients: action.payload }
    case PATIENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    case PATIENT_DETAILS_RESET:
      return { patients: [] }
    default:
      return state
  }
}

//reducer for an individual patient
export const patientDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_DETAILS_REQUEST:
      return { loading: true }
    case PATIENT_DETAILS_SUCCESS:
      return { loading: false, patient: action.payload }
    case PATIENT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case PATIENT_LIST_RESET:
      return {}
    default:
      return state
  }
}

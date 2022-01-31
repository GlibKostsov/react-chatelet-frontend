import {
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_SUCCESS,
  PATIENT_LIST_FAIL,
  PATIENT_DETAILS_REQUEST,
  PATIENT_DETAILS_SUCCESS,
  PATIENT_DETAILS_FAIL,
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
    default:
      return state
  }
}

//reducer for an individual patient
export const patientDetailsReducer = (state = { patient: {} }, action) => {
  switch (action.type) {
    case PATIENT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PATIENT_DETAILS_SUCCESS:
      return { loading: false, patient: action.payload }
    case PATIENT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

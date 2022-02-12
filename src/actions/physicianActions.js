import axios from 'axios'
import {
  PATIENT_DETAILS_RESET,
  PATIENT_LIST_RESET,
} from '../constants/patientConstants'
import {
  PHYSICIAN_LOGIN_FAIL,
  PHYSICIAN_LOGIN_REQUEST,
  PHYSICIAN_LOGIN_SUCCESS,
  PHYSICIAN_LOGOUT,
} from '../constants/physicianConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: PHYSICIAN_LOGIN_REQUEST,
    })

    //request configuration
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    //request body
    const body = {
      email,
      password,
    }
    //login request received data
    const { data } = await axios.post('/api/physicians/login', body, config)

    dispatch({
      type: PHYSICIAN_LOGIN_SUCCESS,
      payload: data,
    })

    //add physician information to browser storage
    localStorage.setItem('physicianInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: PHYSICIAN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('physicianInfo')
  dispatch({ type: PHYSICIAN_LOGOUT })
  dispatch({ type: PATIENT_DETAILS_RESET })
  dispatch({ type: PATIENT_LIST_RESET })
}

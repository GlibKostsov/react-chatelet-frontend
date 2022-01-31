import axios from 'axios'
import {
  PHYSICIAN_LOGIN_FAIL,
  PHYSICIAN_LOGIN_REQUEST,
  PHYSICIAN_LOGIN_SUCCESS,
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

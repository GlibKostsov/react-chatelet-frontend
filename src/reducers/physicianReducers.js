import {
  PHYSICIAN_LOGIN_FAIL,
  PHYSICIAN_LOGIN_REQUEST,
  PHYSICIAN_LOGIN_SUCCESS,
  PHYSICIAN_LOGOUT,
} from '../constants/physicianConstants'

//reducer for physician login
export const physicianLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case PHYSICIAN_LOGIN_REQUEST:
      return { loading: true }
    case PHYSICIAN_LOGIN_SUCCESS:
      return { loading: false, physicianInfo: action.payload }
    case PHYSICIAN_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case PHYSICIAN_LOGOUT:
      return {}
    default:
      return state
  }
}

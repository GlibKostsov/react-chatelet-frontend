import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  patientListReducer,
  patientDetailsReducer,
} from './reducers/patientReducers'

import { physicianLoginReducer } from './reducers/physicianReducers'

//combining reducers
const reducers = combineReducers({
  patientList: patientListReducer,
  patientDetails: patientDetailsReducer,
  physicianLogin: physicianLoginReducer,
})

//gets physicianInfo from localStorage if already logged in
const physicianInfoFromStorage = localStorage.getItem('physicianInfo')
  ? JSON.parse(localStorage.getItem('physicianInfo'))
  : null

//initial application state data from localStorage
const initialState = {
  physicianLogin: { physicianInfo: physicianInfoFromStorage },
}

//adding redux-thunk that lets write async logic that interacts with the store
const middleware = [thunk]

//creating a store
const store = createStore(
  //combined reducers
  reducers,

  //initial state
  initialState,

  //linking store to redux devtools and applying a middleware
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

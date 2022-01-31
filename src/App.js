import LoginScreen from './screens/LoginScreen'
import ErrorScreen from './screens/ErrorScreen'
import HomeScreen from './screens/HomeScreen'
import LoginValidationScreen from './screens/LoginValidationScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PatientsScreen from './screens/PatientsScreen'
import PatientDetailsScreen from './screens/PatientDetailsScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/login-validation' element={<LoginValidationScreen />} />
        <Route path='/patients' element={<PatientsScreen />} />
        <Route path='/patients/:id' element={<PatientDetailsScreen />} />
        <Route path='/' element={<HomeScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

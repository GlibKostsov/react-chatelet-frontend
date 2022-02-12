import { Container } from '@mui/material'
import LoginScreen from './screens/LoginScreen'
import ErrorScreen from './screens/ErrorScreen'
import HomeScreen from './screens/HomeScreen'
import LoginValidationScreen from './screens/LoginValidationScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PatientListScreen from './screens/PatientListScreen'
import PatientDetailsScreen from './screens/PatientDetailsScreen'
//layout
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/login-validation' element={<LoginValidationScreen />} />
          <Route path='/patients' element={<PatientListScreen />} />
          <Route path='/patients/:id' element={<PatientDetailsScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='*' element={<ErrorScreen />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

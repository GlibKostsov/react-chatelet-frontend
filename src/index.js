import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#E33E7F',
    },
    primary: {
      main: '#257abd',
    },
    action: {
      hover: '#7DB7E5',
    },
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

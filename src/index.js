import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './layout/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

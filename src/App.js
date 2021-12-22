import React from 'react'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Routes from 'navigation/Routes'
// import { store } from 'store'

import './App.css'

function App() {
  /*
  // TESTE REDUX TOOLKIT
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </>
  )
  */
  return (
    <React.StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App

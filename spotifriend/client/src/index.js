import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } 
  from 'react-router-dom'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import StoreProvider from './utils/store'
import Login from './views/Login'
import Auth from './views/Auth'
import Profile from './views/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth/' element={<Auth />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

ReactDOM.render(
  <ChakraProvider>
  <StoreProvider>
    <App />
  </StoreProvider>
  </ChakraProvider>,
  document.getElementById('root')
)

import React from 'react'
import {BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/contact'  element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
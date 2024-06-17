
import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Books from './components/pages/Books'
import AddBooks from './components/pages/AddBooks'
import Home from './components/pages/Home';

function App() {
  

  return (

    <Router>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/addbooks" element={<AddBooks/>}/>

      </Routes>
    </Router>
  
  )
}

export default App;

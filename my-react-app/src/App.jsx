import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Component/Navbar'
import Contact from './Component/Contact'
import Products from './Component/Products'
import About from './Component/About'
import Home from './Component/Home'

function App() {
 return(
  <Router>
  <div>
    <Navbar/>
    <Routes>
      <Route  path="/" element ={<Home/>}/>
      <Route  path="/about" element ={<About/>}/>
      <Route  path="/products" element ={<Products/>}/>
      <Route  path="/contact" element ={<Contact/>}/>
    </Routes>
  </div>
  </Router>
 )

}

export default App

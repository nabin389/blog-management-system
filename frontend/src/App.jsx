// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"//it has multiple things but we need only this 
import Home from "./pages/Home"
import Create from "./pages/Create"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Update from './pages/Update'
// import Test from "./components/Test"
// import Test2 from "./components/Test2"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      {/* <Route path = "/home" element={<h1>Hello world</h1>}/> */}
      <Route path = "/home" element={<Home/>} />
      <Route path = "/create" element={<Create/>}/>
      <Route path = "/update/:id" element={<Update/>}/>
      <Route path = "/single/:id" element={<Single/>}/>
      {/* <Route path = "/test" element = {<Test/>}/>
      <Route path = "/test2" element = {<Test2/>}/> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>

  )
}

export default App

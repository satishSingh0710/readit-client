import { useState } from 'react'
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom"; 
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
import Navbar from './scenes/navbar';

import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
    </>
  )
}

export default App

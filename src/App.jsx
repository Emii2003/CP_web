// import { useState } from 'react';
import './App.css'
import Menu from './components/menu'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

export default App

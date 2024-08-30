import './App.css'
import TopBar from './components/TopBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  
  return (
    <>
      <TopBar></TopBar>
      <Outlet></Outlet>
    </>
  )
}

export default Layout

import './App.css'
import TopBar from './components/TopBar'
import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className='Layout'>
      <TopBar key={"test"}></TopBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout

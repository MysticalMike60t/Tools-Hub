import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="container">
        <Header />
        <Outlet />
        <div id="background"></div>
    </div>
  )
}

export default Layout
import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="container">
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout
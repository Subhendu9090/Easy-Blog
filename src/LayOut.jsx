import React from 'react'
import AddBlog from './components/AddBlog'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <AddBlog/>
      <Outlet/>
    </div>
  )
}

export default Layout

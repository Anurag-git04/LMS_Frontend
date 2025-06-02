import React from 'react'
import { NavLink } from 'react-router-dom'

const BackToDash = () => {
  return (
    <div className='container sidebar'>
        <NavLink to='/' className="sidebar-title">
            Back to Dashboard
        </NavLink>
    </div>
  )
}

export default BackToDash
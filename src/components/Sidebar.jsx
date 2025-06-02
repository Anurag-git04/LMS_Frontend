// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className='container sidebar'>
//         <h3>Sidebar</h3>
//         <div>
//           <NavLink to='/leadList'>Leads</NavLink> <br />
//           <NavLink to='/SalesPage'>Sales</NavLink> <br />
//           <NavLink to='/'>Agents</NavLink> <br />
//           <NavLink to='/'>Reports</NavLink> <br />
//         </div>
//     </div>
//   )
// }

// export default Sidebar

import React from 'react';
import { NavLink } from 'react-router-dom';
 // Make sure to import your CSS

const Sidebar = () => {
  return (
    <div className='container sidebar'>
      <h3 className='sidebar-title'>Dashboard</h3>
      <nav className='sidebar-nav'>
        <NavLink to='/leadList' className='sidebar-link'>Leads</NavLink>
        <NavLink to='/SalesPage' className='sidebar-link'>Sales</NavLink>
        <NavLink to='/report' className='sidebar-link'>Reports</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

import React, { useContext } from 'react'
import LeadContext from '../context/LeadContext'
import Sidebar from '../components/Sidebar'
import { NavLink, useNavigate } from 'react-router-dom'

const SalesPage = () => {
    const {Agents} = useContext(LeadContext)
    const navigate = useNavigate()
  return (
    <div>
        <h2 className='mainheading'> Sales Dashboard </h2>
        <div className="box">
            <Sidebar/>
            <div className="main-content container">
                <h3>Main Content</h3>
                <ul>
                    {
                        Agents.map((lead) => {
                            return (
                                <li className='bor' onClick={()=>navigate(`/agentLead/${lead._id}`)} key={lead.id}>
                                    <div>
                                        <h2>{lead.name}</h2>
                                    </div>
                                     <div>
                                        <h4>{lead.email}</h4>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <NavLink to='/addagent' className='btnadd'>
                    ADD NEW AGENT
                </NavLink>
            </div> 
        </div>
    </div>
  )
}

export default SalesPage
import React, { useEffect, useState } from 'react'
import BackToDash from '../components/BackToDash'
import { NavLink, useParams } from 'react-router-dom'

const AgentLeads = () => {
  const id = useParams()
  const agentid = id.agentID
  const [leads,setLeads] = useState([])

  const fetchingleads = async()=>{
    try{
      const response = await fetch(`https://lms-backend-bay-eight.vercel.app/leads?salesAgent=${agentid}`)
      const data = await response.json()
      setLeads(data)
    }catch(error){
      console.error('Error fetching leads:', error);
      alert('Network or Internal server error');
    }
  }

  useEffect(() => {
    fetchingleads()
  }, [])
  

  return (
    <div>
        <h2 className='mainheading'> All the lead  </h2>
        <div className="box">
          <BackToDash/>
          <div className="formcss">
            <ul>
              {
                leads.map((lead)=>(
                  <li className='bor'>
                    <div>
                        <h2>{lead.name}</h2>
                        <p><strong>Status:</strong> {lead.status}</p>
                    </div>
                    <NavLink to={`/leadDetails/${lead.id}`} className='detailbtn'>
                        Details
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>        
    </div>
  )
}

export default AgentLeads
import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import LeadContext from '../context/LeadContext'
import { NavLink } from 'react-router-dom'
import BackToDash from '../components/BackToDash'

const Leadlisting = () => {
    const {allleads,Agents} = useContext(LeadContext)
    console.log(allleads)
    console.log(Agents)
    const [leadData,setleadData] = useState([])
    const [selectedAgent,setAgent] = useState('')
    const [selectedStatus,setStatus] = useState('')

    useEffect(()=>{
        let filteredLeads = allleads;

        if (selectedAgent !== '') {
            filteredLeads = filteredLeads.filter(lead => lead.salesAgent.id === selectedAgent);
            console.log(filteredLeads)
        }

        if (selectedStatus !== '') {
            filteredLeads = filteredLeads.filter(lead => lead.status === selectedStatus);
        }

        setleadData(filteredLeads);
        console.log(leadData)

    },[selectedAgent,selectedStatus,allleads])
    
    
  return (
    <div>
        <h2 className='mainheading'> Leads Listing Page </h2>
        <div className='box'>
            <BackToDash/>
            <div className="main-content container">
                <h3>Leads Overview</h3>
                <ul>
                    {
                         leadData.map((lead) => {
                            return (
                                <li className='bor' key={lead.id}>
                                    <div>
                                        <h2>{lead.name}</h2>
                                        <p><strong>Status:</strong> {lead.status}</p>
                                    </div>
                                    <NavLink to={`/leadDetails/${lead.id}`} className='detailbtn'>
                                        Details
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                
                {/* <div>
                    <span><strong>New:</strong> {newLeadCount}  </span>
                    <span><strong>Contacted:</strong> {ContactedleadCount}  </span>
                    <span><strong>Qualified:</strong> {QualifiedleadCount}  </span>
                    <span><strong>Proposal Sent:</strong> {ProposeleadCount}  </span>
                    <span><strong>Closed:</strong> {ClosedleadCount}  </span>
                </div> */}
                <div>
                    <h4>Filters :</h4>
                    <div>
                        <div className='disflex'>
                            <div>
                                <label htmlFor="">Filter By SalesAgent: </label>
                                <select name="" id="" value={selectedAgent} onChange={(e)=> setAgent(e.target.value)}>
                                    <option value="">None</option>
                                    {
                                        Agents.map((agent)=>(
                                            <option value={agent._id}>{agent.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Filter By Status: </label>
                                <select name="" id="" value={selectedStatus} onChange={(e)=> setStatus(e.target.value)}>
                                    <option value="">None</option>
                                    <option value="New">New</option>
                                    <option value="Contacted">Contacted</option>
                                    <option value="Qualified">Qualified</option>
                                    <option value="Proposal Sent">Proposal Sent</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <NavLink to='/addlead' className='btnadd'>Add new Lead</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Leadlisting
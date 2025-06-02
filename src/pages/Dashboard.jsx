import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import LeadContext from '../context/LeadContext'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
    const {allleads,Agents} = useContext(LeadContext)
    console.log(allleads)
    console.log(Agents)
    const newLeadCount = allleads.reduce((acc, curr) => {
        return curr.status === 'New' ? acc + 1 : acc;
    }, 0);
    const ContactedleadCount = allleads.reduce((acc, curr) => {
        return curr.status === 'Contacted' ? acc + 1 : acc;
    }, 0);
    const QualifiedleadCount = allleads.reduce((acc, curr) => {
        return curr.status === 'Qualified' ? acc + 1 : acc;
    }, 0);
    const ProposeleadCount = allleads.reduce((acc, curr) => {
        return curr.status === 'Proposal Sent' ? acc + 1 : acc;
    }, 0);
    const ClosedleadCount = allleads.reduce((acc, curr) => {
        return curr.status === 'Closed' ? acc + 1 : acc;
    }, 0);
    
  return (
    <div>
        <h2 className='mainheading'> Anvaya CRM Dashboard </h2>
        <div className='box'>
            <Sidebar/>
            <div className="container dashcontainer">
                <h3>Dashboard</h3>
                <div className='disflex'>
                    {
                         allleads.slice(0, 4).map((lead) => {
                            return (
                                <div className='dashlead' key={lead.id}>
                                    <div>
                                        <h2>{lead.name}</h2>
                                        <p><strong>Status:</strong> {lead.status}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className='direct'>
                    <h2>Lead Status: </h2>
                    <span><strong>New:</strong> {newLeadCount} Leads </span>
                    <span><strong>Contacted:</strong> {ContactedleadCount} Leads </span>
                    <span><strong>Qualified:</strong> {QualifiedleadCount} Leads </span>
                    <span><strong>Proposal Sent:</strong> {ProposeleadCount} Leads </span>
                    <span><strong>Closed:</strong> {ClosedleadCount} Leads </span>
                    <br />
                    <NavLink to='/addlead' className='btnadd'>Add new Lead</NavLink>
                </div>
                <div className="">
                    {/* <h4>Filters :</h4> */}
                </div>
                <br />
               
            </div>
        </div>
    </div>
  )
}

export default Dashboard
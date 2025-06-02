import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import LeadContext from './context/LeadContext'
import LeadsDetails from './pages/LeadsDetails'
import SalesPage from './pages/SalesPage'
import AddAgent from './pages/AddAgent'
import AddLeadPage from './pages/AddLeadPage'
import UpdateLeadPage from './pages/UpdateLeadPage'
import AgentLeads from './pages/AgentLeads'
import Leadlisting from './pages/LeadList'
import ReportPage from './pages/ReportPage'

function App() {
  const [allleads,setalllead] = useState([])
  const [Agents,setagents] = useState([])
  const [statuschart,setstaus] = useState([])

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

 const statusArray = [newLeadCount,ContactedleadCount,QualifiedleadCount,ProposeleadCount,ClosedleadCount] 
 const fetchLeads = async () => {
      try {
        const response = await fetch('https://lms-backend-bay-eight.vercel.app/leads')
        const data = await response.json()
        setalllead(data)
        console.log("All lead:",allleads)
      } catch (error) {
        console.error('Error fetching leads:', error)
      }
  }

  const fetchagent = async()=>{
      try {
        const response = await fetch('https://lms-backend-bay-eight.vercel.app/agents')
        const data = await response.json()
        setagents(data)
        console.log(Agents)
      }catch(error) {
        console.error('Error fetching agents:', error)
      }
  }

  useEffect(() => {
    fetchLeads()  
    fetchagent()
    setstaus(statusArray)
  },[])
  


  return (
    <LeadContext.Provider value={{allleads,Agents,statusArray}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/leadList' element={<Leadlisting/>}/>
        <Route path='/leadDetails/:leadId' element={<LeadsDetails/>}/>
        <Route path='/SalesPage' element={<SalesPage/>}/>
        <Route path='/addagent' element={<AddAgent/>}/>
        <Route path='/addlead' element={<AddLeadPage/>}/>
        <Route path='/updateLead/:leadId' element={<UpdateLeadPage/>}/>
        <Route path='/agentLead/:agentID' element={<AgentLeads/>}/>
        <Route path='/report' element={<ReportPage/>}/>
      </Routes>
    </BrowserRouter>
    </LeadContext.Provider>
  )
}

export default App

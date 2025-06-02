import React, { useContext, useState } from 'react'
import BackToDash from '../components/BackToDash'
import LeadContext from '../context/LeadContext'
import { useNavigate } from 'react-router-dom'

const AddLeadPage = () => {
    const {Agents} = useContext(LeadContext)
    console.log(Agents)
    const [leadname,setLeadname] = useState('')
    const [leadsource,setsource] = useState('')
    const [salesagent,setagent] = useState('')
    const [status,setStatus] = useState('')
    const [Priority,setPriority] = useState('')
    const [tags, setTags] = useState([]);
    const [timeToClose, setTimeToClose] = useState('')
    const handletagchange = (e)=>{
        const input = e.target.value
        const tagArray = input.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
        setTags(tagArray);
    }
    const navigate = useNavigate()
    const onsubmit = async(e)=>{
        e.preventDefault()
        try{
            const newLead = {
                name: leadname,
                source: leadsource,
                salesAgent: salesagent,
                status,
                tags,
                timeToClose: parseInt(timeToClose),
                priority:Priority,
            }
            console.log(newLead)
            const response = await fetch(`https://lms-backend-bay-eight.vercel.app/leads`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLead),
            })
            if(response.status == 201){
                alert(`New Lead Created succesfully`)
                navigate('/')
            }else{
                alert('Problem in creating lead' )
            }
        }catch(error){
            console.error('Error adding lead:', error);
            alert('Network or Internal server error');
        }
    }
  return (
    <div> 
        <h2 className='mainheading'> ADD NEW LEAD </h2>
        <div className="box">
            <BackToDash/>
            <div className="formcss">
                <form onSubmit={onsubmit}>
                    <h3>Form for Adding new lead:</h3>
                    <label htmlFor="">Lead Name : </label>
                    <input type="text" name="" id="" value={leadname} onChange={(e)=> setLeadname(e.target.value)} placeholder='Lead Name' />
                    <br />
                    <br />
                    <label htmlFor="">Source: </label>
                    <select name="" id="" value={leadsource} onChange={(e)=> setsource(e.target.value)}>
                        <option value="Website">Website</option>
                        <option value="Referral">Referral</option>
                        <option value="Cold Call">Cold Call</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Email">Email</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="">Salesagents: </label>
                    <select name="" id="" value={salesagent} onChange={(e)=> setagent(e.target.value)}>
                        {
                            Agents.map((agent)=>(
                                <option value={agent._id}>{agent.name}</option>
                            ))
                        }
                    </select>
                    <br />
                    <br />
                    <label htmlFor="">Status: </label>
                    <select name="" value={status} onChange={(e)=> setStatus(e.target.value)} id="">
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Proposal Sent">Proposal Sent</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="">Tags: </label>
                    <input type="text" value={tags} onChange={handletagchange} />
                    <br />
                    <br />
                    <label htmlFor="">Time to close: </label>
                    <input type="number" value={timeToClose} onChange={(e) => setTimeToClose(e.target.value)} name="" id="" />
                    <br />
                    <br />
                    <label htmlFor="">Priority: </label>
                    <select name="" value={Priority} onChange={(e)=> setPriority(e.target.value)} id="">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <br />
                    <br />
                    <button type="submit" className="">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddLeadPage
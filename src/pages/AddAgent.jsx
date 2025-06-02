import React, { useState } from 'react'
import BackToDash from '../components/BackToDash'
import { useNavigate } from 'react-router-dom'

const AddAgent = () => {
    const [agentname,setname] = useState('')
    const [agentemail, setemail] = useState('')
    const navigate = useNavigate()
    const onsubmit = async(e)=>{
        e.preventDefault();
        console.log(agentname)
        console.log(agentemail)
        const newAgent = {
            name:agentname,
            email:agentemail
        }
        try{
            const response = await fetch('https://lms-backend-bay-eight.vercel.app/agents',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAgent)
            })
            if (response.status === 201) {
                alert('Agent added successfully')
                navigate('/')
            } else if (response.status === 409) {
                alert('Email already exists')
            } else {
                alert('Failed to add agent')
            }
        }catch(error){
            console.error('Error adding agent:', error)
            alert('Network or server error')
        }
    }
  return (
    <div> 
        <h2 className='mainheading'> ADD NEW AGENT </h2>
        <div className="box">
            <BackToDash/>
            <div className="formcss">
                <form onSubmit={onsubmit}>
                    <h3>Form for Adding new agents:</h3>
                    <label htmlFor="">Name : </label>
                    <input type="text" name="" id="" value={agentname} onChange={(e)=> setname(e.target.value)} placeholder='Agent Name' />
                    <br />
                    <br />
                    <label htmlFor="">Email: </label>
                    <input type="email" name="" id="" value={agentemail} onChange={(e)=>setemail(e.target.value)} placeholder='Agent Email' /> <br /> <br />
                    <button type="submit" className="">Submit</button>
                </form>
            </div>
        </div>
    </div>
    
  )
}


export default AddAgent

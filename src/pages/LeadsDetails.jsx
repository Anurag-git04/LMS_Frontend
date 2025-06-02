import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import BackToDash from '../components/BackToDash'
import LeadContext from '../context/LeadContext'

const LeadsDetails = () => {

    const {Agents}= useContext(LeadContext)

    const id = useParams()
    console.log(id)
    const leadId = id.leadId
    const {allleads} = useContext(LeadContext)
    
    const lead = allleads.find(lead => lead.id === leadId)
    console.log(allleads)
    console.log(lead)

    const [comments, setComments] = useState([])
    const [textComment, settextComment] = useState('')
    const [author,setAuthor] = useState('')

    const leadsComment = async()=>{
        try{
          const Comments = await fetch(`https://lms-backend-bay-eight.vercel.app/leads/${lead.id}/comments`)
          console.log(Comments)
          const data = await Comments.json()
          setComments(data)
        }catch(error){
          console.log(`Erroer while fetching data`)
        }
    }  


    useEffect(() => {
      leadsComment()
    }, [])
    const onsubmit = async(e)=>{
      e.preventDefault()
      const commentData = {
        commentText:textComment,
        authorId:author
      }
      try{
        const response = await fetch(`https://lms-backend-bay-eight.vercel.app/leads/${lead.id}/comments`,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData)
        })
        if(response.status == 201){
          alert(`Comment Saved Successfully`)
          leadsComment()
          setAuthor('')
          settextComment('')
          
        }else{
          alert('Comment not saved')
        }
      }catch(error){
          console.log(`Erroe whiel commeint`, error)
      }
    }
  return (
    <div>
        <h2 className='mainheading'>Lead Details of {lead.name}</h2>
        <div className="box">
            <BackToDash/>
            <div className="detail">
                <div>
                    <h2>{lead.name}</h2>
                    <p><strong>Agent: </strong> {lead.salesAgent.name}</p>
                    <p><strong>Source:</strong>{lead.source}</p>
                    <p><strong>Status:</strong>{lead.status}</p>
                    <p><strong>Priority:</strong>{lead.priority}</p>
                    <p><strong>Tags:</strong>{lead.tags.join(', ')}</p>
                    <p><strong>Times to close:</strong>{lead.timeToClose}</p>
                </div>
                <NavLink to={`/updateLead/${leadId}`}>Update Data</NavLink>
                <div>
                  <h4>Add new Comment:</h4>
                  
                  <form onSubmit={onsubmit}>
                    <textarea name="" id="" cols={50} rows={5} value={textComment} onChange={(e)=> settextComment(e.target.value)}></textarea>
                    <br />
                    <label htmlFor="">Comment by: </label> 
                    <select name="" id="" value={author} onChange={(e)=> setAuthor(e.target.value)}>
                      <option value="" disabled>Select author</option>
                      {
                        Agents.map((agent)=>(
                          <option value={agent._id}>{agent.name}</option>
                        ))
                      }
                    </select> <br />
                    <button type='submit'>comment</button>
                  </form>
                  {
                    comments.length > 0 ? (
                      <>
                        <h3>Comments :</h3>
                        <ul>
                          {
                            comments.map((comment)=>(
                              <li>
                                <p>{comment.commentText}</p>
                                <span>Created By:{comment.author}</span>
                                <span> on: {comment.createdAt}</span>
                              </li>
                            ))
                          }
                        </ul>
                      </>
                    ) : ( <div><br /><h3>No comment yet</h3></div>)
                  }
                  
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default LeadsDetails
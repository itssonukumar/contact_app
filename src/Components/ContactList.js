import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Contactlist(props) {
  const{contact,removeContact}=props
  const ContactList=contact.map((val)=>{
    return(
      <div className='list'>
        <div  className="na"  style={{marginLeft:"12px"}}>{val.data.name}</div>
        <div className='em'>{val.data.email}</div>
        <span className='delete-icon' onClick={()=>removeContact(val.id)}><DeleteIcon/></span>

      </div>
    )
  })
    
  return (
    <>
    <div className="contact-list">Contact List :</div>
    <div>{ContactList}</div>
    </>
   
  )
}

import React from 'react'
import {useState} from 'react'

export default function AddContact({addContact}) {
const[contactdata,setContactData]=useState({name:"",email:""});

const handleChange=(e)=>{
    if(e.target.name==="name"){
        setContactData({...contactdata,name:e.target.value})
    }

    else{
        setContactData({...contactdata,email:e.target.value})
    }
}


const handleAdd = (e)=>{
    if(contactdata.name === "" || contactdata.email === ""){
        alert("please fill all the details");
        return
    }
   addContact(contactdata);
   setContactData({name: "", email: ""})
}





  return (
    <div className="formheader">
      <div className="add-contact">Add Contact</div>
      <form >
<label className='label'>Name : </label>
<input type='text' placeholder='enter name' name='name' className='contacts'  value={contactdata.name} onChange={handleChange}></input> <br/>

<label className='label'>Email :</label>
<input type='text' placeholder='enter email' name='email' className='email' value={contactdata.email} onChange={handleChange}></input>



      </form>

      <button className='btn' onClick={handleAdd}>Add contact</button>
    </div>
  )
}

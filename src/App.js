import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import {useState} from 'react'
import uuid4 from 'uuid4'

function App() {


  const[contact,setContact]=useState([])

function addContact(data){
  setContact([...contact,{id:uuid4(),data}])
}

const removeContact =(id)=>{
 const updatedList=contact.filter((val)=>{
  return val.id !== id;
 })
 setContact(updatedList)
}




  return (
    <div >
      <Header/>
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact ={removeContact }/>
    </div>
  );
}

export default App;

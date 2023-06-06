import AddContact from './components/AddContact'
import Header from './components/Header'
import {uuid} from 'uuidv4'
import ContactList from './components/ContactList'
import './App.css'
import { useState, useEffect } from 'react'
import uuidv4 from 'uuidv4/build/lib/uuidv4'

function App() {
  
  const LOCAL_STORAGE_KEY = "contacts"

  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact)=>{
    setContacts([...contacts,{id: uuidv4(), ...contact}])
  }

  const removeContactHandler = (id) =>{
    const newcontactList = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newcontactList)
  }

  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setContacts(retrieveContacts)
  },[])

  useEffect(()=>{
    if(contacts.length!=0 ){
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    }
  },[contacts])

  return(
    <div className='ui container'>
    <Header/>
    <AddContact addContactHandler = {addContactHandler}/>
    <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );

}

export default App;